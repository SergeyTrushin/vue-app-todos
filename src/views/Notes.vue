<template>
  <div>
    <h1>All Notes</h1>
    <AddNote
      v-if="showAddNote"
      @closeAddNote="showAddModal()"
      @addNote="addNote"
    />

    <button class="btn large" @click="showAddModal">Add Note</button>
    <hr />
    <div v-for="note of allNotes" :key="note.id">
      <h4>
        {{ note.title }}

        <router-link :to="'/edit/id=' + note.id" tag="button" class="btn">
          edit
        </router-link>
        <button class="btn-delete" @click="openCloseModal(note.id)">
          delete
        </button>

        <DeleteNote
          v-if="note.id === confId"
          :note="note"
          @cancel="openCloseModal"
          @deleteNote="deleteNote"
        />
      </h4>

      <Todos v-bind:note="note" />
    </div>

    <div v-if="allNotes.length === 0">
      <h4>No Notes!</h4>
    </div>
  </div>
</template>

<script>
import Todos from "@/components/Todos";
import AddNote from "@/components/AddNote";
import DeleteNote from "@/components/DeleteNote";

export default {
  components: {
    Todos,
    AddNote,
    DeleteNote,
  },
  data() {
    return {
      showAddNote: false,
      confId: "",
    };
  },
  methods: {
    showAddModal() {
      this.showAddNote = !this.showAddNote;
    },
    addNote(note) {
      this.$store.dispatch("createNote", note);
    },
    openCloseModal(id) {
      if (!this.confId) {
        this.confId = id;
      } else {
        this.confId = "";
      }
    },
    deleteNote(id) {
      this.$store.dispatch("deleteNote", id);
    },
  },
  computed: {
    allNotes() {
      return this.$store.getters.allNotes;
    },
  },
};
</script>

<style>
h1 {
  color: #b5beff;
}

.btn-delete {
  margin-left: 0.5rem;
  background: red;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 3rem;
  height: 1.3rem;
}
.btn {
  background: #42a2ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 3rem;
  height: 1.3rem;
}

.btn:focus {
  outline: none;
}

.btn:hover {
  cursor: pointer;
}
.large {
  width: 7rem;
}

.isActive {
  display: flex;
}

.inactive {
  display: none;
}
</style>
