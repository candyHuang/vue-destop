<template>
	<div class="w-layout-aside">
		<h1>MFtour</h1>
    <el-menu class="el-menu-vertical-demo" theme="dark" :unique-opened="true">
      <el-submenu v-for="(m, index) in pages" :index="index + ''">
        <template slot="title"><i class="el-icon-message"></i>{{m.title}}</template>
        <el-menu-item v-for="(p, innerIndex) in m.block" :index="index + '-' + innerIndex">
          <a class="sidebar-link" :href="getLinkUrl(p)">{{p.title}}</a>
        </el-menu-item>
      </el-submenu>
    </el-menu>
	</div>
</template>
<style lang="less">
  @import '~assets/styles/var.less';

  .w-layout-aside {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: @layoutSidebarWidth;
    background: @bgColorAside;
    z-index: @zIndexTop;
    .el-menu {
      background-color: @bgColorAside;
    }
    .el-menu--dark .el-submenu .el-menu {
        background-color: #212121;
    }

    h1 {
      text-align: center;
      color: white;
    }
  }

  .sidebar-link {
    display: block;
    color: #c0ccda;
    text-decoration: none;
  }

  .is-active .sidebar-link{
    color: #20a0ff;
  }
</style>

<script>
  import pageConf from 'src/pages.conf.js'

  export default {
    name: 'LayoutSidebar',
    data() {
      return {
        pages: pageConf.pages,
      }
    },
    methods: {
      getLinkUrl(p) {
        return (window.GLOBLE_BASE || '') + '/' + p.entry + '.html'
      }
    }
  }
</script>
