import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Card from '../components/Card/Card';


//ASYNC para fazer a chamada da APi do Pokemon
export async function getStaticProps() {

  const maxPoke = 360;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}/?limit=${maxPoke}`);
  const data =  await res.json();

  //add pokemon index

  data.results.forEach((item, index) => (
    item.id = index +1
  ));

  return {
    props: {
      pokemons: data.results,
    },

  }
}


export default function Home({pokemons}) {
  return (
    <>
      <div className={styles.title_container}>
        <h1>Poke <span>Next</span> </h1>
        <Image src="/img/pokeball.png" width="60" height="60" alt="Logo Poke Next"/>
      </div>
      <div className={styles.poke_container}>
        {pokemons.map((pokemon) =>(
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </>
  )
}
