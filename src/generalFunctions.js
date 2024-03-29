import { MenuItem } from "@mui/material";

//   function that generate random number
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//  function that return random piece of array of artworks
export function getRandomPiece(idList, loaded) {
  let random = randomNumber(0, idList.length - 1);
  if (idList.length === 0 || loaded.includes(idList[random])) {
    return null;
  }
  if (idList[random] === undefined) {
    return getRandomPiece(idList, loaded);
  }

  return idList[random];
}

// function that return item of menu of the different departments
export function createOptions(departmentsList) {
  return departmentsList.map(({ departmentId, displayName }) => {
    return (
      <MenuItem
        key={departmentId}
        value={departmentId}
        sx={{
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "secondary.main",
          },
          "&:focus": {
            backgroundColor: "secondary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
            },
          },
        }}
      >
        {displayName}
      </MenuItem>
    );
  });
}

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function stringAvatar(name) {
  name = name.toUpperCase();

  let symbols = [
    ".",
    ",",
    "!",
    "?",
    ";",
    ":",
    "(",
    ")",
    '"',
    "'",
    "&",
    "%",
    "$",
  ];

  symbols.forEach((symbol) => {
    name = name.replace(symbol, "");
  });

  if (name.split(" ").length > 1) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name[0]}`,
  };
}
