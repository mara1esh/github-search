import { useState, useEffect, useMemo, useCallback } from "react";
import axios, { CancelTokenSource } from "axios";
import Pagination from "components/Pagination";
import List from "components/List";
import Input from "components/Input";
import Loader from "components/Loader";
import { getRepositories } from "api/repositories";
import type { RepositoriesResponse } from "typings/repository";
import "./styles.scss";

const Main = () => {
  const [input, setInput] = useState<string>("react");
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [repos, setRepos] = useState<RepositoriesResponse>();
  const [token] = useState<CancelTokenSource>(axios.CancelToken.source());

  const queries = useMemo(() => {
    return {
      original: localStorage.getItem("queries") ?? "",
      array: localStorage.getItem("queries")?.split(","),
    };
  }, [repos]);

  const handleSetQuery = useCallback(() => {
    if (!queries.array?.find((i) => i === input)) {
      localStorage.setItem("queries", queries?.original.concat(input + ","));
    }
  }, [repos]);

  const fetchRepositories = async () => {
    setLoading(true);
    try {
      const response = await getRepositories(input, page, token);
      if (response?.items) {
        setRepos(response);
        handleSetQuery();
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleCancelInput = () => {
    token.cancel();
    setLoading(false);
  };

  useEffect(() => {
    if (input) {
      fetchRepositories();
    }
  }, [page, input]);

  return (
    <div className="p-main">
      <section className="p-main__content">
        <Input
          onChange={handleInputChange}
          onCancel={handleCancelInput}
          placeholder="Search"
          value={input}
        />
        <div className="p-main__content__history">
          <p>I'm so sorry I don't have enough time for prettify this box ;(</p>
          <ul>
            {queries.array?.map((i: string) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        {loading ? <Loader /> : <List items={repos?.items ?? []} />}
      </section>
      <Pagination
        currentPage={page}
        itemsCount={repos?.total_count || 0}
        onChange={handlePageChange}
      />
    </div>
  );
};

export { Main };
