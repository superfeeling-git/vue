<template>
    <div class="pageHead">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>


<style>
.pageHead{
    padding-left: 30px;
    border-bottom: 1px solid #dddddd;
}
.pageHead,.pageHead *{
    height: 60px;
    line-height: 60px;
    background: rgb(255, 255, 255);
}
</style>