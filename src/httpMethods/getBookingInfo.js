import axios from "axios";
import { endpoint } from "../util/variables";

export function getBookingInfo(bookingid, headers){
    return axios.get(`${endpoint}/booking/${bookingid}`, headers)
}