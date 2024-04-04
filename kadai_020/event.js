// HTML要素を取得し、定数に代入
const textElement = document.getElementById("text");
const buttonElement = document.getElementById("btn");

// ボタンがクリックされたときのイベントリスナーを追加
buttonElement.addEventListener("click", function() {
    // ボタンがクリックされたときに実行されるイベント処理を記述します
    textElement.textContent = "ボタンをクリックしました";
});

