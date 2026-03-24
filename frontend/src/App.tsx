import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Auth from "./pages/Auth";
import Layout from "../components/Layout";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path="/auth" element={<Auth />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  );
}
