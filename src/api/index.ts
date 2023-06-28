import { API_BASE_URL } from '../constants';
import { ResponsePhotosType } from '../types';

type QueryParamsType = {
  key: string;
  value: string | null;
};

const generateQueryString = (queryParams: QueryParamsType[]): string => {
  return queryParams.length ? `?${queryParams.map((x) => `${x.key}=${x.value}`).join('&')}` : '';
};

const getPhotosByParams = async (
  queryParams: QueryParamsType[]
): Promise<ResponsePhotosType | undefined> => {
  try {
    const response = await fetch(`${API_BASE_URL}search/${generateQueryString(queryParams)}`, {
      headers: {
        // Authorization: '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf',
        Authorization: '8rqce3JeU4C1itDHBEWXhElQssSDTduy7eMvHu4OMy71vPhakPIyfURt',
      },
    });

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
    const response = await fetch(query, {
      headers: {
        // Authorization: '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf',
        Authorization: '8rqce3JeU4C1itDHBEWXhElQssSDTduy7eMvHu4OMy71vPhakPIyfURt',
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export { getPhotosByParams, getPhotosByString };
