import React from 'react'
import Link from "next/link"

function hiddenSettings() {
  return (
    <div>
  <p>ListKeeper is disguised as an unsuspecting todo list app so if you are in a dangerous situation and you need to be stealthy in calling for help, ListKeeper can keep you safe. </p>

  <p>When you input a todo on ListKeeper the search bar will autocomplete into a known phrase e.g. Help. When you press the ADD button listKeeper sends a coded message to your trusted contacts via SMS and Email. If you need immediate help you can always access this secret menu and get connected to 911 via the Emergency button </p>
  
  <Link href="/tutorial"><button>Tutorial</button></Link>
      <button>Emergency</button>
      <Link href="/"><button>Back</button></Link>
    </div>
  )
}

export default hiddenSettings
