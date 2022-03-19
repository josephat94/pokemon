import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from 'next/link'
export const Navbar = () => {

    const { theme } = useTheme();
    return (
        <div style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0px 20px",
            backgroundColor: theme?.colors.gray900.value
        }}>
            <Image
                alt="icono navbar"
                width={"70px"}
                height="70px"
                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}>
            </Image>
            <NextLink href="/" passHref>
                <Link>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okémon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }}></Spacer>

            <NextLink href="/favorites" passHref>
                <Link>
                <Text color="white" >Favoritos</Text>
                </Link>
            </NextLink>
         
        </div >
    );
}