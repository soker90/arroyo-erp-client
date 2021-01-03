import { requestActions } from 'utils/requestActions';

export const GET_CLIENT_INVOICE = requestActions('@client-invoice/GET_CLIENT_INVOICE');
export const CONFIRM_INVOICE = requestActions('@invoice/CONFIRM_INVOICE');
export const UPDATE_DATA = requestActions('@client-invoice/UPDATE_DATA');
export const RESET_CLIENT_INVOICE = '@client-invoice/RESET_CLIENT_INVOICE';
export const DELETE_CLIENT_INVOICE = requestActions('@client-invoice/DELETE_CLIENT_INVOICE');

export const ADD_DELIVERY_ORDER = requestActions('@client-invoice/ADD_DELIVERY_ORDER');
export const UPDATE_DELIVERY_ORDER = requestActions('@client-invoice/UPDATE_DELIVERY_ORDER');
export const DELETE_DELIVERY_ORDER = requestActions('@client-invoice/DELETE_DELIVERY_ORDER');
