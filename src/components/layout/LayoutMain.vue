<template>
  <div class="w-main">
    <LayoutHeader></LayoutHeader>
    <slot name="toolbar"></slot>
    <div class="w-main__container">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'LayoutMain'
  }
</script>
<style lang="less">
  @import '~assets/styles/var.less';
  .w-main {
    margin-left: @layoutSidebarWidth;
  }

  .w-main__container {
    margin: @defaultPadding;
  }
</style>
