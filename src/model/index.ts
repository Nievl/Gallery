export enum LoadingState {
  'loading',
  'error',
  'loaded',
}

export type responseYaDiskAlbums = {
  name: string;
  path: string;
  thumbnail: string;
  year: string;
  id: string;
  description: string;
  date_creation: string;
  date_update: string;
};
