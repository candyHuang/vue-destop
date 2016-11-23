<script>
  module.exports = {
    name: 'TabsLinkItem',

    props: {
      label: {
        type: String,
        required: true
      },
      link: {
        type: String
      },
      name: String
    },

    data() {
      return {
        index: ''
      };
    },

    created() {
      if (!this.index) {
        this.index = this.$parent.$children.indexOf(this) + 1 + '';
      }
    },

    destroyed() {
      if (this.$el) {
        this.$el.remove();
      }
    },
    render(h) {
      return (
        <span></span>
      )
    },
    watch: {
      name: {
        immediate: true,
        handler(val) {
          this.index = val;
        }
      }
    }
  };
</script>
