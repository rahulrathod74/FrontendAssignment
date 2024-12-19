for (let i = 1; i <=10; i++) {
  if (i % 7 == 0) {
    break;
  }
  let res = "";
  for (let j = 1; j < i; j++) {
    if (j % 3 == 0) {
      continue;
    }
    
    res += " " + j;
  }
  console.log(res);
}
