<template>
  <div>
    <SearchForm>
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
      <div slot="btns">
        <SearchFormToggle :is-open="formDetailToggle" @toggle="onToggle"></SearchFormToggle>
        <el-button 
          class="search-form-btn"
          size="large" 
          type="primary" 
          :loading="loading" 
          @click.native="onSearch" >查 询</el-button>
        <el-button size="large" class="search-form-btn" @click.native.prevent="onClear">清 空</el-button>
      </div>  
    </SearchForm>
    <Panel title="A">
      <p>单产品</p>
    </Panel>
  </div>
</template>
<script>
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
    }
  },
  methods: {
    // this.$router.push(`/${tab.name}`)
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
  }
}
</script>
