<template>
  <button type="button" class="w-diamond-button" :class="['w-diamond-button--' + type]">
    <i v-if="icon" :class="['el-icon-' + icon]"></i>
    <span><slot></slot></span>
  </button>
</template>
<script>
  export default {
    name: 'DiamondButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String
      },
    }
  }
</script>
<style lang="less">
  @import '~assets/styles/var.less'; 
  .w-diamond-button {
    display: inline-block;
    margin: 0;
    padding: 0 30px;
    border: none;
    line-height: @btnLineHeight;
    font-size: 16px;
    color: #fff;
    text-align: center;
    vertical-align: top;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    background: @btnPrimaryColor;
    outline: 0;

    > i {
      font-size: 14px;
    }
  }

  .w-diamond-button--light {
    background: @btnLightColor;
  }

  .w-diamond-button--back {
    background: transparent;
    color: @textColorLabel;
    border-right: 1px solid #E5E9F2;
  }

  
</style>
