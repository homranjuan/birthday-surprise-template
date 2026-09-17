/* ==========================================
   Birthday Surprise Website Configuration

   Edit this file to customize the website
   for your loved one!
   ========================================== */

export const config = {
  /* Name Verification Gate */
  recipientName: "DEW", // required name to enter
  nameHint: '3 letters, starts with "D"', // hint on wrong name

  /* Section Headings */
  soloGalleryTitle: "✨ My little DEW ✨", // solo gallery title
  messageTitle: "To My Favorite Person", // letter section title
  footerText: "Made with 💗 just for you", // footer text

  /* Button Labels */
  buttons: {
    hero: "อยากเห็นความน่ารักของแฟนเรารึยัง!?", // hero/landing button
    soloGallery: "ยังไม่หมดหรอกนะ", // solo gallery button
  },

  /* Together Gallery (Optional) */
  togetherGallery: {
    enabled: true, // toggle together gallery
    title: "💕 Our Memories 💕", // together gallery title
    buttonText: "One last thing...", // together gallery button
  },

  /* Birthday Message: Each string is a paragraph */
  message: [
    "สุขสันต์วันครบรอบนะที่รัก!!!",
    "",
    "ขอบคุณที่อยู่ด้วยกันมา 1 ปีแล้ว!! ",
    "",
    "เป็นปีที่มีความสุขมากเลย ขอบคุณที่เราได้ใช้ชีวิตสนุก ๆ ด้วยกัน อยู่กับคุณรู้สึกทุกวันไม่มีเบื่อเลย",
    "",
    "ขอบคุณที่รักและหวังดีกับเรา เราจะตอบแทนความรักคุณให้ดีที่สุดเองง ปีนี้มาสนุกด้วยกันอีกนะะ",
    "",
    "น้องหอม",
  ],

  /* Theme Colors - Change these to customize the entire website theme! */
  colors: {
    primary: "#ec4899", // main color (buttons, accents)
    light: "#fdf2f8", // lightest shade (backgrounds)
    medium: "#f9a8d4", // medium shade (decorations)
    dark: "#db2777", // darkest shade (hover states)
  },

  /* Typing Animation Text (shown on the start screen) */
  typingText: {
    first: "สวัสดีค้าบ นี่เป็นหนังสือพูดได้",
    second: "หนังสือเล่มนี้จะรวบรวมโกลดิ้วและมอหอมใน 1 ปีที่ผ่านมาา",
  },
};

export type Config = typeof config;
