<template>
	<el-button @click.native="onToggle" class="search-form-toggle" type="text">
		{{innerToggle ? '隐藏部分' : '显示全部'}}搜索条件
	  <i class="el-icon--right" :class="{'el-icon-caret-top': innerToggle,'el-icon-caret-bottom': !innerToggle }"></i> 
	</el-button>
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
