import "./App.css";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/nav/Navbar";
import { Footer } from "./components/footer/Footer";
import { Address } from "./components/address/Address";
import NavbarRouter from "./routers/NavbarRouter";
import { CountdownTimer } from "./assets/CountdownTimer";
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <CountdownTimer />
      <NavbarRouter />
      <Address />
      <Footer />
    </div>
  );
}

export default App;
