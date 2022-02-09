import styles from "../../styles/Card.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Card({pokemon}) {
  return(
    <div className={styles.card}>
    <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={styles.card_id}>#{pokemon.id}</p>
      <h3 className={styles.card_title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
      <a className={styles.card_btn}>Detalhes</a>
      </Link>
    </div>
  )
}