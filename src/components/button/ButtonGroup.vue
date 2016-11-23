<template>
  <div type="button" class="w-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ButtonGroup'
  }
</script>
<style lang="less">
  @import '~assets/styles/var.less'; 
  .w-button-group {
    display: inline-block;
    vertical-align: top;
    .clearfix();

    .w-diamond-button {
      float: left;
    }
  }

</style>
