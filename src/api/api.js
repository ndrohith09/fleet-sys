import axios from "axios"; 

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
    //   Authorization: `Bearer ${decryptText}`,
      "Content-Type": "application/json",
    },
    // timeout: 20000,
  });
  
  export default instance;