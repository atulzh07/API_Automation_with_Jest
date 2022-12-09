import { additionalneeds, firstname, lastname } from "../util/variables";
import { checkin, checkout, totalprice } from "./preRequest";

export const createBookingBody = {
    firstname : firstname,
    lastname : lastname,
    totalprice : totalprice,
    depositpaid : false,
    bookingdates :
        {
            checkin : checkin,
            checkout : checkout
        },
    additionalneeds : additionalneeds
}