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
    //UI controller
    var UIcontroller = (function(){})();

    //GLOBAL APP CONTROLLER
    var controller = (function(budgetCtrl, UICtrl){

        var ctrlAddItem = function(){
            //1. Get the field input data

            //2. Add the item to the budget controller

            //3. Add the item to the UI

            //4. Calculate the budget

            //5.Display the budget on the UI 
            console.log('it works')
        }

        document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);
    })();
    document.addEventListener('keypress',function(event){

        if(event.keyCode === 13 || event.which === 13) { //we put || bc of older browsers
           //1. Get the field input data

            //2. Add the item to the budget controller

            //3. Add the item to the UI

            //4. Calculate the budget

            //5.Display the budget on the UI 
        }

    });
})();    //IIFE that will return an object

console.log('09.02.2020');
console.log('10.02.2020');
console.log('13.02.2020');
console.log('24.02.2020');