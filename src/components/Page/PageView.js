import { forwardRef, memo, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const { REACT_APP_VERSION, REACT_APP_ENV_NAME } = process.env;

const PageView = forwardRef(({ title, children, ...rest }, ref) => {
  const composeTile = useMemo(() => {
    const env = REACT_APP_ENV_NAME ? `[${REACT_APP_ENV_NAME}] ` : '';
    return `${env}${title} - Arroyo v${REACT_APP_VERSION}`;
  }, [title]);

  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{composeTile}</title>
      </Helmet>
      {children}
    </div>
  );
});

PageView.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

PageView.displayName = 'PageView';

export default memo(PageView);
