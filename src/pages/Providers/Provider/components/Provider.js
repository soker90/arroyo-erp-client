/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  lazy, memo, useEffect, useState,
} from 'react';
import {
  Box, Container,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router';

import { Page } from 'components';
import { HASH_TABS, TABS } from '../constants';
import Header from './Header';
import ProviderTabs from './ProviderTabs';
import ProviderExpandedInfo from './ProviderExpandedInfo';
import { useStyles } from './Provider.styles';

const Provider = ({
  provider, billing, getProvider, showEditModal, ...props
}) => {
  const classes = useStyles();
  const { hash } = useLocation();
  const { idProvider } = useParams();
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
   * imports de los componentes de cada pestaña
   * @private
   */
  const _components = {
    [TABS.DELIVERY_ORDERS]: lazy(() => import('./DeliveryOrder')),
    [TABS.PRODUCTS]: lazy(() => import('./ProductsTable')),
    [TABS.INVOICES]: lazy(() => import('./InvoicesTable')),
  };

  /**
   * Componente de la pestaña actual
   */
  const TabComponent = _components[currentTab];

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
          currentTab={currentTab}
          expanded={expand}
          onExpand={_toggleExpand}
          title={provider?.name}
          deliveryOrdersSelected={deliveryOrdersSelected}
          idProvider={idProvider}
          {...props}
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
  showEditProductModal: PropTypes.func.isRequired,
  createInvoice: PropTypes.func.isRequired,
};

Provider.displayName = 'Providers';

export const story = Provider;
export default memo(Provider);
