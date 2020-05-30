<template>
  <div class="thread">
    <div>
      <p>
        <!-- thread title as a link, with router-link without reloading page, benerfit using name: we can change route's path in index.js -->
        <router-link :to="{name: 'ThreadShow', params: {id: thread['.key']}}">
        {{thread.title}}
        </router-link>
      </p>
      <p class="text-faded text-xsmall">
        By
        <a href="#">{{user.name}}</a>
        , {{thread.publishedAt}}.
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">
        <!-- Show replies counter -->
        {{repliesCount}} replies
      </p>

      <img
        class="avatar-medium"
        src="http://i0.kym-cdn.com/photos/images/facebook/000/010/934/46623-batman_pikachu_super.png"
        alt
      />

      <!-- <div>
                <p class="text-xsmall">
                    <a href="#">Bruce Wayne</a>
                </p>
                <p class="text-xsmall text-faded">2 hours ago</p>
      </div>-->
    </div>
  </div>
</template>

<script>
import sourceData from '@/data'
export default {
  props: {
    thread: {
      // aware of which thread to render
      required: true,
      type: Object
    }
  },
  computed: {
    repliesCount () {
      return Object.keys(this.thread.posts).length - 1 // count the replies with array
    },
    user () {
      return sourceData.users[this.thread.userId]
    }
  }
}
</script>