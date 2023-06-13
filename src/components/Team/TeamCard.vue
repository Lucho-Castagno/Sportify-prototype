<template>  
    <div class="flex align-center justify-center">
        <div class="min-w-xs max-w-md h-60 p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between hover:bg-gray-200 hover:border hover:border-gray-200">
            <router-link to="/team">
                <div class="justify-between mb-[15px] md:mb-0 md:flex ">
                    <div class="flex justify-start">
                        <img class="max-w-[10%] max-h[10%] mb-5 mr-2" src="@/assets/team.png" alt="icono representativo de un equipo">
                        
                            <h5 class="mb-2 font-semibold tracking-tight text-gray-900 text-[1.35em]">Equipo X</h5>
                        
                    </div>
                    <div class=" px-2 py-[1em] border font-bold rounded-md bg-sky-100 flex items-center h-[1em]">
                            <h2 class="m-0">RESISTENCIA</h2>
                    </div>
                </div>
                <p class="mb-3 font-normal text-gray-500">Equipo del turno mañana de los días martes y jueves.</p>
                <p class="mb-3 font-normal text -md text-gray-500">6/9/2023</p>
        </router-link>
        </div>
    </div>
</template>


<script>
export default {}
</script>

<style></style>
