module.exports = function countCats(matrix) {
  return [].concat(...matrix).filter(item => item === "^^").length;
  // remove line with error and write your code here
};
