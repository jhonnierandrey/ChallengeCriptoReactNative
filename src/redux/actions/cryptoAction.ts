export const GET_COIN_METRICS = 'GET_COIN_METRICS';
export const GET_SAVED_CRYPTOS = 'GET_SAVED_CRYPTOS';

const API_URL = 'https://data.messari.io/api/v1/assets/';

export const getCoinMetrics = (ticker: string) => {
    const UPDATED_URL = `${API_URL}${ticker}/metrics`;
    try {
        return async dispatch => {
            const result = await fetch(UPDATED_URL, {
                method : 'GET',
                headers : {
                    'Content-Type' : 'application/json',
                }
            });
            const json = await result.json();
            if(json){
                dispatch({
                    type: GET_COIN_METRICS,
                    payload : json
                })
            }else{
                console.log('Unable to fetch.');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getSavedCryptos = () => {
    return {
        type: GET_SAVED_CRYPTOS,
    };
};