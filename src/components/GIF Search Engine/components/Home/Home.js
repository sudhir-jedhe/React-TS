import React, { Fragment, useEffect, useState } from "react";
import { useGifs, removeDuplicates } from "../../utils";
import NoResult from "../noResult/noResult";
import Search from "../search/search";
import Grid from "../grid/grid";

import "./home.css";

const INIT_OFFSET = 0;
const PAGE_LIMIT = 30;
const pageMetaInit = {
  offset: INIT_OFFSET,
  limit: PAGE_LIMIT,
};

const Home = ({
  title,
  label,
  safeSearch,
  zoomContent,
  enableSearch,
  isRandom = false,
}) => {
  const [gifs, setGifs] = useState({});
  const [pageMeta, setPageMeta] = useState({ ...pageMetaInit });
  const [formData, setFormData] = useState({});
  const { gifsData, searchGif, isFetching, getTrendingGif, getRandomGif } =
    useGifs();

  useEffect(() => {
    setGifs({});
    updatePagination(true);
    setFormData({});
  }, [label]);

  useEffect(() => {
    setGifs({});
    updatePagination(true);
  }, [formData.q]);

  useEffect(() => {
    const apiToCall = getApiToCall(label);
    if (label === "home") {
      !!formData.q && apiToCall({ ...formData, ...pageMeta }, safeSearch);
    } else {
      apiToCall({ ...formData, ...pageMeta }, safeSearch);
    }
  }, [pageMeta]);

  useEffect(() => {
    if (isFetching) return;
    setGifs((prevGifs) => {
      const { data = [], meta = {}, pagination = {} } = gifsData;
      return {
        ...prevGifs,
        data: isRandom
          ? [...data]
          : removeDuplicates([...(prevGifs?.data || []), ...data]),
        meta,
        pagination,
      };
    });
  }, [gifsData, isFetching]);

  const updatePagination = (reset) =>
    setPageMeta((prevPageMeta) =>
      reset
        ? { ...pageMetaInit }
        : { ...prevPageMeta, offset: prevPageMeta.offset + pageMeta.limit }
    );

  const getApiToCall = (label) => {
    let apiToCall;
    switch (label) {
      case "home": {
        apiToCall = searchGif;
        break;
      }
      case "trending": {
        apiToCall = getTrendingGif;
        break;
      }
      case "random": {
        apiToCall = getRandomGif;
        break;
      }
      default:
        throw new Error(
          `No corresponding method to call API found for ${label}.`
        );
    }
    return apiToCall;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const elements = [...e.target.elements];
    if (!elements.find((el) => el.id === "q").value) return;

    const formData = elements.reduce((formData, element) => {
      if (element.id) {
        formData[element.id] = element.value;
      }
      return formData;
    }, {});

    setFormData({ ...formData });
  };

  const handleFetchData = () => {
    updatePagination(false);
  };

  return (
    <Fragment>
      {title && <div className="homeTitle">{title}</div>}
      {enableSearch && (
        <Search
          safeSearch={safeSearch}
          handleSearch={handleSearch}
          isFetching={isFetching}
        />
      )}
      <div className="contentRoot">
        {!gifs?.data?.length && isFetching ? (
          <div className="fetchingRoot">Getting you those GIFs...</div>
        ) : gifs?.data?.length ? (
          <Grid
            data={gifs?.data || []}
            zoomContent={zoomContent}
            handleFetchData={handleFetchData}
            isFetching={isFetching}
            isRandom={isRandom}
            actionButtonLabel={
              isFetching
                ? "Loading..."
                : isRandom
                ? "Show another GIF"
                : "Load more such GIFs"
            }
          />
        ) : (
          <NoResult />
        )}
      </div>
    </Fragment>
  );
};

export default Home;
