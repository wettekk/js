/*Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.  */

let arr = ["https://www.wikipedia.org", "http://www.flashscore.com.ua", "https://5element.by", "http://www.twitch.tv"];

let filteredArr = arr.filter(function(str){
    return str.startsWith("http://");
});

console.log(filteredArr)