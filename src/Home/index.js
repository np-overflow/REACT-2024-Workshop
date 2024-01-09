import "../App.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    // This code will run after the component has rendered
    let animation = document.getElementById("animation")
    let form = document.getElementById('form')
    form.style.display = "None"
    setTimeout(()=>{
      animation.style.display = "None"
      form.style.display = "Block"
  },1500)

  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="App">
      <lottie-player id="animation" src="https://assets2.lottiefiles.com/packages/lf20_usmfx6bp.json" class="animation" background="transparent"  speed="1"  loop  autoplay></lottie-player>
      <div id = "form">
        <h1>React Form</h1>
        <Link to="/form">
          <button>Start</button>
        </Link>
      </div>
      
    </div>
  );
}

export default Home;