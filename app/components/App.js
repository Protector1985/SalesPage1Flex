import React from "react";
import Header from "./Header.js";
import Left from "./Left.js";
import Right from "./Right.js";
import Footer from "./Footer.js";


function App() {
    return (
        <div>
        <div className="content-master">
        <div className="wrapper">
        <Header/>
        <Left />
        <Right />
        </div>
        </div>
        <Footer />
        </div>

    )
}

export default App;