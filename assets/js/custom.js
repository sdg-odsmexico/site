// Add any custom javafuscript here.
var colors1 = [
  "#c4e1c6",
  "#b0d1b3",
  "#9bc2a1",
  "#87b28f",
  "#74a37c",
  "#60946b",
  "#4d8559",
  "#3a7747",
  "#276836"
];
function myMapColorFunction(indicatorId, goalId) {
  switch(goalId){
    case 1:
      return chroma.brewer.OrRd;
      break;
     case 2:
      return chroma.brewer.OrRd;
      break;
     case 3:
      return color1;
      break;
     case 4:
      return chroma.brewer.OrRd;
      break;
     case 5:
      return chroma.brewer.OrRd;
      break;
     case 6:
      return chroma.brewer.OrRd;
      break;
     case 7:
      return chroma.brewer.OrRd;
      break;
     case 8:
      return chroma.brewer.OrRd;
      break;
     case 9:
      return color1;
      break;
     case 10:
      return color1;
      break;
     case 11:
      return color1;
      break;
     case 12:
      return color1;
      break;
     case 13:
      return color1;
      break;
     case 14:
      return color1;
      break;
     case 15:
      return color1;
      break;
     case 16:
      return color1;
      break;
  }
}
