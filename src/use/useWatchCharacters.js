import { watch } from 'vue'

export const useWatchCharacters = (watchCharacter, maxChars = 100) => {
    watch(watchCharacter, (newValue, oldValue) => {
        if(newValue.length === maxChars) {
            alert(`Maximum ${maxChars} characters only`)
        }
    })
}