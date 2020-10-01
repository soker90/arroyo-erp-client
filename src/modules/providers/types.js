import {requestActions} from 'utils/requestActions';

export const GET_PROVIDERS = requestActions('GET_PROVIDERS');
export const CREATE_PROVIDER = requestActions('CREATE_PROVIDER');
export const GET_PROVIDER = requestActions('GET_PROVIDER');
export const EDIT_PROVIDER = requestActions('EDIT_PROVIDER');

export const CREATE_PRODUCTS = requestActions('CREATE_PRODUCTS');

export const GET_DELIVERY_ORDERS = requestActions('GET_DELIVERY_ORDERS');

export const GET_INVOICES_BY_PROVIDER = requestActions('GET_INVOICES');
export const CREATE_INVOICE = requestActions('CREATE_INVOICE');
export const CREATE_INVOICE_EXPENSE = requestActions('CREATE_INVOICE_EXPENSE');
