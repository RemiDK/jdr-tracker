import Character from "../classes/Character";

export default function initiativeCalculator(characterList: Character[]): Character[] {
    return characterList.sort((character1, character2) => (character1.initiative > character2.initiative ? -1 : 1))
}