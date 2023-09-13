<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4">Noteballs</div>

                <a role="button" class="navbar-burger" ref="navbarBurger" :class="{ 'is-active': showDropDown }" 
                @click.prevent="showDropDown = !showDropDown" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showDropDown }" ref="navBarRef" >
                <div class="navbar-start">
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <RouterLink @click="showDropDown = false" class="navbar-item" active-class="is-active" to="/">
                            Notes
                        </RouterLink>
                        <RouterLink @click="showDropDown = false" class="navbar-item" active-class="is-active" to="/stats">
                            Stats
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'


const showDropDown = ref(false)
const navBarRef = ref(null)
const navbarBurger = ref(null)

onClickOutside(navBarRef, (event) => {
    showDropDown.value = false
},
{
    ignore: [navbarBurger]
})

</script>