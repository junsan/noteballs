<template>
    <div class="card px-4 py-4 mb-5"
        :class="`has-background-${bgColor}-dark`"
    >
        <label class="label has-text-white" v-if="noteLabel">{{ noteLabel }}</label>
        <div class="field">
            <div class="control">
                <textarea :value="modelValue" 
                @input="$emit('update:modelValue', $event.target.value)" ref="textareaRef" class="textarea" maxlength="100" :placeholder="placeholder" v-autofocus></textarea>
            </div>
        </div>
        <slot name="button"></slot>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'

const textareaRef = ref(null)

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        default: 'success'
    },
    noteLabel: {
        type: String
    },
    placeholder: {
        type: String,
        default: 'Type something...'
    }
})

const emit = defineEmits(['update:modelValue'])

const focusTextarea = () => {
    textareaRef.value.focus()
}

defineExpose({
    focusTextarea
})


</script>