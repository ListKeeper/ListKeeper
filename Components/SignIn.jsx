import React from "react";
import { useSession, signin, signout } from "next-auth/client";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import styles from "../styles/SignIn.module.css";
import Link from "next/link"

const logOutTheme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        backgroundColor: "red",
        color: "white",
        "&:hover": {
          backgroundColor: "#440704",
          color: "#FFF",
          border: "1px solid",
          borderColor: "#FFF",
        },
      },
    }
  },
});

const loggedInTheme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        backgroundColor: "green",
        color: "white",
        "&:hover": {
          backgroundColor: "#00FF00",
          color: "#FFF",
          border: "1px solid",
          borderColor: "#FFF",
        },
      },
    },
  },
});



export default function SignIn() {
  const [session, loading] = useSession();

  return (
    <p className={styles.container}>
      {!session && (
        <>
          Not signed in <br />
          <ThemeProvider theme={loggedInTheme}>
            <Button onClick={signin}>Sign in</Button>
          </ThemeProvider>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <ThemeProvider theme={logOutTheme}>
            <Button onClick={signout}>Sign out</Button>
          </ThemeProvider>
          <br />
          <ThemeProvider theme={logOutTheme}>
            <Button><Link href="/todo">Todo List</Link></Button>
          </ThemeProvider>
        </>
      )}
    </p>
  );
}
