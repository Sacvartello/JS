const map1 = new Map();
console.log(map1.size);
map1.set("age", 21).set("firstName", "Oleg");
console.log(map1);
console.log(map1.get("firstName"));
console.log(map1.has("age"));
console.log(map1.has("lastName"));

const tel = new Map();
tel.set("tel1", 832617).set("tel2", 83263779117).set("tel3", 4516832617);
console.log("tel==>", tel);
tel.delete("tel2");
console.log("tel==>", tel);

map1.clear();
console.log(map1);

const obj = {
  Test: "+380123456789",
  Test1: "+380123456788",
};

console.log(Object.entries(obj));
const m2 = new Map(Object.entries(obj));
console.log(m2);

//Практика
const voc = new Map();

voc
  .set("dog", "собака")
  .set("cat", "кіт")
  .set("cow", "корова")
  .set("horse", "кінь")
  .set("pig", "свиня");

function toUa(eng) {
  const engWords = eng.split(" ");
  const uaWords = engWords.map((w) =>
    voc.has(w) ? voc.get(w) : w
  );

  const ua = uaWords.join(" ");
  return ua;
}

const eng = "dog cat cow horse pig is a family";
const ua = toUa(eng);
console.log(ua);
