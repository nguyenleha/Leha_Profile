import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./View/Home";
import Nav from "./View/Nav/Nav";

function App() {
  return (
    <Router>
      <div className="container-body">
        <Nav />

        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
