// Total Runs Scored by each player in Complete Series including all matches of T20I and ODI, and excluding all Test and Practice Matches.

let request = require("request");
let fs = require('fs');
let cheerio = require('cheerio');

let count = 0;
let leaderBoard = [];

console.log("Sending Request");

let webpage_link = "https://www.espncricinfo.com/scores/series/19322/india-in-new-zealand-2019-20?view=results";
request(webpage_link, function(err, res, html){
    if(err == null && res.statusCode == 200){
        console.log("File Received");
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

    let cards = $(".match-score-block");
    console.log("Total Matches in Series: " + cards.length);

    console.log();
    console.log("T20I and ODI Matches links: ");
    for(let i=0; i<cards.length; i++){
        let text = $(cards[i]).find(".small.mb-0.match-description").text();
        if(text.includes("T20I") == true || text.includes("ODI") == true){
            count++;
            let link = $(cards[i]).find(".match-cta-container a").attr("href");

            let completeLink = "https://www.espncricinfo.com" + link;

            console.log(completeLink);
        }
    }
    console.log();
    console.log("Number of T20I and ODI Matches in Series: " + count);
}