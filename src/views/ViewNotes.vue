<template>
    <div class="notes">
        <br>
        <div class="card has-background-success-dark px-4 py-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea ref="newNoteRef" v-model="newNote" class="textarea" placeholder="Add a note"></textarea>
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button :disabled="!newNote"  @click="addNote" class="button is-link has-background-success">Add Note</button>
                </div>
            </div>
        </div>
        <Note @deleteClicked="removeNote" v-for="(note, index) in notes" :key="note.id" :note="note" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '../components/Notes/Note.vue';

const newNote = ref('')
const newNoteRef = ref(null)

const notes = ref([
    {
        id: 1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    {
        id: 2,
        content: "This is a short note. Woo!"
    },
    
])

const addNote = () => {
    let id = Math.floor(Math.random() * 100)
    
    let note = {
        id: id,
        content: newNote.value
    }

    notes.value.unshift(note)
    newNote.value = ''
    newNoteRef.value.focus()
}

const removeNote = (deleteNote) => {
    notes.value = notes.value.filter((note) => { return note.id !== deleteNote.id })
}
</script>