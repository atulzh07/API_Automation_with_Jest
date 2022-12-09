import { endpoint } from "../util/variables";
import axios from "axios";

export function auth(body, headers)
{
    return axios.post(`${endpoint}/auth`,body,headers)
}