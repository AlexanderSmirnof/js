function number() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 6];
    let chet = 0;
    let nechet = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            chet ++;  
        } else {
            nechet ++
        }
    }
    console.log(chet)
    console.log(nechet)
}
number()

