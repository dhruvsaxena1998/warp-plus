const puppeteer = require("puppeteer");
const dotenv = require("dotenv").config();

const getFreeData = async (key, amount) => {
  try {
    console.time("warp");
    console.time("browser");

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://get-bug-cloudflare.lvddong.repl.run/");

    console.timeEnd("browser");

    while (amount > 0) {
      console.time(`process ${amount}`)
      // wait for approx 10 second to complete the env
      await wait(10000);

      await page.keyboard.type(key);
      await page.keyboard.press(String.fromCharCode(13));
      await page.keyboard.type("3");
      await page.keyboard.press(String.fromCharCode(13));

      amount -= 1;
      // wait for 7seconds to complete the process before refreshing the page
      await wait(7000);
      console.timeEnd(`process ${amount}`)
      
      // reload page
      await page.click('#restart-bar > button');
    }
    console.timeEnd("warp");
    await browser.close();
  } catch (e) {
    console.log(e)
    return e
  }
};

const wait = ms => new Promise((res, rej) => setTimeout(res, ms))

const key = process.env.KEY;

if (key) getFreeData(key, 5);
else console.log('Please enter the key')
