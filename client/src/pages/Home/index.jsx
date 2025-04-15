import { Link } from "react-router-dom";

import React from 'react'

export default function Home() {
  return (
    <>
        <Link to={"/add-shake"}>
            <p>Add Shake</p>
        </Link>

        <Link to={"/view-shakes"}>
            <p>View shake</p>
        </Link>
    </>
  )
}
