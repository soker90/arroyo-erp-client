import { requestActions } from 'utils/requestActions';

export const GET_PRICE_CHANGES = requestActions('@prices_changes/GET_PRICE_CHANGES');
export const CHANGE_READ_PRICE = requestActions('@prices_changes/CHANGE_READ_PRICE');
export const DELETE_PRICE_CHANGES = requestActions('@prices_changes/DELETE_PRICE_CHANGES');
export const PRICE_CHANGES_UNREAD_COUNT = requestActions('@prices_changes/PRICE_CHANGES_UNREAD_COUNT');
export const SEND_PRICES_TELEGRAM = requestActions('@prices_changes/SEND_PRICES_TELEGRAM');
export const DELETE_MANY_PRICE_CHANGES = requestActions('@prices_changes/DELETE_MANY_PRICE_CHANGES');
