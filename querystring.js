/*const querystring=require("querystring");
console.log(querystring.stringify({name:"dell",age:"28"}));
//name=dell&age=28*/

/*const querystring=require("querystring");
console.log(querystring.stringify({name:"dell",age:"28"},'|','-'));
//name-dell|age-28*/


const querystring=require("querystring");
console.log(querystring.parse(querystring.stringify({name:"dell",age:"28"})));
//{name:'dell',age:'28'}

//querystring.escape() 将= & 符进行转义
console.log(querystring.escape("name=dell&age=28"))
//name%3Ddell%26age%3D28

console.log(querystring.unescape(querystring.escape("name=dell&age=28")))
//name=dell&age=28

//querystring.escape() 与querystring.unescape()为后端的node环境下的转义
//对应于前端，在js和浏览器中也有类似的转义，在浏览器的控制台中输入
//encodeURIComponent("a=1&b=2")  //"a%3D1%26b%3D2"

