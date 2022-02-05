const minusButton = document.querySelector(".minus-button");
const plusButton = document.querySelector(".plus-button");
const addCart = document.querySelector(".add-to-cart-button");
const qntProduct = document.querySelector(".qnt");
const bagNumber = document.querySelector(".bag-number");

let qntBagNumber = Number.parseInt(bagNumber.textContent);
let qntProductNumber = Number.parseInt(qntProduct.textContent);

console.log(qntBagNumber);

minusButton.addEventListener("click", function () {
  if (qntProductNumber > 0) {
    qntProductNumber--;
    let newNumber = qntProductNumber;
    console.log(newNumber);
    let newNumberSting = newNumber.toString();
    document.querySelector(".qnt").textContent = `${newNumberSting}`;
    cart(newNumberSting);
  } else {
    console.log("Número mínimo matingido");
  }
});

plusButton.addEventListener("click", function () {
  qntProductNumber++;
  let newNumber = qntProductNumber;
  let newNumberSting = newNumber.toString();
  document.querySelector(".qnt").textContent = `${newNumberSting}`;
  cart(newNumberSting);
});

function cart(newNumberSting) {
  addCart.addEventListener("click", function () {
    document.querySelector(".bag-number").textContent = `${newNumberSting}`;
  });
}
