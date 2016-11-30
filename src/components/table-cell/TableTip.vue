<template>
  <el-popover trigger="hover" placement="top" :width="width" popper-class="w-table-tip">
    <slot name="tip"></slot>
    <div slot="reference" class="ellipsis">
      <slot></slot>
    </div>
  </el-popover>
</template>
<script>
  export default {
    name: 'TableTip',
    props: {
      width: {
        type: String,
        default: '240'
      }
    }
  }
</script>
<style lang="less">
  @import '~assets/styles/var.less'; 
  .w-table-tip {
    font-size: 12px;
    color: #fff;
    background: #1F2D3D;
    background: rgba(31, 45, 61, 0.85);
    border-radius: 4px;
  }
  .el-popover[x-placement^=top] .popper__arrow::after {
    border-top-color: rgba(31, 45, 61, 0.85);
  }

</style>