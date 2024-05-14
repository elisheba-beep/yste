import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
