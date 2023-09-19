
import './App.css';

function App() {
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll("button");
  const specialChars = ["%", "*", "/", "-", "+", "="];
  let output = "";
  
  const calculate = (btnValue) => {
      if(btnValue === "=" && output !== ""){
          output = eval(output.replace("%", "/100"));
      }else if(btnValue === "AC"){
          output = ""
      }else if(btnValue === "DEL"){
          output = output.toString().slice(0, -1);
      }else{
          if(output === "" && specialChars.includes(btnValue)) return;
          output += btnValue;
      }
   display.value = output;
  }
  
  buttons.forEach((button) =>{
      button.addEventListener("click", e => calculate(e.target.dataset.value));
  });

  return (
    <div className="App">
      <div class="container">
         <input type="text" class="display"/>

        <div class="buttons">
            <button class="operator" data-value="AC">AC</button>
            <button class="operator" data-value="DEL">DEL</button>
            <button class="operator" data-value="%">%</button>
            <button class="operator" data-value="/">/</button>

            <button data-value="7">7</button>
            <button data-value="8">8</button>
            <button data-value="9">9</button>
            <button class="operator" data-value="*">*</button>

            <button data-value="4">4</button>
            <button data-value="5">5</button>
            <button data-value="6">6</button>
            <button class="operator" data-value="-">-</button>

            <button data-value="1">1</button>
            <button data-value="2">2</button>
            <button data-value="3">3</button>
            <button class="operator" data-value="+">+</button>

            <button data-value="0">0</button>
            <button data-value="00">00</button>
            <button data-value=".">.</button>
            <button class="operator" data-value="=">=</button>

        </div>
    </div>
    </div>
  );
}

export default App;
