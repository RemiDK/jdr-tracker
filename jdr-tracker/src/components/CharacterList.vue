<template>
    <v-container>
        <v-sheet class="mx-auto" max-width="1000">
            <v-slide-group v-model="paginationModel" class="pa-4" show-arrows>
                <v-slide-group-item v-for="(character, index) in characterList" :key="index" v-slot="{ isSelected, toggle, selectedClass }">
                    <v-card width="200" height="250" elevation="8" :class="['ma-4 character-list__card', selectedClass]">
                        <v-icon class="character-list__card__remove" icon="mdi-close" v-if="character.type != 'hero'" @click="removeCharacter(index)"></v-icon>
                        <div class="character-list__card__title">{{ character.name }}</div>
                        <v-text-field v-model="character.maxHealth" label="HP"></v-text-field>
                        <v-text-field v-model="character.initiative" label="Initiative"></v-text-field>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
        <v-row>
            <v-col class="character-list__buttons__container">
                <ChooseCharacter @emitChosenCharacter="() => console.log('pouet')" />
                <AddCharacter @emitCharacter="(character) => createCharacter(character)" />
            </v-col>
        </v-row>
    </v-container>
</template>
    
<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import Character from '../classes/Character';
import CharacterService from '../services/characterService';
import AddCharacter from './AddCharacter.vue';
import initiativeCalculator from '../services/initiativeCalculator';
import ChooseCharacter from './ChooseCharacter.vue';
import { useCharactersStore } from '../stores/characterStore';
    
let characterList: Ref<Character[]> = ref([]);
const characterService = new CharacterService;
let paginationModel: null;
const store = useCharactersStore();

onMounted(() => {
    store.heros = characterService.getHeros();
    const characters = characterService.getHeros();
    characterList.value = initiativeCalculator(characters);
})
        
function createCharacter(character: Character) {
    characterList.value.push(character);
    characterList.value = initiativeCalculator(characterList.value);
}

function removeCharacter(index: number) {
    characterList.value.splice(index, 1);
    characterList.value = initiativeCalculator(characterList.value);
}
</script>