var reverse = function(x) {
  let mod = 10;
  let pos = [];
  let nums = [];
  let negative = false;

  if (x < 0) {
    x = Math.abs(x);
    negative = true;
  }
  while (x) {
    nums.push(x % 10);
    pos.unshift(Math.floor(mod / 10));
    mod *= 10;
    x = Math.floor(x / 10);
  }

  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i] * pos[i];
    if (total >= 2147483648) return 0;
  }

  return negative ? total * -1 : total;
};
