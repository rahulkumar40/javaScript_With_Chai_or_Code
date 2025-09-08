
const month = 3;
switch (month) {
  case 1:
    console.log("January")
    break;
  case 2:
    console.log("feb")
    break;
  case 3:
    console.log("march")
    break;
  case 4:
    console.log("jun")
    break;
  case 5:
    console.log("july")
    break;

  default:
    console.log("Not present ")
    break;
}

switch ("march") {
  case "jan":
    console.log("jan")
    break;
  case "feb":
    console.log("feb")
    break;
  case "march":
    console.log("march")
    break;
  default:
    console.log("not here")
    break;
}

// after break keywork nothing will excute
// if there is no any break key word then afet excution all case will run except default.