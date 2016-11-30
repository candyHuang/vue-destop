<template>
  <ul class="w-cascader__menu">
    <li
      v-for="item in records"
      @click="handleOptionClick(index, item)"
      :class="{
        'w-cascader__item': true,
        'selected': item.value === activeValue[index]
      }">
      <span>{{item.label}}</span>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'CascaderMenu',
    props: {
      records: Array,
      activeValue: Array,
      index: Number,
    },
    methods: {
      handleOptionClick(menuIndex, option) {
        this.$emit('select', menuIndex, option)
      }
    }

  }
</script>
<style lang="less">
  @import '~assets/styles/var.less';
  .w-cascader__menu {
    display: inline-block;
    vertical-align: top;
    height: 180px;
    list-style: none;
    margin: 0;
    padding: 0;
    border-right: 1px solid #e9e9e9;
    overflow: auto;

    &:last-child {
      border-right-color: transparent;
      margin-right: -1px;
      // border-radius: 0 6px 6px 0;
    }
  }

  .w-cascader__item {
    padding: 8px 26px 8px 14px;
    position: relative;
    white-space: nowrap;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #475669;
    height: 36px;
    line-height: 1.5;
    cursor: pointer;
    min-width: 120px;

    &:hover {
      background-color: #e5e9f2;
    }

    &.selected {
      color: #fff;
      background-color: #20a0ff;
    }
  }
</style>
