const puppeteer = require('puppeteer');

let browser;

class Scrapper{
    constructor(link){
        this.link = link;
        this.visited = new Set();
        // this.visited = {};
        this.urls = [];
        const URL = this.link
        browser = await puppeteer.launch({
            headless: false,
            'ignoreHTTPSErrors': true
        })
    }

    async workerFuntion(){
        try {
            const page = await browser.newPage()
    
            await page.goto(URL)
            await page.waitForSelector('a');

            this.urls = await page.$$eval('a', links => {
                links = links.map(el => el.href)
                return links;
            });
    
            // this.allLinks = new Set(...urls);
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

    destructor(){
        await browser.close();
    }

    // hello() {
    //     this.visited.add(this.link);
        
    //     while(this.visited.size != 0){

    //     }
    // }
}

let scrape = new Scrapper('https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer');
scrape.workerFuntion();