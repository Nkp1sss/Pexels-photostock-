import { SUPERJOB_API_URL } from '../../utils/constants';
import { ResponsePhotosType } from '../../types';

type QueryParamsType = {
  key: string;
  value: string;
};

const generateQueryString = (queryParams: QueryParamsType[]): string => {
  return queryParams.length
    ? `?${queryParams
        .filter((x) => x.value !== '')
        .map((x) => `${x.key}=${x.value}`)
        .join('&')}`
    : '';
};

const RequestInit = {
  headers: {
    Authorization: '8rqce3JeU4C1itDHBEWXhElQssSDTduy7eMvHu4OMy71vPhakPIyfURt',
  },
};

const getPhotosByParams = async (
  queryParams: QueryParamsType[]
): Promise<ResponsePhotosType | undefined> => {
  try {
    const response = await fetch(
      `${SUPERJOB_API_URL}search/${generateQueryString(queryParams)}`,
      RequestInit
    );

    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

const getPhotosByString = async (query: string): Promise<ResponsePhotosType | undefined> => {
  try {
    const response = await fetch(query, RequestInit);

    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export { getPhotosByParams, getPhotosByString };
