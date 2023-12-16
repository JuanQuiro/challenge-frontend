import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";

import Layout from "./pages/layout/Layout";



function App() {
  return (
    <main className=" app">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Landing />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;
