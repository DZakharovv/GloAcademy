'use strict';

/*

    Задания по уроку №3

*/
// Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
let money = prompt('Ваш месячный доход?', '90000');
console.log('type money: ', typeof money);

// Статья доп дохода
let income = 'фриланс';
console.log('type income: ', typeof income);

// Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” 
//сохранить в переменную addExpenses
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
    'интернет, такси, коммуналка');

// Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit
//(булево значение true/false)
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('type deposit: ', typeof deposit);

let mission = 10000000; // число (Какую сумму хотите накопить)
console.log('addExpenses: ', addExpenses.length);
let period = 12; // число от 1 до 12 (месяцев)
console.log(`Период равен ${period} месяцев.
    Цель заработать ${mission} рублей/долларов/гривен/юани`);
console.log(addExpenses.toLocaleLowerCase().split(', '));

/* Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
    “Введите обязательную статью расходов?” (например expenses1, expenses2)
    “Во сколько это обойдется?” (например amount1, amount2)
в итоге 4 вопроса и 4 разные переменных */
let expenses1 = prompt('Введите обязательную статью расходов?', 'продукты');
let amount1 = prompt('Во сколько это обойдется?', '20000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'бензин, транспорт');
let amount2 = prompt('Во сколько это обойдется?', '1500');

// Вычислить бюджет на месяц, учитывая обязательные расходы, сохранить в новую переменную
//budgetMonth и вывести результат в консоль
let budgetMonth = money - (amount1 + amount2);
console.log('Бюджет на месяц: ', budgetMonth);

// Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission,
//вывести в консоль, округляя в большую сторону (методы объекта Math в помощь)
console.log(`Цель будет достигнута за: ${Math.ceil(mission / budgetMonth)} месяцев`);

// Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль,
//округлив в меньшую сторону
let budgetDay = budgetMonth / 30;
console.log('Бюджет на день: ',  Math.floor(budgetDay));
/*
Написать конструкцию условий (расчеты приведены в рублях)	
    Если budgetDay больше 1200, то “У вас высокий уровень дохода”
    Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
    Если budgetDay меньше 600 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
    Если отрицательное значение то вывести “Что то пошло не так”
    Учесть варианты 0, 600 и 1200
*/
if (budgetDay === 1200) { // Вариант с if
    console.log('У вас почти получилось попасть в группу с высокий уровень дохода! Постарайтесь лучше!');
} else if (budgetDay === 600) {
    console.log('У вас почти средний уровень дохода, но немного не хватает...');
} else if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay < 1200 && budgetDay > 600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');
} else {
    console.log('К сожалению у вас уровень дохода ниже среднего');
}
// вариант 2 
console.log((budgetDay < 0) ? 'Что то пошло не так' : 
    (budgetDay < 600) ? 'Что то пошло не так' : 
    (budgetDay === 600) ? 'У вас почти средний уровень дохода, но немного не хватает...' : 
    (budgetDay < 1200) ? 'У вас средний уровень дохода' : 
    (budgetDay === 1200) ? 'У вас почти получилось попасть в группу с высокий уровень дохода! Постарайтесь лучше!' : 
    'У вас высокий уровень дохода');
