import type { Story } from '../types';

/**
 * 公共領域故事閱讀：格林童話（Brüder Grimm, Kinder- und Hausmärchen）。
 *
 * 德語原文為公共領域（作者逝世逾百年），可內含全文；逐句切成 StorySegment，
 * 附中/英對照與來源標註。譯文為人工整理，故不標 AI。
 */

const grimmSource = {
  name: 'Brüder Grimm: Kinder- und Hausmärchen',
  url: 'https://www.gutenberg.org/ebooks/22555',
  license: 'Public Domain',
  author: 'Jacob & Wilhelm Grimm',
};

export const stories: Story[] = [
  {
    id: 'sterntaler',
    title: 'Die Sterntaler',
    titleZh: '星星銀幣',
    emoji: '⭐',
    level: 'B1',
    blurb: '一個一無所有的小女孩，把僅有的一切都送給更需要的人。',
    source: grimmSource,
    segments: [
      {
        de: 'Es war einmal ein kleines Mädchen, dem war Vater und Mutter gestorben.',
        zh: '從前有一個小女孩，她的父母都過世了。',
        en: 'Once upon a time there was a little girl whose father and mother had died.',
      },
      {
        de: 'Es war so arm, dass es kein Kämmerchen mehr hatte, darin zu wohnen, und kein Bettchen mehr, darin zu schlafen.',
        zh: '她窮得連一個可以住的小房間、一張可以睡的小床都沒有了。',
        en: 'She was so poor that she no longer had a little room to live in, nor a little bed to sleep in.',
      },
      {
        de: 'Endlich hatte es gar nichts mehr als die Kleider auf dem Leib und ein Stückchen Brot in der Hand.',
        zh: '最後她只剩下身上的衣服，和手裡的一小塊麵包。',
        en: 'In the end she had nothing left but the clothes on her body and a little piece of bread in her hand.',
      },
      {
        de: 'Es war aber gut und fromm.',
        zh: '但是她善良又虔誠。',
        en: 'But she was good and devout.',
      },
      {
        de: 'Und so ging es hinaus ins Feld und vertraute auf den lieben Gott.',
        zh: '於是她走到田野裡，把一切交託給仁慈的上帝。',
        en: 'And so she went out into the open country, trusting in dear God.',
      },
      {
        de: 'Da begegnete ihm ein armer Mann, der sprach: "Ach, gib mir etwas zu essen, ich bin so hungrig."',
        zh: '這時遇到一個窮人，他說：「啊，給我點吃的吧，我好餓。」',
        en: 'Then a poor man met her and said: "Oh, give me something to eat, I am so hungry."',
      },
      {
        de: 'Es reichte ihm das ganze Stückchen Brot und sagte: "Gott segne dir’s."',
        zh: '她把整塊麵包都遞給他，說：「願上帝保佑你。」',
        en: 'She handed him the whole piece of bread and said: "May God bless it for you."',
      },
      {
        de: 'Dann kamen Kinder, die froren, und es gab ihnen seine Mütze, sein Leibchen und sein Röcklein.',
        zh: '接著來了幾個發冷的孩子，她把帽子、小背心和裙子都給了他們。',
        en: 'Then came children who were cold, and she gave them her cap, her bodice and her little skirt.',
      },
      {
        de: 'Endlich, als es im Wald stand, schenkte es auch sein letztes Hemd weg.',
        zh: '最後，當她站在森林裡時，連最後一件襯衣也送了出去。',
        en: 'Finally, as she stood in the forest, she gave away even her last shirt.',
      },
      {
        de: 'Und wie es so stand und gar nichts mehr hatte, fielen auf einmal die Sterne vom Himmel.',
        zh: '當她就這樣站著、什麼都沒有了的時候，星星忽然從天上落了下來。',
        en: 'And as she stood there with nothing left at all, suddenly the stars fell from the sky.',
      },
      {
        de: 'Es waren lauter harte, blanke Taler, und es sammelte sie in sein Hemd.',
        zh: '那全是又硬又亮的銀幣，她把它們收進襯衣裡。',
        en: 'They were all hard, shining coins, and she gathered them into her shirt.',
      },
      {
        de: 'Und es war reich für sein Lebtag.',
        zh: '從此她一輩子都富足了。',
        en: 'And she was rich for the rest of her life.',
      },
    ],
  },
  {
    id: 'suesser-brei',
    title: 'Der süße Brei',
    titleZh: '甜粥',
    emoji: '🍲',
    level: 'A2',
    blurb: '一口神奇的小鍋，只要說對咒語就會煮出甜粥——但要怎麼讓它停下來？',
    source: grimmSource,
    segments: [
      {
        de: 'Es war einmal ein armes, frommes Mädchen, das lebte mit seiner Mutter allein.',
        zh: '從前有一個貧窮又虔誠的女孩，和母親相依為命。',
        en: 'Once upon a time there was a poor, devout girl who lived alone with her mother.',
      },
      {
        de: 'Sie hatten nichts mehr zu essen.',
        zh: '她們再也沒有東西可以吃了。',
        en: 'They had nothing left to eat.',
      },
      {
        de: 'Da ging das Kind hinaus in den Wald und traf eine alte Frau.',
        zh: '於是孩子走進森林，遇到了一位老婦人。',
        en: 'So the child went out into the forest and met an old woman.',
      },
      {
        de: 'Die alte Frau schenkte ihm ein Töpfchen.',
        zh: '老婦人送給她一口小鍋。',
        en: 'The old woman gave her a little pot.',
      },
      {
        de: 'Wenn man sagte: "Töpfchen, koche", so kochte es guten, süßen Hirsebrei.',
        zh: '只要說：「小鍋，煮吧」，它就會煮出香甜的小米粥。',
        en: 'When you said, "Little pot, cook," it cooked good, sweet millet porridge.',
      },
      {
        de: 'Und wenn man sagte: "Töpfchen, steh", so hörte es wieder auf zu kochen.',
        zh: '只要說：「小鍋，停吧」，它就會停止煮粥。',
        en: 'And when you said, "Little pot, stop," it stopped cooking again.',
      },
      {
        de: 'Das Mädchen brachte den Topf heim, und nun hatten sie genug zu essen.',
        zh: '女孩把鍋帶回家，從此她們再也不愁吃了。',
        en: 'The girl brought the pot home, and now they had enough to eat.',
      },
      {
        de: 'Einmal war das Mädchen ausgegangen, da sprach die Mutter: "Töpfchen, koche."',
        zh: '有一次女孩出門了，母親便說：「小鍋，煮吧。」',
        en: 'One day the girl had gone out, and the mother said, "Little pot, cook."',
      },
      {
        de: 'Da kochte es, aber die Mutter hatte das Wort vergessen, mit dem man es aufhören lässt.',
        zh: '小鍋開始煮了，可是母親忘了讓它停下來的咒語。',
        en: 'So it cooked, but the mother had forgotten the word that makes it stop.',
      },
      {
        de: 'Der Brei kochte über und füllte die ganze Küche, das Haus und die Straße.',
        zh: '粥煮得滿出來，灌滿了整間廚房、整棟房子，還流到街上。',
        en: 'The porridge boiled over and filled the whole kitchen, the house and the street.',
      },
      {
        de: 'Endlich kam das Mädchen heim und sprach nur: "Töpfchen, steh", da hörte es auf.',
        zh: '最後女孩回到家，只說了一句：「小鍋，停吧」，它就停了下來。',
        en: 'At last the girl came home and only said, "Little pot, stop," and it stopped.',
      },
      {
        de: 'Wer wieder in die Stadt wollte, der musste sich durch den Brei essen.',
        zh: '誰想再進城去，就得從粥裡一路吃過去。',
        en: 'And whoever wanted to go back into town had to eat their way through the porridge.',
      },
    ],
  },
];

export const findStory = (id: string): Story | undefined =>
  stories.find((s) => s.id === id);
