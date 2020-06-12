/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  lazy, memo, Suspense, useEffect, useMemo, useState,
} from 'react';
import {
  Box, Card, Container, Grid, Tab, Tabs,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router';

import { Header, LoadingScreen, Page } from 'components';
import { useStyles } from 'pages/Providers/Provider/components/Provider.styles';
import ProviderInfo from 'pages/Providers/Provider/components/ProviderInfo';
import ProviderBilling from 'pages/Providers/Provider/components/ProviderBilling';
import { HASH_TABS, TABS } from '../constants';

const Provider = (
  {
    provider, billing, getProvider, match: { params: { idProvider } }, showEditModal,
    showEditProductModal, location: { hash }, createDeliveryOrder,
  },
) => {
  const classes = useStyles();
  const history = useHistory();
  const [expand, setExpand] = useState(false);
  const [currentTab, setCurrentTab] = useState(TABS.DELIVERY_ORDERS);

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
    [],
  );

  /**
   * Buttons for header
   * @private
   */
  const _buttons = useMemo(() => ({
    [TABS.PRODUCTS]: {
      variant: 'contained',
      onClick: () => showEditProductModal(),
      Icon: AddIcon,
      disableSvg: true,
      label: 'Nuevo producto',
    },
    [TABS.DELIVERY_ORDERS]: {
      variant: 'contained',
      onClick: _handleClickNewDeliveryOrder,
      Icon: AddIcon,
      disableSvg: true,
      label: 'Nuevo albarán',
    },
    [TABS.INVOICES]: {
      variant: 'contained',
      onClick: _handleClickNewDeliveryOrder,
      Icon: AddIcon,
      disableSvg: true,
      label: 'Nueva factura',
    },
  }), []);

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

  /**
   * Event onChange tabs
   * @param {Object} event
   * @param {String} value
   * @private
   */
  const _handleTabsChange = (event, value) => {
    history.push(`#${value}`);
  };

  return (
    <Page className={classes.root} title={provider.name}>
      <Container maxWidth={false} className={classes.container}>
        <Header
          routes={[{
            link: '/app/proveedores',
            title: 'Proveedores',
          }]}
          title={provider.name}
          buttonsSecondary={[{
            variant: 'text',
            onClick: _toggleExpand,
            Icon: expand ? ExpandLessIcon : ExpandMoreIcon,
            disableSvg: true,
            label: expand ? 'Ocultar información' : 'Mostrar información',
          }]}
          buttons={[_buttons[currentTab]]}
        />
        {expand
        && (
          <Box mt={3} className={classes.cards}>
            <Grid container spacing={3}>
              <ProviderInfo {...provider} showEditModal={_showEditModal} />
              <ProviderBilling {...billing} />
            </Grid>
          </Box>
        )}

        <Card className={classes.tabs}>
          <Tabs
            onChange={_handleTabsChange}
            scrollButtons="auto"
            textColor="secondary"
            value={currentTab}
            variant="scrollable"
          >
            {Object.values(TABS)
              .map(tab => (
                <Tab
                  key={tab}
                  value={tab}
                  label={tab}
                />
              ))}
          </Tabs>
        </Card>

        <Box py={3} pb={6}>
          <Suspense fallback={<LoadingScreen />}>
            <TabComponent />
          </Suspense>
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
};

Provider.displayName = 'Providers';

export const story = Provider;
export default memo(Provider);
