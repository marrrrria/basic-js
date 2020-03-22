module.exports = class DepthCalculator {
  calculateDepth = (arr, depth = 1) => {
    let depthOfArr = depth;
    for (let i = 0; i < arr.length; ++i) {
      if (Array.isArray(arr[i])) {
        const Depth = this.calculateDepth(arr[i], depth + 1);
        if (Depth > depthOfArr) {
          depthOfArr = Depth;
        }
      }
    }
    return depthOfArr;
  };
};
