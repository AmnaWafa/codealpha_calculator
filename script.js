document.addEventListener("DOMContentLoaded", (e) => {
  let currentState = {
    prevValue: null,
    currentValue: null,
    currentOperation: '',
    subtotal: null,
    total: null,
  };
  let numbers = document.querySelectorAll(".numbers button");
  let operators = document.querySelectorAll(".orange-buttons, #mod");
  const equalBtn = document.querySelector("#equalBtn");
  let answerElement = document.querySelector("#answer");
  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      console.log(e.target.textContent);
      answerElement.value += e.target.textContent;
      currentState.currentValue = parseFloat(answerElement.value.trim());
    });
  });
  operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
      answerElement.value = "";
      currentState.currentOperation = e.target.textContent.trim();
      currentState.prevValue = parseFloat(currentState.currentValue);
      currentState.currentValue = null;
    });
  });
  equalBtn.addEventListener("click", (e) => {
    switch (currentState.currentOperation) {
      case "+":
        answerElement.value =
          currentState.prevValue + currentState.currentValue;
        currentState.subtotal = answerElement.value;
        currentState.currentValue = currentState.subtotal;
        currentState.total += currentState.subtotal;
        break;
      case "-":
        answerElement.value =
          currentState.prevValue - currentState.currentValue;
          currentState.subtotal = answerElement.value;
          currentState.currentValue = currentState.subtotal;
          currentState.total += currentState.subtotal;
        break;
      case "×":
        answerElement.value =
          currentState.prevValue * currentState.currentValue;
          currentState.subtotal = answerElement.value;
          currentState.currentValue = currentState.subtotal;
          currentState.total += currentState.subtotal;
        break;
      case "÷":
        answerElement.value =
          currentState.prevValue / currentState.currentValue;
        currentState.subtotal = answerElement.value;
        currentState.currentValue = currentState.subtotal;
        currentState.total += currentState.subtotal;
        break;
    case "%":
    answerElement.value =
        currentState.prevValue % currentState.currentValue;
        currentState.subtotal = answerElement.value;
        currentState.currentValue = currentState.subtotal;
    currentState.total += currentState.subtotal;
    break;
      default:
        answerElement.value = currentState.currentValue;
        break;
    }
  });
  const clearBtn = document.querySelector('#clearBtn');
  clearBtn.addEventListener('click', () => {
    currentState.prevValue = null;
    currentState.currentValue = null;
    currentState.currentOperation = '';
    currentState.subtotal = null;
    currentState.total = null;
    answerElement.value = "";
  })
  const deleteBtn = document.querySelector('#delBtn');
  deleteBtn.addEventListener('click',() => {
    let valToString  = currentState.currentValue.toString();
    console.log(valToString.length)
    if(valToString.length === 1){
      answerElement.value = "";
    }
    else{
      currentState.currentValue = parseFloat(valToString.slice(0,-1));
      answerElement.value = currentState.currentValue;
    }
  })
});
