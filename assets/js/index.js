let sideCount = 1;
const totalSideAmount = 4;
while (sideCount <= totalSideAmount) {
  console.log("Йти прямо");
  console.log("Повернути праворуч");
  sideCount++;
}

let n = null;
do {
  n = Number(prompt("Введіть число"));
} while (!Number.isFinite(n));
console.log(n * n);

let i = 1;
let t = 1;
while (i < 10) {
  i++;
  t *= i;
}
console.log(t);

const TOTAL_PAGE_AMOUNT = 20;
for (let currentPage = 10; currentPage <= TOTAL_PAGE_AMOUNT; currentPage += 2) {
  console.log("Page:", currentPage);
}
