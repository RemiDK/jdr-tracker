<template>
    <v-container>
        <v-row class="caracter-list__card__container">
            <v-btn icon="mdi-arrow-left-thick" size="small"></v-btn>
            <div v-for="caracter in caracterList">
                <v-card max-width="250" class="caracter-list__card">
                    <template v-slot:title>
                        <span>Name</span>
                    </template>
                    <v-card-text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
                    </v-card-text>
                </v-card>
            </div>
            <v-btn icon="mdi-arrow-right-thick" size="small"></v-btn>
        </v-row>
        <v-row>
            <v-col class="caracter-list__buttons__container">
                <v-btn icon="mdi-account" size="small" class="caracter-list__button"></v-btn>
                <AddCaracter />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import Caracter from '../classes/Caracter';
import caracterMapper from '../services/caracterMapper';
import AddCaracter from './AddCaracter.vue';

let caracterList: Ref<Caracter[]> = ref([])
onMounted(() => {
    caracterList.value = caracterMapper();
})
</script>