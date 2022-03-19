import { Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface IProps {
    pokemon: SmallPokemon
}


export const PokemonCard: FC<IProps> = ({ pokemon }) => {
    const router = useRouter();
    const onPokemonClick = () => {
        router.push("/pokemon/" + pokemon.id)
    }

    return (
        <Card hoverable clickable onClick={onPokemonClick}>
            <Card.Body css={{ p: 1 }}>
                <Card.Image src={pokemon.image} width="100%" height="140px" />
            </Card.Body>
            <Card.Footer>
                <Row justify='space-between'>
                    <Text transform='capitalize'>
                        {pokemon.name}
                    </Text>
                </Row>
            </Card.Footer>
        </Card>
    );
}