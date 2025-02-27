/*customerName: Declare a variable in global scope called customerName using the var 
keyword and assign it the value 'bob'.
(): Write a function that accesses that global customerName 
variable, and uppercases it.
setBestCustomer(): Write a function that when called, declares a variable called 
bestCustomer in global scope and assigns it to be 'not bob'. (Poor Bob.) 
Also, poor us, declaring a global variable from inside a function is one 
of those things we would never want to do normally, but is good for us to explore right now.
overwriteBestCustomer(): See the consequences of declaring a variable in 
global scope, by writing a new function called overwriteBestCustomer() 
that changes that bestCustomer variable to 'maybe bob'.
leastFavoriteCustomer and changeLeastFavoriteCustomer(): Now declare a 
constant (using the const keyword) in global scope called leastFavoriteCustomer; 
be sure to assign it some initial value. Finally, write a function called 
changeLeastFavoriteCustomer() that attempts to change that constant - 
notice what JavaScript does when you try to change the constant.
*/


var customerName = 'bob';
const leastFavoriteCustomer = 'Kate';
function upperCaseCustomerName() {
  return customerName.toUpperCase();
};
function setBestCustomer() {
   var bestCustomer = 'not bob';
    return bestCustomer;
}
function overwriteBestCustomer(){
    var bestCustomer ='maybe bob';
    return bestCustomer;
}
function changeLeastFavoriteCustomer(){
        leastFavoriteCustomer = 'Pete';
    return leastFavoriteCustomer;
}