<template>
  <div id="app">
    <LayoutSidebar></LayoutSidebar>
    <LayoutMain>
      <LayoutToolbar slot="toolbar">
        <DiamondButton type="back" icon="arrow-left">返回</DiamondButton>
        <ButtonGroup>
          <DiamondButton type="light">存为草稿</DiamondButton>
          <DiamondButton>提交审核</DiamondButton>
        </ButtonGroup> 
      </LayoutToolbar>
      
      <Panel title="业界有看法的人物">
        <div slot="btns">
          <el-button icon="plus" :plain="true" type="primary">新增按钮</el-button>
        </div>
        <PanelTable class="table-wrapper" v-loading="loading" element-loading-text="拼命加载中">
          <el-table
            :data="tableData"
            stripe
            border
            fit
            style="width: 100%">
            
            <el-table-column
              fixed
              prop="createdDate"
              label="注册日期"
              width="180">
            </el-table-column>
            <el-table-column
              inline-template
              label="自我介绍"
              >
              <el-popover trigger="hover" placement="top" width="600">
                <p>姓名: {{ row.profile }}</p>
                <div slot="reference" class="ellipsis">
                  {{ row.profile }}
                </div>
              </el-popover>
            </el-table-column>
            
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="email"
              label="邮箱地址"
              width="200">
            </el-table-column>

            <el-table-column
              inline-template
              label="详情"
              width="100">
              <span>
                <el-button type="text" size="small">查看</el-button>
              </span>
            </el-table-column>

            <el-table-column
              inline-template
              label="按钮"
              width="100">
              <span>
                <el-button size="small">编辑</el-button>
              </span>
            </el-table-column>
            
            <el-table-column
              inline-template
              fixed="right"
              label="操作"
              width="200">
              <span>
                <el-button-group>
                  <el-button size="small">预览</el-button>
                  <el-button size="small">提交审核</el-button>
                  <el-button size="small" @click.native="onDelete(row)">删除</el-button>
                </el-button-group>
              </span>
            </el-table-column>

           </el-table>
        </PanelTable>
        <div class="pagination-wrapper">
          <el-pagination
           layout="total, prev, pager, next"
           @current-change="handleCurrentChange"
           :current-page="pager.currentPage"
           :page-size="pager.pageSize"
           :total="pager.total">
          </el-pagination>
        </div>
      </Panel>
    </LayoutMain>
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
      Api.app.getAllAreas({
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
  	}
  },
  mounted: function() {
    // this.fetchData()
  }

}
</script>

<style scpoed>
  .table-wrapper {
    min-height: 400px;
  }
</style>
