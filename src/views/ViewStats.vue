<template>
    <div class="stats">
        <table class="table mt-5">
            <thead>
                <tr>
                    <th>Stats</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of notes</td>
                    <td>{{ noteStore.totalCountNotes }}</td>
                </tr>
                <tr>
                    <td>Number of chararcters of all notes</td>
                    <td>{{ noteStore.totalCharactersNotes }}</td>
                </tr>
            </tbody>
        </table>

        <input v-model="loveNotes" v-autofocus type="text" class="input" placeholder="Do you want noteballs?" >
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotesStore } from '../stores/notesStore';
import { vAutofocus } from '@/directives/vAutofocus'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const loveNotes = ref('')
const noteStore = useNotesStore()

useWatchCharacters(loveNotes)

</script>