import React from "react"

interface CardAdapterProps {
    height: string
    width: string
    children: any
}

export const CardAdapter = (props: CardAdapterProps) => {

    return(
        <>
            {props.children}
        </>
    )
}