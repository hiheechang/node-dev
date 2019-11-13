# df

- asynchonous : one line executed and the other line executed regardless of the time it takes

1. call stack : functions are stacked 
2. node API : multi-threads; non-blocking feature comes here ex)setTimeout 
3. callback queue : from NodeAPI the finished function is added here and is sent to call stack till call stack is empty
