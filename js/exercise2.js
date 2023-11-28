let N = parseInt(prompt("Mời bạn nhập N:"));

if (N < 2 || N > 100) {
    console.log("Mời bạn nhập lại !");
} else  {
    for (let i = 2 ; i <= N; i++) {
    let square = Math.pow(i, 2);
    if (N % 2 === 0)
    console.log(square);
    }

}