import axios from "axios";
import type { RepositoriesResponse } from "typings/repository";

const ITEMS_PER_PAGE = 30;

type SortType = "asc" | "desc";

export const getRepositories = async (
  search: string = "react",
  page: number,
  order: SortType = "desc"
): Promise<RepositoriesResponse> => {
  try {
    const { data } = await axios.get<RepositoriesResponse>(
      `search/repositories`,
      {
        params: {
          q: search,
          per_page: ITEMS_PER_PAGE,
          order,
          page,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("[Repositories fetching error]", error);
    throw new Error(error);
  }
};
