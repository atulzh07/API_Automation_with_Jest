import axios from "axios";
import { endpoint } from "../util/variables";

export function patchBookingInfo(body, headers, bookingid){
    return axios.patch(`${endpoint}/booking/${bookingid}`, body, headers)
} 