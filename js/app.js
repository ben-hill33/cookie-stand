'use strict';

var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var userForm = document.getElementById('userForm');
var newStoreArr = [];
console.log(newStoreArr);

// Object Constructor
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
  var table = document.getElementById('table');
  var trEl = document.createElement('tr');
  table.appendChild(trEl);

  tdEl = document.createElement('td');
  tdEl.textContent = `${this.name}`;
  trEl.appendChild(tdEl);

  for (var i = 0; i < this.storeCookiePerHour.length; i++) {
    // create element
    var tdEl = document.createElement('td');
    // Give it content
    tdEl.textContent = `${this.storeCookiePerHour[i]}`;
    // append the child to the parent
    trEl.appendChild(tdEl);
  }
  var storeTotal = document.createElement('td');
  storeTotal.textContent = `${this.cookieTotal}`;
  trEl.appendChild(storeTotal);
};



new StoreList(23, 65, 6.3, 'Seattle Store');
new StoreList(3, 24, 1.2, 'Tokyo Store');
new StoreList(11, 38, 3.7, 'Dubai Store');
new StoreList(20, 38, 2.3, 'Paris Store');
new StoreList(2, 16, 4.6, 'Lima Store');

function renderHeadingRow(storeArr) {
  var table = document.getElementById('table');
  var trEl = document.createElement('tr');
  table.appendChild(trEl);

  var thEl = document.createElement('th');
  trEl.appendChild(thEl);

  for (i = 0; i < storeArr.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = storeArr[i];
    trEl.appendChild(thEl);
  }
  var dailyLocationTotal = document.createElement('th');
  dailyLocationTotal.textContent = 'Daily Location Total';
  trEl.appendChild(dailyLocationTotal);

}
renderHeadingRow(storeHours);

for (var i = 0; i < newStoreArr.length; i++) {
  newStoreArr[i].cookiePerHour();
  newStoreArr[i].cookieSum();
  newStoreArr[i].render();
}
// Gets total per hour for each store that displays in footer row
function getTotalPerHour(storeArr){
  // console.log(storeArr + ' this is store array');
  // console.log(storeArr[0].storeCookiePerHour.length);
  // console.log(storeArr.length);
  var hourlyTotalArray = [];
  for(var i = 0; i < storeArr[0].storeCookiePerHour.length; i++){
    var total = 0;
    for(var j = 0; j < storeArr.length; j++){
      // console.log('this is store array at j ' + storeArr[j].storeCookiePerHour[i]);
      total += storeArr[j].storeCookiePerHour[i];
    }
    hourlyTotalArray.push(total);
    // console.log(hourlyTotalArray[i]);
  }
  // console.log('this is hourly total return ' + hourlyTotalArray);
  return hourlyTotalArray;
}
console.log(getTotalPerHour(newStoreArr));
var arrayHourlyTotal = getTotalPerHour(newStoreArr);
console.log(arrayHourlyTotal);

// Gets the sum of the totals gathered in footer to display grand total
function getAllStoreTotals(array){
  var total = 0;
  for(i = 0; i < array.length; i++){
    total += array[i].cookieTotal;
  }
  return total;
}
var omegaTotal = getAllStoreTotals(newStoreArr);

function renderFooterRow(hourlyArray) {
  // console.log(hourlyArray);
  var table = document.getElementById('table');
  var trEl = document.createElement('tr');
  table.appendChild(trEl);

  tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  table.appendChild(tdEl);

  for(i = 0; i < hourlyArray.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = `${hourlyArray[i]}`;
    table.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = `${omegaTotal}`;
  table.appendChild(tdEl);

}
renderFooterRow(arrayHourlyTotal);

// Event listener handles input user addes to form on sales page when submitted
function handleSubmit(event){
  event.preventDefault();

  var store = event.target.storeName.value;
  console.log(store);

  var minimum = parseInt(event.target.minimumCustNum.value);
  console.log(minimum);

  var maximum = parseInt(event.target.maximumCustNum.value);
  console.log(maximum);

  var average = parseInt(event.target.averagePurchCust.value);
  console.log(average);


  new StoreList(minimum, maximum, average, store);


  event.target.storeName.value = null;
  event.target.minimumCustNum.value = null;
  event.target.maximumCustNum.value = null;
  event.target.averagePurchCust.value = null;

  //add variables that target store name, mincusthour, maxcusthour, averagecookiehour (23, 65, 6.3, 'Seattle Store');
}
userForm.addEventListener('submit', handleSubmit);

// renderFooterRow(arrayHourlyTotal) = storeCookiePerHour[i];
// 
