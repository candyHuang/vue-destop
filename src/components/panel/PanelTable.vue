<template>
  <div class="w-panel__table">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'PanelTable',
  }
</script>
<style lang="less">
  @import '../../assets/styles/var.less'; 
  .w-panel__table {
    margin: 0 (-1px - @defaultPadding);
  }
</style>