<template>
    <div class="edit-note">
        <br>
        <AddEditNote bgColor="link" noteLabel="Edit note" v-model="editNote" ref="addEditRef">
            <template #button>
                <div class="field is-grouped is-grouped-right">
                    <div class="control">
                        <button @click="$router.back()" class="button is-link">Cancel</button> &nbsp; 
                        <button @click="updateNote" :disabled="!editNote" class="button is-link has-background-link">Edit Note</button>
                    </div>
                </div>
            </template>    
        </AddEditNote>
    </div>
</template> 

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import AddEditNote from '../components/Notes/AddEditNote.vue';
import { useNotesStore } from '../stores/notesStore';

const route = useRoute()
const router = useRouter()
const editNote = ref('')
const noteStore = useNotesStore()

editNote.value = noteStore.getNoteContent(route.params.id);

const updateNote = () => {
    noteStore.updateNote(route.params.id, editNote.value)
    router.push('/')
}

</script>