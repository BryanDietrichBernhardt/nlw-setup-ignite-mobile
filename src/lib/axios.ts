import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.1.104:3333", // android physical "http://192.168.1.104:3333" // emulator "http://10.0.2.2:3333",
  proxy: false,
});
