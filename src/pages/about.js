import React from "react"
import { Link } from "gatsby";
import Footer from "../components/footer";
import Header from "../components/header";



const aboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <h2>This is the about page!</h2>
      <p>Get in contact <Link to="/contact">Here!</Link></p>
      <Footer />
    </div> 
  )
}

export default aboutPage