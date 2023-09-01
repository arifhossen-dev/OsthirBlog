<script setup>
  import axios from 'axios'
  import { ref, onMounted} from 'vue';
  import { useRoute } from 'vue-router'
  const route = useRoute()

  let menuItems = ref(null);

  onMounted(async() => {
    await axios.get('https://basic-blog.teamrabbil.com/api/post-categories')
    .then(function (response) {
      menuItems.value = response.data
    })
    .catch(function (error) {
      console.log(error);
    })
  })

</script>

<template>
  <div>
    <nav class="px-5 py-2 shadow">
      <div class="container flex items-center justify-between mx-auto">
        <div>
          <router-link to="/" class="text-xl font-bold">
            <span class="-mr-1 text-yellow-500">
              Osthir
            </span>Blog
          </router-link>
          
        </div>
        <div class="flex items-center gap-3">
          <router-link to="/" class="flex items-center justify-between gap-2 px-2 py-1 rounded hover:bg-gray-300" :class="route.name=='home'?'bg-blue-200':'bg-gray-200'">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
            </svg>

            নীড় পাতা
          </router-link>
          
          <router-link :to="`/post/${menu.name}/${menu.id}`" class="px-2 py-1 rounded hover:bg-gray-300" :class="route.params.category==menu.name?'bg-blue-200':'bg-gray-200'" v-for="(menu, index) in menuItems" :key="index">{{ menu.name }}</router-link>
          
        </div>
      </div>
    </nav>
    <main>
      <div class="container mx-auto my-10">
        <router-view></router-view>
      </div>
    </main>
  </div>
  
</template>

<style scoped>
</style>
