import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {
    state: () => (
        { 
            notes: [
                {
                    id: 1,
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
                },
                {
                    id: 2,
                    content: "This is a short note. Woo!"
                }
            ] 
        }
    ),
    actions: {
        addNote(noteParam) {
            let id = Math.floor(Math.random() * 100)
    
            let note = {
                id: id,
                content: noteParam
            }

            this.notes.unshift(note)
        }, 
        deleteNote(id) {
            this.notes = this.notes.filter((note) => { return note.id !== id })
        }
    }
    // getters: {
    //   doubleCount: (state) => state.count * 2,
    // },
  })