import Caracter from '../classes/Caracter'
import heros from '../ressources/heros.json'

export default function caracterMapper(): Caracter[] {
    let caracterlist: Caracter[] = []
    heros.forEach(hero => {
        caracterlist.push(Object.assign(new Caracter(), hero))
    });
    return caracterlist
}