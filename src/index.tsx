import { StrictMode } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const ENDPOINT = "https://api.github.com/";

axios.defaults.baseURL = ENDPOINT;

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
