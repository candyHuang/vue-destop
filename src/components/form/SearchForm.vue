<template>
  <div class="w-search-form">
    <slot></slot>
    <div class="w-search-form__tools">
      <slot name="btns"></slot>
    </div>  
  </div>
</template>
<script>
  export default {
    name: 'SearchForm'
  }
</script>
<style lang="less">
  @import '~assets/styles/var.less';
  // 高搜
  .w-search-form {
    padding: @defaultPadding;
    background: #fff;
    border: 1px solid @lineColorGray;
    margin-bottom: @defaultPadding;
    .el-form-item__label {
      // color: #333;
    }
  }

  .w-search-form__tools {
    text-align: right;
    .el-button {
      padding-left: @defaultPadding;
      padding-right: @defaultPadding;
    }
    .el-button + .el-button {
      margin-left: @defaultPadding;
    }
  }
</style>
