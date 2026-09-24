import { configureStore } from "@reduxjs/toolkit";
import accommodationSlice from "./Accomodation-slice";
import bookingSlice from "./Booking/booking-slice";
import paymentSlice from "./payment-slice";
import propertySlice from "./Property/property-slice";
import propertyDetailsSlice from "./PropertyDetails/propertyDetails-slice";
import userSlice from "./User/user-slice";

const store = configureStore({
    reducer:{
        properties: propertySlice.reducer,
        propertyDetails: propertyDetailsSlice.reducer,
        user: userSlice.reducer,
        booking: bookingSlice.reducer,
        payment: paymentSlice.reducer,
        accommodation: accommodationSlice.reducer
    }
})

export default store;