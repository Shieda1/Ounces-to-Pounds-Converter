// https://www.omnicalculator.com/everyday-life/ounces-to-pounds-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const poundsRadio = document.getElementById('poundsRadio');
const ouncesRadio = document.getElementById('ouncesRadio');

let pounds;
let ounces = v; 

// labels of the inpust
const variable = document.getElementById('variable');

poundsRadio.addEventListener('click', function() {
  variable.textContent = 'Ounces';
  ounces = v;
  result.textContent = '';
});

ouncesRadio.addEventListener('click', function() {
  variable.textContent = 'Pounds';
  pounds = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(poundsRadio.checked)
    result.textContent = `Pounds = ${computepounds().toFixed(5)}`;

  else if(ouncesRadio.checked)
    result.textContent = `Ounces = ${computeounces().toFixed(5)}`;
})

// calculation

function computepounds() {
  return Number(ounces.value) * 0.0625;
}

function computeounces() {
  return Number(pounds.value) / 0.0625;
}