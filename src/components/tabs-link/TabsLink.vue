<script>
  module.exports = {
    name: 'TabsLink',
    props: {
      activeName: String,
    },
    data() {
      return {
        currentName: 0
      };
    },
    watch: {
      activeName: {
        handler(val) {
          this.currentName = val;
        }
      }
    },
    methods: {
      handleTabClick(tab, event) {
        this.linkTab(tab)
        this.currentName = tab.index;
        this.$emit('tab-click', tab, event);
      },
      calcBarStyle() {
        if (!this.$refs.tabs) return {};
        var style = {};
        var offset = 0;
        var tabWidth = 0;

        this.$children.every((panel, index) => {
          let $el = this.$refs.tabs[index];
          if (!$el) { return false; }
          if (panel.index !== this.currentName) {
            offset += $el.clientWidth;
            return true;
          } else {
            tabWidth = $el.clientWidth;
            return false;
          }
        });

        style.width = tabWidth + 'px';
        style.transform = `translateX(${offset}px)`;

        return style;
      },
      linkTab(tab) {
        if (tab.link && this.$router) {
          this.$router.push(tab.link)
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        let currentName = this.currentName = this.activeName || this.$children[0].index || '1';
        let activeTab = this.$children.find((tab) => tab.index === currentName)

        activeTab && this.linkTab(activeTab)
      });
    },
    render(h) {
      let {
        handleTabClick,
        currentName
      } = this;

      const barStyle = this.calcBarStyle();
      const activeBar = <div class="w-tabs-link__active-bar" style={barStyle}></div>

      const tabs = this.$children.map((tab, index) => {
        const _tab = h('div', {
          class: {
            'w-tabs-link__item': true,
            'is-active': currentName === tab.index,
          },
          ref: 'tabs',
          refInFor: true,
          on: { click: (ev) => { handleTabClick(tab, ev); } }
        }, [
          tab.label,
          index === 0 ? activeBar : null
        ]);
        return _tab;
      });
      return (
        <div class={{
          'w-tabs-link': true,
        }}>
          <div class="w-tabs-link__header">
            {tabs}
          </div>
          {this.$slots.default}
        </div>
      );
    }
  };
</script>
<style lang="less">
  @import '~assets/styles/var.less';
  .w-tabs-link {
    display: inline-block;
  }

  .w-tabs-link__item {
    float: left;
    position: relative;
    padding: 0 16px;
    line-height: @layoutToolBarHeight;
    font-size: 16px;
    color: @grayColor;
    cursor: pointer;
    &.is-active {
      color: @primaryColor;
    }
  }

  .w-tabs-link__active-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: @primaryColor;
    z-index: 1;
    transition: transform .3s cubic-bezier(.645,.045,.355,1);
    list-style: none;
  }
</style>

