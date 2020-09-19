/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  memo, useEffect, useState,
} from 'react';
import {
  Box, Container,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import { Page, ProviderExpandedInfo, ProviderInvoices } from 'components';
import Header from './Header';

import { useStyles } from './Provider.styles';

const ProviderExpense = ({
  provider, billing, getProvider, ...props
}) => {
  const classes = useStyles();
  const { idProvider } = useParams();
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (idProvider) getProvider(idProvider);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idProvider]);

  /**
   * Expande o contrae la información
   * @private
   */
  const _toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <Page className={classes.root} title={provider.name}>
      <Container maxWidth={false}>
        <Header
          expanded={expand}
          onExpand={_toggleExpand}
          title={provider?.name}
          idProvider={idProvider}
          note={provider?.note}
          {...props}
        />
        <ProviderExpandedInfo
          expanded={expand}
          billing={billing}
          provider={provider}
        />

        <Box py={3} pb={6}>
          <ProviderInvoices />
        </Box>

      </Container>
    </Page>
  );
};

ProviderExpense.propTypes = {
  provider: PropTypes.object.isRequired,
  billing: PropTypes.object,
  getProvider: PropTypes.func.isRequired,
  createDeliveryOrder: PropTypes.func.isRequired,
  showEditProductModal: PropTypes.func.isRequired,
  createInvoice: PropTypes.func.isRequired,
};

ProviderExpense.displayName = 'ProviderExpense';

export const story = ProviderExpense;
export default memo(ProviderExpense);
