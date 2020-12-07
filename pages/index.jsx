import Head from "next/head";
import styles from "../styles/Home.module.css";
import SignIn from "../Components/SignIn";
import Document, { Html, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import SecurityOutlinedIcon from "@material-ui/icons/SecurityOutlined";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ListKeeper Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.card}>
     
          <h1 className={styles.title}>Welcome to ListKeeper!</h1>
 
          <div>
          <SecurityOutlinedIcon className={styles.shield} />
          </div>
          <div>
          <SignIn />
          </div>
      </div>
    </div>
  );
}
