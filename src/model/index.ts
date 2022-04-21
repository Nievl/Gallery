export type image = { original: string };

export type loading = "loading" | "error" | "success";

export type responseYaDisk = {
  public_key: string;
  public_url: string;
  _embedded: {
    sort: string;
    public_key: string;
    items: {
      antivirus_status: "clean";
      public_key: string;
      comment_ids: { private_resource: string; public_resource: string };
      name: string;
      exif: { date_time: string };
      created: string;
      size: number;
      resource_id: string;
      modified: string;
      mime_type: "image/jpeg" | "video/mp4";
      file: string;
      media_type: "image" | "video";
      preview: string;
      path: string;
      sha256: string;
      type: "file" | "dir";
      md5: string;
      revision: number;
    }[];
    limit: number;
    offset: number;
    path: string;
    total: string;
  };
  name: string;
  exif: {};
  resource_id: string;
  revision: number;
  created: string;
  modified: string;
  owner: { login: string; display_name: string; uid: string };
  path: string;
  comment_ids: { private_resource: string; public_resource: string };
  type: "file" | "dir";
  views_count: number;
};

export type responseYaDiskAlbums = { name: string; path: string };
