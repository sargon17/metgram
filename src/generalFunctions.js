//   function that generate random number
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomPiece(idList) {
  let random = randomNumber(0, idList.length - 1);
  if (idList[random] === undefined) {
    return getRandomPiece();
  }
  return idList[random];
}
