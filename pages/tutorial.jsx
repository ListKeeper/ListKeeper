import React from 'react'
import Styles from "../styles/Tutorial.module.css"
import { Button } from "@material-ui/core";
import Link from "next/link"

function tutorial() {
  return (
    <div>
    <div>
      Tutorial
    </div>
    <Button><Link href="/hiddenSettings">Back</Link></Button>
    </div>
  )
}

export default tutorial
