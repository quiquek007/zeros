module.exports = function getZerosCount(number) {
  let divider = 5;
  let rez = 0;
  while(divider<number) {
    rez += Math.floor(number / divider);
    divider *= 5;
  }
  return rez;
}
