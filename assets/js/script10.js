let month = prompt("Enter a serial number of months");

switch (month) {
  case "1":
  case "2":
  case "12":
    console.log("It is No", +month + " " + "month. And it is Winter");
    break;

  case "3":
  case "4":
  case "5":
    console.log("It is No", +month + " " + "month. And it is Spring");
    break;

  case "6":
  case "7":
  case "8":
    console.log("It is No", +month + " " + "month. And it is Summer");
    break;

  case "9":
  case "10":
  case "11":
    console.log("It is No", +month + " " + "month. And it is Autumn");
    break;

  default:
    console.log("Dude there is only 12 months, there is not", month + "th month.");
    break;
}
