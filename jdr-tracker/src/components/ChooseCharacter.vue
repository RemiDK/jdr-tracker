<template>
    <div class="text-center">
        <v-dialog v-model="dialog" max-width="600">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" icon="mdi-account" size="small" class="character-list__button">
                </v-btn>
            </template>

            <v-card
            prepend-icon="mdi-account"
            title="Ajouter un personnage">
                <v-card-text>
                    <v-row dense>
                        <v-col cols="6" v-for="(character, index) in characterList.filter(character => character.selected !== true)">
                            <v-card class="choose-character-card" @click="character.selected = !character.selected">
                                <v-card-text>
                                    <v-col cols="12">
                                        {{ character.name }}
                                    </v-col>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text="OK" variant="plain" @click="dialog=false">
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import Character from '../classes/Character';
import { useCharactersStore } from '../stores/characterStore';

let dialog: Ref<boolean> = ref(false);
let characterList: Ref<Character[]> = ref([]);
const store = useCharactersStore();
    
onMounted(() => {
    characterList.value = store.heros;
})
</script>