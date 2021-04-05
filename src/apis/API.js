import axios from "axios";
const KEY = '541d3a3e77434134b7eebc7ded2a5e46';

export default axios.create({
    baseURL: "https://api.football-data.org/v2",
    headers: { "X-Auth-Token":KEY}
  });