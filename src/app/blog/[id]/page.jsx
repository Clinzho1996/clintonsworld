import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>desc</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/54284/pexels-photo-54284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/54284/pexels-photo-54284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet
          dolorum recusandae autem quibusdam dolore itaque rerum quas
          praesentium eius, eveniet nobis quidem ipsa, culpa sint molestiae
          minus similique ullam illum. Dolores deserunt vero quidem? Architecto
          dolores enim dolorem repudiandae atque, voluptates maiores laboriosam,
          nisi assumenda, itaque quisquam! Eveniet, incidunt. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Unde illum facere quibusdam
          iure nam est dolorum eius temporibus, magnam alias fugiat nemo
          voluptatum? Hic beatae, debitis natus unde fugiat dolorem numquam
          asperiores atque, ipsam repudiandae, nobis nam. Rem officiis, itaque
          vero repudiandae nihil quae autem corrupti ullam consequatur
          distinctio officia animi nostrum, totam eveniet error architecto
          molestias iusto ex nobis quos? Adipisci veritatis enim, dolorum libero
          eveniet nisi omnis maiores dolor, inventore illo voluptate, officiis
          fuga reiciendis earum. Molestias dolores ducimus laudantium blanditiis
          vero qui odit beatae itaque doloribus saepe quam iure molestiae, dicta
          dolore, totam, dolorem ullam exercitationem repellat!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
