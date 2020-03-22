module.exports = function repeater(str, options) {
  let add =
    options && options.hasOwnProperty("addition")
      ? Array.from(
          {
            length: options.additionRepeatTimes || 1
          },
          () => `${options.addition}` || ""
        ).join(options.additionSeparator || "") || ""
      : "";
  let result = Array.from(
    {
      length: options.repeatTimes || 1
    },
    () => `${str}${add}`
  ).join(options.separator || "+");
  return result;
};
