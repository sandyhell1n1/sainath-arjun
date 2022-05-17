import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Chart from "./components/Chart/Chart";
import Layout from "./components/Layout/layout"

export default function App() {
  return (
   <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Register />} />
        <Route path="/chart" element={<Chart />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}