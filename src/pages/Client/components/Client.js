/* eslint-disable react-hooks/exhaustive-deps */
import {
  lazy, memo, useCallback, useEffect, useState,
} from 'react';
import { Box, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router';

import { HashTabs, LoadingScreen, Page } from 'components';
import { HASH_TABS, TABS } from '../constants';
import Header from './Header';
import ClientExpandedInfo from './ClientExpandedInfo';
import { useStyles } from './Client.styles';

const Client = ({
  client,
  getClient,
  ...props
}) => {
  const classes = useStyles();
  const { hash } = useLocation();
  const { id } = useParams();
  const [expand, setExpand] = useState(false);
  const [currentTab, setCurrentTab] = useState(TABS.DELIVERY_ORDERS);
  const [deliveryOrdersSelected, setDeliveryOrdersSelected] = useState([]);

  useEffect(() => {
    if (id) getClient(id);
  }, [id, getClient]);

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
  // eslint-disable-next-line no-unused-vars
  const _resetSelectedOrders = useCallback(() => {
    setDeliveryOrdersSelected([]);
  }, [setDeliveryOrdersSelected]);

  /**
   * imports de los componentes de cada pestaña
   * @private
   */
  const _components = {
    [TABS.DELIVERY_ORDERS]: lazy(() => import('./DeliveryOrders')),
    [TABS.INVOICES]: lazy(() => import('./ClientInvoices')),
  };

  /**
   * Componente de la pestaña actual
   */
  const TabComponent = _components[currentTab];

  if (!id) return <LoadingScreen />;

  return (
    <Page className={classes.root} title={client.name}>
      <Container maxWidth={false}>
        <Header
          expanded={expand}
          onExpand={_toggleExpand}
          title={client?.name}
          {...props}
        />

        <ClientExpandedInfo
          expanded={expand}
          client={client}
        />

        <HashTabs currentTab={currentTab} tabs={['Albaranes', 'Facturas']} />

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

Client.propTypes = {
  client: PropTypes.object.isRequired,
  getClient: PropTypes.func.isRequired,
};

Client.displayName = 'Client';

export const story = Client;
export default memo(Client);
