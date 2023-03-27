# booking-viewer

## To Run

1. Create a `.env` file at the root of the project
2. In that file add `VITE_BASE_URL=https://foobar.com`
3. Run `nvm use 16.0.0` and then `npm run dev`
4. Open a browser at http://127.0.0.1:5173

# Notes

I really enjoyed this challenge! Please note: I am new to Vue so a lot of the time was spent researching how to do things or coming upon errors that I didn't realize were related to Vue until I did some more digging.

## Features

- [x] Vue app which displays bookings as a list of items that include ref number, time duration, and booking status.
- [x] Filtering bar which allows user to search the bookings.
- [x] Color-coded booking statuses for easy perusal

## Future Steps

- [ ] Add pagination or lazy loading to bookings list.
- [ ] Research how to use computed functions or methods to modify data within template. I am new to Vue and came upon errors when trying to carry this out with my prettifyTimeSlot function in BookingItem.vue. In the end I used a hacky solution to show only the hours and minutes of the timeslot string, but I would prefer to use the prettifyTimeSlot function.
- [ ] Nicer page styling and CSS variables. I focused on learning Vue and implementing functionality for the 4-hour time limit. One big upgrade would be to have the search bar sticky so that even if user scrolls, it stays visible.
- [ ] A checkbox that hides any completed bookings from list.
- [ ] A message that says "No results found!" if the search does not match any reference numbers.
