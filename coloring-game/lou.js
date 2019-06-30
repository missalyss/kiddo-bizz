function timer(number) {
  let result = '';
  div = '<div class="cel" /> \n';
  for (let i = 0; i < number; i++) {
    result = result.concat(div);

  }
  console.log(result);

  return result;
}

timer(100)