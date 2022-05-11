const fs = require("fs");

const tempPath =
  "https://cloud-api.yandex.net/v1/disk/public/resources?public_key=";
const albumPath = "https://disk.yandex.ru/d/7p429S2dAiBzlA";

const request = async () => {
  const result = await fetch(`${tempPath}${albumPath}&limit=70`);
  console.log("getting folders.....");
  const json = await result.json();
  if (json.error) {
    console.log(json.message);
    return;
  }
  console.log("number of albums: ",json._embedded.items.length);
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
  fs.writeFileSync("albums.json", JSON.stringify(folders, null, 2));
  console.log("done");
};
request();
