import { SWRConfig } from 'swr'
import axios from 'axios'
import { localStorageProvider } from '../utils/localStorageProvider'

const SwrProvider = ({ children }) => {
  return (
    <SWRConfig value={{ provider: localStorageProvider, fetcher: (url) => axios.get(url).then(res => res.data), refreshInterval: 0 }}>
      {children}
    </SWRConfig>
  )
}

export default SwrProvider
