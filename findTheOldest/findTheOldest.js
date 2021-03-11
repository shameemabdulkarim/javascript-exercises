let findTheOldest = function(peopleInfo) {
    return peopleInfo.reduce((oldest,currentPerson)=>{
        const oldestAge=getAge(oldest.yearOfBirth,oldest.yearOfDeath);
        const currentAge=getAge(currentPerson.yearOfBirth,currentPerson.yearOfDeath);
        return oldestAge >currentAge ? oldest :currentPerson
    })
}

const getAge=function(birth,death) {
    if(!death) {
        death=new Date().getFullYear();
    }
    return death-birth;
}

module.exports = findTheOldest
