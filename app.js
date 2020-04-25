const puppeteer = require("puppeteer");
const dotenv = require("dotenv").config();
const getFreeData = async (key, amount) => {
  console.time("browser");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://get-bug-cloudflare.lvddong.repl.run/");
  console.timeEnd("browser");
  console.time("warp");
  while (amount > 0) {
    await wait(10000);
    await page.keyboard.type(key, { delay: 300 });
    await page.keyboard.press(String.fromCharCode(13));
    await wait(1000);
    await page.keyboard.type("3");
    await page.keyboard.type(String.fromCharCode(13));
    amount -= 1;
    await wait(7000);
    await page.reload();
  }
  console.timeEnd("warp");
  await browser.close();
};

const wait = ms => new Promise((res, rej) => setTimeout(res, ms))
const key = process.env.KEY;

getFreeData(key, 5);