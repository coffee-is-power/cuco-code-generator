import {load} from "cheerio";
import readline from "readline"
const config = {
    "serial": "21SF4000040H01058985",
    "certified_time": "17F634AF"
};
const pageHtml = await (await fetch("https://cuco.inforlandia.pt/ucode/")).text();
const $ = load(pageHtml);
let antibot = eval($("label[for=b]").text().replace("?", "").split(" ")[2]);
let {serial: s, certified_time: c} = config;
// Get usage counter from cmd line args
const usage = parseInt(process.argv[2], 16).toString(16).toUpperCase();
const csrf = $("input[name=tok]").val();
// Send request to the server using fetch
const response = await fetch("https://cuco.inforlandia.pt/ucode/", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
        s,
        c,
        b: antibot,
        u: usage,
        tok: csrf
    })
});
const responseText = await response.text();
// Use cheerio to parse the response
const $2 = load(responseText);
// Get the code from the response
const code = $2("h3").text().split(" ")[6];
console.log("GENERATED CODE:", code);