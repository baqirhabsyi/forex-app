import ConfigApi from './ConfigApi'

export const fetchRates = () => ConfigApi.get('latest')
