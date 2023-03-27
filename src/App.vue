<script>
import BookingItem from './components/BookingItem.vue'
export default {
  components: { BookingItem },
  data() {
    return {
      search: '',
      bookingItems: [
        {
          id: 123,
          referenceNumber: 'foo1',
          startTime: '1pm',
          endTime: '2pm',
          bookingState: 'active'
        },
        {
          id: 456,
          referenceNumber: 'bar2',
          startTime: '3pm',
          endTime: '4pm',
          bookingState: 'registered'
        },
        {
          id: 789,
          referenceNumber: 'Baz3',
          startTime: '12pm',
          endTime: '1pm',
          bookingState: 'completed'
        },
        {
          id: 101,
          referenceNumber: 'bom4',
          startTime: '2pm',
          endTime: '3pm',
          bookingState: 'active'
        }
      ]
    }
  },
  computed: {
    filteredBookings() {
      return this.bookingItems.filter((booking) =>
        booking.referenceNumber.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  }
}
</script>

<template>
  <header>
    <div class="wrapper"></div>
  </header>

  <main>
    <input type="text" v-model="search" />
    <div v-for="booking in filteredBookings" :key="booking.id">
      <BookingItem :data="booking"></BookingItem>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
