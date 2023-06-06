<template>
    <div class="bg-gray-900 text-gray-100 py-3 5 px-6 shadow md:flex justify-between items-center">
        <div class="flex items-center cursor-pointer">
            <router-link class="text-xl" to="/">Sportify!</router-link>
        </div>
        <ul class="md:flex md:items-center">
            <li class="md:mx-4">
                <router-link class="text-xl hover:text-green-500" to="/about">Sobre nosotros</router-link>
            </li>
            <li class="md:mx-4">
                <router-link class="text-xl hover:text-green-500" to="/">Contactenos</router-link>
            </li>
            <li class="md:mx-4">
                <router-link class="text-xl hover:text-green-500" to="/">Regristrarse</router-link>
            </li>
            <li class="md:mx-4">
                <router-link class="text-xl hover:text-green-500" to="/">Iniciar sesion</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>