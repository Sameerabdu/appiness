import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { ProjectRoute } from "./routes/route";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";

function App() {
  return <ProjectRoute />;
}

export default App;
