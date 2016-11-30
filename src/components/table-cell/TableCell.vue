<script>
  export default {
    name: 'TableCell',

    props: {
      height: {
        type: String,
        default: '50px'
      }
    },
    render(h) {
      const items = this.$slots.default
        .filter(item => item.tag && item.context)
        .map((item, index) => {
        return (
          <div class="w-table-cell__wrap" style={{'height': this.height}}>
            {item}
          </div>
        )
      })
      return (
        <div class="w-table-cell">
          {items}
        </div>
      )
    }
  }
</script>
<style lang="less">
  @import '~assets/styles/var.less'; 
  .w-table-cell {
    margin: 0 -18px;
  }
</style>
