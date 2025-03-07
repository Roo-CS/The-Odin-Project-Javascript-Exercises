const findTheOldest = (people) => {
  let currOldAge = Number.MIN_VALUE;
  let oldestPerson;

  for(const person of people){
    if(!person.yearOfDeath){
      death = new Date().getFullYear();
      person.yearOfDeath = death;
    }
    person.age = person["yearOfDeath"] - person["yearOfBirth"];

    if(person.age > currOldAge){
      currOldAge = person.age;
      oldestPerson = person;
    }
  }
  return oldestPerson;
}

// Do not edit below this line
module.exports = findTheOldest;
