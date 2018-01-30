# ps_promise
**A wrapper around the [Paperspace-Node](https://github.com/Paperspace/paperspace-node)library using promises**

## BREAKING UPDATE: Due to changes in the Paperspace-Node package newer versions will now return the body of the response instead of the entire resp object. Use resp instead of resp.body 

Version 0.0.5 Update
-----
* Support for Jobs
* Support for Projects

Refer to the Docs on how to use these new features:
[Paperspace-Node Docs](https://paperspace.github.io/paperspace-node/index.html)


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
        console.log(resp);
    }
  )
  .catch(
    (err) => {
        console.log(err);
    }
  )
```

