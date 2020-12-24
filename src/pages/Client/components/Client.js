/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useState } from 'react';
import { Box, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import { LoadingScreen, Page } from 'components';
import Header from './Header';
import ClientExpandedInfo from './ClientExpandedInfo';
import ClientInvoices from './ClientInvoices';
import { useStyles } from './Client.styles';

const Client = ({
  client,
  getClient,
  ...props
}) => {
  const classes = useStyles();
  const { id } = useParams();
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (id) getClient(id);
  }, [id, getClient]);

  /**
   * Expande o contrae la información
   * @private
   */
  const _toggleExpand = () => {
    setExpand(!expand);
  };

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

        <Box py={3} pb={6}>
          <ClientInvoices
            getInvoicesByClient={() => {
            }}
            idClient={id}
            invoices={[]}
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
