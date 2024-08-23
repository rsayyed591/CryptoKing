import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoAPIHeaders ={
    //   'x-rapidapi-key': '570b86dafdmsh0d1e1c3b0b6d501p12db1bjsnd77068d5011b',
    //   'x-rapidapi-host': 'coinranking1.p.rapidapi.com'    
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({url,headers:cryptoAPIHeaders})

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:{builder} => ({
        getCryptos:builder.query({
            query:()=>createRequest('/exchanges')
        })
    })
})