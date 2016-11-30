<template>
  <div class="w-cascader__menus">
    <slot></slot>  
  </div>
</template>
<script>
  import Popper from 'src/utils/vue-popper'

  export default {
    name: 'CasaderPopper',
    mixins: [Popper],
    props: {
      visible: {
        type: Boolean
      },
      placement: {
        default: 'bottom-start'
      },
      options: {
        default() {
          return {
            forceAbsolute: true,
            gpuAcceleration: false
          };
        }
      }
    },
    methods: {
    },
    watch: {
      visible: {
        immediate: true,
        handler(val) {
          this.showPopper = val
        }
      }
    },
    mounted() {
      this.referenceElm = this.$parent.$refs.reference.$el
      this.$parent.popperElm = this.popperElm = this.$el
      this.$on('updatePopper', this.updatePopper)
      this.$on('destroyPopper', this.destroyPopper)
    }

  }
</script>
