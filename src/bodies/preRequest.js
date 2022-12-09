import { checkoutDate, currentDate, randomPrice } from "../util/randomGenerator";

export let totalprice = randomPrice()
export let checkin = currentDate()
export let checkout = checkoutDate()

export let patchBookingBody = {
    depositpaid : true,
    additionalneeds : "Swimming Pool"
}