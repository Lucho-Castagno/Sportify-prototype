<template>
<div class="grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3 gap-10 p-10 xs:p-15 sm:p-20">
        <TrainingCard />
        <TrainingCard />
        <TrainingCard />
        <TrainingCard />
</div>
</template>

<script>
import TrainingCard from './TrainingCard.vue';

export default { components: { TrainingCard } }
</script>

<style></style>
