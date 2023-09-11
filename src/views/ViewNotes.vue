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
        <Note v-for="note in notes" :key="note.id" :note="note" />
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

    let note = {
        id: 3,
        content: newNote.value
    }

    notes.value.unshift(note)
    newNote.value = ''
    newNoteRef.value.focus()
}

</script>