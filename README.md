# ps_promise
A wrapper around the [Paperspace-Node](https://github.com/Paperspace/paperspace-node) library using promises

The use of this library is similar to the original. Just import ps_promise with your API key.

```ecmascript 6
let ps_promise = require('ps_promise')
let ps = ps_promise(api_key)
```
The main difference is the use of promises instead of async callbacks. 

```ecmascript 6
ps.machines.create(test_machine)
  .then(
    (resp) => {
        console.log(resp.body);
    }
  )
  .catch(
    (err) => {
        console.log(err);
    }
  )
```

