import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from './character.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CharactersService {
    constructor(
        @InjectRepository(Character)
        private characterRepository: Repository<Character>
    ) {}
    
    findAll(): Promise<Character[]> {
        return this.characterRepository.find();
    }

    findOne(id: number): Promise<Character | null> {
        return this.characterRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.characterRepository.delete(id);
    }
}
