    // 1.
let num = 46824;
let num_1 = num % 10;
alert(num_1);

    // 2.
if(num_1<0){
    alert("Yes");
}else{
    alert("NO");
}

    //3.
let temp_c = 28;
let temp_f = temp_c * 1.8 +32;
alert(temp_f);

// 4.

let a = 32;
let b = 16;
if( a % b == 0 || b % a ==0){
    alert("1");
}else{
    alert("0");
}
// 5.
let num_a = 7;
let num_b = 15;
let num_c = 24;
if(num_a >= num_b && num_a >= num_c){
    alert(num_a);
}else if(num_b >= num_a && num_b >= num_c){
        alert(num_b);
    }else{
        alert(num_c);
    }
