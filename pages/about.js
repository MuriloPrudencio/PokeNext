import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About () {
  return(
    <div className={styles.sobre}>
      <h1>Sobre o projeto</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio placeat in saepe quae impedit aperiam quam eius enim possimus quasi exercitationem minima dolor magnam, porro, est sunt quidem vero vitae!</p>
      <Image src="/img/charizard.png"
       width="350"
       height="350"
       alt="charizard"
      />
    </div>
  );
}