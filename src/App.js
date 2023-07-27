import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      
      <Home/>
      <Footer/>
      <Toaster position="top-center"/>
    </>
  );
}

export default App;
