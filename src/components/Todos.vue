<template>
	<div>
		<div v-for="todo of note.todos.filter( (el,index) => index<=1)"> 
			<span v-bind:class="{done : todo.completed}">{{todo.title}} </span>
			<input type="checkbox" disabled v-bind:checked="todo.completed">
		</div>
	</div>
</template>

<script>
	export default {
		props : ['note'],

	}
</script>

<style>
	span{
		color : #808080;
	}
	.done{
		text-decoration: line-through;
	}
</style>