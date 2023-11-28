let random = Math.floor(Math.random()* 10);
console.log(random);

for (let i = 1; i <= random; i++){
    console.log(`\x1b[3${i}m%s\x1b[0m`, "Chữ màu");
}
