<template>
<div class="col-full">
  <h1>Welcome to the Forum</h1>
    <CategoryList :categories="categories"/>
</div>
      
</template>

<script>
import sourceData from '@/data/' // import data from data.json
import CategoryList from '@/components/CategoryList' // import data from Category.vue
console.log(sourceData)
export default {
  components: {
    CategoryList
  },
  data () {
    return {
      forums: Object.values(sourceData.forums), // transform data to an array
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>
