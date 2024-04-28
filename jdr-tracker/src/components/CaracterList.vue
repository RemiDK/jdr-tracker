<template>
    <v-container>
        <v-sheet class="mx-auto" max-width="1000">
            <v-slide-group v-model="paginationModel" class="pa-4" show-arrows>
                <v-slide-group-item v-for="(caracter, index) in caracterList" :key="index" v-slot="{ isSelected, toggle, selectedClass }">
                    <v-card width="200" height="250" elevation="8" :class="['ma-4 caracter-list__card', selectedClass]">
                        <v-icon class="caracter-list__card__remove" icon="mdi-close" v-if="caracter.type != 'hero'" @click="removeCaracter(index)"></v-icon>
                        <div class="caracter-list__card__title">{{ caracter.name }}</div>
                        <v-text-field v-model="caracter.maxHealth" label="HP"></v-text-field>
                        <v-text-field v-model="caracter.initiative" label="Initiative"></v-text-field>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
        <v-row>
            <v-col class="caracter-list__buttons__container">
                <v-btn icon="mdi-account" size="small" class="caracter-list__button">
                </v-btn>
                <AddCaracter @emitCaracter="(caracter) => createCaracter(caracter)" />
            </v-col>
        </v-row>
    </v-container>
</template>
    
<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import Caracter from '../classes/Caracter';
import CaracterService from '../services/caracterService';
import AddCaracter from './AddCaracter.vue';
import initiativeCalculator from '../services/initiativeCalculator';
    
let caracterList: Ref<Caracter[]> = ref([]);
let caracterService = new CaracterService;
let paginationModel: null;
        
onMounted(() => {
    const caracters = caracterService.getHeros();
    caracterList.value = initiativeCalculator(caracters);
})
        
function createCaracter(caracter: Caracter) {
    caracterList.value.push(caracter);
    caracterList.value = initiativeCalculator(caracterList.value);
}

function removeCaracter(index: number) {
    caracterList.value.splice(index, 1);
    caracterList.value = initiativeCalculator(caracterList.value);
}
</script>