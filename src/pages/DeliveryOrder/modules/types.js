import { requestActions } from 'utils/requestActions'

export const CREATE_DELIVERY_ORDER = requestActions('CREATE_DELIVERY_ORDER')
export const ADD_PRODUCT_TO_DELIVERY_ORDER = requestActions('ADD_PRODUCT_TO_DELIVERY_ORDER')
export const GET_DELIVERY_ORDER = requestActions('GET_DELIVERY_ORDER')
export const UPDATE_DATA_DELIVERY_ORDER = requestActions('UPDATE_DATA_DELIVERY_ORDER')
export const DELETE_PRODUCT_TO_DELIVERY_ORDER = requestActions('@deliveryOrder/remove_product')
export const UPDATE_PRODUCT_OF_DELIVERY_ORDER = requestActions('@deliveryOrder/update_product')
export const DELETE_DELIVERY_ORDER = requestActions('@deliveryOrder/DELETE_DELIVERY_ORDER')

export const RESET_DELIVERY_ORDER = 'RESET_DELIVERY_ORDER'
