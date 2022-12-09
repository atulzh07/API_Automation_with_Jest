import axios from "axios";
import { endpoint } from "../util/variables";

export async function updateBookingInfo(body, headers, bookingid){
    return await axios.put(`${endpoint}/booking/${bookingid}`, body, headers)
}