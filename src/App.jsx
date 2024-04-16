import "./App.css";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/nav/Navbar";
import { Brocher } from "./components/brocher/Brocher";
import { Footer } from "./components/footer/Footer";
// import  Body  from "./components/Body/body"
import Body from "./components/Body/body";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      {/* <Brocher/> */}
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
