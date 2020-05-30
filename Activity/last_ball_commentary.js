// Last Ball Commentary

let request = require('request');
let fs = require('fs');
let cheerio = require('cheerio');

console.log('Sending Request');

let webpage_link = "https://www.espncricinfo.com/series/19322/commentary/1187677/new-zealand-vs-india-1st-t20i-india-in-new-zealand-2019-20";
request(webpage_link, function(err, res, html){
    if(err == null && res.statusCode == 200){
        parseHtml(html);
    }
    else if(res.statusCode == 404){
        console.log("Invalid URL");
    }
    else{
        console.log(err);
        console.log(res.statusCode);
    }
});

function parseHtml(html){
    console.log("Parsing Html");
    let $ = cheerio.load(html);
    let data = $("#main-container  div  div  div.match-body  div.comment-container  div.mb-5  div  div:nth-child(1)  div.match-comment  div:nth-child(2) div");
    console.log("***********************************");
    for(let i=0; i<data.length; i++){
        console.log($(data[i]).text());
    }
}