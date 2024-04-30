import Character from "../classes/Character";
import heros from '../ressources/heros.json'

export default class CharacterService {

    getHeros(): Character[] {
        let characterlist: Character[] = []
        heros.forEach(hero => {
            characterlist.push(Object.assign(new Character(), hero))
        });
        return characterlist
    }
}