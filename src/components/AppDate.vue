<template>
<!-- AppDate to get date data formatting -->
  <span :title="timestamp | humanFriendlyDate">{{timestamp | diffForHumans}}</span>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    timestamp: {
      required: true,
      type: Number // Commonly integer, but in .js just Number
    }
  },

  filters: {
    humanFriendlyDate (date) {
      // access data and formatting in hover
      return moment
        .unix(date)
        .locale('en') // language reference
        .format('MMMM Do YYYY, h:mm:ss a')
    },

    diffForHumans (date) {
      // count and show the last time post
      return moment.unix(date).fromNow()
    }
  }
}
</script>
