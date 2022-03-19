import { Card, Container, Grid, Image, Text } from "@nextui-org/react"
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts"
import { FavoritesPokemons, Nofavorites } from "../../components/ui"
import { localFavorites } from "../../utils";


const Favorites = () => {
    const [list, setList] = useState<number[]>([]);

    useEffect(() => {
        setList(localFavorites.pokemons());
    }, [])

    return (
        <Layout>
            {list.length === 0 ?
                <Nofavorites></Nofavorites>

                :
                <FavoritesPokemons pokemons={list}></FavoritesPokemons>
            }

        </Layout>
    )
}

export default Favorites