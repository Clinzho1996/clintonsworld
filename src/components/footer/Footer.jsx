import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        &copy; 2023{" "}
        <Link href="/" className={styles.copy}>
          Dev-Clinton
        </Link>
        | All Rights Reserved
      </div>
      <div className={styles.social}>
        <Link href="#">
          <Image src="/github.png" width={15} height={15} alt="github" />
        </Link>
        <Link href="#">
          <Image src="/github.png" width={15} height={15} alt="github" />
        </Link>
        <Link href="#">
          <Image src="/github.png" width={15} height={15} alt="github" />
        </Link>
        <Link href="#">
          <Image src="/github.png" width={15} height={15} alt="github" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
