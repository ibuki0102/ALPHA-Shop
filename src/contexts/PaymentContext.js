import { createContext } from 'react'

export const initialPaymentData = {
  cardOwner: null,
  cardNumber: null,
  cardValidDate: null,
  cardCCV: null,
}

export const PaymentContext = createContext(initialPaymentData)
