const Scraper = require("images-scraper");
const google = new Scraper({
  puppeteer: {
    headless: true,
  },
  safe: true,
});

async function test(query) {
  console.log(query);
  let results = await google.scrape(query.replace(/&safe=/g, ""), 2);
  console.log(results[0].url);
}

const query = "a+teste+safe=off+safe=off";
test(query);
