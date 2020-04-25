# Wrap+ Data Script

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
node app.js
```
