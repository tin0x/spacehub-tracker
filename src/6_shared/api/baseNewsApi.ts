import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { newsApiUrls } from '@shared/constants/api.ts';

export const baseNewsApi = createApi({
  reducerPath: 'baseNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: newsApiUrls.BASE }),
  endpoints: () => ({}),
});
