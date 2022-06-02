import { DECREMENT, INCREMENT } from "./action"


export const actionInc = () =>
{
    return(
    {
        type:INCREMENT
    }
    )
}

export const actionDec = () =>
{
    return (
    {
        type:DECREMENT
    }
    )
}