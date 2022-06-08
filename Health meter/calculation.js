function calculate() {
  let quantity = {
    prot: 100,
    calo: 201,
    fatt: 302
  };
  document.getElementById("protien").value = quantity.prot;
  document.getElementById("calorie").value = quantity.calo;
  document.getElementById("fats").value = quantity.fatt;
}
calculate();

function increment() {
  let a = document.getElementById("protien").value;
  let b = document.getElementById("calorie").value;
  let d = document.getElementById("fats").value;


  let c;
  let e;
  let f;

  c = parseInt(a) + 1;
  e = parseInt(b) + 1;
  f = parseInt(d) + 1;


  document.getElementById("protien").value = c;
  document.getElementById("calorie").value = e;
  document.getElementById("fats").value = f;
}

function decrement() {
  a = document.getElementById("protien").value;
  b = document.getElementById("calorie").value;
  d = document.getElementById("fats").value;

  c = parseInt(a) - 1;
  e = parseInt(b) - 1;
  f = parseInt(d) - 1;

  document.getElementById("protien").value = c;
  document.getElementById("calorie").value = e;
  document.getElementById("fats").value = f;
}

document.getElementById("plus").onclick = increment;
document.getElementById("minus").onclick = decrement;

document.getElementById("plus1").onclick = increment;
document.getElementById("minus1").onclick = decrement;

document.getElementById("plus2").onclick = increment;
document.getElementById("minus2").onclick = decrement;