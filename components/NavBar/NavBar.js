import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/NavBar.module.css";

export default function NavBar () {
  return(
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <Image
          src="/img/pokeball.png"
          width="30"
          height="30"
          alt="PokeNext"
        />
      <h1>Poke Next</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/about"><a>Sobre</a></Link>
        </li>
      </ul>      
    </nav>


  )
}