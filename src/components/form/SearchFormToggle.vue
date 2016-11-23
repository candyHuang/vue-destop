<template>
	<span @click="onToggle" class="w-search-form_toggle">
		{{innerToggle ? '隐藏部分' : '显示全部'}}搜索条件
	  <i class="el-icon--right" :class="{'el-icon-caret-top': innerToggle,'el-icon-caret-bottom': !innerToggle }"></i> 
	</span>
</template>
<script>
export default {
	name: 'SearchFormToggle',
	props: {
		isOpen: {
			type: Boolean,
      default: false
		}
	},
	data() {
		return {
			innerToggle: false
		} 
	},
	methods: {
		onToggle() {
			this.innerToggle = !this.innerToggle
			this.$emit('toggle', this.innerToggle)
		}
	},
	watch: {
		isOpen(val) {
			this.innerToggle = val
		}
	},
	mounted() {
		this.innerToggle = this.isOpen
	}
}
</script>
<style lang="less">
  @import '~assets/styles/var.less';
	.w-search-form_toggle {
		float: left;
		padding-top: 10px;
		font-size: 14px;
		color: @btnPrimaryColor;
		cursor: pointer;
	}
</style>
