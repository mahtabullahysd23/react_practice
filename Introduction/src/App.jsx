import "./App.css";
import { useState } from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import Hero from "./component/hero";
import Contact from "./component/contact";
import About from "./component/about";
import SignUp from "./component/signup";

function App() {
  const [tabname, setTabname] = useState("Home");
  const onLinkClick = (linkClicked) => {
    setTabname(linkClicked);
  }
  return (
    <>
      <div>
        <Header onLinkClick = {onLinkClick}/>
        {
          tabname === "Home" ? <div><Hero/></div> 
          : tabname === "Contact" ? <div><Contact/></div> 
          : tabname === "About" ? <div><About/></div> 
          : <div><SignUp/></div>
        }
        <Footer />
      </div>
    </>
  );
}

export default App;
