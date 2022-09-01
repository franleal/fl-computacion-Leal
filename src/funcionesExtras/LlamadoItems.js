import { stock } from "../Datos/Data"

export const llamadoItem = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(stock)
        },2000)
    })
}