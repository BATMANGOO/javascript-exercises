let findTheOldest = function(people) {
  return people.sort((a,b) => {
    if(!a.yearOfDeath) {
      a.yearOfDeath = new Date().getFullYear();
    } else if (!b.yearOfDeath) {
      b.yearOfDeath = new Date().getFullYear();
    }
    return (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1;
  })[0];
}

module.exports = findTheOldest
