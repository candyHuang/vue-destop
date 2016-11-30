<template>
  <div class="w-cascader el-select" v-clickoutside="handleClose">
    <el-input
      ref="reference"
      type="text"
      :class="{
        'w-cascader__input': true,
        'is-reverse': visible
      }"
      placeholder="请选择"
      :value="displayLabel()"
      :readonly="true"
      @click.native="visible = true"
      @mouseenter.native="inputHovering = true"
      @mouseleave.native="inputHovering = false"
      :icon="iconClass">
    </el-input>
    <transition name="md-fade-bottom" @after-leave="doDestroy">
      <CasaderPopper ref="popper" :visible="visible" v-show="visible">
        <CascaderMenu 
          v-for="(menu, menuIndex) in menus" 
          @select="handleOptionSelect"
          :index="menuIndex"
          :active-value="activeValue"
          :records="menu"></CascaderMenu>
      </CasaderPopper>
    </transition>
  </div>
</template>
<script>
  import arrayTreeFilter from 'src/utils/array-tree-filter'
  import Clickoutside from 'src/utils/clickoutside'
  import { addClass, removeClass, hasClass } from 'wind-dom';
  import CasaderPopper from './CasaderPopper.vue'
  import CascaderMenu from './CascaderMenu.vue'

  export default {
    name: 'Cascader',
    components: {
      CasaderPopper,
      CascaderMenu
    },
    directives: { Clickoutside },
    props: {
      clearable: {
        type: Boolean,
        default: true
      },
      options: Array,
      value: {
        type: Array,
        default() {
          return []
        }
      },
      displayRender: {
        type: Function,
        default(innerValue, selectedOptions) {
          return innerValue.join('/')
        }
      }
    },
    data() {
      return {
        innerValue: [],
        activeValue: [],
        visible: false,
        inputHovering: false,
      }
    },
    computed: {
      iconClass() {
        return this.showCloseIcon ? 'circle-close' : 'caret-top'
      },
      showCloseIcon() {
        let criteria = this.clearable && this.inputHovering && this.innerValue.length

        if (!this.$el) return false;

        let icon = this.$el.querySelector('.el-input__icon');
        if (icon) {
          if (criteria) {
            icon.addEventListener('click', this.deleteSelected);
            addClass(icon, 'is-show-close');
          } else {
            icon.removeEventListener('click', this.deleteSelected);
            removeClass(icon, 'is-show-close');
          }
        }
        return criteria;
      },
      menus: function() { 
        let options = this.options
        let result = this.getActiveOptions()
          .map(activeOption => activeOption.children)
          .filter(activeOption => !!activeOption)
        result.unshift(options)
        return result
      }
    },
    methods: {
      doDestroy() {
        this.$refs.popper.doDestroy();
      },
      handleClose() {
        this.visible = false
        this.activeValue = this.innerValue.slice()
      },
      deleteSelected(event) {
        event.stopPropagation()
        this.visible = false 
        this.innerValue = []
        this.activeValue = []
        this.$emit('input', this.innerValue)
      },
      getActiveOptions(values) {
        const activeValue = values || this.activeValue
        const options = this.options
        return arrayTreeFilter(options, (o, level) => o.value === activeValue[level])
      },
      handleOptionSelect(menuIndex, option) {
        this.$emit('select-option', menuIndex, option)
        if (this.activeValue[menuIndex] !== option.value) {
          let activeValue = this.activeValue

          activeValue = activeValue.slice(0, menuIndex + 1)
          activeValue[menuIndex] = option.value
          this.activeValue = activeValue.slice()
          // selected
          if (!option.children || !option.children.length) {
            this.innerValue = this.activeValue.slice()
            this.visible = false
            this.$emit('input', this.innerValue)
            this.$emit('change', activeValue, this.getActiveOptions(activeValue))
          }
        }
      },
      displayLabel() {
        let value = this.innerValue
        let selectedOptions = this.getActiveOptions(value)
        return this.displayRender(value, selectedOptions)
      }
    },
    watch: {
      value: {
        deep: true,
        immediate: true,
        handler(val) {
          let value = val.concat()
          this.innerValue = val
          this.activeValue = val
        }
      }
    }
  }
</script>

<style lang="less">
  .w-cascader__menus {
    position: absolute;
    z-index: 1001;
    border: 1px solid #d3dce6;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);
    box-sizing: border-box;
    margin: 5px 0;
    font-size: 0;
  }

  .w-cascader__input.is-reverse .el-input__icon {
      transform: translateY(-50%);
  }
</style>
