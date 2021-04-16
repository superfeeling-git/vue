import request from '../util/request'

//登录
export let Login = (data) => request("Account/Login" , data , {}, "Post");

//获取所有商品分类
export let GetAllCategory = () => request("Category/Index");

//商品添加
export let GoodsCreate = (data) => request("Goods/Create" , data , {}, "Post");

//商品更新
export let GoodsUpdate = (data) => request("Goods/Update",data, {} ,"POST");

//商品删除
export let GoodsDelete = (data) => request("Goods/Delete" ,{}, data);

//商品删除
export let GoodsBatchDelete = (data) => request("Goods/BatchDelete" ,data, {} ,"POST");

//商品列表
export const GoodsAll = () => request("Goods/GetAll");

//商品分页显示
export const GoodsPage = (data) => request("Goods/GetPage" ,{}, data);

//商品获取
export const GoodsGet = (data) => request("Goods/Get" ,{}, data);