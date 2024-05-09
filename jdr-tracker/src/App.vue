<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useCharactersStore } from './stores/characterStore';
import CharacterService from './services/characterService';
import { onMounted } from 'vue';

const store = useCharactersStore();
const characterService = new CharacterService;

onMounted(() => {
  store.heros = characterService.getHeros();
})
</script>
