type ResponsePhotosType = {
  next_page?: string;
  prev_page?: string;
  page: number;
  per_page: number;
  total_results: number;
  photos: PhotoType[];
};

type PhotoType = {
  id: number;
  photographer: string;
  photographer_url: string;
  src: {
    landscape: string;
    portrait: string;
    large: string;
    original: string;
  };
};

type UseParamsType = {
  query?: string;
};

export type { ResponsePhotosType, PhotoType, UseParamsType };
