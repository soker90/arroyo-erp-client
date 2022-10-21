import { useMemo } from 'react'

const LITERALS = {
  taxBase: 'Base Imponible',
  iva: 'IVA',
  re: 'R.E.',
  total: 'Total'
}

const INITIAL_SUMS = {
  taxBase: 0,
  iva: 0,
  re: 0,
  total: 0
}

const useSumSelected = ({ free, selected }) => {
  const sums = useMemo(() => free.reduce((accumulator, currentValue) => (
    selected.includes(currentValue._id)
      ? {
          taxBase: accumulator.taxBase + currentValue.taxBase,
          iva: accumulator.iva + currentValue.iva,
          re: accumulator.re + currentValue.re,
          total: accumulator.total + currentValue.total
        }
      : {
          taxBase: accumulator.taxBase,
          iva: accumulator.iva,
          re: accumulator.re,
          total: accumulator.total
        }
  ), INITIAL_SUMS), [free, selected])

  return [
    {
      label: LITERALS.taxBase,
      value: sums.taxBase
    },
    {
      label: LITERALS.iva,
      value: sums.iva
    },
    {
      label: LITERALS.re,
      value: sums.re
    },
    {
      label: LITERALS.total,
      value: sums.total
    }
  ]
}

export default useSumSelected
