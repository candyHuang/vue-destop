<template>
  <div id="app">
    <LayoutSidebar></LayoutSidebar>
    <LayoutMain>
      <LayoutToolbar slot="toolbar">
        <TabsLink active-name="2">
          <TabsLinkItem label="用户管理" link="/a">用户管理</TabsLinkItem>
          <TabsLinkItem label="配置管理" link="/b">配置管理</TabsLinkItem>
        </TabsLink>
      </LayoutToolbar>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>  
    </LayoutMain>
  </div>
</template>
