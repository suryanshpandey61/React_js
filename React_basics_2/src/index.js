import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";
let div = document.getElementById("root");

//createRoot(div).render(<h1>Hello World</h1>);
createRoot(div).render(<App></App>);
