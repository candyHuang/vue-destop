<template>
  <div>
    <div class="advanced-search-form">
      <el-form label-position="top" :model="searchForm" ref="searchForm">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="名称" prop="name">
              <el-input v-model="searchForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="名称2" prop="name2">
              <el-input v-model="searchForm.name2"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="活动区域" prop="region">
              <el-input v-model="searchForm.region"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="活动展开形式" prop="type">
              <el-input v-model="searchForm.type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <div v-show="formDetailToggle">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="活动区域" prop="region">
                <el-input v-model="searchForm.region"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="活动时间" prop="date1">
                <el-date-picker
                  v-model="searchForm.date1"
                  type="daterange"
                  placeholder="选择日期范围"
                  style="width: 100%;">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="选择月份" prop="date2">
                <el-date-picker
                  v-model="searchForm.date2"
                  type="month"
                  placeholder="选择月"
                  style="width: 100%;">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="活动区域" prop="time">
                <el-select v-model="searchForm.time" placeholder="请选择活动区域" clearable>
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </el-form>
      <div class="search-form-tools">
        <SearchFormToggle :is-open="formDetailToggle" @toggle="onToggle"></SearchFormToggle>
        <el-button 
          class="search-form-btn" 
          type="primary" 
          :loading="loading" 
          @click.native="onSearch" >查 询</el-button>
        <el-button class="search-form-btn" @click.native.prevent="onClear">清 空</el-button>
      </div>  
    </div>
    <div v-loading="loading">
      <div class="table-wrapper">
        <el-table
          :data="tableData"
          stripe
          border
          style="width: 100%">
          
          <el-table-column
            prop="createdDate"
            label="注册日期"
            width="180">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="profile"
            label="自我介绍"
            width="200">
          </el-table-column>
          
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <!-- <el-table-column
            inline-template
            label="详情"
            width="100">
            <span>
              <el-button type="text" size="small">查看</el-button>
            </span>
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱地址">
          </el-table-column>
          <el-table-column
            inline-template
            label="操作"
            width="200">
            <span>
              <el-button-group>
                <el-button size="small">预览</el-button>
                <el-button size="small">提交审核</el-button>
                <el-button size="small" @click.native="onDelete(row)">删除</el-button>
              </el-button-group>
            </span>
          </el-table-column> -->

         </el-table>
      </div>
      <div class="pagination-wrapper">
        <el-pagination
         layout="total, prev, pager, next"
         @current-change="handleCurrentChange"
         :current-page="pager.currentPage"
         :page-size="pager.pageSize"
         :total="pager.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Api from 'src/api/index.js'
import { CODE_SUCCESS } from 'src/const.js'

const DEFAULT_FORM = {
  name: '',
  name2: '',
  region: '',
  type: '',
  date1: '',
  date2: '',
  time: '',
}

export default {
  data () {
    return {
      loading: false,
      formDetailToggle: false,
      searchForm: Object.assign({}, DEFAULT_FORM),
      tableData: [
        // {
        //   createdDate: '2016-05-03',
        //   name: '王小虎',
        //   email: '上海市普陀区金沙江路 1518 弄'
        // }
      ],
      pager: {
        total: 0,
        currentPage: 0,
        pageSize: 10
      },
    }
  },
  methods: {
    onSearch() {
      console.log('submit!');
      this.fetchData()
    },
    onClear() {
      this.$refs.searchForm.resetFields();
      // this.searchForm = Object.assign({}, DEFAULT_FORM)
    },
    onToggle() {
      this.formDetailToggle = !this.formDetailToggle
    },
    handleCurrentChange(currentPage) {
      this.fetchData(currentPage)
    },
    onDelete(item) {
      this.$confirm(`此操作将永久删除该文件[ID=${item.id}], 是否继续?`, '提示', {
        type: 'warning'
      })
      .then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    fetchData(currentPage) {
      let vm = this

      currentPage = currentPage || this.pager.currentPage
      this.loading = true
      Api.getAppAllAreas({
        pageNo: currentPage
      })
      .then(res => {  
        if (res.data.code === CODE_SUCCESS) {
          // 这里是处理正确的回调
          let resData = res.data.data

          vm.tableData = resData.list.map(el => {
            return {
              id: el.id,
              profile: el.profile,
              createdDate: el.createdDate,
              name: el.name,
              email: el.email,
            }
          })
          vm.pager.currentPage = resData.pager.current
          vm.pager.total = resData.pager.total
        } else {
          // console.log('----------逻辑错误------')
        }
      })
      .then(() => {  
        this.loading = false
      })
      .catch(error => {
        // 这里是处理错误的回调
      }) 
    },

    handleTabClick(tab) {
      console.log(tab)
    }
  },
  mounted: function() {
    this.fetchData()
  }
}
</script>
