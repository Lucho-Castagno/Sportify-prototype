<template>
    <Header title="Entrenamientos" description="En esta sección podés adeministrar los entrenamientos de cada mes." />
    <TrainingList />
</template>

<script>
import TrainingList from '@/components/Training/TrainingList.vue'
import Header from '../components/Header.vue';

export default {
name: 'TrainingView',
components: {
    TrainingList,
    Header
},
}
</script>