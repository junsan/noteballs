<template>
    <div class="edit-note">
        <br>
        <AddEditNote bgColor="link" noteLabel="Edit note" v-model="editNote" ref="addEditRef">
            <template #button>
                <div class="field is-grouped is-grouped-right">
                    <div class="control">
                        <button @click="$router.back()" class="button is-link">Cancel</button> &nbsp; 
                        <button :disabled="!editNote" class="button is-link has-background-link">Edit Note</button>
                    </div>
                </div>
            </template>    
        </AddEditNote>
    </div>
</template> 

<script setup>
import { ref } from 'vue'
import AddEditNote from '../components/Notes/AddEditNote.vue';

const editNote = ref('')

</script>