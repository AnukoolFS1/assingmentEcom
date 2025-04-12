// library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
// import store from "./app/store"
//Component
import Entrypoint from "./component/Pages/Entrypoint"
import Dashboard from "./component/Pages/Dashboard"


function App() {

  return (
    // <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Entrypoint />} />
          <Route path="/products" element={<Dashboard />} />
        </Routes>
      </Router>
    // </Provider>
  )
}

export default App
