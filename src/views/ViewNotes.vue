<template>
    <div class="notes">
        <br>
        <AddEditNote v-model="newNote" ref="addEditRef">
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
const addEditRef = ref(null)

const addNote = () => {
    notesStore.addNote(newNote.value)
    newNote.value = ''
    addEditRef.value.focusTextarea()
}
</script>