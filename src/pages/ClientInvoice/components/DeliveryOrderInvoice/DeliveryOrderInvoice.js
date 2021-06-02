/* eslint-disable react-hooks/exhaustive-deps */
import {
  Card, CardContent, CardHeader, Divider, IconButton, Tooltip,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import uniqId from 'uniqid';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { useCallback, useState } from 'react';

import { DatePickerForm, TextEuro } from 'components';
import { useStyles } from './DeliveryOrderInvoice.styles';
import ClientInvoiceProducts from '../ClientInvoiceProducts';
import ProductOrderModal from '../../modals/ProductOrderModal';
import DeleteProductModal from '../../modals/DeleteProductModal';

const DeliveryOrderInvoice = ({
  deliveryOrder,
  isEditable,
  updateDOClientInvoice,
  deleteDOClientInvoice,
  id,
  refHeader,
}) => {
  const classes = useStyles();
  const [date, setDate] = useState(deliveryOrder.date);
  const [showProduct, setShowProduct] = useState(false);
  const [deleteId, setDeleteId] = useState(false);

  const _closeModal = useCallback(() => {
    setShowProduct(false);
  }, [setShowProduct]);

  const _handleAddClick = useCallback(() => {
    setShowProduct(true);
  }, [setShowProduct]);

  const _closeDelete = useCallback(() => {
    setDeleteId(false);
  }, [setDeleteId]);
  /**
   *
   * Handle change picker
   * @param {Date} date
   * @private
   */
  const _handleChangePicker = newDate => {
    setDate(newDate);
    updateDOClientInvoice({
      id,
      deliveryOrderId: deliveryOrder._id,
      date: newDate,
    });
  };

  const _handleDeleteClick = () => {
    deleteDOClientInvoice(id, deliveryOrder._id);
  };

  const _handleUpdateClick = productData => {
    setShowProduct(productData);
  };

  const _handleDeleteProductClick = productId => {
    setDeleteId(productId);
  };

  /**
   * Return the buttons of the card
   * @returns {Array || false}
   * @private
   */
  const _getActions = () => (isEditable ? [
    <Tooltip title='Añadir producto' key={uniqId()}>
      <IconButton
        size='small'
        onClick={_handleAddClick}
      >
        <AddIcon />
      </IconButton>
    </Tooltip>,
    <Tooltip title='Eliminar albarán' key={uniqId()}>
      <IconButton
        size='small'
        onClick={_handleDeleteClick}
      >
        <DeleteIcon />
      </IconButton>
    </Tooltip>,
  ] : false);

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          title={(
            <>
              Albarán
              <TextEuro num={deliveryOrder.total} className={classes.total} />
            </>
          )}
          action={_getActions()}
          ref={refHeader}
        />
        <Divider />
        <CardContent>
          <DatePickerForm
            value={date}
            size={3}
            label='Fecha'
            readOnly={!isEditable}
            onChange={_handleChangePicker}
          />
          <PerfectScrollbar>
            <ClientInvoiceProducts
              invoice={id}
              deliveryOrder={deliveryOrder._id}
              products={deliveryOrder.products}
              isEditable={isEditable}
              onUpdate={_handleUpdateClick}
              onDelete={_handleDeleteProductClick}
            />
          </PerfectScrollbar>
        </CardContent>
      </Card>
      <ProductOrderModal
        invoice={id}
        deliveryOrder={deliveryOrder._id}
        show={showProduct}
        close={_closeModal}
      />
      <DeleteProductModal
        invoice={id}
        deliveryOrder={deliveryOrder._id}
        deleteId={deleteId}
        close={_closeDelete}
      />
    </>
  );
};

DeliveryOrderInvoice.propTypes = {
  deliveryOrder: PropTypes.object.isRequired,
  isEditable: PropTypes.bool.isRequired,
  updateDOClientInvoice: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  deleteDOClientInvoice: PropTypes.func.isRequired,
  refHeader: PropTypes.any,
};

DeliveryOrderInvoice.displayName = 'ClientInvoiceCards';

export default DeliveryOrderInvoice;
