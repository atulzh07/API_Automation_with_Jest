import axios from "axios";
import { endpoint } from "../util/variables";

export async function getuser( headers){
    return await axios.get(`${endpoint}/booking`, headers)
}