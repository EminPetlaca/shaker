import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import ShakeCreateForm from "./ShakeCreateForm";
import ShakeList from "./ShakeList/";
import ShakeUpdateForm from "./ShakeUpdateForm";
import ShakeView from "./ShakeView";
import ONas from "./ONas/ONas";
import Kontakty from "./Kontakty/Kontakty";


export default function AppRoutes() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add-shake" element={<ShakeCreateForm/>}/>
                <Route path="/view-shakes" element={<ShakeList/>}/>
                <Route path="/shakes/:id" element={<ShakeView/>}/>
                <Route path="/update-shakes/:id" element={<ShakeUpdateForm/>}/>
                <Route path="/o-nas" element={<ONas/>}/>
                <Route path="/kontakt" element={<Kontakty/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
