const fs = require("fs");

const tempPath =
  "https://cloud-api.yandex.net/v1/disk/public/resources?public_key=";
const albumPath = "https://disk.yandex.ru/d/7p429S2dAiBzlA";

const request = async () => {
  const result = await fetch(`${tempPath}${albumPath}&limit=70`);
  console.log("get folders");
  const json = await result.json();
  console.log(json._embedded.items.length);
  const folders = json._embedded.items.map(({ public_url, name }) => {
    const year = name.match(/\d{4}/)?.[0] ?? 0;
    return {
      path: public_url,
      name: name.match(/([\d]{1,2}_)(.*)/)[2],
      thumbnail: "",
      year: Number(year),
      description: "",
    };
  });
  fs.writeFileSync("folders.json", JSON.stringify(folders, null, 2));
  console.log("done");
};
request();
