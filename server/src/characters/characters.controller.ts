import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-characters.dto';
import { CharactersService } from './characters.service';
import { Character } from './interfaces/character.interface';

@Controller('characters')
export class CharactersController {
    constructor(private caractersService: CharactersService) {}

    @Get()
    async findAll(): Promise<Character[]> {
        return this.caractersService.findAll();
    }

    @Post()
    async create(@Body() createCharacterDto: CreateCharacterDto[]) {
        this.caractersService.create(createCharacterDto);
    }

    @Get(':id')
    findOne(@Param() params: any): string {
        return `this is ${params}`
    }
}
