let request = require("request");
let fs = require("fs");
let cheerio = require('cheerio');

console.log("Sending Request");

let webpage_link = "https://www.espncricinfo.com/series/19322/scorecard/1187677/new-zealand-vs-india-1st-t20i-india-in-new-zealand-2019-20";

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

    let bowlingTables = $(".card.content-block.match-scorecard-table .Collapsible__contentInner");

    console.log("******************************************");

    let players = bowlingTables.find("table.bowler tbody tr");

    //Highest Wicket Taker
    let maxm = Number.MIN_SAFE_INTEGER;
    let hwt = "";
    console.log("Name \t\t\t\t\t-\t\t\t Wickets");
    for(let i=0; i<players.length; i++){
        let name = $($(players[i]).find("td")[0]).text();
        let wickets = $($(players[i]).find("td")[4]).text();

        if(wickets > maxm){
            hwt = name;
            maxm = wickets;
        }
        if(name.length <= 6)
            console.log(name + " \t\t\t\t\t-\t\t\t " + wickets);
        else
            console.log(name + " \t\t\t\t-\t\t\t " + wickets);

    }

    console.log("##########################");
    console.log("Highest Wicket Taker: ");
    console.log(hwt + " \t\t\t\t-\t\t\t " + maxm);
}