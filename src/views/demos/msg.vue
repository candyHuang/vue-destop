<template>
  <div>
    <Panel title="消息弹窗">
      <h1>需确认的弹窗</h1>
      <p>
        <el-button type="primary" @click.native="onAlert">需确认的消息弹窗($alert)</el-button>
        <el-button type="primary" @click.native="onAlert2">需确认的有icon的消息弹窗($alert)</el-button>
      </p>
      <p>
        <el-button @click.native="onConfirm">确认框($confirm)</el-button>
      </p>
      <h1>无需确认的消息弹窗</h1>
      <p>
        <el-button type="primary" @click.native="onMessage">简单消息弹窗($message)</el-button>
        <el-button type="primary" @click.native="onMessage2">不自动关闭消息弹窗($message)</el-button>
        <el-button type="primary" @click.native="onMessage3">带关闭消息弹窗($message)</el-button>
      </p>
    </Panel>
    <Panel title="内容弹窗">
      <el-button @click.native="dialogVisible = true">打开内容弹窗</el-button>
      <el-button @click.native="dialogVisible2 = true">打开内容弹窗2</el-button>
    </Panel>
    <el-dialog title="分配供应权限" v-model="dialogVisible">
      <el-form ref="form" :model="form" label-width="5em">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button class="fl">修改密码</el-button>
        <el-button @click.native="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="分配供应权限" v-model="dialogVisible2">
    
      <Divider>单选框</Divider>

      <LabelGrid v-model="radio">
        <el-radio label="1">线上品牌商赞助</el-radio>
        <el-radio label="2">线上品牌商赞助</el-radio>
        <el-radio label="3">
          <el-tooltip content="线上品牌商赞助线上品牌商赞助线上品牌商赞助" placement="top">
            <span>线上品牌商赞助线上品牌商赞助线上品牌商赞助</span>
          </el-tooltip>
        </el-radio>
        <el-radio label="4">线上品牌商赞助线上品牌商赞助线上品牌商赞助</el-radio>
        <el-radio label="5">
          <el-tooltip content="线上品牌商赞助线上品牌商赞助线上品牌商赞助" placement="top">
            <span>线上品牌商赞助线上品商赞助线上品牌</span>
          </el-tooltip>
        </el-radio>
        <el-radio label="6">
          <el-tooltip content="线上品牌商赞助" placement="top">
            <span>线上品牌商赞助线上品</span>
          </el-tooltip>
        </el-radio>
      </LabelGrid>

      <Divider>复选框</Divider>

      <LabelGrid v-model="checkList">
        <el-checkbox label="复选框 A">复选框复选框复选框复选框A</el-checkbox>
        <el-checkbox label="复选框 B">
          <el-tooltip content="线上品牌商赞助线上品牌商赞助线上品牌商赞助" placement="top">
            <span>线上品牌商赞助线上品商赞助线上品牌</span>
          </el-tooltip>
        </el-checkbox>
        <el-checkbox label="复选框 C">复选框c</el-checkbox>
        <el-checkbox label="复选框 D">复选框d</el-checkbox>
        <el-checkbox label="复选框 E">复选框e</el-checkbox>
      </LabelGrid>

      <span slot="footer" class="dialog-footer">
        <el-button @click.native="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click.native="dialogVisible2 = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style lang="less">
  @import '~assets/styles/var.less';
  
</style>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      radio: '1',
      checkList: [],
      dialogVisible: false,
      dialogVisible2: false
    }
  },
  methods: {
    onAlert() {
      this.$alert('这是一段内容', '标题名称')
      .then(() => {
        console.log('确定后回调...')
      })
    },
    onAlert2() {
      this.$alert('这是一段内容', '标题名称', {
        type: 'success'
        // type: 'error'
        // type: 'info'
        // type: 'warning'
      })
    },
    onConfirm() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        // confirmButtonText: '确定',
        // cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log('确定后回调...')
      }).catch(() => {
        console.log('取消后后回调...')
      })
    },
    onMessage() {
      this.$message('保存成功~')
      // this.$message.success('保存成功~')
      // this.$message.error('保存成功~')
      // this.$message.warning('保存成功~')
    },
    onMessage2() {
      this.$message({
        type: 'success',
        message: '保存成功!',
        duration: 0,
        showClose: true
      })
    },
    onMessage3() {
      this.$message({
        type: 'success',
        message: '保存成功!',
        showClose: true
      })
    }
  }
}
</script>
