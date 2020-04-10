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

var storeHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

// Seattle Store
var seattle = {
  minCustHours: 23,
  maxCustHours: 65,
  avgCookies: 6.3,
  storeCookiePerHour: [],
  randomNumberCustomerHour: function () {
    return (Math.floor(Math.random() * (this.maxCustHours - this.minCustHours + 1)) + this.minCustHours);//returns a random number between 23 and 65
  },
  cookiePerHour: function () {
    for (var i = 0; i < storeHours.length; i++) {
      this.storeCookiePerHour.push(Math.round(this.randomNumberCustomerHour() * this.avgCookies));
    }
  },
  cookieSum: function () {
    var arraySum = 0;
    for (var i = 0; i < storeHours.length; i++) {
      arraySum = arraySum + this.storeCookiePerHour[i];
    }
    return arraySum;
  }

};
console.log(seattle);
seattle.cookiePerHour();

function seaRender() {
  var seaSum = seattle.cookieSum();

  var pEl = document.getElementById('Seattle Store');
  for (var i = 0; i < storeHours.length; i++) {
    // create element
    var liEl = document.createElement('li');
    // Give it content
    liEl.textContent = `${storeHours[i]} ${seattle.storeCookiePerHour[i]} cookies`;
    // append the child to the parent
    pEl.appendChild(liEl);
  }
  var seaLiEl = document.createElement('li');
  seaLiEl.textContent = `Total: ${seaSum} cookies`;
  pEl.appendChild(seaLiEl);
}
seaRender();

//Tokyo Store
var tokyo = {
  minCustHours: 3,
  maxCustHours: 24,
  avgCookies: 1.2,
  storeCookiePerHour: [],
  randomNumberCustomerHour: function () {
    return (Math.floor(Math.random() * (this.maxCustHours - this.minCustHours + 1)) + this.minCustHours);//returns a random number between 23 and 65
  },
  cookiePerHour: function () {
    for (var i = 0; i < storeHours.length; i++) {
      this.storeCookiePerHour.push(Math.round(this.randomNumberCustomerHour() * this.avgCookies));
    }
  },
  cookieSum: function () {
    var arraySum = 0;
    for (var i = 0; i < storeHours.length; i++) {
      arraySum = arraySum + this.storeCookiePerHour[i];
    }
    return arraySum;
  }

};
console.log(tokyo);
tokyo.cookiePerHour();

function tokyoRender() {
  var tokSum = tokyo.cookieSum();

  var tokyparEl = document.getElementById('Tokyo Store');
  for (var i = 0; i < storeHours.length; i++) {
    // create element
    var tokliEl = document.createElement('li');
    // Give it content
    tokliEl.textContent = `${storeHours[i]} ${tokyo.storeCookiePerHour[i]} cookies`;
    // append the child to the parent
    tokyparEl.appendChild(tokliEl);
  }
  var tokLiEl = document.createElement('li');
  tokLiEl.textContent = `Total: ${tokSum} cookies`;
  tokyparEl.appendChild(tokLiEl);
}
tokyoRender();

//Dubai Store
var dubai = {
  minCustHours: 11,
  maxCustHours: 38,
  avgCookies: 3.7,
  storeCookiePerHour: [],
  randomNumberCustomerHour: function () {
    return (Math.floor(Math.random() * (this.maxCustHours - this.minCustHours + 1)) + this.minCustHours);//returns a random number between 23 and 65
  },
  cookiePerHour: function () {
    for (var i = 0; i < storeHours.length; i++) {
      this.storeCookiePerHour.push(Math.round(this.randomNumberCustomerHour() * this.avgCookies));
    }
  },
  cookieSum: function () {
    var arraySum = 0;
    for (var i = 0; i < storeHours.length; i++) {
      arraySum = arraySum + this.storeCookiePerHour[i];
    }
    return arraySum;
  }

};
console.log(dubai);
dubai.cookiePerHour();

function dubaiRender() {
  var dubSum = dubai.cookieSum();

  var dubaiparEl = document.getElementById('Dubai Store');
  for (var i = 0; i < storeHours.length; i++) {
    // create element
    var dubliEl = document.createElement('li');
    // Give it content
    dubliEl.textContent = `${storeHours[i]} ${dubai.storeCookiePerHour[i]} cookies`;
    // append the child to the parent
    dubaiparEl.appendChild(dubliEl);
  }
  var dubLiEl = document.createElement('li');
  dubLiEl.textContent = `Total: ${dubSum} cookies`;
  dubaiparEl.appendChild(dubLiEl);
}
dubaiRender();

//Paris Store
var paris = {
  minCustHours: 20,
  maxCustHours: 38,
  avgCookies: 2.3,
  storeCookiePerHour: [],
  randomNumberCustomerHour: function () {
    return (Math.floor(Math.random() * (this.maxCustHours - this.minCustHours + 1)) + this.minCustHours);//returns a random number between 23 and 65
  },
  cookiePerHour: function () {
    for (var i = 0; i < storeHours.length; i++) {
      this.storeCookiePerHour.push(Math.round(this.randomNumberCustomerHour() * this.avgCookies));
    }
  },
  cookieSum: function () {
    var arraySum = 0;
    for (var i = 0; i < storeHours.length; i++) {
      arraySum = arraySum + this.storeCookiePerHour[i];
    }
    return arraySum;
  }

};
console.log(paris);
paris.cookiePerHour();

function parisRender() {
  var parSum = paris.cookieSum();

  var parisparEl = document.getElementById('Paris Store');
  for (var i = 0; i < storeHours.length; i++) {
    // create element
    var parliEl = document.createElement('li');
    // Give it content
    parliEl.textContent = `${storeHours[i]} ${paris.storeCookiePerHour[i]} cookies`;
    // append the child to the parent
    parisparEl.appendChild(parliEl);
  }
  var parLiEl = document.createElement('li');
  parLiEl.textContent = `Total: ${parSum} cookies`;
  parisparEl.appendChild(parLiEl);
}
parisRender();


//Lima Store
var lima = {
  minCustHours: 2,
  maxCustHours: 16,
  avgCookies: 4.6,
  storeCookiePerHour: [],
  randomNumberCustomerHour: function () {
    return (Math.floor(Math.random() * (this.maxCustHours - this.minCustHours + 1)) + this.minCustHours);//returns a random number between 23 and 65
  },
  cookiePerHour: function () {
    for (var i = 0; i < storeHours.length; i++) {
      this.storeCookiePerHour.push(Math.round(this.randomNumberCustomerHour() * this.avgCookies));
    }
  },
  cookieSum: function () {
    var arraySum = 0;
    for (var i = 0; i < storeHours.length; i++) {
      arraySum = arraySum + this.storeCookiePerHour[i];
    }
    return arraySum;
  }

};
console.log(lima);
lima.cookiePerHour();

function limaRender() {
  var limSum = lima.cookieSum();

  var limaparEl = document.getElementById('Lima Store');
  for (var i = 0; i < storeHours.length; i++) {
    // create element
    var limliEl = document.createElement('li');
    // Give it content
    limliEl.textContent = `${storeHours[i]} ${lima.storeCookiePerHour[i]} cookies`;
    // append the child to the parent
    limaparEl.appendChild(limliEl);
  }
  var limLiEl = document.createElement('li');
  limLiEl.textContent = `Total: ${limSum} cookies`;
  limaparEl.appendChild(limLiEl);
}
limaRender();

