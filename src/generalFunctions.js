import { MenuItem } from "@mui/material";

//   function that generate random number
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//  function that return random piece of array of artworks
export function getRandomPiece(idList) {
  let random = randomNumber(0, idList.length - 1);
  if (idList[random] === undefined) {
    return getRandomPiece();
  }
  return idList[random];
}

// function that return item of menu of the different departments
export function createOptions(departmentsList) {
  return departmentsList.map(({ departmentId, displayName }) => {
    return (
      <MenuItem key={departmentId} value={departmentId}>
        {displayName}
      </MenuItem>
    );
  });
}
