const isLogIn = true;
if (isLogIn) {
  console.log("Привіт!");
} else {
  console.log("Try agan!");
}

const tall = Number(prompt("Введіть ваш зріст:"));

if (tall >= 175) {
  if (tall === 175) {
    console.log("Ваш зріст дорівнює середньому зросту людини!");
  } else {
    console.log("Вітаю! Ваш зріст більше ніж середній зріст людини)");
  }
} else {
  console.log("Ваш зріст менше ніж середній зріст людини(");
}
