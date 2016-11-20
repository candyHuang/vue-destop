<script>
export default {
  name: 'TabsPageBox',
  props: {
    activeName: String
  },
  methods: {
    handleTabClick(tab, event) {
      // this.$refs.tabs.currentName = '3'
      // console.log('tab click..', tab)
    }
  },
  render(h) {
    let tabs = this.$slots.default
    .filter(el => {
      return el.componentOptions && el.tag && el.data
    })
    .map(el => {
      let propsData = el.componentOptions.propsData
      return (
        <el-tab-pane label={propsData.title}>{el}</el-tab-pane>
      )
    })
    return (
      <div class="tabs-page-box">
        <el-tabs ref="tabs" on-tab-click={this.handleTabClick} active-name={this.activeName}>
          {tabs}
        </el-tabs>
      </div>
    )
  }
}
</script>

<style lang="less">
  .tabs-page-box {
    background-color: #fff;
    > .el-tabs {
      width: 100%;
      .el-tab-pane {
        padding:  0 10px 10px 10px; 
      }
    }
  }
</style>
