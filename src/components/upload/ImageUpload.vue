<template>
  <div class="w-upload">
    <Previewer ref="previewer" :list="previewerList"></Previewer>
    <transition-group tag="ul" class="w-upload__files" name="list-complete">
      <li 
        class="w-upload__file list-complete-item"
        :key="file"
        v-for="(file, index) in fileList"
        >
        <img :src="file.url" :alt="file.name">
        <div class="w-upload__file__cover">
          <div class="w-upload__file__cover__btns">
            <span class="btn" @click="onPreviewImage(index)">
              <i class="el-icon-view"></i>
              <span>查看图片</span>
            </span>
            <el-popover
              v-if="deleteConfirm"
              class="btn"
              placement="top"
              width="160">
              <p>你确定要确定删除吗？</p>
              <div class="w-upload__popover__btns">
                <el-button size="mini" type="text" @click="handlePopoverCancle(index)">取消</el-button>
                <el-button type="primary" size="mini" @click="handlePopoverOk(index)">确定</el-button>
              </div>
              <span slot="reference">
                <i class="el-icon-delete2"></i>
                <span>删除</span>
              </span>
            </el-popover>
            <span class="btn" v-if="!deleteConfirm" @click="deleteFile(index)">
              <i class="el-icon-delete2"></i>
              <span>删除</span>
            </span>
          </div>
        </div>
      </li>
    </transition-group>
    <div class="w-upload_trigger">
      <el-upload
        accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
        :action="action"
        :show-upload-list="false"
        :before-upload="handleBefore"
        :on-error="onError"
        :on-success="onSuccess">
        <i class="el-icon-plus" v-show="!uploading"></i>
      </el-upload>
      <div class="w-upload__progress" v-show="uploading">
        <el-progress
          type="circle"
          :width="120"
          :status="progressFlag"
          :percentage="percentage">
        </el-progress>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  @import '~assets/styles/var.less';
  @uploadFileSize: 120px;
  .fileItem() {
    display: inline-block;
    height: @uploadFileSize;
    width: @uploadFileSize;
    text-align: center;
    border-radius: 4px;
    border: 1px solid @lineColorGray;
  }

  .w-upload {
    .el-upload {
      width: auto;  
    }
    .el-upload__inner {
      .fileItem();
      vertical-align: middle;
    }
    .el-icon-plus {
      color: @lineColorGray;
      font-size: 32px;
      line-height: @uploadFileSize;
    }
  }

  .w-upload__files {
    display: inline-block;
  }

  .w-upload__file {
    .fileItem();
    position: relative;
    margin-right: 20px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    &:hover {
      .w-upload__file__cover {
        opacity: 1;
      }
    }
  }

  .w-upload__file__cover {
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.72);
    text-align: center;
    transition:opacity 500ms ease;
  }

  .w-upload__file__cover__btns {
    .btn {
      display: inline-block;
      color: #fff;
      font-size: 12px;
      cursor: pointer;
      vertical-align: middle;
      transition: transform .3s cubic-bezier(.23,1,.32,1) .1s,opacity .3s cubic-bezier(.23,1,.32,1) .1s;
      margin-top: 35px;
      
      &:hover {
        transform: translateY(-6px);
      }

      &:not(:first-child) {
        margin-left: 16px;
      }
      & i {
        color: #fff;
        display: block;
        font-size: 20px;
        line-height: inherit;
        margin: 0 auto 5px;
      }
    }
  }

  .w-upload_trigger {
    position: relative;
    display: inline-block;
    vertical-align: top;
  }

  .w-upload__progress {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .w-upload__popover__btns {
    text-align: right;
  }

  .list-complete-item {
    transition: all 500ms;
  }

  .list-complete-enter, .list-complete-leave-active {
    opacity: 0;
    transform: translateY(20px);
  }
  .list-complete-leave-active {
    // position: absolute;
  }
</style>
<script>
import Previewer from './Previewer.vue'
export default {
  name: 'ImageUpload',
  data() {
    return {
      popoverVisible: false,
      progressFlag: '',
      percentage: 0,
      uploading: false,
      fileUrlTemp: '',
      fileList: []
    }
  },
  props: {
    action: {
      type: String,
      require: true
    },
    deleteConfirm: {
      type: Boolean,
      default: true
    },
    defaultFileList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Previewer
  },
  methods: {
    handleBefore(file) {
      let vm = this

      this.progressFlag = ''
      this.percentage = 0
      this.fileUrlTemp = ''
      this.uploading = true
      setTimeout(() => {
        if (vm.percentage < 80) {
          vm.percentage = 30 +  Math.floor(Math.random() * 50)
        }
      }, 200)
      try {
        this.fileUrlTemp = URL.createObjectURL(file)
      } catch (err) {
        console.log(err)
        return
      }
    },
    onSuccess(response, file, fileList) {
      let vm = this

      this.percentage = 100
      this.progressFlag = 'success'
      setTimeout(() => {
        vm.uploading = false
        vm.progressFlag = ''
        vm.percentage = 0
        if (!file.url && vm.fileUrlTemp) {
          file.url = vm.fileUrlTemp
          vm.fileUrlTemp = ''
        }
        file.url && vm.fileList.push(file)
        vm.$emit('on-success', file, vm.fileList)
        vm.$emit('change', vm.fileList)
      }, 1000)
    },
    onError(error, file) {
      let vm = this
      this.progressFlag = 'exception'
      setTimeout(() => {
        vm.uploading = false
        vm.progressFlag = ''
        vm.percentage = 0
        vm.$emit('on-error', vm.fileList)
      }, 1000)
    },
    onPreviewImage(index) {
      this.$refs.previewer.show(index)
    },
    deleteFile(index) {
      this.fileList.splice(index, 1)
      this.$emit('change', this.fileList)
    },
    handlePopoverCancle(index) {
      document.body.click()
    },
    handlePopoverOk(index) {
      document.body.click()
      this.deleteFile(index)
    }
  },
  computed: {
    previewerList() {
      return this.fileList.map(el => {
        return {
          src: el.url,
          w: 360,
          h: 360
        }
      })
    }
  },
  mounted() {
    this.fileList = this.defaultFileList.slice()
  }
}
</script>
