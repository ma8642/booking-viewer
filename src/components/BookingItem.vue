<template>
  <article>
    <h2>{{ data.referenceNumber }}</h2>
    <div>{{ data.startTime }} - {{ data.endTime }}</div>
    <div>{{ data.bookingState }}</div>
  </article>
</template>

<script>
export default {
  props: ['data']
}
</script>
