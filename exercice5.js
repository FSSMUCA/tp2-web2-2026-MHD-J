let nombres = [
  0,
  NaN,
  Infinity,
  -Infinity,
  42,
  3.14,
  Number.MAX_SAFE_INTEGER + 1,
  -0,
];

for (let i = 0; i < nombres.length; i++) {
  let val = nombres[i];

  if (Number.isNaN(val)) {
    console.log(`${val} -> INVALIDE`);
  } else if (val === Infinity || val === -Infinity) {
    console.log(`${val} -> INFINI`);
  } else if (1 / val === -Infinity) {
    console.log(`${val} -> ZERO NEGATIF`);
  } else if (Number.isSafeInteger(val)) {
    console.log(`${val} -> ENTIER SUR`);
  } else if (Number.isInteger(val)) {
    console.log(`${val} -> ENTIER HORS LIMITES`);
  } else {
    console.log(`${val} -> DECIMAL`);
  }
}
