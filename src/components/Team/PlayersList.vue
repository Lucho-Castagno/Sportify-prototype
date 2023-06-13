<template>
    <div class="h-full w-[50%] px-20 py-10 pt-5">
        <div>
            <h2 class="text-2xl font-semibold ">Listado de jugadores</h2>
            <hr class="h-px my-6 bg-gray-200 border-0">
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-blue-100">
                <thead class="text-xs text-white uppercase bg-sportify-purple-3">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-md">
                            Nombre
                        </th>
                        <th scope="col" class="px-6 py-3 text-md">
                            Posición
                        </th>
                        <th scope="col" class="px-6 py-3 text-md">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-sportify-purple-2 border-b border-white-400">
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="@/assets/profile.png" alt="Imágen de perfil">
                            <div class="pl-3">
                                <div class="text-base font-semibold">Pedro Gomez</div>
                                <div class="font-normal">pedro.gomez@gmail.com</div>
                            </div>  
                        </th>
                        <td class="px-6 py-4 text-lg">
                            Hooker
                        </td>
                        <td class="px-6 py-4">
                            <button type="button" class="text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Ver perfil</button>
                        </td>
                    </tr>
                    <tr class="bg-sportify-purple-2 border-b border-white-400 text-lg">
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="@/assets/profile.png" alt="Imágen de perfil del jugador">
                            <div class="pl-3">
                                <div class="text-base font-semibold">Juan Rodriguez</div>
                                <div class="font-normal">juan.rodriguez@gmail.com</div>
                            </div>  
                        </th>
                        <td class="px-6 py-4">
                            Apertura
                        </td>
                        <td class="px-6 py-4">
                            <button type="button" class="text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Ver perfil</button>
                        </td>
                    </tr>
                    <tr class="bg-sportify-purple-2 border-b border-white-400">
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="@/assets/profile.png" alt="Imágen de perfil del jugador">
                            <div class="pl-3">
                                <div class="text-base font-semibold">Martín Perez</div>
                                <div class="font-normal">martin.perez@gmail.com</div>
                            </div>  
                        </th>
                        <td class="px-6 py-4 text-lg">
                            Medio scrum
                        </td>
                        <td class="px-6 py-4">
                            <button type="button" class="text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Ver perfil</button>
                        </td>
                    </tr>
                    <tr class="bg-sportify-purple-2 border-b border-white-400">
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="@/assets/profile.png" alt="Imágen de perfil del jugador">
                            <div class="pl-3">
                                <div class="text-base font-semibold">Jorge Rodriguez</div>
                                <div class="font-normal">jorge.rodriguez@gmail.com</div>
                            </div>  
                        </th>
                        <td class="px-6 py-4 text-lg">
                            Wing derecho
                        </td>
                        <td class="px-6 py-4">
                            <button type="button" class="text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Ver perfil</button>
                        </td>
                    </tr>
                    <tr class="bg-sportify-purple-2 border-white-40">
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="@/assets/profile.png" alt="Imágen de perfil del jugador">
                            <div class="pl-3">
                                <div class="text-base font-semibold">Juan Fernandez</div>
                                <div class="font-normal">juan.fernandez@gmail.com</div>
                            </div>  
                        </th>
                        <td class="px-6 py-4 text-lg">
                            Full back
                        </td>
                        <td class="px-6 py-4">
                            <button type="button" class="text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Ver perfil</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
export default {}
</script>
