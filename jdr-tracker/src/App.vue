<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useCharactersStore } from './stores/characterStore';
import { onMounted } from 'vue';
import axios from 'axios';

const store = useCharactersStore();

onMounted(async () => {
  store.heros = (await axios.get("http://localhost:4200/characters/")).data;
})
</script>
