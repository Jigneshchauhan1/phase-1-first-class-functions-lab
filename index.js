// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
function returnFirstTwoDrivers(){
    return drivers.slice(0, 2)
}
function returnLastTwoDrivers(){
    return drivers.slice(2)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(integer){
    const fareQuintupler = function(){
        return integer**2
    }; return fareQuintupler
}
function fareDoubler(integer){
    return integer*2
}
function fareTripler(integer){
    return integer*3
}
function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers()
}