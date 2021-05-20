import "./index.css";
import MP from "./MainProject";

function App() {
  return <>
   

<div className="main_containar">
      <div className="Head">
        <h1 className="HeadText1">Онлайн калькулятор</h1>
        <h1 className="HeadText2">Потужності вирових ГЄС</h1>
      </div>

      <div className="AllFormulas">
        <MP />
      </div>
      </div>
  </>
}

export default App;
