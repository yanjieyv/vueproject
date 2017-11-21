<template>
  <div class="tmpl">

    <!-- 左边菜单 -->

    <el-row>
      <el-col :span="4">
        <div class="layout menu">
          <img style="width:100%" src="../../statics/imgs/logo.png" alt="">
          <el-menu default-active="2" class="el-menu-vertical-demo">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>购物商城</template>
              <el-menu-item-group>
                <el-menu-item index="1-1">内容管理</el-menu-item>
                <router-link to="/admin/goodslists">
                  <el-menu-item index="1-2">分类管理</el-menu-item>
                </router-link>
                <el-menu-item index="1-2">评论管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-message"></i>订单管理</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">内容管理</el-menu-item>
                <el-menu-item index="2-2">分类管理</el-menu-item>
                <el-menu-item index="2-2">评论管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="20">
        <!-- 顶部登录信息条 -->
        <el-row>
          <el-col :span="24">
            <div class="topbg">
              <el-row>
                <el-col :span="1">
                  <i class="el-icon-menu" style=""></i>
                </el-col>
                <el-col :span="23">
                  欢迎登陆
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      下拉菜单
                      <i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item disabled>个人中心</el-dropdown-item>
                      <el-dropdown-item divided>注销</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <router-view></router-view>
        </el-row>
      </el-col>
    </el-row>
    <!-- 其他功能 -->
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },

    methods: {}
  };
</script>
<style scoped>
  .el-submenu__title i {
    color: #fff;

    font-size: 14px;
  }

  .el-dropdown {
    cursor: pointer;
  }
  /* .el-submenu [class^="el-icon-"]{
  
      width: 14px;
  
    } */
</style>