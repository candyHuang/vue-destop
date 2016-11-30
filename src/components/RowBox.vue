<template>
  <div class="w-row-box">
    <label 
      :class="{
        'w-row-box__left': true,
        'c-primary': type === 'primary'
      }" 
      :style="{
        width: width, 
        color: color
      }">
      {{title}}</label>
    <div class="w-row-box__right">
      <slot></slot> 
    </div>
  </div>
</template>
<script>
  export default {
    name: 'RowBox',
    props: {
      title: String,
      width: String,
      color: String,
      type: String
    }
  }
</script>
<style lang="less">
  @import '~assets/styles/var.less'; 

  .w-row-box {
    padding: 10px 0;
  }
  .primary {
    color: blue;
  }
  .other {
    color: yellow;
  }
  .w-row-box label {
    color: @textColorLabel;
  }
  .w-row-box__left {
    font-size: 14px;
    margin-right: 20px;
    text-align: right;
    display: inline-block;

    &.c-primary {
      color: @textColor;
    }
  }
  .w-row-box__right {
    display: inline-block;
    font-size: 13px;
  }
</style>