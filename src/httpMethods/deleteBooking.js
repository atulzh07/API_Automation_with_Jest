import axios from "axios";
import { endpoint } from "../util/variables";

export function deleteBooking(headers, bookingid){
    return axios.delete(`${endpoint}/booking/${bookingid}`, headers)
}