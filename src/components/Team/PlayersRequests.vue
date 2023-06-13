<template>
    <div class="h-full w-[40%] px-20 py-10 pt-5">
        <div>
            <div class="flex">
                <h2 class="text-2xl font-semibold ">Solicitudes de nuevos jugadores</h2>
                <div class="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full">2</div>
            </div>
            <hr class="h-px my-6 bg-gray-200 border-0">
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-blue-100">
                <thead class="text-xs text-white uppercase bg-gray-600">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-md">
                            Nombre
                        </th>
                        <th scope="col" class="px-6 py-3 text-md">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-gray-500 border-b border-white-400">
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="@/assets/profile.png" alt="Imágen de perfil del jugador">
                            <div class="pl-3">
                                <div class="text-base font-semibold">Jorge Rodriguez</div>
                                <div class="font-normal">jorge.rodriguez@gmail.com</div>
                            </div>  
                        </th>
                        <td class="px-6 py-4">
                            <button type="button" class="mr-3 text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Aceptar</button>
                            <button type="button" class="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Rechazar</button>
                        </td>
                    </tr>
                    <tr class="bg-gray-500 border-white-40">
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="@/assets/profile.png" alt="Imágen de perfil del jugador">
                            <div class="pl-3">
                                <div class="text-base font-semibold">Juan Fernandez</div>
                                <div class="font-normal">juan.fernandez@gmail.com</div>
                            </div>  
                        </th>
                        <td class="px-6 py-4">
                            <button type="button" class="mr-3 text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Aceptar</button>
                            <button type="button" class="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Rechazar</button>                    </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
export default {}
</script>