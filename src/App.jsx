import './App.css';
import logo from "./image 1.png";
import topDots from "./Group 1.png";
import bottomDots from "./Group 2.png";

function App() {
  return (
    <div className="container">

      {/* LEFT SIDE */}
      <div className="left">
        <img src={topDots} alt="" className="bg-top" />
        
        <div className="content">
          <h1>Forgot Password?</h1>
          <p>Type your E-Mail to recover password.</p>
        </div>

        <img src={bottomDots} alt="" className="bg-bottom" />
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <img src={logo} alt="Reply AI Logo" className="logo" />

        <h2>Reset Your Password</h2>

        <input type="email" placeholder="Enter your email" />

        <button>Reset Password</button>
      </div>

    </div>
  );
}

export default App;