<template>
    <div class="modal is-active p-5">
        <div class="modal-background"></div>
        <div class="modal-card" ref="closeModalRef">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete Note</p>
                <button @click="closeModal" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
             <p>Are you sure you want to delete that note?</p>
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end">
                <button @click="closeModal" class="button">Cancel</button>
                <button class="button is-danger">Delete</button>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
    emit('update:modelValue', false)
}

const closeModalRef = ref(null)

onClickOutside(closeModalRef, closeModal)

const handledKeyboard = e => {
    if(e.key === 'Escape') closeModal()
}

onMounted(() => {
    document.addEventListener('keyup', handledKeyboard)
})

onUnmounted(() => {
    document.removeEventListener('keyup', handledKeyboard)
})

</script>