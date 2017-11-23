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
        <el-input placeholder="请输入搜索内容" icon="search" v-model="searchvalue" :on-icon-click="getlist">
          <i class="el-input__icon el-icon-search is-clickable"></i>
        </el-input>
      </el-col>
      </div>
    </el-row>

    <div>
      <el-table ref="multipleTable" :data="list" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55">
    </el-table-column>

    <el-table-column prop="title" label="标题" width="">
    </el-table-column>

    <el-table-column prop="categoryname" label="所属类别" width="120">
    </el-table-column>

    <el-table-column prop="stock_quantity" label="库存" width="120">
    </el-table-column>

    <el-table-column prop="market_price" label="市场价" width="120">
    </el-table-column>

    <el-table-column prop="sell_price" label="销售价" width="120">
    </el-table-column>

    <el-table-column label="属性" width="120">
      <template scope="scope">
        <!-- scope指向table里的：data绑定的对象 -->
        <i v-bind="{class:'el-icon-picture '+(scope.row.is_slide == 1?'':'unlinght')}"></i>
        <i v-bind="{class:'el-icon-upload '+(scope.row.is_top==1?'':'unlinght') }"></i>
      </template>
    </el-table-column>

    <el-table-column label="操作" width="120">
      <!-- 当前列的模板{{ scope.row.date }} -->
      <template scope="scope">
        <a href="3">修改</a>
      </template>
    </el-table-column>
    

    <!-- <el-table-column prop="address" label="地址" show-overflow-tooltip>
    </el-table-column> -->
  </el-table>
  <el-row>
    <el-col :offset="1" :span="23">
      <div class="abread2">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[1, 5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotal">
        </el-pagination>
      </div>
    </el-col>
  </el-row>
    
    </div>
  
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      searchvalue: "",
      list:[],
      pageIndex:1,
      pageSize:10,
      pageTotal:10,
    };
  },

  methods: {
    getlist() {
      // /admin/goods/getlist?pageIndex=页码&pageSize=每页显示条数&searchvalue=模糊匹配标题条件
      // var url = "http://192.168.84.200/admin/goods/getlist?pageIndex=1&pageSize=10";
      var url = '/admin/goods/getlist?pageIndex='+this.pageIndex+'&pageSize='+this.pageSize+'&searchvalue='+this.searchvalue;
      this.$ajax.get(url).then(res=>{
        // console.log(res);
        this.pageTotal = res.data.totalcount;
        this.list = res.data.message;
      }).catch(error=>{
        console.log(error);
      })
    },
    handleSelectionChange(){},
    handleSizeChange(val){
      // console.log(val);
      this.pageSize = val;
      this.getlist();
    },
    handleCurrentChange(val){
      // console.log(val);
      
      this.pageIndex = val;
      this.getlist();
    },
  },
  mounted(){
    this.getlist();
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
.unlinght{
  color:rgba(0,0,0,0.3);
}

</style>