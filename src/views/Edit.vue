<template>
  <div>

  	<h1>Edit Note</h1>

	<button class="btn" @click="cancel">
		cancel
	</button>

  	<hr>

	<h4>

		{{editTitle ? "" : newNote.title}}

		<input type="text" v-if="editTitle" v-model="newNote.title">

		<button class="btn" @click="!editTitle? editTitle=true :editTitle=false ">
			{{!editTitle ? "edit" : "ok"}}
		</button>

	</h4>

	<input class="note-text" type="text" placeholder="Add Todo:" v-model:value="taskTitle">

	<button  class="add-button" @click="addTodo(taskTitle)">
		+
	</button>

	<div id="todo" v-for="todo of newNote.todos">

		<input type="text" v-if="todoConf === todo.id"
						   v-model:value="todo.title">

		<span v-else v-bind:class="{done : todo.completed}">
			{{todo.title}}
		</span>

		<div>

			<input type="checkbox" v-model:checked="todo.completed">

			<button class="btn" @click="editTodo(todo.id, todo.title)">
				{{todoConf===todo.id ? "ok" : "edit" }}
			</button>

			<button class="btn-delete" style="margin-right: 1rem" 
					@click="deleteTodo(todo.id)">
				delete
			</button>


		</div>

	</div>
	<br>

	<button class="btn" @click="updateNote(newNote)">save</button>
	<button class="btn-delete large" @click="!deleteThis ? deleteThis = true : ''">delete note</button>
	<DeleteNote v-if="deleteThis" 
				:note="newNote" 
				@cancel="openCloseModal"
				@deleteNote="deleteNote"
				:title="message"
				/>
  </div>
</template>

<script>
import DeleteNote from '@/components/DeleteNote'

export default {

	components : {
		DeleteNote
	},
	
	data(){
		return{
			newNote: {...this.$store.getters.allNotes.find(el=>el.id===+this.$route.params.id)},
			newTodos : [...this.$store.getters.allNotes.find(el=>el.id===+this.$route.params.id).todos],
			deleteThis : false,
			editTitle: false,
			taskTitle : "",
			todoConf : "",
			message:""	
		}
	},
	methods:{
		updateNote(note){
			this.$store.dispatch("updateNote", note)
			this.$router.push("/")
		},
		openCloseModal(){
			this.deleteThis = !this.deleteThis
		},
		deleteNote(id){
			this.$router.push('/')
			this.$store.dispatch("deleteNote", id)		
		},
		deleteTodo(id){
			this.newNote.todos =this.newNote.todos.filter(el=>el.id!=id)  
		},
		addTodo(title){
			if (this.taskTitle.trim()){
				this.newNote.todos = [
					...this.newNote.todos,
					{	title,
						id:Date.now(),
						completed: false
					}
				]
			}
			this.taskTitle = ""
		},
		editTodo(id,title){
			if(title.trim()){
				this.todoConf ? this.todoConf = "" : this.todoConf = id
			}
		},
		cancel(){
			this.$router.push('/')
		}
	}
}
</script>

<style>
	#todo{
		display: flex;
		width: 40%;
		justify-content: space-between;
	}
	h1{
		color: #b5beff;
	}
	.done{
		text-decoration: line-through;
	}

	.add-button{
		border: none;
		color: #fff;
		font-size: 17px;
		background: #42a2ff;
		margin-left: 10px;
	}
	.note-text {
		height: 1.3rem;
		width: 50%;
		margin: 1rem 0;
		text-align: center;
	}
</style>
