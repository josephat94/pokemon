import { FC, useEffect, useState } from "react";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticProps, GetStaticPaths } from "next";
import conffeti from 'canvas-confetti';
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { PokemonFull } from "../../interfaces";
import { localFavorites } from "../../utils";
import confetti from "canvas-confetti";

interface Props {
    pokemon: PokemonFull
}

const PokemonPage: FC<Props> = ({ pokemon }) => {
    const [isInFavorites, setIsIFavorites] = useState(false);

    const handleClick = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setIsIFavorites(localFavorites.existInFavorites(pokemon.id))

        if (!isInFavorites) {
            confetti({
                zIndex: 9999,
                particleCount: 100,
                spread: 160,
                angle: -160,
                origin: {
                    x: 1,
                    y: 0
                }
            })
        }
    }
    useEffect(() => {
        setIsIFavorites(localFavorites.existInFavorites(pokemon.id))
    }, [])

    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: "10px" }} gap={2}>

                <Grid xs={12} sm={4}>
                    <Card hoverable css={{ p: "30px" }}>
                        <Card.Body>
                            <Card.Image src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height="200px"
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
                            <Text h1 transform="capitalize">
                                {pokemon.name}
                            </Text>
                            <Button onClick={handleClick} color={"gradient"} ghost={!isInFavorites}>
                                {isInFavorites ?
                                    "En Favoritos"
                                    :
                                    "Guardar en Favoritos"
                                }
                            </Button>

                        </Card.Header>

                        <Card.Body>
                            <Text size={30}> Sprites:</Text>
                            <Container direction="row" display="flex">
                                <Image src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width="100px"
                                    height="100"
                                ></Image>

                                <Image src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width="100"
                                    height="100"
                                ></Image>

                                <Image src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width="100"
                                    height="100"
                                ></Image>

                                <Image src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width="100"
                                    height="100"
                                ></Image>
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>



        </Layout>
    );
}



export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((value, index) => "" + (index + 1));

    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string };
    const { data } = await pokeApi.get("/pokemon/" + id);
    const pokemon = {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
    return {
        props: {
            pokemon
        }
    }
}



export default PokemonPage
