// 変数numにn1整数を代入する
let num =Math.floor(Math.random()*100);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数(num)が3と5の倍数の場合
if ( num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です')

// 変数(num)が3の倍数の場合
} else if (num % 3 === 0) {
  console.log('3の倍数です');

// 変数(num)が5の倍数の場合
} else if (num % 5 === 0) {
  console.log('5の倍数です');


//　それ以外のときは、変数(num)を出力する
} else {
  console.log('num');
}