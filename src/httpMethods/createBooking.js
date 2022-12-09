import axios from "axios";
import { endpoint } from "../util/variables";

export async function createBooking(body, headers){
    return await axios.post(`${endpoint}/booking`, body, headers)
}