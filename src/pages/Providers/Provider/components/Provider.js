/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router';

import { TYPE_PROVIDER } from 'constants/providers';
import { LoadingScreen } from 'components';

const Provider = ({
  provider, getProvider,
}) => {
  const { idProvider } = useParams();
  const history = useHistory();

  const routesByType = useMemo(() => ({
    [TYPE_PROVIDER.GENERAL]: '/app/proveedores/general',
    [TYPE_PROVIDER.EXPENSES]: '/app/gastos',
    undefined: 'general',
  }), []);

  useEffect(() => {
    if (idProvider) getProvider(idProvider);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idProvider]);

  useEffect(() => {
    const composeRoute = `${routesByType[provider.type]}/${idProvider}`;
    if (provider._id === idProvider) history.replace(composeRoute);
  }, [provider]);

  return <LoadingScreen />;
};

Provider.propTypes = {
  provider: PropTypes.object.isRequired,
  getProvider: PropTypes.func.isRequired,
};

Provider.displayName = 'Provider';

export const story = Provider;
export default memo(Provider);
