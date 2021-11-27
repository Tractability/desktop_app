const puppeteer = require('puppeteer');

let browser;

class Scrapper{
    constructor(link){
        this.link = link;
        this.visited = new Set();
        // this.visited = {};
        this.urls = [];
        this.init();
        // this.browser = null;
    }
    
    async init(){
        const URL = this.link
        browser = await puppeteer.launch({
            headless: false,
            'ignoreHTTPSErrors': true
        })
        await this.workerFuntion(this.link);
    }

    async workerFuntion(url){
        try {
            const page = await browser.newPage()
    
            await page.goto(url)
            await page.waitForSelector('a');

            this.urls = await page.$$eval('a', links => {
                links = links.map(el => {
                    // this.workerFuntion(el.href);
                    return el.href;
                })
                return links;
            });
    
            // this.allLinks = new Set(...urls);
            console.log(this.urls);
        } catch (error) {
            console.error(error)
        }
    }

    dfs(url){
        if(this.visited.has(url)){
            return;
        }
        
        for(let i = 0; i < this.urls.length; i++){
            
        }
    }

    async destructor(){
        await browser.close();
    }

    // hello() {
    //     this.visited.add(this.link);
        
    //     while(this.visited.size != 0){

    //     }
    // }
}

let scrape = new Scrapper('https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer');
// scrape.workerFuntion();