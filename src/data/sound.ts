export const enum sourceType {
  Twitter,
  Youtube,
}

export const enum person {
  MemeNe,
  MemeTan,
}

export const enum jpGroupOption { A, Ka, Sa, Ta, Na, Ha, Ma, Ya, Ra, Wa, Other }

export const jpGroup = new Map<jpGroupOption, string>([
  [jpGroupOption.A, "あ行"],
  [jpGroupOption.Ka, "か行"],
  [jpGroupOption.Sa, "さ行"],
  [jpGroupOption.Ta, "た行"],
  [jpGroupOption.Na, "な行"],
  [jpGroupOption.Ha, "は行"],
  [jpGroupOption.Ma, "ま行"],
  [jpGroupOption.Ya, "や行"],
  [jpGroupOption.Ra, "ら行"],
  [jpGroupOption.Wa, "わ行"],
  [jpGroupOption.Other, "その他"],
]);

export interface soundDataInterface {
  id: string | number,
  name: string,
  date?: string,
  who?: person,
  group?: jpGroupOption,
  source: {
    title: string,
    type: sourceType,
    url: string,
  },
  volume?: number,
}

const sound:soundDataInterface[] = [
  {
    id: 1,
    name: "おはめめ",
    date: "2023-10-8",
    who: person.MemeTan,
    group: jpGroupOption.A,
    source: {
      title: "【朝活┊KU100 ASMR】Hello August🌻8月最初の「おはよう」待ってるよ🐏",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=-fUS25Ca-yg",
    }
  },
  {
    id: 2,
    name: "会いに来てくれてありがとう",
    date: "2023-10-8",
    who: person.MemeTan,
    group: jpGroupOption.A,
    source: {
      title: "【朝活┊KU100 ASMR】Hello August🌻8月最初の「おはよう」待ってるよ🐏",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=-fUS25Ca-yg",
    }
  },
  {
    id: 3,
    name: "こんめめ",
    date: "2023-10-2",
    who: person.MemeTan,
    group: jpGroupOption.Ka,
    source: {
      title: "ドーナツ美味しそうでしょ？🍩😋",
      type: sourceType.Twitter,
      url: "https://twitter.com/memehitsuji19/status/1703835757113491805",
    },
    volume: 0.3,
  },
];

export default sound;
