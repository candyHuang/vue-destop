<template>
  <div class="w-layout__toolbar">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'LayoutToolbar'
  }
</script>
<style lang="less">
  @import '~assets/styles/var.less'; 
  .w-layout__toolbar {
    position: relative;
    background-color: @bgColorToolbar;
    height: @btnLineHeight;
    .w-button-group {
      position: absolute;
      right: 0;
    }
    .w-tabs-link {
      margin-left: @defaultPadding;
    }
  }
</style>
