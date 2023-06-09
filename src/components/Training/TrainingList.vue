<template>
<div class="grid grid-cols-2 md:grid-cols-3 gap-10 p-40">
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
