<template>
    <div>
        <el-container>
        <el-header>
            XX管理系统
        </el-header>
        <el-container>
            <el-aside width="220px">
                <el-menu
                default-active="2"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
                >
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="/List">列表</el-menu-item>
                    <el-menu-item index="/Create">添加</el-menu-item>
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
                <el-menu-item index="3">
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
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>
        </el-container>
        <el-footer height="40px">版权信息</el-footer>
        </el-container>
    </div>
</template>

<style>
    .el-main {
    height: calc(100vh - 100px);
    }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: rgb(17, 16, 16);
    text-align: left;
    line-height: 60px;
  }

  .el-footer {
      text-align: center;
      line-height: 40px;
  }
  
  .el-aside {
    background: #545c64;
    color: #333;
    text-align: center;
    min-height: 100%;
  }
  
  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    padding: 0;
  }
  
  .el-submenu,.el-menu-item{
      text-align: left;
      width: 220px;
  }
</style>