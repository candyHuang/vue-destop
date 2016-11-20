<template>
  <div id="app" class="layout-aside">
    <LayoutSidebar></LayoutSidebar>
  	<div class="layout-main">
      <!-- <keep-alive>
        <router-view></router-view>
      </keep-alive>  -->

			<!-- 公共底部 -->
      <LayoutHeader></LayoutHeader>
  		<div class="layout-breadcrumb">
  			<el-breadcrumb separator="/">
  			  <el-breadcrumb-item>首页</el-breadcrumb-item>
  			</el-breadcrumb>
  		</div>
			<!-- 主内容器 -->
  		<div class="layout-container">
        <TabsPageBox active-name="2">
          <TabPage title="用户管理">用户1管理</TabPage>
          <TabPage title="配置管理">配置1管理</TabPage>
          <TabPage title="配置xx管理">配置11xx管理</TabPage>
        </TabsPageBox>
        
        <router-view></router-view>

  		</div>
			<!-- 公共底部 -->
      <LayoutFooter></LayoutFooter>
  	</div>
  </div>
</template> 
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    // this.$router.push(`/${tab.name}`)
  }
}
</script>

<style lang="less" scpoed>
  .table-wrapper {
    min-height: 400px;
  }
  
</style>
