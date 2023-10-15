export const enum sourceType {
  Twitter,
  Youtube,
}

export const enum personOptions { MemeNe, MemeTan, MemeBoth }
export const person = new Map<personOptions, string>([
  [personOptions.MemeNe, "めめ姉"],
  [personOptions.MemeTan, "めめタン"],
  [personOptions.MemeBoth, "めめ姉とめめタン"],
]);

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
  who?: personOptions,
  group?: jpGroupOption,
  source: {
    title: string,
    type: sourceType,
    url: string,
    period?: string,
  },
  isASMR?: boolean,
  volume?: number,
}

const sound:soundDataInterface[] = [
  {
    id: 1,
    name: "おはめめ",
    date: "2023-10-8",
    who: personOptions.MemeTan,
    group: jpGroupOption.A,
    source: {
      title: "【朝活┊KU100 ASMR】Hello August🌻8月最初の「おはよう」待ってるよ🐏",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=-fUS25Ca-yg",
      period: "25:14.8 - 25:16.8"
    },
    isASMR: true,
  },
  {
    id: 2,
    name: "会いに来てくれてありがとう",
    date: "2023-10-8",
    who: personOptions.MemeTan,
    group: jpGroupOption.A,
    source: {
      title: "【朝活┊KU100 ASMR】Hello August🌻8月最初の「おはよう」待ってるよ🐏",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=-fUS25Ca-yg",
      period: "45:34.4 - 45:37.4"
    },
    isASMR: true,
  },
  {
    id: 3,
    name: "こんめめ 調子どお？",
    date: "2023-10-15",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ka,
    source: {
      title: "ドーナツ美味しそうでしょ？🍩😋 でもめめは...🐏🖐️",
      type: sourceType.Twitter,
      url: "https://twitter.com/memehitsuji19/status/1703835757113491805",
      period: "00:00.1 - 00:01.5"
    },
    volume: 0.3,
  },
  {
    id: 4,
    name: "一緒にお菓子でも食べない？",
    date: "2023-10-15",
    who: personOptions.MemeTan,
    group: jpGroupOption.A,
    source: {
      title: "ドーナツ美味しそうでしょ？🍩😋 でもめめは...🐏🖐️",
      type: sourceType.Twitter,
      url: "https://twitter.com/memehitsuji19/status/1703835757113491805",
      period: "00:02.5 - 00:04.4"
    },
    volume: 0.3,
  },
  {
    id: 5,
    name: "え？食べないの？美味しいのに..",
    date: "2023-10-15",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ha,
    source: {
      title: "ドーナツ美味しそうでしょ？🍩😋 でもめめは...🐏🖐️",
      type: sourceType.Twitter,
      url: "https://twitter.com/memehitsuji19/status/1703835757113491805",
      period: "00:04.6 - 00:07.1"
    },
    volume: 0.3,
  },
  {
    id: 6,
    name: "ほら見て！🍩持ってきてるんだよ！",
    date: "2023-10-15",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ha,
    source: {
      title: "ドーナツ美味しそうでしょ？🍩😋 でもめめは...🐏🖐️",
      type: sourceType.Twitter,
      url: "https://twitter.com/memehitsuji19/status/1703835757113491805",
      period: "00:06.8 - 00:10.3"
    },
    volume: 0.3,
  },
  {
    id: 7,
    name: "はーーーーしししししししししーー",
    date: "2023-10-15",
    who: personOptions.MemeNe,
    group: jpGroupOption.Ha,
    source: {
      title: "【作業雑談┋Just Chatting】来週のスケジュールつくり→スイカゲーム→雀魂(作業)🐏羊娘めめ Vtuber",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=Ul3BmdcFeDg",
      period: "2:29:01.0 - 2:29:07.6"
    },
    volume: 0.3,
  },
  {
    id: 8,
    name: "ガチホを改造してみたでし、テストして欲しいでし",
    date: "2023-10-15",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ka,
    source: {
      title: " スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s",
      period: "2:41.8 - 2:46.0"
    },
    volume: 0.3,
  },
];

export default sound;
