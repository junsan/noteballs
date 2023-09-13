<template>
    <div class="card mb-5">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-3">
                    {{ charLength }}
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="`/edit-note/${note.id}`" class="card-footer-item">Edit</RouterLink>
            <a href="#" @click.prevent="showModal.deleteNote = true" class="card-footer-item">Delete</a>
        </footer>
        <ModalDeleteNote v-model="showModal.deleteNote" v-if="showModal.deleteNote" :noteId="note.id"></ModalDeleteNote>
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { useNotesStore } from '../../stores/notesStore';
import ModalDeleteNote from './ModalDeleteNote.vue';

const notesStore = useNotesStore()
const showModal = reactive({
    deleteNote: false
})

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const charLength = computed(() => {
    let len = props.note.content.length
    let chars = len > 1 ? 'characters' : 'character'
    return `${len} ${chars}`
})

</script>