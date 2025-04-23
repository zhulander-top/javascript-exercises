const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        const oldestAge = findAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = findAge(current.yearOfBirth, current.yearOfDeath);
        if (currentAge > oldestAge){
            return current;
        }
        return oldest;
    })
};
function findAge(birth, death){
    if (!death) {
        death = new Date().getFullYear();
      }
    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
