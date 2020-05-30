// Total Runs Scored by each player in Complete Series including all matches of T20I and ODI, and excluding all Test and Practice Matches.

let request = require("request");
let fs = require('fs');
let cheerio = require('cheerio');

let count = 0;

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

            processRequest(completeLink);
        }
    }
    console.log();
    console.log("Number of T20I and ODI Matches in Series: " + count);
}

function processRequest(completeLink){
    request(completeLink, function(err, res, html){
        if(err == null && res.statusCode == 200){
            handleMatch(html);
            count--;
        }
        else if(res.statusCode == 404){
            console.log("Invalid URL. Page not found.");
        }
        else{
            console.log(err);
            console.log(res.statusCode);
        }
    });
}

function handleMatch(html){
    // Properties to extract from each Match => PlayerName, TeamName, MatchFormat, PlayerRuns
    let $ = cheerio.load(html);
    let text = $(".desc.text-truncate").text();
    console.log("***********************************************");
    console.log(text);

    //zarori nahin hai ki harr baar sab same hi order me aayein - Reason is Async Programming
    let format = text.includes("T20I") == true ? "T20I" : "ODI";
    console.log("Format: " + format);
    console.log();

    let innings = $(".card.content-block.match-scorecard-table .Collapsible");

    for(let i=0; i<innings.length; i++){
        let teamName = $(innings[i]).find("h5").text().split(" Innings")[0];

        console.log();
        if(teamName.length <= 5)
            console.log(teamName + "\t\t\t" + format);
        else
            console.log(teamName + "\t\t" + format);

        console.log();
        let battingTable = $(innings[i]).find("table.batsman");
        let players = battingTable.find("tbody tr");

        for(let i=0; i<players.length; i++){
            let name = $(players[i]).find(".batsman-cell.text-truncate").text();
            let runs = $(players[i]).find(".font-weight-bold").text();

            if(name.length != 0){
                if(name.length <= 6){
                    console.log(name + "\t\t\t\t\t\t\t\t" + teamName + "\t\t" + format);
                }
                if(name.length>=14){
                    console.log(name + "\t\t\t" + teamName + "\t\t" + format);
                }
                else{
                    console.log(name + "\t\t\t\t" + teamName + "\t\t" + format);
                }
            }
        }
        console.log("###########################");
    }

}
