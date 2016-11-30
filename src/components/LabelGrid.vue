<template>
  <el-checkbox-group 
    v-model="value" 
    :class="[
      'w-label-grid',
      'w-label-grid--c' + row,
    ]">
    <slot></slot>
  </el-checkbox-group>
</template>
<script>
  export default {
    name: 'LabelGrid',
    props: {
      row: {
        type: Number,
        default: 3
      },
      value: {}
    },
    watch: {
      value(value) {
        this.$emit('input', value);
      }
    }
  }
</script>
<style lang="less">
  @import '~assets/styles/var.less';
  .w-label-grid {
    font-size: 0;

    .el-checkbox,
    .el-radio {
      width: 33.33%;
      margin-bottom: 30px;
    }

    .el-checkbox__input,
    .el-radio__input {
      position: absolute;
      top: 4px;
    }

    .el-checkbox__label,
    .el-radio__label {
      display: inline-block;
      width: 100%;
      vertical-align: top;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: 25px;
      padding-top: 2px;
    }

    .el-tooltip {
      width: 100%;
    }

    .el-tooltip__rel {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .el-checkbox + .el-checkbox,
    .el-radio + .el-radio {
      margin-left: 0;
    }

  }

  .w-label-grid--c2 {
    .el-checkbox,
    .el-radio {
      width: 50%;
    }
  }

  .w-label-grid--c4 {
    .el-checkbox,
    .el-radio {
      width: 25%;
    }
  }
</style>
