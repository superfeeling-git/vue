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
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1" @click="activeTabl">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
                    <el-tab-pane    
                        key="1"
                        label="选项卡一"
                        name="1"
                    >
                        主页
                    </el-tab-pane>
                        <el-tab-pane    
                        key="2"
                        label="选项卡二"
                        name="2"
                    >
                        <el-table
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column
                            prop="date"
                            label="日期"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="地址">
                        </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    </el-tabs>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
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
    text-align: center;
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
import {GoodsAll} from '../util/apis'

export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      activeTabl(){
          this.editableTabsValue = '1';
      },
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
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
    },
    data() {
        return {
            GoodsList:null,
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            editableTabsValue: '2',
            editableTabs: [{
            title: 'Tab 1',
            name: '1',
            content: 'Tab 1 content'
            }, {
            title: 'Tab 2',
            name: '2',
            content: 'Tab 2 content'
            }],
            tabIndex: 2
        }
    },
    mounted() {
        GoodsAll().then(d=>{
            //console.log(d);
        })
    },
}
</script>