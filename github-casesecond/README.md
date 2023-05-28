# 案例2: github
## 注意点
1. 像BootStrap这种成型的一般放在public当中；看别的案例的时候需要将BootStrap注掉
2. 在将一般的项目配置到react上，有两点需要注意一下
    - class => className
    - style的书写形式
3. 地址栏发出去的就是get请求
4. github这个地址直接使用了cors全部把跨域解决了
    - 但是不能什么时候都是用cors去解决，因为这样可能别的每个地方都可以访问此情况
5. 使用了跨域解决，地址记得加上重定向后缀
6. 解构赋值新用法
```
<script>
    // 1、连续解构赋值
    let obj = { a: { b: { c: 1 } } }
    let obj2 = { a: { b: 1 } }
    // console.log(obj.a.b.c)
    // const {a:{b:{c}}} = obj
    // console.log(c)

    // 2、解构赋值的时候并重命名
    const { a: { b: data } } = obj2
    console.log(data)
</script>
```
7. Search组件获取到的数据想要给List组件
8. 遍历的时候有一个唯一的key，这一点很关键
9. 状态中的数据驱动着页面的显示







