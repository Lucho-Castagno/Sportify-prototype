<template>
    <Header title="Equipo Ejemplo" description="En esta sección puedes adeministrar todo lo correspondiente a este equipo." />
    <div class="flex justify-center">    
        <TeamActions @players="selectedAction='Players'" @training="selectedAction='TrainingList'" @statistics="selectedAction='Statistics'"/>
    </div>
    <component :is="selectedAction"/>
    
</template>

<script>
import PlayersList from '@/components/Team/PlayersList.vue'
import Header from '../components/Header.vue';
import TeamActions from '@/components/Team/TeamActions.vue'
import Players from '../components/Team/Players.vue';
import PlayersRequests from '../components/Team/PlayersRequests.vue';
import TrainingList from '../components/Training/TrainingList.vue';
import Statistics from '../components/Team/Statistics.vue';

export default {
name: 'TeamView',
components: {
    PlayersList,
    Header,
    TeamActions,    
    PlayersRequests,
    Players,
    TrainingList,
    Statistics
},
data() {
    return {selectedAction: 'Players'}
}
}
</script>