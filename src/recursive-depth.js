module.exports = class DepthCalculator {
  constructor() {
    this.i = 1;
    this.calculateDepth = this.calculateDepth.bind(this);
  }
  calculateDepth(arr) {
    // arr.forEach(item => {
    //   if (item instanceof Array) {
    //     this.i += 1;
    //     calculateDepth(item);
    //   }
    // });
    // return this.i;

    if (item instanceof Array) {
      return (this.i += this.calculateDepth(item));
    } else {
      return this.i;
    }
  }
};

//class DepthCalculator {
//   constructor() {
//     this.i = 0;
//     this.calculateDepth = this.calculateDepth.bind(this);
//   }
//   calculate(mas) {
//     let i = 0;
//     return this.calculateDepth(mas);
//   }
//   calculateDepth(arr) {
//     this.i += 1;
//     arr.forEach(item => {
//       if (item instanceof Array) {
//         this.i += 1;
//         calculateDepth(item);
//       }
//     });
//     return this.i;
//     // remove line with error and write your code here
//   }
// };
