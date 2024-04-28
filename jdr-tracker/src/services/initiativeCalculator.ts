import Caracter from "../classes/Caracter";

export default function initiativeCalculator(caracterList: Caracter[]): Caracter[] {
    return caracterList.sort((caracter1, caracter2) => (caracter1.initiative > caracter2.initiative ? -1 : 1))
}