/* eslint-disable react-hooks/exhaustive-deps */
import {
  lazy, useCallback, useEffect, useState,
} from 'react';
import {
  Box, Container,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router';

import { HashTabs, Page, ProviderExpandedInfo } from 'components';
import { HASH_TABS, TABS } from '../constants';
import Header from './Header';
import { useStyles } from './Provider.styles';

const DeliveryOrders = lazy(() => import('./DeliveryOrder'));
const Products = lazy(() => import('./ProductsTable'));
const Invoices = lazy(() => import('components/ProviderInvoices'));

const Provider = ({
  provider,
  billing,
  getProvider,
  ...props
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
   * Reset delivery orders selected
   * @private
   */
  const _resetSelectedOrders = useCallback(() => {
    setDeliveryOrdersSelected([]);
  }, [setDeliveryOrdersSelected]);

  return (
    <Page className={classes.root} title={provider.name}>
      <Container maxWidth={false}>
        <Header
          currentTab={currentTab}
          expanded={expand}
          onExpand={_toggleExpand}
          title={provider?.name}
          deliveryOrdersSelected={deliveryOrdersSelected}
          idProvider={idProvider}
          resetSelected={_resetSelectedOrders}
          note={provider?.note}
          nameProvider={provider?.name}
          {...props}
        />
        <ProviderExpandedInfo
          expanded={expand}
          billing={billing}
          provider={provider}
        />

        <HashTabs currentTab={currentTab} tabs={Object.values(TABS)} />

        <Box py={3} pb={6}>
          {currentTab === TABS.DELIVERY_ORDERS && (
            <DeliveryOrders
              selected={deliveryOrdersSelected}
              setSelected={setDeliveryOrdersSelected}
            />
          )}
          {currentTab === TABS.INVOICES && <Invoices />}
          {currentTab === TABS.PRODUCTS && <Products />}
        </Box>

      </Container>
    </Page>
  );
};

Provider.propTypes = {
  provider: PropTypes.object.isRequired,
  billing: PropTypes.object,
  getProvider: PropTypes.func.isRequired,
  createDeliveryOrder: PropTypes.func.isRequired,
  showEditProductModal: PropTypes.func.isRequired,
  createInvoice: PropTypes.func.isRequired,
};

Provider.displayName = 'Providers';

export const story = Provider;
export default Provider;
