<script setup>
  import axios from 'axios'
  import { ref, reactive, onBeforeMount} from 'vue';
  import { useRoute } from 'vue-router'
  const route = useRoute()


  const post = reactive({})
  const isNull = ref(false)

  onBeforeMount(async() => {
    await axios.get(`https://basic-blog.teamrabbil.com/api/post-details/${route.params.id}`)
          .then(function (response) {
            if (response.data.postDetails) {
              Object.assign(post, response.data.postDetails)
            }else{
              isNull.value = true
            }
          })
          .catch(function (error) {
            console.log(error);
          })
  })
</script>

<template>
  <div class="p-40 bg-red-100/50 rounded-3xl"  v-if="isNull">
    <div class="flex items-center justify-center max-w-3xl mx-auto bg-red-500/30 h-72 rounded-2xl">
      <div class="text-3xl font-bold text-center text-red-500">
        <h2>
          দুঃখিত বিস্তারিত তথ্য পাওয়া যায়নি 
        </h2>
          <router-link to="/" class="inline-flex items-center justify-between gap-2 px-5 py-3 mt-10 rounded-xl hover:bg-gray-300" :class="route.name=='home'?'bg-blue-200':'bg-gray-200'">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
            </svg>

            নীড় পাতায় ফিরে যান
          </router-link>
      </div>
    
    </div>
  </div>
  <div class="" v-else>
    <img :src="post.img" class="rounded-t-lg" alt="">
    <div class="px-3 pb-3">
      <h3 class="py-3 font-bold">{{ post.title }}</h3>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>