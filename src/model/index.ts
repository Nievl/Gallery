export enum LoadingState {
  "loading",
  "error",
  "loaded",
}

export type responseYaDiskAlbums = {
  name: string;
  path: string;
  thumbnail: string;
  year: number;
  description: string;
};
