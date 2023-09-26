import { DDItemType } from '../../types';

const queryExamples: string[] = [
  'summer',
  'travel',
  'technology',
  'office',
  'business',
  'beautiful',
  'nature',
  'dark',
  'car',
  'flowers',
  'beach',
  'space',
  'jungle',
  'sky',
  'forest',
  'landscape',
  'abstract',
  'food',
  'coffee',
  'mountain',
  'sunset',
  'fall',
  'cities',
  'rest',
  'morning',
  'evening',
  'job',
  'ocean',
  'music',
  'park',
  'health',
  'art',
  'culture',
  'restaurant',
  'meditation',
  'culinary',
  'adventure',
  'relaxation',
  'heritage',
  'cave',
];

const orientationItems: DDItemType[] = [
  {
    id: 1,
    name: 'All Orientations',
    value: '',
  },
  {
    id: 2,
    name: 'Horizontal',
    value: 'landscape',
  },
  {
    id: 3,
    name: 'Vertical',
    value: 'portrait',
  },
  {
    id: 4,
    name: 'Square',
    value: 'square',
  },
];

const sizeItems: DDItemType[] = [
  {
    id: 1,
    name: 'All Sizes',
    value: '',
  },
  {
    id: 2,
    name: 'Large',
    value: 'large',
  },
  {
    id: 3,
    name: 'Medium',
    value: 'medium',
  },
  {
    id: 4,
    name: 'Small',
    value: 'small',
  },
];

enum FilterEnum {
  Orientation,
  Size,
}

export { queryExamples, FilterEnum, orientationItems, sizeItems };
