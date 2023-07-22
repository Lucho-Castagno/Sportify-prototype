
<template>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full rounded-lg  md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8 text-purple-700 dark:text-purple-50">
            <h1 class="text-xl font-bold leading-tight tracking-tight md:text-3xl ">
                  Opciones de accesibilidad
            </h1>
            <div class="space-y-4 md:space-y-6">
                <div>
                    <label for="theme" class="block mb-2 text-md font-medium">Tema</label>
                    <div class="flex justify-center">
                        <label for="theme" class="mb-2 mr-6 text-md font-medium">Claro</label>
                        <button @click="cambiarTema()" class="w-10 h-5 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow">
                            <div id="switch-toggle" class="w-6 h-6 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white dark:bg-gray-700 dark:translate-x-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path v-if="light" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />

                                </svg>
                            </div>
                        </button>
                        <label for="theme" class="mb-2 ml-6 text-md font-medium">Oscuro</label>
                    </div>
                </div>
                <div>
                    <label for="font-size" class="block mb-2 text-md font-medium">Tamaño de la letra</label>
                
                    <div class="flex flex-col space-y-2 p-2 w-80">
                        <input type="range" class="w-full" min="1" max="3" step="1"/>
                        <ul class="flex justify-between w-full px-[10px]">
                            <li class="flex justify-center relative"><span class="absolute">Chica</span></li>
                            <li class="flex justify-center relative"><span class="absolute">Mediana</span></li>
                            <li class="flex justify-center relative"><span class="absolute">Grande</span></li>

                        </ul>
                    </div>
                </div>
                  
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { useDark, useToggle } from "@vueuse/core"

const isDark = useDark();
const toggleDark = useToggle(isDark);


export default {
  name: "AccesibilitySettings",
  data() {
    return {
      light: true
    }
  },
  methods: {
    cambiarTema: function (event) {
        toggleDark();
        this.light = !this.light;
    }
  }
}
</script>