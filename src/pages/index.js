import React from "react"
import { Link } from "gatsby";
import Footer from "../components/footer";
import Header from "../components/header";


const indexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello world this is first blog!</h1>
      <h2>I am Samyek Sonawane. Living in beatiful Nasik!</h2>
      {/* <p>Need a developer? <a href="/contact">Contact Me!</a></p> */}
      <p>Need a developer? <Link to="/contact">Contact Me!</Link></p>
      <Footer />
    </div> 
  )
}

export default indexPage