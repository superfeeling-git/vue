import request from '../util/request'

//登录
export let Login = (data) => request("Account/Login" , data , "Post");

//商品添加
export let GoodsCreate = (data) => request("Goods/Create" , data , "Post");

//商品列表
export const GoodsAll = () => request("Goods/GetAll");