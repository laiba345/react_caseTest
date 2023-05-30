# 案例2: github-fetch
## 注意点
1. jQuery和axios的本质都是使用xhr来发送请求
2. 不借助xhr也可以发送请求，
3. fetch；不是第三方库，不用下载，直接使用；也是Promise风格
4. 如果.then里面返回的仍然是一个promise，可以直接让这个返回的promise接着进行.then操作
5. await函数必须搭配async函数才能使用，包裹在最近的函数当中
6. 获取到数据以后，直接通过Publish来发送相关请求给List组件即可




