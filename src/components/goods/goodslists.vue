<template>
  <div class="tmpl">
    <div class="abread bt-line">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
        <el-breadcrumb-item>购物商城</el-breadcrumb-item>
        <el-breadcrumb-item>分类管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row  class="abread2 bt-line">
      <div >
      <el-col :offset="1" :span="6">    
          <el-button size="small">新增</el-button>
          <el-button size="small">全选</el-button>
          <el-button size="small">删除</el-button> 
      </el-col>
      <el-col :offset="13" :span="4">
        <el-input placeholder="请输入搜索内容" icon="el-icon-search" v-model="input2" :on-icon-click="handleIconClick">
          <i class="el-input__icon el-icon-search is-clickable"></i>
        </el-input>
      </el-col>
      </div>
    </el-row>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2:''
    };
  },

  methods: {
    handleIconClick(){}
  }
};
</script>
<style scoped>
.goodstip {
  padding: 3px;
}
.abread {
  padding: 10px;
}

.ls.el-icon-picture,
.ls.el-icon-upload,
.ls.el-icon-star-on {
  opacity: 0.5;
  font-size: 18px;
}

.ls.el-icon-picture.imgactive,
.ls.el-icon-upload.imgactive,
.ls.el-icon-star-on.imgactive {
  opacity: 1;
  font-size: 18px;
}
.listedit {
  color: #2a72c5;
  font-size: 12px;
}
</style>