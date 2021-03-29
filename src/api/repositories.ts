import axios, { CancelTokenSource } from "axios";
import type { RepositoriesResponse } from "typings/repository";

const ITEMS_PER_PAGE = 30;

export const getRepositories = async (
  search: string,
  page: number,
  axiosCancelToken: CancelTokenSource,
): Promise<RepositoriesResponse | undefined> => {
  try {
    const { data } = await axios.get<RepositoriesResponse>(
      `search/repositories`,
      {
        params: {
          q: search,
          per_page: ITEMS_PER_PAGE,
          sort: 'stars',
          order: "desc",
          page,
        },
        cancelToken: axiosCancelToken.token,
      }
    );
    return data;
  } catch (error) {
    console.error("[Repositories fetching error]", error);
  }
};
