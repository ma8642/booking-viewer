<script>
import BookingItem from './components/BookingItem.vue'
import getAllBookings from './utils/api_calls.js'
export default {
  components: { BookingItem },
  data() {
    return {
      search: '',
      bookingItems: []
    }
  },
  computed: {
    filteredBookings() {
      return this.bookingItems.filter((booking) =>
        booking.referenceNumber.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  },
  created() {
    // fetch on init
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.bookingItems = await getAllBookings()
    }
  }
}
</script>

<template>
  <main id="main-container">
    <input type="text" v-model="search" />
    <div v-for="booking in filteredBookings" :key="booking.id">
      <BookingItem :data="booking"></BookingItem>
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  #main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
