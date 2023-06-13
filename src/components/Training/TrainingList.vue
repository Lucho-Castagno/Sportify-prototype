<template>
        <div class="flex justify-center pt-5">
                <select id="large" class="block w-[10%] px-4 py-3 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                <option value="Enero">Enero</option>
                <option value="Febrero">Febrero</option>
                <option value="Marzo">Marzo</option>
                <option value="Abril">Abril</option>
                <option value="Junio">Junio</option>
                <option value="Julio">Julio</option>
                <option value="Agosto">Agosto</option>
                <option value="Septiembre">Septiembre</option>
                <option value="Octubre">Octubre</option>
                <option value="Noviembre">Noviembre</option>
                <option value="Diciembre">Diciembre</option>
                </select>
         </div>
        <div class="flex h-full items-center justify-center">
                <div class="grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3 gap-10 2xl:p-10 xs:p-15 sm:p-20">
                        <TrainingCard />
                        <TrainingCard />
                        <TrainingCard />
                        <TrainingCard />
                        <TrainingCard />
                        <TrainingCard />
                </div>
                <button type="button" class="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span class="sr-only">Next</span>
                        </span>
                </button>
        </div>
</template>

<script>
import TrainingCard from './TrainingCard.vue';

export default { components: { TrainingCard } }
</script>

<style></style>
