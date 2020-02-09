console.log('06.02.2020');
console.log('07.02.2020');

var budgetController = (function(){
    var x = 23;

    var add = function(a) {
        return x * a;
    }
    return {
        publicTest: function(b) {
            console.log(add(b));
        }
    }
    var UIcontroller = (function(){})();
    var controller = (function(){})();

})();    //IIFE that will return an object

console.log('09.02.2020');