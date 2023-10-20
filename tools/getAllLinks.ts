import * as fs from "fs";

import sound, { sourceType } from "../src/data/sound";

const links = {
  twitter: new Set<string>(),
  youtube: new Set<string>()
};

sound.forEach(item => {
  const url = new URL(item.source.url);
  switch (item.source.type) {
    case sourceType.Twitter:
      links.twitter.add(url.origin + url.pathname);
      break;

    case sourceType.Youtube:
      links.youtube.add(url.searchParams.get("v")
        ? url.origin + url.pathname + "?v=" + url.searchParams.get("v")
        : "https://www.youtube.com/watch?v=" + url.pathname.slice(1));
      break;
  }
});

let outputTxt = "";
for (const source in links) {
  if (Object.prototype.hasOwnProperty.call(links, source)) {
    const urls:Set<string> = links[source];
    urls.forEach(url => {
      console.log(url);
      outputTxt += url + "\n";
    });
  }
}

fs.writeFile("./tools/source-links.txt", outputTxt, "utf8", err => { if (err) console.error(err); });
