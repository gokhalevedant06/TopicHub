import { io } from "socket.io-client";
const socket = io("https://topichub-api.onrender.com");
export default socket;