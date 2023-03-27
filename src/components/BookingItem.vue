<template>
  <div className="booking">
    <h2>Ref#: {{ data.referenceNumber }}</h2>
    <div>
      <!-- {{ prettifyTimeSlot(data.timeSlot.startTime) }} - // WIP - returning Err: prettifyTimeSlot not a function
      {{ prettifyTimeSlot(data.timeSlot.endTime) }} -->
      {{ data.timeSlot.startTime.split('T')[1].slice(0, 5) }} -
      {{ data.timeSlot.endTime.split('T')[1].slice(0, 5) }}
    </div>
    <div id="bookingStatus" :class="computedClass">
      {{ data.bookingState }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    computedClass() {
      let className = 'active'
      if (this.data.bookingState === 'registered') {
        className = 'registered'
      } else if (this.data.bookingState === 'completed') {
        className = 'completed'
      }
      console.log(className)
      return className
    }
    // prettifyTimeslot(timeSlotString) { // TODO figure out the right way to do this in Vue
    //   const date = new Date(timeSlotString)
    //   const hours = date.getHours()
    //   const minutes = date.getMinutes()
    //   return `${hours}:${minutes < 10 && '0'}${minutes}`
    // }
  }
}
</script>

<style scoped>
.booking {
  border-radius: 10px;
  background-color: white;
  padding: 10px 20px;
  margin: 1em auto;
  width: 20em;
}

.active {
  color: #28b041;
}
.registered {
  color: #8337b0;
}
.completed {
  color: #6097dd;
}

#bookingStatus {
  display: flex;
  justify-content: flex-end;
}
@media (min-width: 768px) {
  .booking {
    width: 30em;
  }
}
</style>
