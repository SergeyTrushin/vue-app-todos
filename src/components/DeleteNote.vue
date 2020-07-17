<template>
	<div class='background'>
		<div class="modal">
			<span>Do you want to delete the note - <b>{{ note.title }}</b></span>
	

			<div class="button-block">
				<button class="btn large" @click="$emit('deleteNote',note.id,title)" style="margin-right: 1rem">
					confirm 
				</button>

				<button class="btn large" @click="$emit('cancel',note.id)">
					cancle
				</button>
			</div>
	
		</div>
	</div>
</template>

<script>
	export default {
		props : ['note','title'],
		methods:{
		}
	}
</script>

<style scoped>
	.background{
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,.5);
	}

	.modal{
		position: relative;
		width: 350px;
		height: 150px;
		background: #fff;
		border-radius: 5px; 
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.button-block{
		margin-top: 25px;
	}

	b{
		color: #000;
	}
</style>