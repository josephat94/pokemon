import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui';
import { useRouter } from "next/router";
interface IProps {
    title?: string
}

const origin = (typeof window === "undefined" ? '' : window.location.origin);


export const Layout: FC<IProps> = ({ children, title = "Pokemon App" }) => {

    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
                <meta name="author" content="Jou Reyes"></meta>
                <meta name="description" content="inforamcion del pokemon xxx"></meta>
                <meta name="keywords" content="xxxx, pokemon, pokedex" />

                <meta property="og:title" content={`Informacion sobre: ${title}`} />
                <meta property="og:description" content={`Esta es la pagina con Informacion sobre: ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />

            </Head>
            <Navbar></Navbar>
            <main style={{
                padding: "0px 1rem"
            }}>
                {children}
            </main>
        </>
    )
}