import { IPayStrategy } from "../../data/stategies/payStrategy/IPayStrategy"

interface orderParams {
    
}

export const useOrder = (params: orderParams) => {


    const applyDiscount = (value,) => {
        
    }

    const setPaymentStrategy = (strategy: IPayStrategy) => {

    }

    return { applyDiscount, setPaymentStrategy}
}
