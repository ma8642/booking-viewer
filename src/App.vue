<script>
import BookingItem from './components/BookingItem.vue'
import getAllBookings from './utils/api_calls.js'
export default {
  components: { BookingItem },
  data() {
    return {
      search: '',
      bookingItems: [],
      loading: true
    }
  },
  computed: {
    filteredBookings() {
      return this.bookingItems.filter((booking) => booking.referenceNumber.includes(this.search))
    }
  },
  created() {
    // fetch on init
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.bookingItems = await getAllBookings()
      this.loading = false
    }
  }
}
</script>

<template>
  <div v-if="loading">Loading...</div>
  <main id="main-container" v-else>
    <input type="text" v-model="search" placeholder="Search reference number" />
    <div v-for="booking in filteredBookings" :key="booking.id">
      <BookingItem :data="booking"></BookingItem>
    </div>
  </main>
</template>

<style scoped>
#main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  width: 100%;
}
</style>
