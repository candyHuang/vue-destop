<script>
export default {
  name: 'TabPage',
  props: {
    title: {
      type: String,
      require: true
    }
  },
  render(h) {
    return (
      <span>{this.$slots.default}</span>
    )
  }
}
</script>
