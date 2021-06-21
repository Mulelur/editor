import React, { useState, useEffect } from "react";

import axios from "axios";

export default function Items() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/item/`).then((res) => {
      const data = res.data;
      setState([data]);
    });
  }, []);

  return console.log(state);
}
