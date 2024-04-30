<template>
    <div class="text-center">
        <v-dialog v-model="dialog" max-width="600">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" icon="mdi-plus" size="small" class="character-list__button">
                </v-btn>
            </template>
            
            <v-card prepend-icon="mdi-account" title="Nouveau personnage">
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" md="4" sm="6">
                            <v-text-field v-model="character.name" label="Nom" required>
                            </v-text-field>
                        </v-col>
                    
                        <v-col cols="12" md="4" sm="6">
                            <v-text-field v-model="character.maxHealth" label="Points de vie max" required>
                            </v-text-field>
                        </v-col>
                    
                        <v-col cols="12" md="4" sm="6">
                            <v-text-field v-model="character.initiative" label="Initiative" required>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
            
                <v-divider></v-divider>
            
                <v-card-actions>
                    <v-spacer></v-spacer>
                
                    <v-btn text="Annuler" variant="plain" @click="dialog = false">
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

export default {
    data: () => ({
        dialog: false,
        character: new Character
    }),
    emits: ['emitCharacter'],
    methods: {
        submitForm() {
            this.dialog = false;
            this.character.selected = true;
            this.$emit('emitCharacter', this.character);
            this.character = new Character;
        }
    }
}
</script>