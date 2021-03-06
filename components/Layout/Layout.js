import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Head from "next/head";

export default function Layout ({children}) {
  return (
    <>
      <Head>      
        <title>Poke Next</title>
        <meta charset="UTF-8"></meta>
        <meta name="description" content="Generated by create next app" />
        <meta name="description" content="Cartas de Pokemom"></meta>
        <meta name="author" content="Murilo Prudencio"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
     <NavBar/>
      <main className="main_container">{children}</main>
      <Footer/>
    </>
  );
}