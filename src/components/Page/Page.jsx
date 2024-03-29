import { useMemo } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { APP_VERSION } from 'config'

const {
  VITE_ENV_NAME
} = import.meta.env

const PageView = ({
  title,
  children,
  ...rest
}) => {
  const composeTile = useMemo(() => {
    const env = VITE_ENV_NAME ? `[${VITE_ENV_NAME}] ` : ''
    return `${env}${title} - Arroyo v${APP_VERSION}`
  }, [title])

  return (
    <div {...rest}>
      <Helmet>
        <title>{composeTile}</title>
      </Helmet>
      {children}
    </div>
  )
}

PageView.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string
}

export default PageView
