import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterModule } from './characters/characters.module';
import { Character } from './characters/character.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'jdrtracker',
      entities: [Character],
      synchronize: true,
    }),
    CharacterModule
  ]
})
export class AppModule {}
