import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";

function cacheGet(name){
    if(fs.existsSync(`../cache/${name}.html`)){
    return fs.readFileSync(`../cache/${name}.html`);
    }
    return false;
}

function cacheSet(name, value){
    if(!fs.existsSync(`../cache`)){
        fs.mkdirSync(`../cache`);
    }
    fs.writeFileSync(`../cache/${name}.html`, value);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let baseURL = 'https://wumo.com/';
let url = baseURL + '';
for(let i = 0; i<10;i++){
let name = url.replaceAll('/', '').replaceAll(':', '');
    let data = cacheGet(name);
    if(!data){
        console.log('LIVEEE REQUESTT!!')
        await sleep(1);
        let res = await axios.get(url);
        data = res.data;
        cacheSet(name, data);
    };
        data = res.data;
        cacheSet(name, data);

    //console.log(res.data);
    const $ = cheerio.load(res.data);
    let src = $('article.wumo img').attr('src');
    let alt = $('article.wumo img').attr('alt');
    console.log(src);
    console.log("The alt:" + alt);
    url = baseURL + $(`article.wumo a.prev`).attr('href');
    console.log(url);
}