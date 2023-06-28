/**
 *
 * @param response object with all the coin's data from the API
 * @returns an object with only the data used in the UI
 */
export const filterRequiredData = (response: {data: any; status: any}) => {
  const {data} = response;

  return {
    id: data.id,
    name: data.name,
    symbol: data.symbol,
    market_data: {
      price_usd: data.market_data.price_usd,
      percent_change_usd_last_24_hours:
        data.market_data.percent_change_usd_last_24_hours,
    },
  };
};
