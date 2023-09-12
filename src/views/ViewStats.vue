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
    </div>
</template>

<script setup>
import { useNotesStore } from '../stores/notesStore';

const noteStore = useNotesStore()

</script>