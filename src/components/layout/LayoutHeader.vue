<template>
  <div class="w-header">
    <ul class="w-header__btns">
      <li>登陆信息</li>
      <li>退出</li>
    </ul>
  </div>
</template>
<script>
  export default {
  	name: 'LayoutHeader'
  }
</script>
<style lang="less">
  @import '~assets/styles/var.less'; 

  .w-header {
    height: @layoutHeaderHeight;
    font-size: 12px;
    background: @bgColorHeader;
    line-height: @layoutHeaderHeight;
  }

  .w-header__btns {
    float: right;
    color: #C0CCDA;
    > li {
      float: left;
      cursor: pointer;
      margin-right: @defaultPadding;
    }
  }
</style>
