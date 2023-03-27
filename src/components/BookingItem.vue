<template>
  <div className="booking">
    <h2>{{ data.referenceNumber }}</h2>
    <div>{{ data.startTime }} - {{ data.endTime }}</div>
    <div>{{ data.bookingState }}</div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .booking {
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 1em;
  }
}
</style>
