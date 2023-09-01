<script setup>
  import axios from 'axios'
  import { ref,reactive,onUpdated} from 'vue';
  import { useRoute } from 'vue-router'
  const route = useRoute()

  import PostList from '../components/PostList.vue';
  
  const posts = reactive({})
  const isNull = ref(true)

  onUpdated(async() => {
    await axios.get(`https://basic-blog.teamrabbil.com/api/post-list/${route.params.id}`)
      .then(function (response) {
        isNull.value = false
        Object.assign(posts, response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  })

</script>

<template>
  <div class="text-center"  v-if="isNull">
          <div @click="isNull = false" class="inline-flex items-center justify-between gap-2 px-10 py-3 mt-10 bg-green-300 cursor-pointer select-none rounded-xl hover:bg-gray-300">
            তথ্য পেতে এখানে একটি খোঁচা দিন
          </div>
  </div>
  <PostList v-else :posts="posts"/>
</template>

<style scoped>
</style>