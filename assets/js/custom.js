// Add any custom javafuscript here.
function myMapColorFunction(indicatorId, goalId) {
  if (goalId == 3) {
    return chroma.brewer.OrRd;
  }
  else {
    return chroma.brewer.BuGn;
  }
}
