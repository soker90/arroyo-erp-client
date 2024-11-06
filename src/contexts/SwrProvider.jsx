import { SWRConfig } from 'swr'
import axios from 'axios'

const SwrProvider = ({ children }) => {
  return (
    <SWRConfig value={{ fetcher: (url) => axios.get(url).then(res => res.data), refreshInterval: 0 }}>
      {children}
    </SWRConfig>
  )
}

export default SwrProvider
