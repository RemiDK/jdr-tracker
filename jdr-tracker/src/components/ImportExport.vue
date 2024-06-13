<template>
    <v-row class="character-list__export-import">
        <v-btn class="character-list__export-import__btn" text="Importer" @click="importCharacters()"></v-btn>
        <v-btn class="character-list__export-import__btn" text="Exporter" @click="exportCurrentGame()"></v-btn>
    </v-row>
</template>

<script setup lang="ts">
import CharacterService from '../services/characterService';
import { useCharactersStore } from '../stores/characterStore';
import axios from 'axios';

const characterService = new CharacterService;
const store = useCharactersStore();
const emit = defineEmits(['importCharacters']);

async function importCharacters() {
    const importedJson = await import('../ressources/importCaracters.json');
    await axios.post("http://localhost:4200/characters/", importedJson.default);
    store.heros = (await axios.get("http://localhost:4200/characters/")).data;
}

function exportCurrentGame() {
    characterService.exportCharacters("jdrReminder.json", store.heros)
}
</script>