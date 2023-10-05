export const enum sourceType {
  Twitter,
  Youtube,
}

export const enum person {
  MemeNe,
  MemeTan,
}

export const enum group { A, Ka, Sa, Ta, Na, Ha, Ma, Ya, Ra, Wa, Others }

export interface soundDataInterface {
  id: string | number,
  name: string,
  date?: string,
  who?: person,
  group?: group,
  source: {
    title: string,
    type: sourceType,
    url: string,
  },
}

const sound:soundDataInterface[] = [
  {
    id: 1,
    name: "こんめめ",
    date: "2023-10-2",
    who: person.MemeTan,
    group: group.Ka,
    source: {
      title: "ドーナツ美味しそうでしょ？🍩😋",
      type: sourceType.Twitter,
      url: "https://twitter.com/memehitsuji19/status/1703835757113491805",
    }
  },
  {
    id: 2,
    name: "おつめめ",
    date: "2023-10-2",
    who: person.MemeTan,
    group: group.A,
    source: {
      title: "ドーナツ美味しそうでしょ？🍩😋",
      type: sourceType.Twitter,
      url: "https://twitter.com/memehitsuji19/status/1703835757113491805",
    }
  },
];

export default sound;
