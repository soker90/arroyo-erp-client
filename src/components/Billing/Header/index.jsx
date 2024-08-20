import PropTypes from 'prop-types'
import { SkipForward, SkipBack, ArrowDownToLine } from 'lucide-react'

import { Header } from 'components'
import { downloadFile } from 'utils'
import {
  API_CLIENT_BILLING_DOWNLOAD, API_PROVIDER_BILLING_DOWNLOAD,
  PATH_CLIENT_BILLING,
  PATH_PROVIDER_BILLING
} from 'constants/paths'
import { isClient } from '../utils'

const getRoute = type => (isClient(type) ? PATH_CLIENT_BILLING : PATH_PROVIDER_BILLING)
const getDownloadLink = type => (isClient(type)
  ? API_CLIENT_BILLING_DOWNLOAD
  : API_PROVIDER_BILLING_DOWNLOAD)

const HeaderBook = ({
  year,
  type
}) => {
  const _handleClickDownload = short => () => downloadFile(
    `${getDownloadLink(type)}/export?year=${year}${short ? '&short=true' : ''}`,
    `${short ? '347 -' : 'Facturación'} ${type || ''} ${year}.ods`
  )

  return (
    <Header
      title='Facturación'
      description={`Facturación ${type || ''} ${year}`}
      buttons={[
        {
          onClick: _handleClickDownload(true),
          Icon: ArrowDownToLine,
          label: '347',
          variant: 'contained'
        },
        {
          onClick: _handleClickDownload(),
          Icon: ArrowDownToLine,
          label: 'Descargar',
          variant: 'contained'
        },
        {
          to: `${getRoute(type)}/${year - 1}`,
          Icon: SkipBack,
          label: `${year - 1}`,
          variant: 'outlined'
        },
        {
          to: `${getRoute(type)}/${year + 1}`,
          Icon: SkipForward,
          label: `${year + 1}`,
          variant: 'outlined'
        }
      ]}
    />
  )
}

HeaderBook.propTypes = {
  year: PropTypes.number.isRequired,
  type: PropTypes.string
}

export const story = HeaderBook
export default HeaderBook
