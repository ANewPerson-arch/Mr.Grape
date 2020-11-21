const querystring = require('querystring');
const r2 = require('r2');
const Discord = require('discord.js');
const config = require('../config.json');
const Keyv = require('keyv');
const users = new Keyv(process.env.DATABASE_URL, { namespace: 'users' });
const items = new Keyv(process.env.DATABASE_URL, { namespace: 'items' });
const addMoni = async function (who, add) {
    let current = await users.get(who);
    if (current === undefined) { await users.set(who, add); }
    else { await users.set(who, (current + add)) }
}
const itemShop = {
    fan: 100,
    orangedetector: 100,
    mangodetector: 50,
    carrotdetector: 50,
    starmagnet: 100,
    shovel: 100,
    starmill: 400,
    tieronepick: 500,
    tiertwopick: 650,
    tierthreepick: 750
}
const ores = {
    tier1: ['copper', 'tin', 'iron', 'lead', 'silver', 'bronze'],
    tier2: ['gold', 'platinum', 'titanium', 'obsidian', 'cobalt', 'goshine', 'fasalt', 'maclantite'],
    tier3: ['magmanite', 'rainbonite', 'starium', 'lumionite', 'hellinite', 'grapium', 'heaveninite', 'erdon', 'shakerium', 'kelite', 'limeinite']
}
const oreSell = {
    tier1: 9,
    tier2: 19,
    tier3: 25,
}
const emoji = {
    silver: "<:silver:776578867988267059>",
    titanium: "<:titanium:776587848924135434>",
    tin: "<:tin:776581611193368579>",
    starium: "<a:starium:776601907254788107>",
    shakerium: "<a:shakerium:776875604967948293>",
    rainbonite: "<a:rainbonite:776596286887165962>",
    platinum: "<:platinum:776586722560966666>",
    obsidian: "<:obsidian:776589898039296021>",
    hellinite: "<:hellinite:776619917193117728>",
    maclantite: "<:maclantite:776598697022324769>",
    lumionite: "<a:lumanite:776604908701876267>",
    lead: "<:lead:776579886637776908>",
    iron: "<:iron:776582852065230858>",
    magmanite: "<a:magamanite:776607429034770494>",
    heaveninite: "<:heaveninite:778736725794619393>",
    grapium: "<a:grapium:776612094929010688>",
    goshine: "<:goshine:776592415209029643>",
    gold: "<:gold:776585426689327105>",
    fasalt: "<:fasalt:776598681218056203>",
    erdon: "<a:Erdon:776623794622038066>",
    copper: "<:copper:776577290506600489>",
    cobalt: "<:cobalt:776590825412624414>",
    bronze: "<:bronze:776581702318424134>",
    kelite: "\:question:",
    limeinite: "\:question:"
}
module.exports = {
    "Discord": Discord,
    "config": config,
    "users": users,
    "addMoni": addMoni,
    "items": items,
    "itemShop": itemShop,
    "querystring": querystring,
    "r2": r2,
    "ores": ores,
    "oreSell": oreSell,
    "emoji": emoji
};