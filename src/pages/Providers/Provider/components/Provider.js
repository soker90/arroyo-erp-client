import React, {lazy, memo, Suspense, useEffect, useMemo, useState} from 'react';
import {Box, Container, Grid, Tab, Tabs, Card} from '@material-ui/core';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import {Header, Page} from 'components';
import {useStyles} from 'pages/Providers/Provider/components/Provider.styles';
import ProviderInfo from 'pages/Providers/Provider/components/ProviderInfo';
import ProviderBilling from 'pages/Providers/Provider/components/ProviderBilling';
import LoadingScreen from 'components/LoadingScreen';
import {TABS} from '../constants';

const Provider = ({provider, billing, getProvider, match: {params: {idProvider}}, showEditModal, getProducts, products}) => {
  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  const [currentTab, setCurrentTab] = useState(TABS.PRODUCTS);

  useEffect(() => {
    getProvider(idProvider);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idProvider]);

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
  const _components = useMemo(
    () => ({
      [TABS.PRODUCTS]: lazy(() => import('./ProductsTable')),
    }),
    [],
  );

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
    setCurrentTab(value);
  };

  return (
    <Page className={classes.root} title={provider.name}>
      <Container maxWidth={false} className={classes.container}>
        <Header routes={[{link: '/app/proveedores', title: 'Proveedores'}]} title={provider.name} buttonsSecondary={[{
          variant: 'text',
          onClick: _toggleExpand,
          Icon: expand ? ExpandLessIcon : ExpandMoreIcon,
          disableSvg: true,
          label: expand ? 'Ocultar información' : 'Mostrar información',
        }]}/>
        {expand &&
        <Box mt={3} className={classes.cards}>
          <Grid container spacing={3}>
            <ProviderInfo {...provider} showEditModal={_showEditModal}/>
            <ProviderBilling {...billing} />
          </Grid>
        </Box>
        }

        <Card className={classes.tabs}>
        <Tabs
          onChange={_handleTabsChange}
          scrollButtons="auto"
          textColor="secondary"
          value={currentTab}
          variant="scrollable"
        >
          {Object.values(TABS).map(tab => (
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
            <TabComponent/>
          </Suspense>
        </Box>

      </Container>
    </Page>
  );
};

Provider.propTypes = {
  getProviders: PropTypes.func.isRequired,
  providers: PropTypes.array.isRequired,
  billing: PropTypes.object,
  getProvider: PropTypes.func.isRequired,
  showEditModal: PropTypes.func.isRequired,
};

Provider.displayName = 'Providers';

export default memo(Provider);
