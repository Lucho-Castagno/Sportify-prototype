<template>
  <div
    class="bg-slate-50 text-purple-900 py-3.5 px-6 shadow md:flex justify-between items-center"
  >
    <div class="flex items-center cursor-pointer">
      <router-link @click="MenuClose()" to="/" class="flex items-center">
        <img class="w-10 h-10 mr-2" src="@/assets/logo-black.png" alt="Logo de la aplicacion" />
        <h1 class="text-4xl font-bold">Sportify</h1>
      </router-link>
    </div>

    <span @click="MenuOpen()" class="absolute lg:hidden right-6 top-2 cursor-pointer text-4xl">
      <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
    </span>

    <ul
      class="lg:flex lg:items-center lg:px-0 px-10 lg:pb-0 pb-10 bg-slate-50 lg:static absolute lg:w-auto w-full top-14 duration-700 ease-in"
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <li class="lg:mx-4 lg:my-0 my-6" v-for="link in links" :key="link.key">
        <router-link
          @click="MenuClose()"
          :to="link.link"
          active-class="text-teal-500"
          class="text-2xl hover:text-teal-500 font-semibold"
        >
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Navbar',
  setup() {
    let open = ref(false)
    let links = [
      { key: 1, name: 'Acerca de', link: '/about' },
      { key: 2, name: 'Contacto', link: '/contact' },
      { key: 3, name: 'Equipos', link: '/teams' },
      { key: 4, name: 'Iniciar sesión', link: '/login' },
      { key: 5, name: 'Registrarse', link: '/register' },

    ]

    function MenuOpen() {
      open.value = !open.value
    }

    function MenuClose() {
      open.value = false
    }

    return { links, open, MenuOpen, MenuClose }
  }
}
</script>
