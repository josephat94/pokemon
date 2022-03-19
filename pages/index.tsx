import { Grid, } from '@nextui-org/react'
import type { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../api';
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title='Listado de Pokemons'>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon, index) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id} >
            <PokemonCard pokemon={pokemon}></PokemonCard>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  let pokemons: SmallPokemon[] = [];
  pokemons = data.results.map(pokemon => {
    let id = "";
    let arre = pokemon.url.split("/");
    id = arre[arre.length - 2];
    return {
      ...pokemon,
      id,
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + id + ".svg"
    }
  })
  return {
    props: {
      pokemons
    }
  }
}
export default HomePage
