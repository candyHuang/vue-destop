<template>
  <div class="w-panel">
    <div class="w-panel__header">
      {{title}}
    </div>
    <div class="w-panel__btns">
      <slot name="btns"></slot>
    </div>
    <div class="w-panel__body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Panel',
    props: {
      title: String
    }
  }
</script>
<style lang="less">
  @import '~assets/styles/var.less'; 
  .w-panel {
    position: relative;
    padding: @defaultPadding;
    border: 1px solid @lineColorGray;
    background-color: #fff;
    margin-bottom: @defaultPadding;
  }

  .w-panel__header {
    font-size: 18px;
    height: @defaultPadding + 20px;
  }

  .w-panel__btns {
    position: absolute;
    top: @defaultPadding;
    right: @defaultPadding;
    z-index: 1;

    .el-button--primary {
      background: #fff;
      border-color: #20a0ff;
      color: #20a0ff;
      padding-left: 20px;
      padding-right: 20px;
    }

    [class^=el-icon-] {
      transform: scale(0.7);
      position: relative;
      left: 1px;
      top: 1px;
    }
  }
</style>
