// Run this code in prompt: json-server --watch -d 180 --host 10.0.0.152 db.json

import axios from "axios";

export default axios.create({
  baseURL: "http://10.0.0.152:3000",
});
