let age = 12;      
let height = 135;  

if (age < 8) {
    console.log("Вход запрещен, слишком мал");
} else if (age >= 8 && age <= 18 && height < 140) {
    console.log("Вход только с родителями");
} else if (age > 18 || height > 140) {
    console.log("Добро пожаловать на аттракцион!");
}

let sum = 0;

for (let i = 1; i <= 200; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
        sum += i;
    }
}

console.log("Итоговая сумма = ", sum);


let k = 0;

for (let i = 15; i >= 1; i--) {
    if (i % 2 == 0) {
        console.log(i);           
    } else {
        k = i*2;
        console.log(k);      
    }
}


let capital = 10000;

for (let i = 1; i <= 10; i++) {
    capital = capital + (capital *0.08);
}

console.log("Итоговая сумма через 10 лет = ", capital); 


let ladder = "";
for (let i = 1; i <= 6; i++) {
    ladder += "#";
    console.log(ladder);
}


for (let impulse = 1; impulse <= 50; impulse++) {
    if (impulse % 4 == 0 && impulse % 7 == 0) {
        console.log("BeepBoop");
    } else if (impulse % 4 == 0) {
        console.log("Beep");
    } else if (impulse % 7 == 0) {
        console.log("Boop");
    } else {
        console.log(impulse);
    }
}


let n = 27; 

for (let i = 1; i <= 15; i++) {
    if (n % 2 == 0) {
        n = n / 2;
    } else {
        n = n * 3 + 1;
    }
    console.log("Шаг ", i, " -> n = ", n);
}
