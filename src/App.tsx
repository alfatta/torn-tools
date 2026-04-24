import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "~/pages/home"
import { ToS } from "~/pages/tos"
import { ToolsMarketDealer } from "~/pages/tools-market-dealer"
import { SettingsPage } from "~/pages/settings"
import { Layout } from "./components/layout"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tos" element={<ToS />} />
          <Route path="/tools/market-dealer" element={<ToolsMarketDealer />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
