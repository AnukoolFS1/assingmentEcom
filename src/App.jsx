import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import Entrypoint from "./component/Entrypoint"
import store from "./app/store"

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Entrypoint />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
