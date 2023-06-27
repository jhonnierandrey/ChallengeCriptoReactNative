import {filterRequiredData} from '../../utils/utils';

export const GET_COIN_METRICS = 'GET_COIN_METRICS';

const API_URL = 'https://data.messari.io/api/v1/assets/';

export const getCoinMetrics = (ticker: string) => {
  const UPDATED_URL = `${API_URL}${ticker}/metrics`;
  try {
    return async dispatch => {
      const response = await fetch(UPDATED_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      if (result) {
        dispatch({
          type: GET_COIN_METRICS,
          payload: [filterRequiredData(result)],
        });
      } else {
        console.log('Unable to fetch.');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
