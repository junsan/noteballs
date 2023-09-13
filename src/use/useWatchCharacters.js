import { watch } from 'vue'

export const useWatchCharacters = (watchCharacter) => {
    watch(watchCharacter, (newValue, oldValue) => {
        if(newValue.length === 100) {
            alert('Maximum 100 characters only')
        }
    })
}