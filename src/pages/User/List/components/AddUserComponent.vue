<script>
export default {
	emits: ['submit'],
	data() {
		return {}
	},
	methods: {
		submit() {
			this.$emit('submit');
		}
	}
}
</script>

<template>
	<div>
		<input type="text">
	</div>
</template>

<style scoped>
</style>
