<template>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full rounded-lg  md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl ">
                  Iniciar sesión
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-md font-medium text-gray-900">Nombre de usuario</label>
                      <input type="email" name="email" id="email" class="bg-sportify-gray text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="nombre@gmail.com" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-md font-medium text-gray-900">Contraseña</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-sportify-gray text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500">Recordarme</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-sportify-purple hover:underline">Olvidé mi contraseña</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-sportify-purple-3 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-xl px-5 py-2 text-center">Ingresar</button>
                  <div class="w-auto flex flex-col justify-center items-center">
                    <p class="text-lg font-md text-gray-500 mb-4">
                        ¿No tiene una cuenta? 
                    </p>
                    <button type="submit" class="w-2/6 text-white bg-sportify-purple-2 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-3 py-2.5 text-center">Registrarse</button>
                  </div>
            </form>
          </div>
      </div>
  </div>

</template>

<script>

export default {}
</script>

<style></style>
