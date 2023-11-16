//your JS code here. If required.
function fizz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
      alert("\nFizz");
    } else if (i % 5 == 0 && i % 3 != 0) {
      alert("\nBuzz");
    } else if (i % 3 == 0 && i % 5 == 0) {
      alert("\nFizzBuzz");
    }
  }
}
fizz();