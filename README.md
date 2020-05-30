# Scraping-the-Web-for-Cricket-Info-using-NodeJS
Scraping a cricket website for some quick results and statistics just for testing purpose.

NOTE: THIS WORK IS DONE FOR JUST TESTING PURPOSES IN ORDER TO EXPERIMENT THE TOOLS AND TECHNIQUES USED IN NODEJS FOR WEB SCRAPING. THERE IS NO BUSINESS GOING ON WITH THIS WORK. THE WEBSITE USED FOR THIS TESTING WORK IS ESPNCRICINFO (https://www.espncricinfo.com/) AND I GIVE THE CREDIT TO THEM FOR THEIR HTML DATA.

1. Last Ball Commentary: 

https://www.espncricinfo.com/series/19322/commentary/1187677/new-zealand-vs-india-1st-t20i-india-in-new-zealand-2019-20

Actual webpage screenshot(s):
![Screenshot from 2020-05-30 03-30-52](https://user-images.githubusercontent.com/22445094/83327673-41746880-a29b-11ea-9d4f-b0fc7e324f9f.png)

Scraped and Extracted Data in Terminal:
![Screenshot from 2020-05-30 03-28-50](https://user-images.githubusercontent.com/22445094/83327694-7680bb00-a29b-11ea-834f-ac796d5f27c7.png)

![Screenshot from 2020-05-30 03-29-07](https://user-images.githubusercontent.com/22445094/83327695-7bde0580-a29b-11ea-9a2b-1ad6984a14a6.png)

2. Highest Wicket Taker: 

https://www.espncricinfo.com/series/19322/scorecard/1187677/new-zealand-vs-india-1st-t20i-india-in-new-zealand-2019-20

Actual webpage screenshot(s):
![Screenshot from 2020-05-30 17-39-19](https://user-images.githubusercontent.com/22445094/83327843-9664ae80-a29c-11ea-871b-e62c7cb864e2.png)

![Screenshot from 2020-05-30 17-39-23](https://user-images.githubusercontent.com/22445094/83327847-9e245300-a29c-11ea-967e-402d58a2035e.png)

Scraped and Extracted Data in Terminal:
![Screenshot from 2020-05-30 13-27-15](https://user-images.githubusercontent.com/22445094/83327853-a8dee800-a29c-11ea-8441-37cbe9138d51.png)

3. Total Runs Scored by each player in Complete Series including all matches of T20I and ODI, and excluding all Test and Practice Matches:

https://www.espncricinfo.com/series/19322/scorecard/1187677/new-zealand-vs-india-1st-t20i-india-in-new-zealand-2019-20

One of the Sample Match Webpage Screenshot(s):
![Screenshot from 2020-05-30 17-43-37](https://user-images.githubusercontent.com/22445094/83327918-34f10f80-a29d-11ea-89cc-7ae94e9aa8de.png)

![Screenshot from 2020-05-30 17-43-43](https://user-images.githubusercontent.com/22445094/83327929-3c181d80-a29d-11ea-9079-db0ae7bae6a9.png)

Extracted Data (PlayerName, TeamName, Format, Runs) Sample:
![Screenshot from 2020-05-30 15-33-05](https://user-images.githubusercontent.com/22445094/83327978-8c8f7b00-a29d-11ea-822f-d7c37e0a0e09.png)

Complete table formed from all ODIs and T20Is matches batsman data:
![Screenshot from 2020-05-30 17-15-34](https://user-images.githubusercontent.com/22445094/83327986-9a450080-a29d-11ea-8e3d-85ee3f80e839.png)

![Screenshot from 2020-05-30 17-15-55](https://user-images.githubusercontent.com/22445094/83327989-a03ae180-a29d-11ea-8f02-39fe39bd1a47.png)

![Screenshot from 2020-05-30 17-16-22](https://user-images.githubusercontent.com/22445094/83327990-a466ff00-a29d-11ea-9e2e-36c1ebb5584f.png)

![Screenshot from 2020-05-30 17-16-32](https://user-images.githubusercontent.com/22445094/83327994-aa5ce000-a29d-11ea-8d20-d87aca574f33.png)

Filtered and Sorted Data(Decreasing order based on Runs):
![Screenshot from 2020-05-30 17-17-11](https://user-images.githubusercontent.com/22445094/83327999-b183ee00-a29d-11ea-9b7e-3523c308e634.png)

![Screenshot from 2020-05-30 17-17-27](https://user-images.githubusercontent.com/22445094/83328002-b648a200-a29d-11ea-87e7-d165ac24d930.png)
