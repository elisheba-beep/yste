import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";

import MainRoutes from "./Routes";
function App() {
  return (
    <>
      <Router>
        <Layout>
          <MainRoutes />
        </Layout>
      </Router>
    </>
  );
}

export default App;
