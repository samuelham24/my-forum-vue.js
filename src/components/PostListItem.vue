<template>
  <!-- Post list item to show a post from user -->
  <div class="post">
    <div class="user-info">
      <a href="#" class="user-name">{{user.name}}</a>
      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt />
      </a>
      <p class="desktop-only text-small">{{userPostsCount}} posts</p>
    </div>
    <div class="post-content">
      <div>{{post.text}}</div>
    </div>
    <div class="post-date text-faded">
      <AppDate :timestamp="post.publishedAt" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  computed: {
    // computed properties make sure the user will be updated if change happen in  this.$store.state
    user () {
      return this.$store.state.users[this.post.userId]
    },

    userPostsCount () {
      return Object.keys(this.user.posts).length
    }
  }
}
</script>
