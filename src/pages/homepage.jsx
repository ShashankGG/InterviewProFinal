import React from "react";
import Navbar from "../components/navbar";
import How from "../components/how";
import How2 from "../components/how2";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Feedback from "../components/Feedback";
function Homepage(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <How/>
        <How2/>
        <Feedback/>
        <Footer/>
        </>
    )
}
export default Homepage;