import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoriteCard } from "./FavoriteCard";
interface IProps {
    pokemons: number[]
}

export const FavoritesPokemons: FC<IProps> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {
                pokemons.map(id => (
                    <FavoriteCard key={id} id={id}></FavoriteCard>
                ))
            }
        </Grid.Container>
    );
}