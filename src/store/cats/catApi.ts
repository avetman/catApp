import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import * as T from '../../types'
const BASE_URL = 'https://api.thecatapi.com/v1'
const API_KEY = 'live_CFd3gnd84SQ7qZmvWDE48W9ynrFG9yTSb1TqhLTvEnGZIPmd0s3cy0LTETZXUYLe'
export const catApi = createApi({
	reducerPath: 'catApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers) => {
			headers.set('x-api-key', API_KEY)
			return headers;
		}
	}),
	endpoints:(builder) => ({
		getCategories:builder.query<T.Category, string>({
			query: () => `/categories`
		}),
		getImagesByCategory: builder.query<T.Image, { categoryIds: number }>({
			query: ({categoryIds=1}) => ({
				url: `/images/search`,
				params: {
					limit: 10,
					category_ids: categoryIds
				}
			})
		}),
		getMoreImages: builder.query<T.Image, {categoryIds: number, page: number}>({
			query: ({categoryIds,page=1}) => ({
				url: `/images/search`,
				params: {
					limit: 10,
					page: page,
					category_ids: categoryIds
				}
			}),
			//for transforming response and get only data
			//transformResponse:(response) => response.results
		})
	})
})


export const {
	useGetCategoriesQuery,
	useGetImagesByCategoryQuery,
	useLazyGetMoreImagesQuery,
} = catApi;
