//Toán tử ++ và -- : Về bản chất thì 2 toán tử này dc sử dụng để tăng hoặc giảm giá trị cho trc,tuy nhiên cách sử dụng của chúng lại khác nhau

// let number = 10 ;
// Tiền tố :
// Bước 1: Thực hiện việc + hoặc trù giá trị của biến number
// Bước 2: Trả về kq vừa thực hiện của biến number


// Hậu tố :
// B1: Tạo ra 1 biến coppy từ giá trị trc đó : numberCopy = 10
// B2: Thực hiện tính toán cho biến number: number = number + 1 => number = 11
// B3: Trả kq từ biến coppy
// let output = ++number ;
// console.log("output", output);

// Vòng lặp for 
// Cú pháp: for(giá trị khởi tạo ; điều kiện chạy/dừng ; tăng/giảm) {}
// for (initialValue; condition; increase/decrease){}


//in ra dãy số từ 1 >10


//Vòng lặp for dc sử dụng trong trường hợp chúng ta biết trc số lần lặp
// for ( let i = 1 ; i <= 1000;  i++)
//   if (i % 2 === 0){
//     console.log(i , "Là số chẵn");
//  } else {
//     console.log(i , "Là số lẻ");
//  }

 // Giảm dãy số từ 10 về 1 
//  for (let i = 10 ; i >= 1 ; i--)
//  console.log(i);

 // vòng lặp while
 // Cú pháp :
//   while (condition){
//     increase/decrease;
//     logic
//   }
// sử dụng khi k xác định trc dc số lần lặp

// let i = 1;
// while (i < 10){
//     console.log(i);
//     i++;
// }

//Lấy lựa chọn từ phía client
//Nếu như chọn 1 thì in ra "Nhập sản phẩm"
//2 = "In ra sản phẩm"
//3 = "Xuất hoá đơn"
//giá trị khác = "Nhập sai lựa chọn"
// let choose = 0;
// while (choose !== 4){
// choose = +prompt("Nhập lựa chọn");
// switch (choose) {
//     case 1: 
//     alert("Nhập sản phẩm")
//         break;
//     case 2: 
//     alert("In ra sản phẩm")
//         break;
//     case 3: 
//     alert("Xuất hoá đơn")
//         break;
//     case 4: 
//     alert("Thoát")
//         break;
//     default: 
//     alert("Nhập sai lựa chọn")
//         break;
// }
// }


//chạy ít nhất 1 lần vào trong do sau đấy ms ktra điều kiện
// let condition = 0;
// do {
//     condition = +prompt("Nhập vào giá trị");
//     switch (condition) {
//         case 1:
//             alert("Nhập sản phẩm")
//             break;
//         case 2:
//             alert("In sản phẩm")
//             break;
//         case 3:
//             alert("Xuất hoá đơn")
//             break;
//         case 4:
//             alert("Thoát")
//             break;
//         default: 
//             alert("Nhập lại")
//             break;
//     }
    
// } while (condition !== 4);


// for (let i = 1; i <= 9; i++) {
//    for(let j = 1; j < 10; j++){
//     console.log(i + "x" + j + "=" + i*j);
//    }
// }

//Cú pháp : Template String
let age = 21;
let myName = "LVT";
console.log(`Tôi tên là ${myName}, tôi ${age} tuổi` );