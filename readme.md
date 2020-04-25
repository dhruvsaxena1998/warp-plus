# Warp-plus Data Script

> Requirements ```node lts```

## How to

- clone repo
- cd to repo
- npm install

```bash
rename .env.example to .env
replace <your_id_here> with your actual ID
```

- you can get your id from ```settings > advanced > diagnostics > ID```

```js
/* goto app.js - line no: 28 and add the amount you want loop to run.
each loops gives 2GB of data. */

getFreeData(key, 5); // provide 10GB of data.

// open terminal cd to project and run
npm start
```

> Note: It just make your manual work automated nothing else, so yes each and every process gonna cost some time, each process cost around 20-30seconds, means you can get 2GB at per 30seconds.
