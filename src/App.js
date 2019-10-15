import React from "react";
import "./App.css";
import Postform from "./components/Postform";
import Posts from "./components/Posts";
import { Provider } from "react-redux";
import store from "./store";
import FunComponent from "./FunctionalComponents/funComponent";
import Container from "./container/Container";

function App() {
  return (
    //Wrap everything in provider
    // Gives provider a store
    // <Provider store={store}>
    <div className="App">
      <h5>Redux Blog</h5>
      {/* <Postform /> */}
      {/* <Posts /> */}

      <Container nickname="Foysal" />

    </div>
    // </Provider>
  );
}

export default App;
