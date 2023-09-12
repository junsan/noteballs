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
        },
        updateNote(id, content) {
            let index = this.notes.findIndex((note) => note.id === Number(id))
            this.notes[index].content = content
        }
    },
    getters: {
      getNoteContent: (state) => {
        return (id) => {
            return state.notes.filter((note) => { return note.id === Number(id) })[0].content
        }
      },
      totalCountNotes: (state) => {
        return state.notes.length
      },
      totalCharactersNotes: (state) => {
        let count = 0
        
        state.notes.forEach((note) => {
            count += note.content.length
        })

        return count
      }
    }
  })