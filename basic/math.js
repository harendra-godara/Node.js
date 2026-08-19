// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// module.exports = add;   --> single function export

// module.exports = { add, sub };

// -------------- Also use --------------

// module.exports = {
//   addFn: add,
//   subFn: sub,
// };

// -------------- Another way to exports functions --------------

exports.sum = (a, b) => a + b;
exports.dif = (a, b) => a - b;
