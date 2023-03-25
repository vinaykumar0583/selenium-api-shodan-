// const express = require('express');
// const app = express();

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });
// const { Builder } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// const options = new chrome.Options();
// options.addArguments('--headless');

// const driver = new Builder()
//   .forBrowser('chrome')
//   .setChromeOptions(options)
//   .build();
//   app.get('/versions', async (req, res) => {
//     try {
//       const url = req.query.url;
//       await driver.get(url);
  
//       const scriptTags = await driver.findElements({ tagName: 'script' });
//       const versions = [];
  
//       for (const tag of scriptTags) {
//         const src = await tag.getAttribute('src');
  
//         if (src) {
//           const match = src.match(/(v|version|ver)(?:[=|\/])([0-9.]+)/i);
  
//           if (match) {
//             versions.push(match[2]);
//           }
//         }
//       }
  
//       res.json({ versions });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ message: 'Error retrieving versions' });
//     }
//   });
  


// const express = require('express');
// const app = express();
// const webdriver = require('selenium-webdriver');
// const cheerio = require('cheerio');
// const chrome = require('selenium-webdriver/chrome');
// const { Builder, By, Key, until } = webdriver;

// app.get('/versions', async (req, res) => {
//   try {
//     const options = new chrome.Options();
//     options.addArguments('headless');
//     const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
//     const url = req.query.url;
//     await driver.get(url);

//     const pageSource = await driver.getPageSource();
//     const $ = cheerio.load(pageSource);
//     const versions = $('script').map((i, el) => {
//       const version = $(el).attr('src') || $(el).text();
//       return version.match(/\d+\.\d+\.\d+/);
//     }).get();

//     res.json({versions});
//     await driver.quit();
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err.message);
//   }
// });

// app.listen(3000, () => {
//   console.log('App listening on port 3000!');
// });

// const webdriver = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// // Set up the Chrome options
// const options = new chrome.Options();
// options.addArguments('--headless');

// // Set up the WebDriver
// const driver = new webdriver.Builder()
//   .forBrowser('chrome')
//   .setChromeOptions(options)
//   .build();

// // Navigate to the website
// driver.get('').then(() => {
//   // Find all the script tags on the page
//   driver.findElements(webdriver.By.tagName('script')).then((scripts) => {
//     // Loop through each script tag and extract the library name and version
//     scripts.forEach((script) => {
//       script.getAttribute('src').then((src) => {
//         if (src) {
//           const matches = src.match(/\/([^/]+)\/([\d.]+)\/[^/]+\.js$/);
//           if (matches) {
//             const libraryName = matches[1];
//             const libraryVersion = matches[2];
//             console.log(`${libraryName}: ${libraryVersion}`);
//           }
//         }
//       });
//     });
//   });
// }).catch((error) => {
//   console.error(error);
// }).finally(() => {
//   // Quit the WebDriver
//   driver.quit();
// });



// const express = require('express');
// const cheerio = require('cheerio');
// const { Builder, By } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// const app = express();

// app.get('/libraries', async (req, res) => {
//   const url = 'https://jquery.com/';
//   const options = new chrome.Options().headless().windowSize({width: 1024, height: 768});

//   const driver = await new Builder()
//     .forBrowser('chrome')
//     .setChromeOptions(options)
//     .build();

//   await driver.get(url);

//   const html = await driver.getPageSource();
//   const $ = cheerio.load(html);

//   const libraries = $('script[src]').map(function () {
//     const src = $(this).attr('src');
//     const match = src.match(/\/([\w-]+)\/([\d.]+)\/([\w-]+)\.min\.js/);
//     if (match) {
//       const [_, library, version, file] = match;
//       return { library, version };
//     }
//   }).get();

//   await driver.quit();

//   res.json(libraries);
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

// const express = require('express');
// const app = express();
// const webdriver = require('selenium-webdriver');
// const cheerio = require('cheerio');
// const chrome = require('selenium-webdriver/chrome');
// const { Builder, By, Key, until } = webdriver;

// app.get('/versions', async (req, res) => {
//   try {
//     const options = new chrome.Options();
//     options.addArguments('headless');
//     const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
//     const url = req.query.url;
//     await driver.get(url);

//     const pageSource = await driver.getPageSource();
//     const $ = cheerio.load(pageSource);
//     const versions = $('script').map((i, el) => {
//       const version = $(el).attr('src') || $(el).text();
//       const versionNumber = version.match(/\d+\.\d+\.\d+/);
//       const id = $(el).attr('id');
//       return { version: versionNumber, id };
//     }).get();

//     res.json({ versions });
//     await driver.quit();
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err.message);
//   }
// });

// app.listen(3000, () => {
//   console.log('App listening on port 3000!');
// });


// const express = require('express');
// const app = express();
// const webdriver = require('selenium-webdriver');
// const cheerio = require('cheerio');
// const chrome = require('selenium-webdriver/chrome');
// const { Builder, By, Key, until } = webdriver;

// app.get('/versions', async (req, res) => {
//   try {
//     const options = new chrome.Options();
//     options.addArguments('headless');
//     const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
//     const url = req.query.url;
//     await driver.get(url);

//     const pageSource = await driver.getPageSource();
//     const $ = cheerio.load(pageSource);
//     const versions = $('script').map((i, el) => {
//       const version = $(el).text().match(/\d+\.\d+\.\d+/);
//       const id = $(el).attr('id');
//       const src = $(el).attr('src');
//       return { version, id, src };
//     }).get();

//     res.json({ versions });
//     await driver.quit();
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err.message);
//   }
// });

// app.listen(3000, () => {
//   console.log('App listening on port 3000!');
// });


const express = require('express');
const app = express();
const webdriver = require('selenium-webdriver');
const cheerio = require('cheerio');
const chrome = require('selenium-webdriver/chrome');
const { Builder, By, Key, until } = webdriver;

app.get('/versions', async (req, res) => {
  try {
    const options = new chrome.Options();
    options.addArguments('headless');
    const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    const url = req.query.url;
    await driver.get(url);

    const pageSource = await driver.getPageSource();
    const $ = cheerio.load(pageSource);
    const versions = $('script').map((i, el) => {
      const version = $(el).attr('src') || $(el).text();
      const versionNumber = version.match(/\d+\.\d+\.\d+/);
      const library = $(el).attr('id');
      return { src: version, version: versionNumber, library };
    }).get();

    res.json({ versions });
    await driver.quit();
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
