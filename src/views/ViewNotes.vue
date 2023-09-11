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
        <Note v-for="(note, index) in notesStore.notes" :key="note.id" :note="note" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '../components/Notes/Note.vue';
import { useNotesStore } from '@/stores/notesStore'

const newNote = ref('')
const newNoteRef = ref(null)
const notesStore = useNotesStore()

const addNote = () => {
    notesStore.addNote(newNote.value)
    newNote.value = ''
    newNoteRef.value.focus()
}
</script>