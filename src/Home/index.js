import "../App.css"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1>React Form</h1>
      <Link to="/form">
        <button>Start</button>
      </Link>
    </div>
  );
}

export default Home;