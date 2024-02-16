// HTMLの取得
// documentはHTMLの設計図にアクセスするためのオブジェクト
// querySelectorはdocumentにすでに用意されているメソットでHTML要素を取得する（引数はclass名,id名）

// const div = document.querySelector(".div");
// console.log(div);


//querySelectorは条件に合う複数の要素を発見した場合、最初の一つのみを取得

// const li = document.querySelector(".item");
// console.log(li);


//classは同じ名前を複数OK  idは同じ名前は一個まで
//idを使うと特定の要素のみを探すことができる

// const li = document.querySelector("#itemOne");
// console.log(li);


//querySelectorAllは複数取得することができる。しかし配列になって出力される。
// const li = document.querySelectorAll(".item");
//配列の要素の数を取得する
// const liLength = li.length;
// for(let i = 0; i < liLength; i++){
    //同じセレクタ名のHTMLはインデックス番号を使うと区別できる
    // console.log(li[i]);
// }


//querySelectorは子供の要素まで取得することができる
// const ul = document.querySelector(".items");
// console.log(ul);


//子供を持つ要素にはchildrenをつけると、子供のみを取得できる
// const ul = document.querySelector(".items").children;
// console.log(ul);


// //HTMLの新規作成
// //1.タグを作る
// const div = document.createElement("div");
// //2.文字を作る
// div.innerHTML = "テスト"
// //3.画面に出力する(bodyタグの子供の要素にする)
// document.body.appendChild(div);
// console.log(div);

//HTMLのコピー
//1.コピー元を取得し、cloneNodeで複製する
// const copy = document.querySelector(".item").cloneNode
// (true);
// //2.コピーしたものを画面に出力(コピーを置く親要素を取得しておく)
// //appendChildで子供の要素として出力する
// document.querySelector(".container").appendChild(copy);
// console.log(copy);


//HTMLの削除
//1.削除する要素を持つ親要素
// const items = document.querySelector(".items");
// //2.削除する対象を取得する
// const item = document.querySelector(".item");
// //3.削除する
// items.removeChild(item);

// const items = document.querySelector(".items");
// const itemAll = document.querySelectorAll(".item");
// const itemLength = itemAll.length;
// for(let i = 0; i < itemLength; i++){
//     items.removeChild(itemAll[i])
// }


//モーダルのHTMLを新規作成
//<div class="modal"></div>
const modal = document.createElement("div");
modal.classList.add("modal");
//<div class="inner"></div>
const inner = document.createElement("div");
inner.classList.add("inner");
//modalの中にinnerを入れる(画面の出力にもなる)
modal.appendChild(inner);

//ボタンのクリックで出力するようにする
//クリックするボタンのHTMLを取得する
const btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
    //modalをbodyタグの子供として作成する
    document.body.appendChild(modal);
});

//モーダルをクリックしたらmodalの削除
inner.addEventListener("click", () => {
    document.body.removeChild(modal);
});