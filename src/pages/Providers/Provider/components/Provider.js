/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  lazy, memo, useEffect, useMemo, useState,
} from 'react';
import {
  Box, Container,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import { useLocation } from 'react-router';
import PostAddIcon from '@material-ui/icons/PostAdd';

import { Page } from 'components';
import { useStyles } from 'pages/Providers/Provider/components/Provider.styles';
import { HASH_TABS, TABS } from '../constants';
import Header from './Header';
import ProviderTabs from './ProviderTabs';
import ProviderExpandedInfo from './ProviderExpandedInfo/ProviderExpandedInfo';

// TODO: refact pls
const Provider = (
  {
    provider, billing, getProvider, match: { params: { idProvider } }, showEditModal,
    showEditProductModal, createDeliveryOrder, createInvoice,
  }
) => {
  const classes = useStyles();
  const { hash } = useLocation();
  const [expand, setExpand] = useState(false);
  const [currentTab, setCurrentTab] = useState(TABS.DELIVERY_ORDERS);
  const [deliveryOrdersSelected, setDeliveryOrdersSelected] = useState([]);

  useEffect(() => {
    if (idProvider) getProvider(idProvider);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idProvider]);

  useEffect(() => {
    // eslint-disable-next-line
    HASH_TABS[hash]
    && setCurrentTab(HASH_TABS[hash]);
  }, [hash]);
  /**
   * Expande o contrae la información
   * @private
   */
  const _toggleExpand = () => {
    setExpand(!expand);
  };

  /**
   * Navega a la página de nuevo albarán
   * @private
   */
  const _handleClickNewDeliveryOrder = () => {
    createDeliveryOrder(idProvider);
  };

  const _handleClickNewInvoice = () => {
    createInvoice(deliveryOrdersSelected);
  };
  /**
   * imports de los componentes de cada pestaña
   * @private
   */
  const _components = useMemo(
    () => ({
      [TABS.DELIVERY_ORDERS]: lazy(() => import('./DeliveryOrder')),
      [TABS.PRODUCTS]: lazy(() => import('./ProductsTable')),
      [TABS.INVOICES]: lazy(() => import('./InvoicesTable')),
    }),
    []
  );

  /**
   * Buttons for header
   * @private
   */
  const _buttons = {
    [TABS.PRODUCTS]: [{
      variant: 'contained',
      onClick: () => showEditProductModal(),
      Icon: AddIcon,
      disableSvg: true,
      label: 'Nuevo producto',
    }],
    [TABS.DELIVERY_ORDERS]: [{
      variant: 'contained',
      onClick: _handleClickNewInvoice,
      Icon: PostAddIcon,
      disableSvg: true,
      label: 'Crear factura',
      disabled: deliveryOrdersSelected.length === 0,
    },
    {
      variant: 'contained',
      onClick: _handleClickNewDeliveryOrder,
      Icon: AddIcon,
      disableSvg: true,
      label: 'Nuevo albarán',
    }],
    [TABS.INVOICES]: [],
  };

  /**
   * Componente de la pestaña actual
   */
  const TabComponent = useMemo(() => _components[currentTab], [currentTab]);

  /**
   * Abre el modal de edición de proveedor
   * @private
   */
  const _showEditModal = () => {
    showEditModal(idProvider, provider);
  };

  return (
    <Page className={classes.root} title={provider.name}>
      <Container maxWidth={false} className={classes.container}>
        <Header
          buttons={_buttons[currentTab]}
          expanded={expand}
          onExpand={_toggleExpand}
          title={provider?.name}
        />
        <ProviderExpandedInfo
          expanded={expand}
          billing={billing}
          provider={provider}
          showEditModal={_showEditModal}
        />

        <ProviderTabs currentTab={currentTab} />

        <Box py={3} pb={6}>
          <TabComponent
            selected={deliveryOrdersSelected}
            setSelected={setDeliveryOrdersSelected}
          />
        </Box>

      </Container>
    </Page>
  );
};

Provider.propTypes = {
  provider: PropTypes.object.isRequired,
  billing: PropTypes.object,
  getProvider: PropTypes.func.isRequired,
  showEditModal: PropTypes.func.isRequired,
  createDeliveryOrder: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  showEditProductModal: PropTypes.func.isRequired,
  createInvoice: PropTypes.func.isRequired,
};

Provider.displayName = 'Providers';

export const story = Provider;
export default memo(Provider);
