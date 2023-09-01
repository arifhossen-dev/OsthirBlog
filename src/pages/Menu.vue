<script setup>

import axios from 'axios'
import { ref, onMounted} from 'vue';

let menuItems = ref(null);

onMounted(() => {
  // Make a request for a user with a given ID
  axios.get()
  .then(function (response) {
    // handle success
    menuItems.value = response.data
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
})

</script>
<template>
  
  <ul>
    <li v-for="(item, index) in menuItems" :key="index">
      {{ item.matchType }}
      <or>
        <li v-for="(seriesItem, index) in item.seriesMatches" :key="index">
        {{ seriesItem }}
        </li>
      </or>
    </li>
  </ul>
</template>
