# ps-lookup-kill

A node.js function that kill processes identified by process lookup parameters.

For process lookup we use [ps-node](https://www.npmjs.com/package/ps-node)

# Installation
```
npm i ps-lookup-kill
```

## Usage

Start some process like this in your shell:
```
top -d 2
```

Then you can kill the above process by running this code:

```
const kill = require('ps-lookup-kill')

kill({
    command: 'top',
    arguments: ['-d', '2'],
})
```

