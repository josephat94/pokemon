import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
interface IProps {
    id: number
}
export const FavoriteCard: FC<IProps> = ({ id }) => {

    const router = useRouter();
    const handleClick = () => {
        router.push("/pokemon/" + id);
    }

    return (
        <Grid key={id} xs={6} sm={3} md={2} xl={1}>
            <Card hoverable clickable css={{ padding: 10 }}
                onClick={handleClick}
            >
                <Card.Image
                    width={"100%"}
                    height={150}
                    alt="pokemon"
                    src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + id + '.svg'}
                ></Card.Image>
            </Card>
        </Grid>
    );
}