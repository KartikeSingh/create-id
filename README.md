# Installations
```
npm i create-id
```

# What ?
An module to create random IDs

# Why ?
- Fast
- Customizable

# How ?

```js
// Importing for Node JS
const { randomID } = require('create-id');
import { randomID } from 'create-id'; // for typescript

// filters
const length = 18; // length of the id
const type = "letter" || ["letter", "number","symbol"]; // types of symbol to use for our id

// Create a random ID
const id = randomID();
const id2 = randomID(length, type);
```

# Support
for support or issues or queries contace me on my [discord server](https://discord.gg/XYnMTQNTFh) or create a issue [here](https://github.com/KartikeSingh/create-id/issues).