<template>
	<div class='background'>
		<div class="modal">
			<input class="note-text" v-model="note.title" type="text" placeholder="Enter the note's title:">
			<button class="close-modal" @click="$emit('closeAddNote');clearAll()">X</button>
			<hr>
			<h4>Todos:</h4>
			<input class="task-text" type="text" v-model="taskTitle" placeholder="Add Todo:">
			<button  class="add-button" @click="addTask(taskTitle)">+</button>
			<ul>
				<li class="item" v-for="task of note.todos">
					<span v-bind:class="{done : task.completed}">
						{{task.title}}
						<input type="checkbox" @change="toggle(task.id)">
					</span>
					
					<button class="delete-button" @click="deleteTask(task.id)">DELETE</button>
				</li>
			</ul>

			<button class="addNote" @click="addNote">
				CONFIRM
			</button>
		</div>
	</div>
</template>

<script>
	export default{
			data(){
				return{
					note :{
						id:Date.now(),
						todos: [],
						title : '',
					},
					taskTitle : ''
				}
			},
			methods : {
				addTask(title){
					if (title.trim()){
						this.note.todos.push({
							id: Date.now(),
							title,
							completed: false
						})
						this.taskTitle = ""
					}
				},
				addNote(){ 
					if(this.note.title.trim()){
						this.$emit('closeAddNote'); 
						this.$emit('addNote', this.note);
						
						
					}
				},
				deleteTask(id){
					this.note.todos = this.note.todos.filter(el=>el.id!==id)
				},
				toggle(id){
					this.note.todos = this.note.todos.map(el=>{el.id===id ? el.completed = !el.completed:""; return el})
				},
				clearAll(){
					this.note.todos=[]
					this.note.title = ''
					this.taskTitle = ''
				}
			}
		}
</script>

<style scoped>

	h4{
		padding: 1rem;
	}
	input{
		border: 0.5px solid #ccc;
		border-radius: 5px;
		padding: 5px;
	}

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
		width: 600px;
		height: 500px;
		background: #fff;
		border-radius: 5px; 
	}

	.note-text {
		display: block;
		height: 2rem;
		width: 80%;
		margin: 2rem auto;
		text-align: center;
	}
	.task-text{
		height: 2rem;
		width: 85%;
		margin: 0 15px;
	}
	h2{
		color: grey;
	}
	.close-modal{
		position: absolute;
		top: 10px;
		font-size: 13px;
		font-weight: bold;
		width: 20px;
		height: 20px;
		font-size: 10px;
		right: 10px;
		background: red;
		color: #fff;
		border: none;
		border-radius: 50%;
		outline: none;
	}
	.add-button{
		border: none;
		color: #fff;
		font-size: 17px;
		background: #42a2ff;
	}

	ul{
		margin: 1rem 0;
		padding: 0;
	}

	.delete-button{
		border-radius: 5px;
		border: none;
		background: red;
		color: #fff;
		margin-right: 1rem;
	}

	.item span {
		margin-left: 1rem;
	}


	.item{
		display: flex;
		justify-content: space-between;
		margin-bottom: 15px;
	}

	.done{
		text-decoration: line-through;
	}

	.addNote{
		display: block;
		margin: 15px auto;
		height: 2rem;
		border-radius: 5px;
		color: #fff;
		background: #42a2ff;
		border: none;
	}
</style>