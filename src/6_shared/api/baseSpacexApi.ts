import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { spacexApiUrls } from "@shared/constants/api.ts";

export const baseSpacexApi = createApi({
  reducerPath: "baseSpacexApi",
  baseQuery: fetchBaseQuery({ baseUrl: spacexApiUrls.BASE }),
  endpoints: () => ({}),
});
