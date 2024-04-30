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
                        <v-col cols="6" v-for="(character, index) in characterList">
                            <v-card class="choose-character-card" @click="selectCharacter(index)">
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

                    <v-btn text="Annuler" variant="plain" @click="dialog=false">
                    </v-btn>

                    <v-btn text="Ajouter" variant="tonal" color="primary" @click="submitForm()">
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import Character from '../classes/Character';
import CharacterService from '../services/characterService';

export default {
    data: () => ({
        dialog: false,
        characterService: new CharacterService,
        characterList: [] as Character[],
        selectedCharacters: []
    }),
    emits: ['emitChosenCharacter'],
    methods: {
        selectCharacter(index: number) {
            this.characterList[index].selected = !this.characterList[index].selected;
        },
        submitForm() {
            this.selectedCharacters.forEach(character => {
                character.selected = true;
            });
            this.dialog = false;
            console.log(this.characterList)
            this.$emit('emitChosenCharacter');
        }
    },
    mounted() {
        this.characterList = this.characterService.getHeros().filter(character => character.selected !== true);
    }
}
</script>