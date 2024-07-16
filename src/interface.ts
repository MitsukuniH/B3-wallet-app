import { Dispatch, SetStateAction } from "react"

export interface User{
    name:string
    address:string
    balance:number
}
export interface transaction{
    from:string
    to:string
    amount:number
}
export type SetState<t> = Dispatch<SetStateAction<t>>