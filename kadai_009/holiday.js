
// 配列の宣言と値の代入を行う
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

// 配列の値を出力する (確認用)
console.log(holidays);

// インデックス番号を0とする
let i = 0; 


//　変数holidaysの値が変数holidaysの値を下回れば出力し続ける
while (i < holidays.length ) { //i がholidaysの要素数よりも小さい間ループする
  console.log(holidays[i]);
  i++ //　iを1つ増やす１つ次の値にいくい
}


//　変数holidaysの値を順番に出力する
for (let i = 0; i < 15; i++) {
  console.log(holidays[i]);
}
