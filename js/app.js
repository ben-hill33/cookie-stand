'use strict';
console.log('im alive');
//Problem Domain:
// -Need to calculate the number of cookies each location must make eery day to manage its supplies inventory and baking schedule.
// -Number of cookies made depends on hours of operations which is 6-8 for all locations, plust a few factors unique to each location such as:
  // Minimum number of customers per hour
  // Maximum number of customers per hour
  // Average number of cookies solder per customer
// -Needs to be adaptable
// -User needs to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors. 
// -User would like to see nice formatting for the numbers

//Instructions for sales data page
var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'];
var seattle = {
  minCustHours: 23,
  maxCustHours: 65,
  avgCookies: 6.3,
  storeCookiePerHour: [],
  hourlyTotal: function(){
    return (this.storeCookiePerHour + storeHours);
  },
  randomNumberCustomerHour: function(){
    return (Math.floor(Math.random() * (this.maxCustHours - this.minCustHours +1)) + this.minCustHours);//returns a random number between 23 and 65
  },
  cookiePerHour: function(){
    for(var i = 0; i < storeHours.length; i++){
      this.storeCookiePerHour.push(this.randomNumberCustomerHour() * this.avgCookies);
    }
  }


};
console.log(seattle);
seattle.cookiePerHour();
seattle.hourlyTotal();

//TODO: Calculating the sum of these hourly total


