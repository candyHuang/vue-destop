<template>
	<div class="layout-sidebar">
		<h1>logo</h1>
    <el-menu class="el-menu-vertical-demo" theme="dark" @select="selectActive" @open="handleopen" @close="handleclose" :unique-opened="true" :default-active="activeOpenObj.activeOpen">
      <el-submenu v-for="(m, index) in pages" :index="index + ''">
        <template slot="title"><i class="el-icon-message"></i>{{m.title}}</template>

        <el-menu-item v-for="(p, innerIndex) in m.block" :index="index + '-' + innerIndex">
          <a class="sidebar-link" :href="'/' + p.entry + '.html'">{{p.title}}</a>
        </el-menu-item>
      </el-submenu>
    </el-menu>
	</div>
</template>
<style>
	.layout-sidebar {
		position: absolute;
		width: 230px;
		height: 100%;
		overflow: visible;
		padding-bottom: 24px;
		background: #324057;
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
  import pageConf from '../pages.conf.js'

  export default {
    name: 'LayoutSidebar',
    data() {
      return {
        pages: pageConf.pages,
        // activeOpen 该数据不能为基本数据类型所以才有activeOpenObj对象
        activeOpenObj: {
          activeOpen: ''
        }
      }
    },
    created: function() {
      // 解决页面跳转菜单高亮的问题
      var localhost = window.location.href.split('//')[1]
      var str = localhost.substring(localhost.indexOf('/') + 1, localhost.indexOf('.'))
      var obj = this.activeOpenObj

      this.pages.forEach(function(el) {
        el.block.forEach(function(el) {
          if (el.entry == str) {
            obj.activeOpen = el.pageId
          }
        })
      })
    },
  	methods: {
  		handleopen(index, indexPath) {

  		},
  		handleclose(index, indexPath) {

  		},
      selectActive(index) {
        
      }
  	}
  }
</script>
