import Character from "../classes/Character";
import heros from '../ressources/heros.json';

export default class CharacterService {

    getHeros(): Character[] {
        let characterlist: Character[] = []
        heros.forEach(hero => {
            characterlist.push(Object.assign(new Character(), hero))
        });
        return characterlist
    }

    exportCharacters(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(text)));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}