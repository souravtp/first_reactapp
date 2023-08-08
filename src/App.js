import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Classsample from "./components/Classsample";
import Topics from "./components/Topics";
import Mapsample from "./components/Mapsample";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer name = "Sourav" age = "24" mail="sourav123@gmail.com"/>
      <Classsample />
      <Mapsample />
      <Topics />
    </div>
  );
}

export default App;
