<template>
    <v-row class="character-list__export-import">
        <v-btn class="character-list__export-import__btn" text="Importer" @click="importCharacters()"></v-btn>
        <v-btn class="character-list__export-import__btn" text="Exporter" @click="exportCurrentGame()"></v-btn>
    </v-row>
</template>

<script setup lang="ts">
import Character from '../classes/Character';
import CharacterService from '../services/characterService';
import { useCharactersStore } from '../stores/characterStore';
import axios from 'axios';

const characterService = new CharacterService;
const store = useCharactersStore();

async function importCharacters() {
    const character = new Character();
    character.name = 'bob';
    character.maxHealth = 22;
    character.type = 'humanoïde';
    const importedJson = await import('../ressources/importCaracters.json');
    await axios.post("http://localhost:4200/characters/", importedJson.default);
}

function exportCurrentGame() {
    characterService.exportCharacters("jdrReminder.json", store.heros)
}
</script>