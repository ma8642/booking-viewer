import axios from 'redaxios'
const baseURL = import.meta.env.VITE_BASE_URL

export default async function getAllBookings() {
  const result = await axios.get(baseURL)
  return result.data
}

export async function getBookingsPaginated(start, end) {
  const result = await axios.get(baseURL, { params: { start, end } })
  return result.data
}

export async function getBookingsWithReferenceNumberSearch(referenceNumber) {
  const result = await axios.get(baseURL, { params: { referenceNumber } })
  return result.data
}

export async function getBookingsWithBoth(start, end, referenceNumber) {
  const result = await axios.get(baseURL, { params: { start, end, referenceNumber } })
  return result.data
}

// ;(async () => {
//   console.log(await getAllBookings())
//   console.log(await getBookingsPaginated(1, 3))
//   console.log(await getBookingsWithReferenceNumberSearch('12'))
//   console.log(await getBookingsWithBoth(1, 10, '12'))
// })()
