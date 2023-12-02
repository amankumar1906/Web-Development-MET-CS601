//Map

const nums = [1, 2, 3, 4];

const ans = nums.map((element, i, arr) => {
  return element * 3;
});

const filterElement = nums.filter((element) => {
  return element > 2;
});

const reduceElement = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

//polyfill: A polyfill is a piece of code (usually JavaScript) that provides the functionality for a feature
// in web browsers that do not support it natively or completely.
Array.prototype.myMap = (cb) => {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

Array.prototype.myFilter = (cb) => {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
};

Array.prototype.myReduce = (cb, initialValue) => {
  Accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    Accumulator = Accumulator ? cb(Accumulator, this[i], i, this) : this[i];
  }
  return Accumulator;
};

//forEach returns undefined vs map returns a new array where every element is modified acc to the callback
