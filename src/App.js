import { BrowserRouter as Router,Routes ,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Start from "./Pages/Start";

function App() {
  return (
    <div className="App">
        <Router  basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" exact element={<Start />} />
            <Route path="/home" exact element={<Home />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
