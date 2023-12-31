export const letters1 = [
  { text: "Q", value: "q", type: "single" },
  { text: "W", value: "w", type: "single" },
  { text: "E", value: "e", type: "single" },
  { text: "R", value: "r", type: "single" },
  { text: "T", value: "t", type: "single" },
  { text: "Y", value: "y", type: "single" },
  { text: "U", value: "u", type: "single" },
  { text: "I", value: "i", type: "single" },
  { text: "O", value: "o", type: "single" },
  { text: "P", value: "p", type: "single" },
  { text: "[", value: "[", text2: "{", value2: "{", type: "dual" },
  { text: "]", value: "]", text2: "}", value2: "}", type: "dual" },
];

export const letters2 = [
  { text: "A", value: "a", type: "single" },
  { text: "S", value: "s", type: "single" },
  { text: "D", value: "d", type: "single" },
  { text: "F", value: "f", type: "single" },
  { text: "G", value: "g", type: "single" },
  { text: "H", value: "h", type: "single" },
  { text: "J", value: "j", type: "single" },
  { text: "K", value: "k", type: "single" },
  { text: "L", value: "l", type: "single" },
  { text: ";", value: ";", text2: ":", value2: ":", type: "dual" },
  { text: "'", value: "'", text2: '"', value2: '"', type: "dual" },
];

export const letters3 = [
  { text: "Z", value: "z", type: "single" },
  { text: "X", value: "x", type: "single" },
  { text: "C", value: "c", type: "single" },
  { text: "V", value: "v", type: "single" },
  { text: "B", value: "b", type: "single" },
  { text: "N", value: "n", type: "single" },
  { text: "M", value: "m", type: "single" },
  { text: ",", value: ",", text2: "<", value2: "<", type: "dual" },
  { text: ".", value: ".", text2: ">", value2: ">", type: "dual" },
  { text: "/", value: "/", text2: "?", value2: "?", type: "dual" },
];

export const numbers = [
  { text: "1", value: "1", text2: "!", value2: "!", type: "dual" },
  { text: "2", value: "2", text2: "@", value2: "@", type: "dual" },
  { text: "3", value: "3", text2: "#", value2: "#", type: "dual" },
  { text: "4", value: "4", text2: "$", value2: "$", type: "dual" },
  { text: "5", value: "5", text2: "%", value2: "%", type: "dual" },
  { text: "6", value: "6", text2: "^", value2: "^", type: "dual" },
  { text: "7", value: "7", text2: "&", value2: "&", type: "dual" },
  { text: "8", value: "8", text2: "*", value2: "*", type: "dual" },
  { text: "9", value: "9", text2: "(", value2: "(", type: "dual" },
  { text: "0", value: "0", text2: ")", value2: ")", type: "dual" },
  { text: "-", value: "-", text2: "_", value2: "_", type: "dual" },
  { text: "=", value: "=", text2: "+", value2: "+", type: "dual" },
];

export const specialCharacters = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "[",
  "]",
  "\\",
  ";",
  "'",
  ",",
  ".",
  "/",
];

export const colours = [
  { colour: "copper", right: "60" },
  { colour: "green", right: "50" },
  { colour: "yellow", right: "40" },
  { colour: "blue", right: "30" },
  { colour: "purple", right: "20" },
  { colour: "white", right: "10" },
];

export const extraKeys = [
  {
    id: 0,
    name: "control",
    lgH: "lg:h-12",
    mdH: "md:h-10",
    smH: "sm:h-9",
    H: "h-6",
    lgW: "lg:w-16",
    mdW: "md:w-12",
    smW: "sm:w-10",
    W: "w-6",
    text: "ctrl",
  },
  {
    id: 1,
    name: "function",
    lgH: "lg:h-12",
    mdH: "md:h-10",
    smH: "sm:h-9",
    H: "h-6",
    lgW: "lg:w-16",
    mdW: "md:w-12",
    smW: "sm:w-10",
    W: "w-6",
    text: "fn",
  },
  {
    id: 2,
    name: "alt",
    lgH: "lg:h-12",
    mdH: "md:h-10",
    smH: "sm:h-9",
    H: "h-6",
    lgW: "lg:w-16",
    mdW: "md:w-12",
    smW: "sm:w-10",
    W: "w-6",
    text: "alt",
  },
  {
    id: 3,
    name: "spaceBar",
    lgH: "lg:h-12",
    mdH: "md:h-10",
    smH: "sm:h-9",
    H: "h-6",
    lgW: "lg:w-82",
    mdW: "md:w-68",
    smW: "sm:w-60",
    W: "w-18",
    text: "",
  },
  {
    id: 4,
    name: "left",
    lgH: "lg:h-12",
    mdH: "md:h-10",
    smH: "sm:h-9",
    H: "h-6",
    lgW: "lg:w-12",
    mdW: "md:w-10",
    smW: "sm:w-10",
    W: "w-6",
    text: "<",
  },
  {
    id: 5,
    name: "right",
    lgH: "lg:h-12",
    mdH: "md:h-10",
    smH: "sm:h-9",
    H: "h-6",
    lgW: "lg:w-12",
    mdW: "md:w-10",
    smW: "sm:w-10",
    W: "w-6",
    text: ">",
  },
  {
    id: 6,
    name: "up",
    lgH: "lg:h-5",
    mdH: "md:h-4",
    smH: "sm:h-3.5",
    H: "h-2.5",
    lgW: "lg:w-12",
    mdW: "md:w-10",
    smW: "sm:w-10",
    W: "w-6",
    text: "",
  },
  {
    id: 7,
    name: "backSpace",
    lgH: "lg:h-12",
    mdH: "md:h-10",
    smH: "sm:h-9",
    H: "h-6",
    lgW: "lg:w-24",
    mdW: "md:w-22",
    smW: "sm:w-20",
    W: "w-10",
    text: "backspace",
  },
  {
    id: 8,
    name: "tab",
    lgH: "lg:h-12",
    mdH: "md:h-10",
    smH: "sm:h-9",
    H: "h-6",
    lgW: "lg:w-24",
    mdW: "md:w-22",
    smW: "sm:w-20",
    W: "w-10",
    text: "tab",
  },
  {
    id: 9,
    name: "capslock",
    lgH: "lg:h-12",
    mdH: "md:h-10",
    smH: "sm:h-9",
    H: "h-6",
    lgW: "lg:w-28",
    mdW: "md:w-22",
    smW: "sm:w-20",
    W: "w-11",
    text: "caps lock",
  },
  {
    id: 10,
    name: "enter",
    lgH: "lg:h-12",
    mdH: "md:h-10",
    smH: "sm:h-9",
    H: "h-6",
    lgW: "lg:w-24",
    mdW: "md:w-22",
    smW: "sm:w-18",
    W: "w-8",
    text: "enter",
  },
  {
    id: 11,
    name: "shift",
    lgH: "lg:h-12",
    mdH: "md:h-10",
    smH: "sm:h-9",
    H: "h-6",
    lgW: "lg:w-34",
    mdW: "md:w-26",
    smW: "sm:w-24",
    W: "w-12",
    text: "shift",
  },
];
