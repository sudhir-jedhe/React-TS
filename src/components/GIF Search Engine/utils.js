import { useEffect, useState } from "react";

const REACT_APP_GIPHY_API_KEY = "KtnqluxUOE5fGEzAuzGp2xoNAYI3vq9k"; //!!Important: Please dont abuse the api key as I too use the same. Kinda long process to find an giphy acceptable fake email.

const giphyBaseUrl = `https://api.giphy.com/v1/gifs`;

export const noResultGif = `https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHdpdjB5czI3cXM0Y3JyeXI2ZHRuamZhY3o1djlhM25xd2l4c2c4NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2kXLNQypdX9O1A3zxX/giphy.gif`;

const appendApiKeyToQueryParam = (queryParamsObject, safeSearch) => {
  return {
    ...queryParamsObject,
    api_key: REACT_APP_GIPHY_API_KEY,
    bundle: "clips_grid_picker",
    rating: safeSearch ? "g" : "",
  };
};

const addQueryParameters = (queryParamsObject) => {
  if (!Object.keys(queryParamsObject).length) return "";

  return (
    "?" +
    Object.keys(queryParamsObject)
      .reduce((queryArr, param) => {
        if (queryParamsObject[param]) {
          queryArr.push(`${param}=${queryParamsObject[param]}`);
        }
        return queryArr;
      }, [])
      .join("&")
  );
};

export class GifApi {
  static search(queryParamsObject = {}) {
    return fetch(
      `${giphyBaseUrl}/search${addQueryParameters(queryParamsObject)}`
    );
  }

  static trending(queryParamsObject = {}) {
    return fetch(
      `${giphyBaseUrl}/trending${addQueryParameters(queryParamsObject)}`
    );
  }

  static random(queryParamsObject = {}) {
    return fetch(
      `${giphyBaseUrl}/random${addQueryParameters(queryParamsObject)}`
    );
  }
}

export const useGifs = () => {
  const [gifsData, setGifsData] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const searchGif = async (queryParamsObject = {}, safeSearch = true) => {
    setIsFetching(true);
    const response = await GifApi.search(
      appendApiKeyToQueryParam(queryParamsObject)
    ).then((res) => res.json());
    setGifsData(response);

    setIsFetching(false);
  };

  const getTrendingGif = async (queryParamsObject, safeSearch) => {
    setIsFetching(true);
    const response = await GifApi.trending(
      appendApiKeyToQueryParam(queryParamsObject, safeSearch)
    ).then((res) => res.json());

    setGifsData(response);

    setIsFetching(false);
  };

  const getRandomGif = async (queryParamsObject, safeSearch) => {
    setIsFetching(true);
    const response = await GifApi.random(
      appendApiKeyToQueryParam(queryParamsObject, safeSearch)
    ).then((res) => res.json());
    response.data = [response?.data || {}]; //to make the response.data structure similar to that of search and trending response
    setGifsData(response);
    setIsFetching(false);
  };

  return { gifsData, isFetching, searchGif, getTrendingGif, getRandomGif };
};

export const homeProps = {
  title: "This is the home page. Search any GIF you want!",
};
export const trendingProps = {
  title:
    "This is the trending page. Trending GIFs will be automatically shown!",
};
export const randomProps = {
  title:
    "This is the random GIF page. Some random GIF for you to make your day",
};

export const removeDuplicates = (inputArray, primaryKey = "id") => {
  const idArray = inputArray.map((inp) => inp[primaryKey]);
  return inputArray.filter(
    (inp, idx) => idArray.indexOf(inp[primaryKey]) === idx
  );
};

export const playerProps = {
  autoPlay: true,
  loop: true,
  playsInline: true,
};
