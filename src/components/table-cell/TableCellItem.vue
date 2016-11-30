<template>
  <span class="w-table-cell__item"><slot></slot></span>
</template>
<script>
  export default {
    name: 'TableCellItem',
  }
</script>
<style lang="less">
  @import '~assets/styles/var.less'; 
  .w-table-cell__wrap {
    display: table;
    width: 100%;
    padding: 4px 18px; 
    border-bottom: 1px solid #e0e6ed;
    &:last-child {
      border-bottom: 0;
    }
  }

  .w-table-cell__item {
    display: table-cell;
    vertical-align: middle;
  }
</style>
