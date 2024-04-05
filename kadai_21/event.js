// HTML要素を取得し、定数に代入
const textElement = document.getElementById("text");
const buttonElement = document.getElementById("btn");

// ボタンがクリックされたときのイベントリスナーを追加
buttonElement.addEventListener("click", function() {
    // 2秒後（2000ミリ秒）に文章を書き換える処理をsetTimeout関数で設定します
    setTimeout(function() {    
        textElement.textContent = "ボタンをクリックしました";//ボタンをクリックし、2秒後に表示するする
    }, 2000);
    
});