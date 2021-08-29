const charMap = {
  A: [
    0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
  ],
  B: [
    1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  ],
  C: [
    0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    1, 0, 0, 0, 1, 0, 1, 1, 1, 0,
  ],
  D: [
    1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  ],
  E: [
    1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 1, 1, 1, 1, 1,
  ],
  F: [
    1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  ],
  G: [
    0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 1, 0, 1, 1, 1, 0,
  ],
  H: [
    1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
  ],
  I: [
    0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 1, 0, 0, 0, 1, 1, 1, 0,
  ],
  J: [
    0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 0, 1, 1, 1, 0,
  ],
  K: [
    1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 1, 0, 0, 0, 1,
  ],
  L: [
    1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 1, 1, 1, 1, 1,
  ],
  M: [
    1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
  ],
  N: [
    1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1,
    1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
  ],
  O: [
    0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 0, 1, 1, 1, 0,
  ],
  P: [
    1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0,
    1, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  ],
  Q: [
    0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1,
    1, 0, 0, 1, 1, 0, 1, 1, 1, 1,
  ],
  R: [
    1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0,
    1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
  ],
  S: [
    0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 0, 1, 1, 1, 0,
  ],
  T: [
    1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
  ],
  U: [
    1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 0, 1, 1, 1, 0,
  ],
  V: [
    1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
    0, 1, 0, 1, 0, 0, 0, 1, 0, 0,
  ],
  W: [
    1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1,
    1, 1, 0, 1, 1, 1, 0, 0, 0, 1,
  ],
  X: [
    1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0,
    1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
  ],
  Y: [
    1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
  ],
  Z: [
    1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 0, 0, 0, 1, 1, 1, 1, 1,
  ],
};

function getCharMap(char) {
  switch (char) {
    case "A":
    case "B":
    case "C":
    case "D":
    case "E":
    case "F":
    case "G":
    case "H":
    case "I":
    case "J":
    case "K":
    case "L":
    case "M":
    case "N":
    case "O":
    case "P":
    case "Q":
    case "R":
    case "S":
    case "T":
    case "U":
    case "V":
    case "W":
    case "X":
    case "Y":
    case "Z":
      return charMap[char];

    default:
      return new Array(35).fill(0);
  }
}

const emojis = {
  blank: "🟡",
  smiling_face_with_hearts: "🥰",
  blank: "🟡",
  smiling_face_with_hearts: "🥰",
};

function renderCharacter(character) {
  character = character.toUpperCase();
  let count = 1;
  return getCharMap(character)
    .reduce((acc, char) => {
      if (char === 1) {
        acc.push(emojis["smiling_face_with_hearts"]);
      } else if (char === 0) {
        acc.push(emojis["blank"]);
      }

      if (count % 5 === 0) {
        acc.push("\n");
      }

      count++;

      return acc;
    }, [])
    .join("");
}

function renderSentance(sentance) {
  return sentance
    .split("")
    .map((char) => renderCharacter(char))
    .join("\n");
}

console.log(renderSentance("hello world"));
