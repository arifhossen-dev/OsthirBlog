<script setup>
  import { ref,defineProps } from 'vue';
  import { useRoute } from 'vue-router'

  defineProps(['posts'])

  const route = useRoute()

  function formatDate(params) {
    return new Intl.DateTimeFormat(['ban', 'id']).format(new Date(params))
  }

</script>

<template>
  <div class="mb-5 text-center">
    <h2 class="inline-block px-20 py-2 text-2xl font-bold rounded min-w-min bg-green-400/20">{{ route.params.category?? 'সাম্প্রতিক বিষয় গুলো' }}</h2>
  </div>
  <div class="grid grid-cols-3 gap-5">
    <div :to="`/post-details/${post.id}`" class="rounded-b-lg shadow" v-for="(post, index) in posts" :key="index">
        <img :src="post.img" class="rounded-t-lg max-h-[220px]" alt="">
        <div class="px-3 pb-3">
          <h3 class="py-3 font-bold">{{ post.title }}</h3>
          <p>{{ post.short }}</p>
          <div class="flex items-center justify-between mt-2">
            <div class="text-gray-400">
              {{ formatDate(post.updated_at) }}
            </div>
            <router-link :to="`/post-details/${post.id}`" class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">বিস্তারিত</router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
</style>