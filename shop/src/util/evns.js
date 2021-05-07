/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */
 let baseUrl = ''; 
 let routerMode = 'hash';
 let baseImgPath;


 if (process.env.NODE_ENV == 'development') {
     baseUrl = 'http://api.a.com:63846/api/';
     baseImgPath = '/img/';
 }else{
     baseUrl = '//elm.cangdu.org';
     baseImgPath = '//elm.cangdu.org/img/';
 }
 
 export default {
     baseUrl,
     routerMode,
     baseImgPath
 }