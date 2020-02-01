// Возведения в степень
/* let num = +prompt('Введите число');
 if (isNaN(num) || num == 0 )
 {console.log(num = 5)};
 let power = +prompt('Введите степень');
 if (isNaN(power) || power == 0 )
 {console.log(power = 1)};
 let answer = 1;

for( let i = 0; i < power; i++){
 answer = num * answer;

}
alert('Ответ = ' +  answer);
 */

// Лестница
/*  let num = +prompt('Введите количество ступеньков');
 if (isNaN(num) || num == 0 )
 {num = 5};
 let indentation = prompt('Введите символ отступов');
while (indentation == 0){
     indentation = prompt('Введите символ отступа занова')
}
let finite = prompt('Введите конечный символ ');
while (finite == 0){
    finite = prompt('Введите конечный символ занова')
}
for(let i = 0; i < num; i++){
    finite = i == 0 ? finite : indentation + finite;
    console.log(finite)
     
}*/
// Возвраст
/* function age (){
  age = Currentyear - yearofbirth;
  return age;
}
let name = prompt('Введите своё имя');
while (!isNaN(name) || name == 0) {
    name = prompt('Введите свое имя заново');
}

let yearofbirth = prompt('Введите  год рождения');
while (isNaN(yearofbirth) || yearofbirth == 0) {
    yourAge = prompt('Введите год рождения заново');
}

let Currentyear = prompt('Введите нынешний год');
if (isNaN(Currentyear) || Currentyear == 0) {
    Currentyear = 2020
};
let Age = age();
alert(name + ', Ваш возраст: ' + Age); */
// Рондомные числа не смог сделать)
/* function random(min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
let num1 = +prompt('Min');
let num2 = +prompt('Max');
for(let i = 0; i < 10; i++){
    let a = random(num1, num2);
    let b = random(num1, num2);
    let pr = +prompt(a + '+'+ b + '=');
    let answer = a + b == pr;
    console.log(a + '+' + b + ' = ' + (a + b)+ 'ваш ответ' + pr + answer);
    
} */



  
