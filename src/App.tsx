import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "~/pages/home"
import { About } from "~/pages/about"
import { ToS } from "~/pages/tos"
import { Layout } from "./components/layout"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tos" element={<ToS />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
