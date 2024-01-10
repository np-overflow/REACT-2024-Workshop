import "../App.css"
import { Link } from "react-router-dom";

function FormSubmitted() {
  return (
    <div className="App">
      <h1>Form Submitted Successfully!</h1>
      <Link to="/">​
        <button>Go Back</button>​
      </Link>

    </div>
  );
}

export default FormSubmitted;
