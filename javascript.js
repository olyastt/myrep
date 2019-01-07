
       let money;
       let time;
       let exp,exp2;

      // money = prompt("Your monthly budget?");
      //  time  =  prompt("Input date in YYYY-MM-DD format");
        exp   =   prompt("Input items of expenditure of this month");
        exp2  =  prompt("How much");

     

       let appData = {
           budget:money,
           timeData:time,
           expenses: {q1:exp,q2:exp2},
           optionalExpenses:null,
           income:[],
           savings:null
       };

//console.log(appData.budget);
console.log(appData.expenses.q1);
console.log(appData.expenses.q2);
       
