import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IFavorites } from './api.interface'

  const BASE_URL = 'https://65182940582f58d62d357491.mockapi.io/goods'

  export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL
    }),
    tagTypes: [],
    endpoints: builder => ({
      addFavorites: builder.query<IFavorites[], null>({
        query: () => ({
          url: '/',
          params: {
            page: '1',
            limit: '4',
          }
        })/*'/?page=1&limit=4'*/
      }),
      fullFavorites: builder.query<IFavorites[], null>({
        query: () => '/'
      }),
      detailFavorite: builder.query<IFavorites, string>({
        query: (id) => `/${id}`
      }),
      searchFavorite: builder.query<IFavorites[],string>({
        query: (search) => ({
          url: '/',
          params: {
            search: search
          }
        }) /*`?search=${search}`*/
      })
    })
  })

  export const { useAddFavoritesQuery,useFullFavoritesQuery,useDetailFavoriteQuery, useSearchFavoriteQuery } = api