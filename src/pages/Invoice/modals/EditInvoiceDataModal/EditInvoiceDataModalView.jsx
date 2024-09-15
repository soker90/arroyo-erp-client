import { useReducer } from 'react'
import PropTypes from 'prop-types'

import {
  DatePickerForm, InputForm, ModalGrid, SelectForm, SwitchForm
} from 'components'
import format from 'utils/format'
import { INVOICE_COMMON_CONCEPTS } from 'constants/invoices'

const EditInvoiceDataModalView = ({
  show,
  setShow,
  nInvoice,
  dateInvoice,
  dateRegister,
  concept,
  total,
  mailSend,
  updateData
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    {
      nInvoice,
      dateInvoice,
      dateRegister,
      concept,
      mailSend
    }
  )

  /**
   * Handle event onChange input
   * @param {String} name
   * @param {String} value
   * @private
   */
  const _handleChange = ({
    target: {
      name,
      value,
      checked
    }
  }) => {
    if (name === 'nInvoice') {
      setState({ [name]: value.toUpperCase() })
    } else {
      setState({ [name]: checked ?? value })
    }
  }

  const _close = () => {
    setShow(false)
  }

  const _handleSubmit = () => {
    const data = {
      nInvoice: state.nInvoice,
      dateInvoice: format.dateToSend(state.dateInvoice),
      dateRegister: format.dateToSend(state.dateRegister),
      concept: state.concept,
      mailSend: state.mailSend
    }

    updateData({ data }, _close)
  }

  /**
   * Handle press enter key
   * @param {string} key
   * @private
   */
  const _handleKeyPress = ({ key }) => {
    if (key === 'Enter') _handleSubmit()
  }

  /**
   * Handle change picker
   * @param {String} date
   * @param {String} name
   * @private
   */
  const _handleChangePicker = (date, name) => {
    setState({ [name]: date })
  }

  /**
   * Render a input element
   * @param {string} name
   * @param {String} label
   * @param {Object} options
   * @returns {JSX.Element}
   * @private
   */
  const _renderInput = (name, label, options = {}) => (
    <InputForm
      value={state[name] || ''}
      onChange={_handleChange}
      name={name}
      label={label}
      size={4}
      onKeyPress={_handleKeyPress}
      {...options}
    />
  )

  /**
   * Renderiza un datepicker con opciones predeterimnadas
   * @param {String} label
   * @param {String} name
   * @return {DatePickerForm}
   * @private
   */
  const _renderDatePicker = (label, name) => (
    <DatePickerForm
      clearable
      size={4}
      label={label}
      value={state[name]}
      onChange={date => _handleChangePicker(date, name)}
    />
  )

  /**
   * Render select product
   * @return {SelectForm}
   * @private
   */
  const _renderSelectConcept = () => (
    <SelectForm
      label='Concepto'
      value={state.concept}
      name='concept'
      onChange={_handleChange}
      size={6}
      onKeyPress={_handleKeyPress}
    >
      {INVOICE_COMMON_CONCEPTS.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </SelectForm>
  )

  /**
   * Render mail send
   * @private
   */
  const _renderMailSend = () => (
    <SwitchForm
      checked={state.mailSend}
      onChange={_handleChange}
      name='mailSend'
      color='primary'
      label='En correo electrónico'
    />
  )

  return (
    <ModalGrid
      show={show}
      setShow={setShow}
      title='Editar datos de la factura'
      action={_handleSubmit}
    >
      {_renderInput('nInvoice', 'Nº Factura', { autoFocus: true })}
      {_renderDatePicker('Fecha de registro', 'dateRegister')}
      {_renderDatePicker('Fecha de factura', 'dateInvoice')}
      {total < 0 && _renderSelectConcept()}
      {_renderMailSend()}
    </ModalGrid>
  )
}

EditInvoiceDataModalView.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  dateInvoice: PropTypes.number,
  nInvoice: PropTypes.string,
  dateRegister: PropTypes.number,
  concept: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  mailSend: PropTypes.bool,
  updateData: PropTypes.func.isRequired
}

export default EditInvoiceDataModalView
