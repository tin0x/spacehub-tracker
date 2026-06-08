import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { spaceDevsApiUrls } from "@shared/constants/api.ts";

export const baseSpaceDevsApi = createApi({
  reducerPath: "baseSpaceDevsApi",
  baseQuery: fetchBaseQuery({ baseUrl: spaceDevsApiUrls.BASE }),
  endpoints: () => ({}),
});
