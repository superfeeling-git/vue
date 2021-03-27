//第一种方式：
var person={
    name:"星号导出，李四1123",
    age:18
};

//导出命名函数
function test()
{
    console.log("星号导出，导出重命名测试");
};

//或者
export {person,test as MyTest};