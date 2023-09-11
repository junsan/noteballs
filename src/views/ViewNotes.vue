<template>
    <div class="notes">
        <br>
        <AddEditNote v-model="newNote">
            <template #button>
                <div class="field is-grouped is-grouped-right">
                    <div class="control">
                        <button :disabled="!newNote"  @click="addNote" class="button is-link has-background-success">Add Note</button>
                    </div>
                </div>
            </template>    
        </AddEditNote>
        <Note v-for="(note, index) in notesStore.notes" :key="note.id" :note="note" />
        {{ newNote }}
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '../components/Notes/Note.vue';
import { useNotesStore } from '@/stores/notesStore'
import AddEditNote from '../components/Notes/AddEditNote.vue';

const newNote = ref('')
const newNoteRef = ref(null)
const notesStore = useNotesStore()

const addNote = () => {
    notesStore.addNote(newNote.value)
    newNote.value = ''
    newNoteRef.value.focus()
}
</script>