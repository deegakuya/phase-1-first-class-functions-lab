// Code your solution in this file!
// returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers array
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier function
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // fareDoubler function
  const fareDoubler = createFareMuselectDifferentDriversltiplier(2);
  
  // fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  //  function
  const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
  };
  
  
  