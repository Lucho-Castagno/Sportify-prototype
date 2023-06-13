<template>
    <section class="bg-indigo-50">
  <div class="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-0">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">{{title}}</h2>
          <p class="mb-5 font-light text-gray-900 sm:text-xl">{{description}}</p>
      </div>
  </div>
</section>
</template>

<script>
export default {
    props: {
        title: String,
        description: String
    }
}
</script>