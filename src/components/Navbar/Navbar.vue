<template>
  <div
    class="absolute w-screen bg-slate-50 text-purple-900 py-3 px-52 shadow-xl md:flex justify-between items-center shadow-xl"
  >
    <div class="flex items-center cursor-pointer">
      <router-link @click="MenuClose()" to="/" class="flex items-center">
        <img class="w-10 h-10 mr-2" src="@/assets/logo-black.png" alt="Logo de la aplicacion" />
        <div class="text-3xl font-bold">Sportify</div>
      </router-link>
    </div>

    <span @click="MenuOpen()" class="absolute md:hidden right-6 top-2 cursor-pointer text-3xl">
      <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
    </span>
    <ul
      class="md:shadow-none shadow-xl md:flex md:items-center md:px-0 px-10 md:pb-0 pb-15 bg-slate-50 md:static absolute md:w-auto w-full top-15 duration-700 ease-in"
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <li class="md:mx-4 md:my-0 my-6" v-for="link in links" :key="link.key">
        <router-link
          @click="MenuClose()"
          :to="link.link"
          active-class="text-teal-500"
          class="text-xl hover:text-teal-500 font-semibold rounded"
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
      { key: 3, name: 'Iniciar sesión', link: '/login' },
      { key: 4, name: 'Registrarse', link: '/register' }
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
