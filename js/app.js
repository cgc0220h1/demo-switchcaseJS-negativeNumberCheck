function anynumberCheck() {
    let number = +prompt("Nhập vào số bất kì");
    if (number > 0 ) {
        alert("1");
    } else if (number < 0) {
        alert("-1");
    } else {
        alert("0");
    }
}