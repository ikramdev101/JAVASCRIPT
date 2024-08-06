function add() {
  let height = 1.90;
  let weight = 3000;
  let kotla = weight * (height ** 2);
  let stat = '';

  switch (true) {
    case (kotla < 18.5):
      stat += 'underweight';
      console.log(stat);
      break;
    case (kotla >= 18.5 && kotla < 24.9):
      stat += 'normal weight';
      console.log(stat);
      break;
    default:
      stat += 'out of range';
      console.log(stat);
      break;
  }
}

add();
