<template>
    <div>
        <el-container>
            <el-header>
                <el-col :span="4" :offset="20">
                    <el-menu class="el-menu-demo" mode="horizontal" text-color="#000" active-text-color="#000">
                        <el-menu-item index="1">处理中心</el-menu-item>
                        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                    </el-menu>
                </el-col>
            </el-header>
            <el-container>
                <el-aside style="width:220px">
                    <el-menu
                        default-active="1"
                        :unique-opened="true"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"                        
                        >
                        <template v-for="item in menuList">
                        <el-submenu :index="item.menuId.toString()" :key="item.menuId" >
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>
                                    {{item.menuName}}
                                </span>
                            </template>
                            <template v-for="subItem in item.smsSysMenuModels">
                                <el-menu-item  :index="subItem.menuId.toString()" :key="subItem.menuId" @click="addTab(subItem)">
                                    {{subItem.menuName}}
                                </el-menu-item>
                            </template>
                        </el-submenu>
                        </template>

                    </el-menu>
                </el-aside>
                <el-main>
                    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
                    <el-tab-pane
                        v-for="item in editableTabs"
                        :key="item.name"
                        :label="item.title"
                        :name="item.name"
                    >
                    <component :is="item.content"></component>
                    </el-tab-pane>
                    </el-tabs>                    
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style>
  .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    background: red;
  }
</style>

<style scoped>

  .el-menu-vertical-demo .el-menu-item{
      padding-left: 53px!important;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-header{text-align: left;}
  
  .el-aside {
    background: #545c64;
    color: #333;
    text-align: center;
    min-height: 100%;
  }
  
  .el-main {
    color: #333;
    height: calc(100vh - 60px);
    padding: 0%;
  }


  .el-menu-vertical-demo .el-submenu,.el-menu-vertical-demo .el-menu-item{
      text-align: left;
  }



  .el-menu-vertical-demo{
      border-right: none;
  }

  .el-menu-demo{background: none; text-align: right;}
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>

<script>
import Default from './Default'
import GoodsCreate from './Goods/Create'
import GoodsList from './Goods/List'
import AdminCreate from './Admin/Create'
import AdminList from './Admin/List'
import RoleCreate from './Role/Create'
import RoleList from './Role/List'

export default {
        data() {
        return {
            menuList:[
            {
                "menuId": 1,
                "menuName": "商品管理",
                "parentId": 0,
                "linkUrl": null,
                "isShowLeft": false,
                "smsSysMenuModels": [
                {
                    "menuId": 2,
                    "menuName": "商品管理",
                    "parentId": 1,
                    "linkUrl": "Goods/List",
                    "isShowLeft": false,
                    "smsSysMenuModels": null
                },
                {
                    "menuId": 3,
                    "menuName": "商品添加",
                    "parentId": 1,
                    "linkUrl": "Goods/Create",
                    "isShowLeft": false,
                    "smsSysMenuModels": null
                },
                {
                    "menuId": 4,
                    "menuName": "商品编辑",
                    "parentId": 1,
                    "linkUrl": "Goods/Edit",
                    "isShowLeft": false,
                    "smsSysMenuModels": null
                }
                ]
            },
            {
                "menuId": 5,
                "menuName": "角色管理",
                "parentId": 0,
                "linkUrl": null,
                "isShowLeft": false,
                "smsSysMenuModels": [
                {
                    "menuId": 6,
                    "menuName": "角色管理",
                    "parentId": 5,
                    "linkUrl": "Role/List",
                    "isShowLeft": false,
                    "smsSysMenuModels": null
                },
                {
                    "menuId": 7,
                    "menuName": "角色添加",
                    "parentId": 5,
                    "linkUrl": "Role/Create",
                    "isShowLeft": false,
                    "smsSysMenuModels": null
                },
                {
                    "menuId": 8,
                    "menuName": "角色编辑",
                    "parentId": 5,
                    "linkUrl": "Role/Edit",
                    "isShowLeft": false,
                    "smsSysMenuModels": null
                }
                ]
            }
            ],
            editableTabsValue: '0',
            editableTabs: [{
                title: '默认首页',
                name: '0',
                content: 'Default'
            }],
            customerCom:"Default"
        }
    },
    components:{
        Default,GoodsCreate,GoodsList,AdminCreate,AdminList,RoleCreate,RoleList
    },
    methods: {
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
        console.log(key, keyPath);
        },
        addTab(targetName) {
            //要添加的Tab的URL路径:Goods/Create
            var module = targetName.linkUrl.replace("/","");
            //目标菜单ID做为Tab的name
            let newTabName = targetName.menuId.toString();
            //从选项卡（数组）中查找是否存在该选项卡
            //存在则直接激活，否则添加
            var result = this.editableTabs.find((v)=>{
                return v.name.toString() === newTabName;
            });

            //不存在则添加选项卡
            if(result == undefined){
                this.editableTabs.push({
                title: targetName.menuName,
                name: newTabName,
                content : module
            });
            }

            //激活当前选项卡
            this.editableTabsValue = newTabName;
        },
        removeTab(targetName) {
            console.log(targetName);
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
            tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                activeName = nextTab.name;
                }
            }
            });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
    }
}
</script>