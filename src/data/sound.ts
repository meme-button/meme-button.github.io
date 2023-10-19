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
  yomikata?: string,
  date?: string,
  who?: personOptions,
  group: jpGroupOption,
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
      url: "https://www.youtube.com/watch?v=-fUS25Ca-yg&t=25m14s",
      period: "25:14.8 - 25:16.8"
    },
    isASMR: true,
  },
  {
    id: 2,
    name: "会いに来てくれてありがとう",
    yomikata: "あいにきてくれてありがとう",
    date: "2023-10-8",
    who: personOptions.MemeTan,
    group: jpGroupOption.A,
    source: {
      title: "【朝活┊KU100 ASMR】Hello August🌻8月最初の「おはよう」待ってるよ🐏",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=-fUS25Ca-yg&t=45m34s",
      period: "45:34.4 - 45:37.4"
    },
    isASMR: true,
  },
  {
    id: 3,
    name: "こんめめ 調子どお？",
    yomikata: "こんめめ ちょうしどお",
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
    yomikata: "いっしょにおかしでもたべない",
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
    yomikata: "え？たべないの？おいしいのに..",
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
    name: "ほら見て！🍩 持ってきてるんだよ！",
    yomikata: "ほらみて！ドーナツもってきてるんだよ！",
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
      url: "https://www.youtube.com/watch?v=Ul3BmdcFeDg&t=2h29m1s",
      period: "2:29:01.0 - 2:29:07.6"
    },
    volume: 0.3,
  },
  {
    id: 8,
    name: "ガチホを改造してみたでし、テストして欲しいでし！",
    yomikata: "ガチホをかいぞうしてみたでし、テストしてほしいでし",
    date: "2023-10-15",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ka,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=2m41s",
      period: "2:41.8 - 2:46.0"
    },
    volume: 0.4,
  },
  {
    id: 9,
    name: "こんめめ 来てくれてありがとう〜",
    yomikata: "こんめめ きてくれてありがとう〜",
    date: "2023-10-16",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ka,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=5m26s",
      period: "5:26.3 - 5:29.4"
    },
    volume: 0.4,
  },
  {
    id: 10,
    name: "頑張るぞ〜",
    yomikata: "がんばるぞ",
    date: "2023-10-16",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ka,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=5m29s",
      period: "5:29.4 - 5:30.7"
    },
    volume: 0.8,
  },
  {
    id: 11,
    name: "頑張るぞ(?)",
    yomikata: "がんばるぞ",
    date: "2023-10-16",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ka,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=5m58s",
      period: "5:58.5 - 5:59.7"
    },
    volume: 0.9,
  },
  {
    id: 12,
    name: "やばっ やばい近づきすぎだ",
    yomikata: "やばっ やばいちかづきすぎだ",
    date: "2023-10-16",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ya,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=7m17s",
      period: "7:17.3 - 7:19.7"
    },
    volume: 0.4,
  },
  {
    id: 13,
    name: "あ！！！は..ふふ",
    date: "2023-10-16",
    who: personOptions.MemeTan,
    group: jpGroupOption.A,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=9m20s",
      period: "9:20.7 - 9:22.7"
    },
    volume: 0.2,
  },
  {
    id: 14,
    name: "取った取って！取って..あ！早く逃げて",
    yomikata: "とったとって！とって..あ！はやくにげて",
    date: "2023-10-16",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ta,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=27m29s",
      period: "27:29.5 - 27:35.5"
    },
    volume: 0.4,
  },
  {
    id: 15,
    name: "終わった..終わった！ははは...終わったあー",
    yomikata: "おわった..おわった！ははは...おわったあー",
    date: "2023-10-16",
    who: personOptions.MemeTan,
    group: jpGroupOption.A,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=28m",
      period: "28:0.5 - 28:06.0"
    },
    volume: 0.4,
  },
  {
    id: 16,
    name: "なんで 勝ってないのー",
    yomikata: "なんで かってないのー",
    date: "2023-10-16",
    who: personOptions.MemeTan,
    group: jpGroupOption.Na,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=28m25s",
      period: "28:25.4 - 28:28.5"
    },
    volume: 0.5,
  },
  {
    id: 17,
    name: "ななななたやや！(?)",
    yomikata: "ななななたやや",
    date: "2023-10-17",
    who: personOptions.MemeTan,
    group: jpGroupOption.Na,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=30m34s",
      period: "30:34.5 - 30:36.8"
    },
    volume: 0.2,
  },
  {
    id: 18,
    name: "やばい！😱",
    yomikata: "やばい",
    date: "2023-10-17",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ya,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=30m46s",
      period: "30:46.5 - 30:48.0"
    },
    volume: 0.2,
  },
  {
    id: 19,
    name: "ナイスー",
    yomikata: "ナイスー",
    date: "2023-10-18",
    who: personOptions.MemeTan,
    group: jpGroupOption.Na,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=40m12s",
      period: "40:12.9 - 40:14.3"
    },
    volume: 0.35,
  },
  {
    id: 20,
    name: "あ！！！",
    yomikata: "あ",
    date: "2023-10-18",
    who: personOptions.MemeTan,
    group: jpGroupOption.A,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=40m25s",
      period: "40:25.5 - 40:26.4"
    },
    volume: 0.2,
  },
  {
    id: 21,
    name: "ダメだった〜",
    yomikata: "ダメだった",
    date: "2023-10-18",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ta,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=40m28s",
      period: "40:28.0 - 40:29.8"
    },
    volume: 0.4,
  },
  {
    id: 22,
    name: "へへへ〜",
    yomikata: "へへへ",
    date: "2023-10-18",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ha,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=40m35s",
      period: "40:35.4 - 40:36.5"
    },
    volume: 0.4,
  },
  {
    id: 23,
    name: "こんめめ〜",
    yomikata: "へへへ",
    date: "2023-10-18",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ha,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=40m37s",
      period: "40:37.6 - 40:39.6"
    },
    volume: 0.45,
  },
  {
    id: 24,
    name: "行くぞー",
    yomikata: "いくぞー",
    date: "2023-10-18",
    who: personOptions.MemeTan,
    group: jpGroupOption.A,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=51m39s",
      period: "51:39.7 - 51:41.5"
    },
    volume: 0.4,
  },
  {
    id: 25,
    name: "来るんな！来るんな！",
    yomikata: "くるんな！くるんな！",
    date: "2023-10-19",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ka,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=52m26s",
      period: "52:26.8 - 52:28.5"
    },
    volume: 0.3,
  },
  {
    id: 26,
    name: "うーん...難しいですね",
    yomikata: "うーん...むずかしいですね",
    date: "2023-10-19",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ka,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=54m19s",
      period: "54:17.6 - 54:19.9"
    },
    volume: 0.5,
  },
  {
    id: 27,
    name: "ふうふ、あぶっ..あっ、死んだ！..はははは😂",
    yomikata: "ふうふ、あぶっ..あっ、しんだ！..はははは",
    date: "2023-10-19",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ha,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=1h3m27s",
      period: "1:03:27.8 - 1:03:31.3"
    },
    volume: 0.4,
  },
  {
    id: 28,
    name: "あらららららら〜",
    yomikata: "あらららららら",
    date: "2023-10-19",
    who: personOptions.MemeTan,
    group: jpGroupOption.A,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=1h3m37s",
      period: "1:03:37.4 - 1:03:39.3"
    },
    volume: 0.4,
  },
  {
    id: 29,
    name: "ナイス〜ワイプアウト〜",
    yomikata: "ナイスワイプアウト",
    date: "2023-10-19",
    who: personOptions.MemeTan,
    group: jpGroupOption.Na,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=1h3m40s",
      period: "1:03:40.3 - 1:03:43.3"
    },
    volume: 0.4,
  },
  {
    id: 30,
    name: "イェイ！..イェイ！..ウイ！ははははは",
    yomikata: "イェイ..イェイ..ウイははははは",
    date: "2023-10-19",
    who: personOptions.MemeTan,
    group: jpGroupOption.A,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=1h4m39s",
      period: "1:04:39.5 - 1:04:49.0"
    },
    volume: 0.4,
  },
  {
    id: 31,
    name: "YABAI！YABAI！うわわわわNoNoNoNo..あぁぁ！やぁぁぁ！",
    yomikata: "やばいやばいうわわわわNoNoNoNo..あぁぁやぁぁぁ",
    date: "2023-10-19",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ya,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=1h4m39s",
      period: "1:04:39.5 - 1:04:49.0"
    },
    volume: 0.3,
  },
  {
    id: 32,
    name: "ボ..ボプになっちゃっためめ",
    yomikata: "ボ..ボプになっちゃっためめ",
    date: "2023-10-19",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ha,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=1h5m46s",
      period: "1:05:46.0 - 1:05:49.0"
    },
    volume: 0.3,
  },
  {
    id: 33,
    name: "羊娘ボブ",
    yomikata: "ひつじむすめボブ",
    date: "2023-10-19",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ha,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=1h5m50s",
      period: "1:05:50.0 - 1:05:52.0"
    },
    volume: 0.4,
  },
  {
    id: 34,
    name: "ふ〜〜〜",
    yomikata: "ふ",
    date: "2023-10-19",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ha,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=1h34m5s",
      period: "1:34:05.0 - 1:34:07.0"
    },
    volume: 0.4,
  },
  {
    id: 35,
    name: "よしゃあと10分くらい頑張ろっかな〜",
    yomikata: "よしゃあとじゅっぷんくらいがんばろっかな",
    date: "2023-10-19",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ha,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=1h47m19s",
      period: "1:47:19.0 - 1:47:23.5"
    },
    volume: 0.4,
  },
  {
    id: 36,
    name: "見にきてくれてありがとうございます",
    yomikata: "みにきてくれてありがとうございます",
    date: "2023-10-19",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ma,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=1h58m59s",
      period: "1:58:59.7 - 1:59:02.7"
    },
    volume: 0.5,
  },
  {
    id: 37,
    name: "ではではおつめめさまでした、まったね〜",
    yomikata: "ではではおつめめさまでした、まったね",
    date: "2023-10-19",
    who: personOptions.MemeTan,
    group: jpGroupOption.Ta,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=1h59m52s",
      period: "1:59:52.8 - 1:59:56.5"
    },
    volume: 0.5,
  },
  {
    id: 38,
    name: "おやめめ〜 バイバイ〜",
    yomikata: "おやめめ、バイバイ",
    date: "2023-10-19",
    who: personOptions.MemeTan,
    group: jpGroupOption.A,
    source: {
      title: "スプラ3 ᔦꙬᔨ イベントマッチ「改造ガチホコをかわいがるテスト」で遊ぶひつじ 🐏 羊娘めめ Vtuber ",
      type: sourceType.Youtube,
      url: "https://www.youtube.com/watch?v=xfV_Tk5K63s&t=1h59m56s",
      period: "1:59:56.7 - 2:00:0.0"
    },
    volume: 0.5,
  },
];

export default sound;
