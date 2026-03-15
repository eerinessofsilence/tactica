import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Layout from "../components/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Route>
      <Route path="/demo" element={<Demo />} />
    </Routes>
  );
}
