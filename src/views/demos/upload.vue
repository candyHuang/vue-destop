<template>
  <div>
    <Panel title="上传图片">
      <ImageUpload 
        action="//jsonplaceholder.typicode.com/posts/"
        :delete-confirm="false"
        :default-file-list="fileList"
        @change="handleComplete">
      </ImageUpload>
    </Panel> 
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
export default {
  data() {
    return {
      fileList: [
        {
          name: 'food.jpeg', 
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, 
        {
          name: 'food2.jpeg', 
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    }
  },
  methods: {
    handleComplete(fileList) {
      console.log(fileList)
    }
  },
  computed: {
  }
}
</script>
