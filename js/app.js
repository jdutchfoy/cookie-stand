'use strict';

let myForm = document.getelementbyid('myform');
let tableElem = document.getElementById('sales-table');
let totalElem = document.getElementsByClassName('totals');

function ramdomCust(min, max){

}

Function Store(a,b,c,d){
  this.name =a;
  this.minCust = b;
  this.maxCust = c;
  this.avgCookie = d;
  this.cookiesBrought = [];
}
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo   = new Store('Tokyo', 3, 24, 1.2);
let dubai   = new Store('Dubai', 11, 38, 3.7);
let paris   = new Store('Paris', 20, 38, 2.3);
let lima    = new Store('Lima', 2, 16, 4.6);
allStores.push(seattle, tokyo, dubai, paris, lima);
renderAll();