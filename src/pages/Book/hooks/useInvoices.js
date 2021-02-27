import { useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';

import { useDebounce } from 'hooks';
import { format } from 'utils';

import { INITIAL_STATE } from '../constans';
import { getInvoices } from '../modules/actions';

export const useInvoices = year => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useReducer(
    (oldstate, newState) => ({ ...oldstate, ...newState }),
    INITIAL_STATE,
  );
  const debounce = useDebounce();

  const _getData = () => {
    const {
      total,
      dateInvoice,
      numCheque,
      nInvoice,
      nameProvider,
      expenses,
      offset,
      limit,
    } = filters;
    dispatch(getInvoices(year, {
      ...(dateInvoice && { dateInvoice: format.dateToSend(dateInvoice) }),
      ...(total && { total }),
      ...(numCheque && { numCheque }),
      ...(nInvoice && { nInvoice }),
      ...(nameProvider && { nameProvider }),
      ...(expenses && { expenses }),
      ...(offset && { offset }),
      ...(limit && { limit }),
    }));
  };

  useEffect(() => {
    if (year) debounce(_getData, 200);
  }, [filters, year]);

  return {
    filters,
    setFilters,
  };
};
