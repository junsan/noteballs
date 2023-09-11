<template>
    <div class="card has-background-success-dark px-4 py-4 mb-5">
        <div class="field">
            <div class="control">
                <textarea :value="modelValue" 
                @input="$emit('update:modelValue', $event.target.value)" ref="newNoteRef" class="textarea" placeholder="Add a note"></textarea>
            </div>
        </div>
        <slot name="button"></slot>
    </div>
</template>

<script setup>

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

</script>