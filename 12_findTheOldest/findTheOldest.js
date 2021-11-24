const findTheOldest = function(people) {
  let currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  let oldestLiving = 0;
  let oldestDead = 0;
  let oldestLivingPerson = null;
  let oldestDeadPerson = null;

  people.forEach((person) => {
    if (person.yearOfDeath) {
      const age = person.yearOfDeath - person.yearOfBirth;
      oldestDeadPerson = age > oldestDead ? person : oldestDeadPerson;
      oldestDead = age > oldestDead ? age : oldestDead;
    } else {
      const age = currentYear - person.yearOfBirth;
      oldestLivingPerson = age > oldestLiving ? person : oldestLivingPerson;
      oldestLiving = age > oldestLiving ? age : oldestLiving;
    }
  });

  return oldestLiving > oldestDead ? oldestLivingPerson : oldestDeadPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
