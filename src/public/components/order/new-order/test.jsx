import { useEffect } from "react";
import NewOrder from "./new-order";


export function Test(props) {


    useEffect(() => {
        console.log(props)
    })

    return <>
        <h1>Tset</h1>
    </>
}