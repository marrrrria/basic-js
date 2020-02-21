module.exports = function createDreamTeam(members) {
  let result = [];
  if (members instanceof Array) {
    members.forEach(item => {
      if (typeof item === "string") {
        result.push(item.replace(/\s/g, "")[0].toUpperCase());
      }
    });
    return result.sort().join("");
  } else return false;
  // remove line with error and write your code here
};
