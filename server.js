// const steamApiAddress = "https://api.steampowered.com/";
// // TO DO:API Key from Valve itself to access backend data?
// // const steamApiKey = "";
// const playerCount = "/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=381210";
// // returns the number of players currently playing the game
// const playerCountUrl = steamApiAddress + playerCount;
// // returns player stats from game
// const userStatsUrl = "/ISteamUserStats/GetUserStatsForGame/v0002/?appid=381210&key=${auth.STEAMAPIKEY}&steamid=`";

//   // DbD Backend
//   const dbdApiAddress = "steam.live.bhvrdbd.com";
//   const dbdApiLogin = "/api/v1/auth/login/guest";
//   const dbdApiVersion = "/api/v1/utils/contentVersion/version";
//   const dbdApiConfig = "/api/v1/config";
//   const dbdApiShrine = "/api/v1/extensions/shrine/getAvailable";
//   const dbdApiOutfits = "/api/v1/extensions/store/getOutfits";
//   // Dbd Backend CDN
// //   const cdnAddress = "cdn.live.dbd.bhvronline.com";
// //   const cndArchive = "/gameinfo/archiveStories/v1/Tome04.json";
//   // Dbd Wiki
//   const wikiAddress = "deadbydaylight.fandom.com";
//   const shrine = "/Shrine_of_Secrets";
//   const perks = "/Perks";


const express = require("express");
const exphbs = require("express-handlebars");
const path = require('path')

const routes = require("./controllers");
const sequelize = require("./config/connection");


const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening.."));
});