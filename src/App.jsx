import { BrowserRouter } from "react-router-dom";
import Button from "./components/button/Button";
import { GlobalStyles } from "./styles/GlobalStyles";
import Router from "./lib/router/Router";
import SayHello from "./components/say-hello/SayHello";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <SayHello />
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
