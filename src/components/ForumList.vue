<template>
  <div class="post-list">
    <!-- PostList needs to know which post to render -->
    <PostListItem v-for="post in posts" :post="post" :key="post['.key']" />
  </div>
</template>

<script>
import PostListItem from './PostListItem'

export default {
  components: {
    PostListItem
  },

  props: {
    posts: {
      required: true,
      type: Array
    }
  }
}
</script>
