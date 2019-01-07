
       let money;
       let time;
       let exp,exp2;

        money =  +prompt("Your monthly budget?");
        time  =  prompt("Input date in YYYY-MM-DD format");
        
     

       let appData = {
           budget:money,
           expenses: {},
           optionalExpenses:{},
           income:[],
           timeData:time,
           savings:null
       };


for(let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце",""),
        b = prompt("Во сколько обойдется?", "");

        if(typeof(a)=== 'string' && typeof(a) != null && typeof(b) != null
         && a != '' && b != '' && a.length < 50){
             console.log("done");
             appData.expenses[a] = b;
        } else {

        }
}

 appData.moneyPerDay = appData.budget / 30;
 alert("Ежедневный бюджет: "+ appData.moneyPerDay);
 //вывод уровня достатка человека

 if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
 } else if(appData.moneyPerDay > 100 && appData.moneyPerDay<2000) {
    console.log("Средний уровень достатка");
  
}   else if(appData.moneyPerDay > 2000) {

    console.log("Высокий уровень достатка");
} else{
    console.log("Произошла ошибка");
}
