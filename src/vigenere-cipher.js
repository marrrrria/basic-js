class VigenereCipheringMachine {
  constructor(direct = true) {
    this.isDirect = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }
    const KEY = [...key];
    const MESSAGE = [...message];
    while (KEY.length < MESSAGE.length) {
      KEY.push(...KEY);
    }
    const SOLUTION = MESSAGE.map(item => {
      return /[a-z]/i.test(item)
        ? String.fromCharCode(
            ((item.toUpperCase().charCodeAt() -
              65 +
              KEY.shift()
                .toUpperCase()
                .charCodeAt() -
              65) %
              26) +
              65
          )
        : item;
    });
    return this.isDirect ? SOLUTION.join("") : SOLUTION.reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }
    const KEY = [...key];
    const MESSAGE = [...message];
    while (KEY.length < MESSAGE.length) {
      KEY.push(...KEY);
    }
    const SOLUTION = MESSAGE.map(item => {
      if (/[a-z]/i.test(item)) {
        const decriptedLetter =
          (item.toUpperCase().charCodeAt() -
            65 -
            KEY.shift()
              .toUpperCase()
              .charCodeAt() -
            65) %
          26;
        return String.fromCharCode(
          (decriptedLetter < 0 ? decriptedLetter + 26 : decriptedLetter) + 65
        );
      } else {
        return item;
      }
    });
    return this.isDirect ? SOLUTION.join("") : SOLUTION.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
