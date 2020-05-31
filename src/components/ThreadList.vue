<template>
<!-- ThreadList to render multiple ThreadListItems -->
  <div class="thread-list">
    <h2 class="list-title">Threads</h2>
    <ThreadListItem v-for="thread in threads" :thread="thread" :key="thread['.key']" />
  </div>
</template>

<script>
import ThreadListItem from './ThreadListItem' // import thread list item

export default {
  components: {
    ThreadListItem
  },

  props: {
    threads: {
      required: true,
      type: Array // pass each thread of the array to ThreadListItem component
    }
  }
}
</script>
