# Installation
```
npm i create-id
```

# What is it?
An module to create random IDs

# Why?
- Fast
- Customizable

# How do i use it?

```js
// Importing for Node JS
import { randomId } from 'create-id';

// filters
const length = 18; // length of the id
const type = "letter" || ["letter", "number","symbol"]; // types of symbol to use for our id

// Create a random ID
const id = randomId();
const id2 = randomId(length, type);
```

# Support
for support or issues or queries contace me on my [discord server](https://discord.gg/XYnMTQNTFh) or create a issue [here](https://github.com/KartikeSingh/create-id/issues).
