<script>

// import Element from 'element-ui'

export default {
  props: {
   
  },
  data() {
    return {
    }
  },
  methods: {
    clickHandler() {
      console.log('you are click..')
    },
    hoverHandler() {
      console.log('you are hover..')
    },
    nativeClickHandler() {
      console.log('you are click(native)..')
    }
  },
  render(h) {
    let div = h(
      'h1',
      {},
      [
        'fdfdfdfdfdfdf'
      ]
    )
    let slot = this.$slots.default

    let h2 = (<h2>this jxs</h2>)
    // return h(
    //   'div',
    //   {
    //     'class': {
    //       foo: true,
    //       bar: false
    //     },
    //     on: {
    //       mouseenter: this.hoverHandler,
    //       click: this.clickHandler
    //     },

    //     nativeOn: {
    //       click: this.nativeClickHandler
    //     }
    //   },
    //   [
    //     'this is content...'
    //   ]
    // )

    return (
      <div 
        class={{
          foo: true,
          bar: false
        }}
        on-click={this.clickHandler}>
        <el-tabs active-name="2">
          <el-tab-pane label="用户管理"></el-tab-pane>
          <el-tab-pane label="配置管理"></el-tab-pane>
          {slot}
        </el-tabs>
        {div}
        {h2}
        this is content...
      </div>
    )
  }
}
</script>
<style>
  .foo {
    background-color: white;
    cursor: pointer;
  }
</style>
