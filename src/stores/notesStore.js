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

    // getters: {
    //   doubleCount: (state) => state.count * 2,
    // },
    // actions: {
    //   increment() {
    //     this.count++
    //   },
    // },
  })