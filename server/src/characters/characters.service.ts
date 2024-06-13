import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from './character.entity';
import { Repository } from 'typeorm';
import { CreateCharacterDto } from './dto/create-characters.dto';

@Injectable()
export class CharactersService {
    constructor(
        @InjectRepository(Character)
        private characterRepository: Repository<Character>
    ) {}
    
    async findAll(): Promise<Character[]> {
        return await this.characterRepository.find();
    }

    async findOne(id: number): Promise<Character | null> {
        return this.characterRepository.findOneBy({ id });
    }

    async create(characters: CreateCharacterDto[]) {
        return await this.characterRepository.save(characters);
    }

    async remove(id: number): Promise<void> {
        await this.characterRepository.delete(id);
    }
}
