export type Coin = {
    id: string,
    name: string,
    symbol: string,
    market_data: {
        price_usd: number,
        percent_change_usd_last_24_hours: number,
    };
}

export type Store = {
    savedCryptos : Coin[],
}

export type CryptoStore = {
    crypto : Store
}