import { pokeApi } from "../api";
import { PokemonFull } from "../interfaces";

export const getPokemonInfo = async (nameOrID: string) => {

    try {
        const { data } = await pokeApi.get<PokemonFull>("/pokemon/" + nameOrID);

       
        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }
    } catch (error) {
        console.log("error")
        console.log({ error });
        return null
    }


}