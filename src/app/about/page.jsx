import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/599982/pexels-photo-599982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="About Dev Clinton"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi
            suscipit exercitationem voluptatibus nam quos deleniti fugiat
            similique vel eius, dignissimos atque a labore officia dolore unde
            optio aliquid nostrum? Aperiam, corporis quod pariatur quibusdam
            aliquid nihil doloribus voluptates <br /> <br /> modi dolor aliquam
            fugit eos similique nostrum eum aliquid aperiam distinctio
            laboriosam volupeserunt officiis atque numquam hic ipsa voluptates
            iure eligendi, voluptas sint, accusamus rerum odio. <br /> <br /> In
            atque praesentium suscipit nesciunt illum accusantium, asperiores
            porro eaque aspernaitia amet modi itaque animi commodi. Unde, nulla
            vel sequi
          </p>
        </div>
        <div className={styles.item}>
          <h1>What We Do</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi
            suscipit optio aliquid nostrum? Aperiam, corporis quod pariatur
            quibusdam aliquid nihil doloribus voluptates <br /> <br /> modi
            dolor aliquam fugit eos similique nostrum eum aliquid aperiam
            distinctio laboriosam iure eligendi, voluptas sint, accusamus rerum
            odio. <br /> <br /> In atque praesentium suscipit nesciunt illum
            accusantium, asperiores porro
          </p>
          <Button url="contact" text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
