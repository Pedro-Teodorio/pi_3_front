import { getOrders } from "@/api/endpoints"
import { useEffect, useState } from "react"

export function Pedidos(){
    const [pedidos, setPedidos] = useState([])
    const fetchPedidos = async () => {
        const data = await getOrders()
        setPedidos(data)
    }
    useEffect(() => {
        fetchPedidos()
    }, [])
    console.log(pedidos)
    return(
        <div>
            <h1>Meus Pedidos</h1>

        </div>
    )
}