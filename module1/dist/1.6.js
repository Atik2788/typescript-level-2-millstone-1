"use strict";
function add(num, num2) {
    return num + num2;
}
add(2, 2);
const poorUser = {
    name: "Atik",
    balance: 0,
    addBalance(balance) {
        return `My new balance is: ${this.balance + balance}`;
    }
};
const poorUser2 = {
    name: "Atik",
    balance: 0,
    addBalance(balance) {
        return `My new balance is: ${this.balance + balance}`;
    }
};
const arr = [1, 4, 10];
const newArray = arr.map((el) => el * el);
