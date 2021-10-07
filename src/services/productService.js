import axios from "axios"

import { URL_BACKEND } from "../enviroments/enviroments";

//const URL = `${process.env.REACT_APP_URL_API}/Productos`

export const getProductos = async () => {   
    const rpta = await axios.get(`${URL_BACKEND}/producto`); 
    return rpta
  }
