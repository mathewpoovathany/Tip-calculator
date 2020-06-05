//define your selectors
var totalEl = document.querySelector("#total");
var tipEl = document.querySelector("#tip-percentage");
var click = document.querySelector("#submit");
var tip_Amount = document.querySelector("#tip-amount");
var new_Total = document.querySelector("#new-total");
// you'll probably need to select  total, submit, and split

//Possible function use when called
//i.e calculateTotal(total, tipAmount) it would return total that can be store in a var


//event Listener
click.addEventListener("click", function(){

  var total = parseInt(totalEl.value);
  var tipper = tipEl.value / 100;

  var tipAmount = total * tipper;
  var newtotal = total + tipAmount;
 
 
  /// printing the O/p
 
  tip_Amount.textContent =tipAmount;
  new_Total.textContent =newtotal;

})