import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import Entrypoint from "./component/Entrypoint"

function App() {

  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Entrypoint />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
