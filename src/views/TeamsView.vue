<template>
    <Header title="Equipos" description="En esta sección puedes ver los equipos de los que formas parte." />    
    <div class="flex h-full items-center justify-center">
                <div class="grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3 gap-10 2xl:p-10 xs:p-15 sm:p-20">
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
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
import Header from '../components/Header.vue';
import TeamCard from '../components/Team/TeamCard.vue';

export default {
name: 'TeamsView',
components: {
    Header,
    TeamCard
},
data() {
    return {}
}
}
</script>