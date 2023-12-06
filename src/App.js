// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <Navbar />
        <AllRoutes />
      </div>
    </NextUIProvider>
  );
}

export default App;
