import { defineStore } from "pinia";
import Character from "../classes/Character";

interface State {
    heros: Character[]
}

export const useCharactersStore = defineStore('characters', {
    state: (): State => {
        return {
            heros: []
        }
    }
})