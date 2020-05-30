<template>
<div class="col-full">
  <h1>Welcome to the Forum</h1>
    <ThreadList :threads="threads"/>
</div>
      
</template>

<script>
import sourceData from '@/data/' // import data from data.json
import ThreadList from '@/components/ThreadList' // import data from ThreadList.vue
console.log(sourceData)
export default {
  components: {
    ThreadList
  },
  data () {
    return {
      threads: Object.values(sourceData.threads), // transform data to an array
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>
