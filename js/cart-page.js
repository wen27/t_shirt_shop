var aAdd = document.querySelectorAll(".button .add"); //獲取加
var aReduce = document.querySelectorAll(".button .reduce"); //獲取減
var length = aReduce.length; //得到列表的長度
var aSpan = document.querySelectorAll(".button span");
var number = []; //定義一組數字 把我們的對應商品的長度數量存儲在數組裡面

for (var i = 0; i < length; i++) {
    number[i] = 0;

    //給加添加點擊事件
    aAdd[i].index = i; //自定義屬性索引值
    aAdd[i].onclick = function() {
        number[this.index]++;
        change(this.index);
    };
    //給加添加點擊事件

    aReduce[i].index = i;
    aReduce[i].onclick = function() {
        if (number[this.index] === 0) {
            number[this.index] = 0;
        } else {
            number[this.index]--;
        }
        change(this.index);
    }
}

var aPrice = document.querySelectorAll(".price"); //獲取單價
var aCount = document.querySelectorAll(".count"); //獲取小計

var oSelect = document.querySelector(".select"); //獲取選中商品數量
var oTotal = document.querySelector(".total"); //獲取總價

function change(This) {
    //改變數量
    aSpan[This].innerHTML = number[This];
    //改變小計
    aCount[This].innerHTML = number[This] * parseFloat(aPrice[This].innerHTML);

    //改變商品數量
    var sums = 0;
    var sumt = 0;
    for (var i = 0; i < length; i++) {
        sums += number[i];
        sumt += parseFloat(aCount[i].innerHTML);
    }
    oSelect.innerHTML = sums;
    oTotal.innerHTML = sumt;
}