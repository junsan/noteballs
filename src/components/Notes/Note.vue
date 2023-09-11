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
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" @click.prevent="handleDeleteNote(note)" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['deleteClicked'])

const charLength = computed(() => {
    let len = props.note.content.length
    let chars = len > 1 ? 'characters' : 'character'
    return `${len} ${chars}`
})

const handleDeleteNote = (note) => {
    emit('deleteClicked', note)
}

</script>