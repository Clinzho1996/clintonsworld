import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/pro.svg";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Realiy. We bring together the teams from the
          global tech industry
        </p>
        <Button url="portfolio" text="See our works" />
      </div>
      <div className={styles.item}>
        <Image
          src={Hero}
          width={500}
          height={500}
          alt="Hero"
          className={styles.img}
        />
      </div>
    </div>
  );
}
