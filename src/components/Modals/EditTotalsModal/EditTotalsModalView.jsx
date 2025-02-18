import { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'

import { ModalGrid, InputForm } from 'components'

const EditTotalsModalView = ({
  show,
  setShow,
  total,
  iva,
  re,
  rate,
  taxBase,
  update,
  id
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    {
      total,
      ...(iva !== undefined && { iva }),
      ...(re !== undefined && { re }),
      ...(rate !== undefined && { rate }),
      ...(taxBase !== undefined && { taxBase })
    }
  )

  const [errors, setErrors] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    {
      total: false,
      iva: false,
      re: false,
      rate: false,
      taxBase: false
    }
  )

  useEffect(() => {
    let sum = 0
    if (total && state.taxBase) {
      sum = state.iva + state.re + state.taxBase
      setState({ total: sum })
    }
  }, [state.iva, state.re, state.taxBase])

  /**
   * Handle event onChange input
   * @param {String} name
   * @param {String} value
   * @private
   */
  const _handleChange = ({
    target: {
      name,
      value
    }
  }) => {
    const number = parseFloat(value)
    setState({ [name]: number })
    setErrors({ [name]: (typeof number !== 'number') })
  }

  const _close = () => {
    setShow(false)
  }

  const _handleSubmit = () => {
    update({
      totals: state
    }, _close)
  }

  /**
   * Handle press enter key
   * @param {Event} event
   * @private
   */
  const _handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      _handleSubmit()
    }
  }

  /**
   * Render a input element
   * @param {string} name
   * @param {String} label
   * @returns {InputForm}
   * @private
   */
  const _renderInput = (name, label, options = {}) => (
    <InputForm
      value={state[name] || 0}
      onChange={_handleChange}
      name={name}
      label={label}
      type='number'
      size={4}
      onKeyPress={_handleKeyPress}
      error={errors[name]}
      {...options}
    />
  )

  return (
    <ModalGrid
      show={show}
      setShow={setShow}
      title='Editar totales'
      action={_handleSubmit}
    >
      {taxBase !== undefined && _renderInput('taxBase', 'Base imponible', { autoFocus: true })}
      {iva !== undefined && _renderInput('iva', 'IVA')}
      {re !== undefined && _renderInput('re', 'Recargo')}
      {Boolean(rate) && _renderInput('rate', 'Tasa')}
      {_renderInput('total', 'Total')}
    </ModalGrid>
  )
}

EditTotalsModalView.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  total: PropTypes.number,
  iva: PropTypes.number,
  re: PropTypes.number,
  rate: PropTypes.number,
  taxBase: PropTypes.number,
  id: PropTypes.string,
  update: PropTypes.func.isRequired
}

export default EditTotalsModalView
