const generateTroops = (number) => {
  //Our Troops are gonna have 3 types of soldiers
  let spearsmen;
  let swordsmen;
  let archers;
  let troop;

  //The number of troops must be > 0
  if (number === 0) {
    return "Invalid Number";
  }

  debugger;

  //We are gonna select one of the 3 types of soldiers but it can´t be 0
  const whatTroop = () => {
    //Range 1 - 3
    let result = Math.round(Math.random() * (3 - 1) + 1);

    return result;
  };

  //this function generate a max random number between 1% to 90% of given number of troops
  const max = (num) => {
    let result = Math.round(
      Math.random() * (num * (90 / 100) - num * (1 / 100)) + num * (1 / 100)
    );

    return result;
  };
  //This function is gonna take the rest between the given number and the result of max function and is gonna give a new random number
  const min = (maxNum) => {
    let rest = number - maxNum;
    let newRandom = max(rest);

    return newRandom;
  };
  //depends the case we are gonna save the random numbers
  switch ((troop = whatTroop())) {
    case 1:
      spearsmen = max(number);
      swordsmen = min(spearsmen);
      archers = number - (spearsmen + swordsmen);
      break;
    case 2:
      swordsmen = max(number);
      archers = min(swordsmen);
      spearsmen = number - (swordsmen + archers);
      break;
    case 3:
      archers = max(number);
      spearsmen = min(archers);
      swordsmen = number - (archers + spearsmen);
      break;
    default:
      break;
  }

  const result = { spearsmen, swordsmen, archers };

  return result;
};

export default generateTroops;
