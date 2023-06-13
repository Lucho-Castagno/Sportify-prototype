<template>
    <div class="flex">
        <PlayersList />
        <PlayersRequests />
    </div>
</template>

<script>
import PlayersList from './PlayersList.vue'
import PlayersRequests from './PlayersRequests.vue';

export default {
name: 'Players',
components: {
    PlayersList,
    PlayersRequests
}
}
</script>