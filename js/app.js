'use strict';
//Problem Domain:
// -Need to calculate the number of cookies each location must make eery day to manage its supplies inventory and baking schedule.
// -Number of cookies made depends on hours of operations which is 6-8 for all locations, plust a few factors unique to each location such as:
// Minimum number of customers per hour
// Maximum number of customers per hour
// Average number of cookies sold per customer
// -Needs to be adaptable
// -User needs to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors. 
// -User would like to see nice formatting for the numbers

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var newStoreArr = [];

function StoreList(minCustHours, maxCustHours, avgCookies, name) {
  this.minCustHours = minCustHours;
  this.maxCustHours = maxCustHours;
  this.avgCookies = avgCookies;
  this.storeCookiePerHour = [];
  this.name = name;
  this.cookieTotal = 0;

  newStoreArr.push(this);
}

//Generates random number
StoreList.prototype.randomNumberCustomerHour = function () {
  return (Math.floor(Math.random() * (this.maxCustHours - this.minCustHours + 1)) + this.minCustHours);
};

StoreList.prototype.cookiePerHour = function () {
  for (var i = 0; i < storeHours.length; i++) {
    this.storeCookiePerHour.push(Math.round(this.randomNumberCustomerHour() * this.avgCookies));
  }
};
//Gives total for each store
StoreList.prototype.cookieSum = function () {
  for (var i = 0; i < storeHours.length; i++) {
    this.cookieTotal = this.cookieTotal + this.storeCookiePerHour[i];
  }
};
// Renders on page
StoreList.prototype.render = function () {
  var pEl = document.getElementById(this.name);
  for (var i = 0; i < storeHours.length; i++) {
    // create element
    var liEl = document.createElement('li');
    // Give it content
    liEl.textContent = `${storeHours[i]} ${this.storeCookiePerHour[i]} cookies`;
    // append the child to the parent
    pEl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.cookieTotal} cookies`;
  pEl.appendChild(liEl);
};

new StoreList(23, 65, 6.3, 'Seattle Store');
new StoreList(3, 24, 1.2, 'Tokyo Store');
new StoreList(11, 38, 3.7, 'Dubai Store');
new StoreList(20, 38, 2.3, 'Paris Store');
new StoreList(2, 16, 4.6, 'Lima Store');

for (var i = 0; i < newStoreArr.length; i++) {
  newStoreArr[i].cookiePerHour();
  newStoreArr[i].cookieSum();
  // newStoreArr[i].render();
}


function renderHeadingRow(storeArr) {
  var table = document.getElementById('table');
  var trEl = document.createElement('tr');
  table.appendChild(trEl);

  for (i = 0; i < storeArr.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = storeArr[i];
    trEl.appendChild(thEl);
  }
  var dailyLocationTotal = document.createElement('th');
  dailyLocationTotal.textContent = 'Daily Location Total';
  trEl.appendChild(dailyLocationTotal);
}
renderHeadingRow(storeHours);


// create table heading <th> and append it to table
// then i need to give those table headings content using textcontent

