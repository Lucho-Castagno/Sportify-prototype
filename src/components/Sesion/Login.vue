<template>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 text-purple-700">
    <img class="w-20 h-20 mb-5" src="@/assets/rugby-ball.png" alt="Logo de la aplicacion" />
    <h1 class="text-xl font-bold leading-tight tracking-tight md:text-4xl dark:text-purple-50 mb-5">
      Iniciar sesión en Sportify
    </h1>
      <div class="w-full rounded-lg border-2 dark:border-purple-50 border-purple-700 md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              <form class="space-y-4 md:space-y-6">
                  <div>
                      <label for="email" class="block mb-2 text-md font-medium dark:text-purple-50">Nombre de usuario</label>
                      <input type="email" name="email" id="email" class="bg-sportify-gray sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="nombre@gmail.com" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-md font-medium dark:text-purple-50">Contraseña</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-sportify-gray sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-purple-900 dark:border-purple-50 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-purple-500 dark:text-purple-100">Recordarme</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-purple-500 dark:text-purple-100 hover:underline">Olvidé mi contraseña</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-purple-700 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-xl px-5 py-2 text-center">Ingresar</button>
                  <div class="w-auto flex flex-col justify-center items-center">
                    <p class="text-lg font-md text-purple-500 dark:text-purple-100 mb-4">
                        ¿No tiene una cuenta? 
                    </p>
                    <button type="button" class="w-2/6 text-purple-50 bg-purple-700 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-3 py-2.5 text-center">Registrarse</button>
                  </div>
            </form>
          </div>
      </div>
  </div>

</template>

<script>

export default {
  
}

</script>

<style></style>
