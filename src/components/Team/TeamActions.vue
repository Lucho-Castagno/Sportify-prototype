<template>
    <div class="flex justify-center mt-5">
        <button @click="players()"  :class="playersActive ? 'bg-sportify-purple text-white hover:bg-sportify-purple-2' : ''" type="button" class=" text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2" >Jugadores</button>
        <button @click="training()" :class="trainingActive ? 'bg-sportify-purple text-white hover:bg-sportify-purple-2' : ''" type="button" class="text-gray-900  border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2">Entrenamientos</button>
        <button @click="statistics()" :class="statisticsActive ? 'bg-sportify-purple text-white hover:bg-sportify-purple-2' : ''" type="button" class="text-gray-900  border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2">Estadísticas</button>
    </div>
    
</template>

<script>
export default {
    props: {
        playersActive: Boolean,
        trainingActive: Boolean,
        statistics: Boolean
    },
    methods: {
        players() {
            this.playersActive = true;
            this.trainingActive = false;
            this.statisticsActive = false;
            this.$emit('players')
        },
        training() {
            this.playersActive = false;
            this.trainingActive = true;
            this.statisticsActive = false;
            this.$emit('training')
        },
        statistics() {
            this.playersActive = false;
            this.trainingActive = false;
            this.statisticsActive = true;
            this.$emit('statistics')
        }
    },
    data() {
        return {
            playersActive: true,
            trainingActive: false,
            statisticsActive: false
        }
    }
}
</script>

<style>
.active {
    background-color: green;
}
.nonactive {
    background-color: gray;
}
</style>