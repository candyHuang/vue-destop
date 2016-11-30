<template>
  <div id="app">
    <LayoutSidebar></LayoutSidebar>
    <LayoutMain>
      <LayoutToolbar slot="toolbar">
        <TabsLink active-name="1">
          <TabsLinkItem label="消息提示" link="/msg"></TabsLinkItem>
          <TabsLinkItem label="上传" link="/upload"></TabsLinkItem>
        </TabsLink>
      </LayoutToolbar>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>  
    </LayoutMain>
  </div>
</template>
