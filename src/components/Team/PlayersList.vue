<template>
    <div class="h-full w-[50%] px-20 py-10">
        <h2 class="text-2xl font-bold mb-10 text-center">Listado de jugadores</h2>
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
                            Acción
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-sportify-purple-2 border-b border-white-400">
                        <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap text-lg">
                            Pedro Perez
                        </th>
                        <td class="px-6 py-4 text-lg">
                            Hooker
                        </td>
                        <td class="px-6 py-4">
                            <button type="button" class="text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Ver perfil</button>
                        </td>
                    </tr>
                    <tr class="bg-sportify-purple-2 border-b border-white-400 text-lg">
                        <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap text-lg">
                            Carlos Sanchez
                        </th>
                        <td class="px-6 py-4">
                            Apertura
                        </td>
                        <td class="px-6 py-4">
                            <button type="button" class="text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Ver perfil</button>
                        </td>
                    </tr>
                    <tr class="bg-sportify-purple-2 border-b border-white-400">
                        <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap text-lg">
                            Juan Rodriguez
                        </th>
                        <td class="px-6 py-4 text-lg">
                            Medio scrum
                        </td>
                        <td class="px-6 py-4">
                            <button type="button" class="text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Ver perfil</button>
                        </td>
                    </tr>
                    <tr class="bg-sportify-purple-2 border-b border-white-400">
                        <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap text-lg">
                            Roberto Perez
                        </th>
                        <td class="px-6 py-4 text-lg">
                            Wing derecho
                        </td>
                        <td class="px-6 py-4">
                            <button type="button" class="text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Ver perfil</button>
                        </td>
                    </tr>
                    <tr class="bg-sportify-purple-2 border-white-40">
                        <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap text-lg">
                            Tomás Fernandez
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
