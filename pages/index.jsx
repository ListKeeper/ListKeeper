import Head from "next/head";
import styles from "../styles/Home.module.css";
import SignIn from "../Components/SignIn";
import Document, { Html, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import SecurityOutlinedIcon from "@material-ui/icons/SecurityOutlined";
import useSecretDetection from '../Hooks/useSecretDetection';

export default function Home() {
  const {secretActivated, markSecret} = useSecretDetection([])
  return (
    <div className={styles.container}>
      <Head>
        <title>ListKeeper Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.card}>
     
          <h1 className={styles.title}>Welcome to ListKeeper!</h1>
 
          <div className={styles.secret}>
          <div className={styles.secretdivider}>
          <div className={styles.tl} onClick={markSecret} ><button id="0">A</button></div>
          <div className={styles.bl} onClick={markSecret} ><button id="1">C</button></div>
          </div>
          <div className={styles.secretdivider}>
          <div className={styles.tr} onClick={markSecret} ><button id="2">B</button></div>
          <div className={styles.br} onClick={markSecret} ><button id="3">D</button></div>
          </div>
          </div>
          <SecurityOutlinedIcon className={styles.shield} />
          <div>
          <SignIn />
          </div>
      </div>
    </div>
  );
}
