<template>
    <div class="bg-gray-900 text-gray-100 py-3 5 px-6 shadow md:flex justify-between items-center">
        <div class="flex items-center cursor-pointer">
            <router-link @click="MenuClose()" class="text-xl" to="/">Sportify!</router-link>
        </div>

        <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
            <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
        </span>

        <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-15 md:static absolute bg-gray-900 md:w-auto w-full top-10 duration-700 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
            <li class="md:mx-4 md:my-0 my-6" v-for="link in links" :key="link.key">
                <router-link @click="MenuClose()" class="text-xl hover:text-green-500" :to="link.link">{{ link.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        let open = ref(false);
        let links = [
            {key: 1, name: "Sobre nosotros", link: "/about"},
            {key: 2, name: "Contactenos", link: "/"},
            {key: 3, name: "Registrarse", link: "/"},
            {key: 4, name: "Iniciar sesion", link: "/"},
        ];

        function MenuOpen(){
            open.value = !open.value;
        }
        
        function MenuClose(){
            open.value = false;
        }

        return{links, open, MenuOpen, MenuClose}
    }
}
</script>