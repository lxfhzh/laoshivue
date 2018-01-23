const http=require('http')
const cheerio=require('cheerio')
const fs=require('fs')
http.get('http://www.baidu.com',(res)=>{
    if(res.statusCode===200){
        let html='';
        res.on('data',(data)=>{
            html+=data;
        })
        res.on('end',()=>{
            /*console.log(html)//输出了所有的html结构*/

            const $=cheerio.load(html)
            const list=$('.title_a');
            let str=''
            for(var i=0;i<list.length;i++){
                const title=list.eq(i).attr('title')
                if(title){
                    str+=(title+'\n')
                }
                // console.log(list.eq(i).attr('title'))
            }
            // console.log(list.length);
            fs.writeFileSync('data.txt',str);
        })
}
})

//node下面没有DOM 和 BOM
/*
//node自动帮你发请求，你反复发请求会使那边的带宽占满，机器就死了
const http=require("http");
for(var i=Things.length-1;i>=0;i--){
    http.get("http://www.baidu.com",(res)=>{
        if(res.statusCode===200){
            let html="";
            res.on("data",(data)=>{
                html+=data;
            })
        res.on("end",()=>{
            console.log(html)
        })
    }
    })
}*/
