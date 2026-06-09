import type { Story } from '../types';

/**
 * 公共領域故事閱讀：格林童話（Brüder Grimm, Kinder- und Hausmärchen）。
 *
 * 德語原文為公共領域（作者逝世逾百年）。逐句切成 StorySegment，附中/英對照與來源標註。
 * 拼寫採現代正字法；短篇保留較完整原文，長篇以真實格林句子改寫精簡，便於 A2–B1 跟讀。
 * 德語故事文本為公共領域，中/英譯文為人工整理，故不標 AI。
 */

const grimmSource = {
  name: 'Brüder Grimm: Kinder- und Hausmärchen',
  url: 'https://de.wikisource.org/wiki/Kinder-_und_Haus-M%C3%A4rchen_Band_1_(1857)',
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
  {
    id: 'rotkaeppchen',
    title: 'Rotkäppchen',
    titleZh: '小紅帽',
    emoji: '🔴',
    level: 'A2',
    blurb: '一個戴紅帽的小女孩去探望生病的祖母，半路卻遇上狡猾的大野狼。',
    source: grimmSource,
    segments: [
      {
        de: 'Es war einmal ein kleines, süßes Mädchen, das hatte jeder lieb, der es nur ansah.',
        zh: '從前有一個可愛的小女孩，每個見到她的人都喜歡她。',
        en: 'Once upon a time there was a sweet little girl whom everyone loved who only set eyes on her.',
      },
      {
        de: 'Am liebsten aber hatte es seine Großmutter, die ihm einst ein Käppchen aus rotem Samt schenkte.',
        zh: '但最疼她的是祖母，祖母有一次送她一頂紅絲絨的小帽子。',
        en: 'But most of all her grandmother loved her, and once gave her a little cap of red velvet.',
      },
      {
        de: 'Weil ihr das so gut stand, wollte sie nichts anderes mehr tragen, und so hieß sie nur Rotkäppchen.',
        zh: '因為這帽子太適合她了，她再也不肯戴別的，於是大家都叫她小紅帽。',
        en: 'Because it suited her so well, she would wear nothing else, and so she was called Little Red Riding Hood.',
      },
      {
        de: 'Eines Tages sprach die Mutter: "Komm, Rotkäppchen, bring der Großmutter Kuchen und Wein, sie ist krank und schwach."',
        zh: '有一天母親說：「來，小紅帽，把蛋糕和酒帶去給祖母，她生病又虛弱。」',
        en: 'One day her mother said: "Come, Red Cap, take this cake and wine to grandmother; she is ill and weak."',
      },
      {
        de: '"Geh brav und gerade und lauf nicht vom Weg ab", sagte die Mutter noch.',
        zh: '母親又叮囑：「乖乖走大路，別離開小路。」',
        en: '"Be good and go straight, and do not leave the path," her mother added.',
      },
      {
        de: 'Die Großmutter wohnte draußen im Wald, eine halbe Stunde vom Dorf.',
        zh: '祖母住在森林裡，離村子半小時路程。',
        en: 'The grandmother lived out in the forest, half an hour from the village.',
      },
      {
        de: 'Als Rotkäppchen in den Wald kam, begegnete ihm der Wolf.',
        zh: '小紅帽走進森林時，遇到了狼。',
        en: 'When Red Cap entered the forest, the wolf met her.',
      },
      {
        de: '"Guten Tag, Rotkäppchen. Wohin so früh?", fragte er.',
        zh: '「你好，小紅帽，這麼早要去哪裡？」狼問。',
        en: '"Good day, Red Cap. Where to so early?" he asked.',
      },
      {
        de: '"Zur Großmutter, sie ist krank", antwortete das Mädchen arglos.',
        zh: '「去祖母家，她病了。」女孩天真地回答。',
        en: '"To grandmother\'s, she is ill," the girl answered innocently.',
      },
      {
        de: 'Da dachte der Wolf: "Das junge Ding und die alte Frau, das wäre ein guter Bissen."',
        zh: '狼心想：「這小女孩和老太婆，會是一頓美餐。」',
        en: 'Then the wolf thought: "This young thing and the old woman would make a tasty meal."',
      },
      {
        de: '"Sieh nur die schönen Blumen ringsumher", sagte er, und Rotkäppchen lief vom Weg ab, um sie zu pflücken.',
        zh: '「你看四周這些美麗的花。」狼說，小紅帽便離開小路去採花。',
        en: '"Just look at the lovely flowers all around," he said, and Red Cap left the path to pick them.',
      },
      {
        de: 'Der Wolf aber lief schnurstracks zum Haus der Großmutter und verschlang sie.',
        zh: '狼卻直奔祖母家，把她一口吞了。',
        en: 'But the wolf ran straight to grandmother\'s house and devoured her.',
      },
      {
        de: 'Dann legte er sich in ihr Bett und wartete auf Rotkäppchen.',
        zh: '然後他躺進她的床上，等著小紅帽。',
        en: 'Then he lay down in her bed and waited for Red Cap.',
      },
      {
        de: 'Als das Mädchen kam, wunderte es sich: "Großmutter, was hast du für große Ohren!"',
        zh: '女孩來到時很驚訝：「祖母，你的耳朵好大！」',
        en: 'When the girl came, she wondered: "Grandmother, what big ears you have!"',
      },
      {
        de: '"Großmutter, was hast du für ein großes Maul!" – "Damit ich dich besser fressen kann!"',
        zh: '「祖母，你的嘴好大！」——「好把你一口吃掉！」',
        en: '"Grandmother, what a big mouth you have!" – "All the better to eat you with!"',
      },
      {
        de: 'Kaum hatte der Wolf das gesagt, sprang er aus dem Bett und verschlang auch Rotkäppchen.',
        zh: '狼剛說完，就跳下床把小紅帽也吞了。',
        en: 'Hardly had the wolf said this when he sprang from the bed and devoured Red Cap too.',
      },
      {
        de: 'Ein Jäger kam vorbei, schnitt dem schlafenden Wolf den Bauch auf und befreite die beiden.',
        zh: '一個獵人路過，剖開熟睡的狼的肚子，救出了兩人。',
        en: 'A huntsman passed by, cut open the sleeping wolf\'s belly and freed them both.',
      },
      {
        de: 'Sie füllten dem Wolf Steine in den Bauch, und Rotkäppchen dachte: "Nie wieder lauf ich allein vom Weg ab."',
        zh: '他們往狼肚裡塞滿石頭，小紅帽心想：「我再也不獨自離開小路了。」',
        en: 'They filled the wolf\'s belly with stones, and Red Cap thought: "Never again will I leave the path alone."',
      },
    ],
  },
  {
    id: 'haensel-und-gretel',
    title: 'Hänsel und Gretel',
    titleZh: '糖果屋',
    emoji: '🍬',
    level: 'B1',
    blurb: '兄妹被丟在森林裡，發現一棟糖果屋——屋主卻是想吃掉他們的女巫。',
    source: grimmSource,
    segments: [
      {
        de: 'Vor einem großen Wald wohnte ein armer Holzhacker mit seiner Frau und seinen zwei Kindern, Hänsel und Gretel.',
        zh: '在一片大森林前，住著一個窮樵夫，和他的妻子及兩個孩子韓賽爾與葛蕾特。',
        en: 'At the edge of a great forest lived a poor woodcutter with his wife and his two children, Hansel and Gretel.',
      },
      {
        de: 'Es kam eine große Teuerung, und sie hatten nichts mehr zu essen.',
        zh: '來了一場大饑荒，他們再也沒有東西吃了。',
        en: 'A great famine came, and they had nothing left to eat.',
      },
      {
        de: 'Da sprach die Frau: "Wir bringen die Kinder morgen in den Wald und lassen sie dort allein."',
        zh: '妻子說：「明天我們把孩子帶進森林，丟下他們不管。」',
        en: 'Then the wife said: "Tomorrow we\'ll take the children into the forest and leave them there alone."',
      },
      {
        de: 'Hänsel hörte alles und steckte sich heimlich weiße Kieselsteine in die Tasche.',
        zh: '韓賽爾全聽見了，偷偷在口袋裝滿白色小石子。',
        en: 'Hansel heard everything and secretly filled his pockets with white pebbles.',
      },
      {
        de: 'Auf dem Weg in den Wald warf er einen Stein nach dem anderen auf den Weg.',
        zh: '進森林的路上，他一顆一顆把石子丟在路上。',
        en: 'On the way into the forest he dropped one pebble after another on the path.',
      },
      {
        de: 'Als der Mond schien, leuchteten die Steine, und die Kinder fanden nach Hause zurück.',
        zh: '月亮升起時，石子發亮，孩子們順著找回了家。',
        en: 'When the moon shone, the pebbles gleamed, and the children found their way back home.',
      },
      {
        de: 'Beim zweiten Mal hatte Hänsel nur Brot, und die Vögel pickten alle Krümel auf.',
        zh: '第二次韓賽爾只有麵包，鳥兒把麵包屑全啄光了。',
        en: 'The second time Hansel had only bread, and the birds pecked up all the crumbs.',
      },
      {
        de: 'So fanden sie den Weg nicht mehr und irrten tief im Wald umher.',
        zh: '於是他們再也找不到路，在森林深處迷了路。',
        en: 'So they could not find the way and wandered deep in the forest.',
      },
      {
        de: 'Da sahen sie ein Häuschen, das war ganz aus Brot, Kuchen und Zucker gebaut.',
        zh: '這時他們看見一間小屋，全是用麵包、蛋糕和糖做成的。',
        en: 'Then they saw a little house built all of bread, cake and sugar.',
      },
      {
        de: 'Hungrig brachen sie Stücke ab, da rief eine Stimme: "Knusper, knusper, knäuschen, wer knuspert an meinem Häuschen?"',
        zh: '他們餓著掰下幾塊，這時有聲音喊：「啃啊啃，誰在啃我的小屋？」',
        en: 'Hungrily they broke off pieces; then a voice called: "Nibble, nibble, little mouse, who is nibbling at my house?"',
      },
      {
        de: 'Eine alte Frau kam heraus und tat freundlich – doch sie war eine böse Hexe.',
        zh: '一個老婦人走出來，裝得很親切——其實她是個壞女巫。',
        en: 'An old woman came out and acted kindly – but she was a wicked witch.',
      },
      {
        de: 'Sie sperrte Hänsel in einen Stall und wollte ihn mästen und auffressen.',
        zh: '她把韓賽爾關進牲口棚，想把他養肥了吃掉。',
        en: 'She locked Hansel in a stall, meaning to fatten him and eat him.',
      },
      {
        de: 'Gretel musste kochen, und die Hexe rief jeden Tag: "Hänsel, streck deinen Finger heraus!"',
        zh: '葛蕾特得做飯，女巫每天喊：「韓賽爾，把手指伸出來！」',
        en: 'Gretel had to cook, and each day the witch called: "Hansel, stick out your finger!"',
      },
      {
        de: 'Hänsel aber hielt ihr ein Knöchlein hin, und die halbblinde Hexe wunderte sich, dass er nicht fett wurde.',
        zh: '韓賽爾卻伸出一根小骨頭，半瞎的女巫納悶他怎麼不長肉。',
        en: 'But Hansel held out a little bone, and the half-blind witch wondered why he grew no fatter.',
      },
      {
        de: 'Endlich wollte die Hexe backen und sagte: "Gretel, kriech in den Ofen und sieh nach!"',
        zh: '最後女巫要烤東西，說：「葛蕾特，爬進爐子看看！」',
        en: 'At last the witch wanted to bake and said: "Gretel, crawl into the oven and see!"',
      },
      {
        de: 'Gretel merkte die List, stellte sich dumm – und stieß die Hexe selbst in den Ofen.',
        zh: '葛蕾特看穿詭計，裝傻——反把女巫推進了爐子。',
        en: 'Gretel saw through the trick, played dumb – and shoved the witch into the oven herself.',
      },
      {
        de: 'Im Haus fanden die Kinder Perlen und Edelsteine und füllten sich die Taschen.',
        zh: '孩子們在屋裡找到珍珠和寶石，裝滿了口袋。',
        en: 'In the house the children found pearls and jewels and filled their pockets.',
      },
      {
        de: 'Sie fanden heim zum Vater, und nun hatten sie alle Not überstanden und lebten froh zusammen.',
        zh: '他們找到了回家的路，從此度過了一切苦難，快樂地生活在一起。',
        en: 'They found their way home to their father, and now all their troubles were over and they lived happily together.',
      },
    ],
  },
  {
    id: 'froschkoenig',
    title: 'Der Froschkönig',
    titleZh: '青蛙王子',
    emoji: '🐸',
    level: 'B1',
    blurb: '公主答應青蛙的請求換回金球，卻不想守信；一摔之下，青蛙變回了王子。',
    source: grimmSource,
    segments: [
      {
        de: 'In alten Zeiten lebte ein König, dessen jüngste Tochter so schön war, dass sich die Sonne darüber wunderte.',
        zh: '古時候有一位國王，他最小的女兒美得連太陽都驚嘆。',
        en: 'In olden times there lived a king whose youngest daughter was so beautiful that even the sun marveled at her.',
      },
      {
        de: 'Nahe beim Schloss lag ein dunkler Wald, und darin ein Brunnen.',
        zh: '城堡附近有一片幽暗的森林，林中有一口井。',
        en: 'Near the castle lay a dark forest, and in it a well.',
      },
      {
        de: 'An heißen Tagen spielte die Prinzessin dort mit einer goldenen Kugel, die sie in die Höhe warf und wieder fing.',
        zh: '炎熱的日子，公主在那裡玩一顆金球，把它拋向空中再接住。',
        en: 'On hot days the princess played there with a golden ball, throwing it up and catching it again.',
      },
      {
        de: 'Einmal aber fiel die Kugel in den Brunnen und versank tief im Wasser.',
        zh: '但有一次金球掉進井裡，沉入深深的水中。',
        en: 'But once the ball fell into the well and sank deep into the water.',
      },
      {
        de: 'Die Prinzessin weinte, da rief ein Frosch: "Was weinst du, Königstochter?"',
        zh: '公主哭了，這時一隻青蛙說：「公主，你為什麼哭？」',
        en: 'The princess wept; then a frog called: "Why do you weep, king\'s daughter?"',
      },
      {
        de: '"Ich hole dir die Kugel, wenn ich dein Freund sein darf, von deinem Teller essen und in deinem Bettchen schlafen."',
        zh: '「只要我能當你的朋友、用你的盤子吃飯、睡你的小床，我就把球撈上來。」',
        en: '"I will fetch your ball if I may be your friend, eat from your plate and sleep in your little bed."',
      },
      {
        de: 'Die Prinzessin versprach alles, dachte aber: "Was der dumme Frosch schwätzt!"',
        zh: '公主什麼都答應了，心裡卻想：「這蠢青蛙在胡說什麼！」',
        en: 'The princess promised everything, but thought: "What nonsense the silly frog talks!"',
      },
      {
        de: 'Der Frosch brachte die Kugel, doch das Mädchen lief damit schnell nach Hause.',
        zh: '青蛙撈上了球，女孩卻拿著球飛快跑回家。',
        en: 'The frog brought the ball, but the girl ran home with it quickly.',
      },
      {
        de: 'Am nächsten Tag klopfte es an die Tür, und der Frosch rief: "Königstochter, mach mir auf!"',
        zh: '第二天有人敲門，青蛙喊：「公主，給我開門！」',
        en: 'The next day there was a knock, and the frog called: "King\'s daughter, open the door for me!"',
      },
      {
        de: 'Der König hörte es und sprach: "Was du versprochen hast, das musst du auch halten."',
        zh: '國王聽見了，說：「你答應過的事，就必須遵守。」',
        en: 'The king heard it and said: "What you have promised, you must keep."',
      },
      {
        de: 'Widerwillig ließ ihn die Prinzessin von ihrem Teller essen.',
        zh: '公主很不情願地讓青蛙在她的盤子裡吃飯。',
        en: 'Reluctantly the princess let him eat from her plate.',
      },
      {
        de: 'Dann sollte sie ihn mit hinauf in ihr Zimmer nehmen.',
        zh: '接著她得把青蛙帶上樓，進她的房間。',
        en: 'Then she had to take him up to her room.',
      },
      {
        de: 'Voller Ekel packte sie den Frosch und warf ihn an die Wand.',
        zh: '她滿心嫌惡，抓起青蛙摔向牆壁。',
        en: 'Full of disgust she grabbed the frog and threw him against the wall.',
      },
      {
        de: 'Da fiel er herab – und war auf einmal ein junger Königssohn mit schönen Augen.',
        zh: '青蛙落下時——忽然變成一位眼睛美麗的年輕王子。',
        en: 'As he fell, he suddenly became a young prince with beautiful eyes.',
      },
      {
        de: 'Er war von einer bösen Hexe verwünscht worden, und nur sie hatte ihn erlösen können.',
        zh: '他被一個壞女巫下了咒，只有她能解救他。',
        en: 'He had been bewitched by a wicked witch, and only she could break the spell.',
      },
      {
        de: 'Die beiden wurden Freunde, und später zog der Königssohn sie als seine Braut heim in sein Reich.',
        zh: '兩人成了朋友，後來王子娶她為妻，帶她回到自己的國度。',
        en: 'The two became friends, and later the prince took her home to his kingdom as his bride.',
      },
    ],
  },
  {
    id: 'bremer-stadtmusikanten',
    title: 'Die Bremer Stadtmusikanten',
    titleZh: '不來梅樂隊',
    emoji: '🐓',
    level: 'A2',
    blurb: '四隻被主人嫌棄的老動物結伴去不來梅，半路用歌聲嚇跑了一窩強盜。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein Mann hatte einen Esel, der jahrelang die Säcke zur Mühle getragen hatte.',
        zh: '一個人有一頭驢，多年來一直把麻袋馱到磨坊。',
        en: 'A man had a donkey that for years had carried the sacks to the mill.',
      },
      {
        de: 'Nun aber wurde der Esel alt und schwach, und der Herr wollte ihn nicht mehr füttern.',
        zh: '如今驢老了、虛弱了，主人不想再餵牠。',
        en: 'But now the donkey grew old and weak, and the master no longer wanted to feed him.',
      },
      {
        de: 'Da lief der Esel fort und beschloss, in Bremen Stadtmusikant zu werden.',
        zh: '於是驢逃走了，決定去不來梅當城市樂手。',
        en: 'So the donkey ran away, deciding to become a town musician in Bremen.',
      },
      {
        de: 'Unterwegs traf er einen alten Hund, eine Katze und einen Hahn, die alle zu nichts mehr taugen sollten.',
        zh: '路上牠遇到一隻老狗、一隻貓和一隻公雞，主人都嫌牠們沒用了。',
        en: 'On the way he met an old dog, a cat and a rooster, all said to be of no more use.',
      },
      {
        de: '"Komm mit uns nach Bremen und mach Musik", sagte der Esel, und alle vier zogen zusammen los.',
        zh: '「跟我們去不來梅奏樂吧。」驢說，四個夥伴便一起上路。',
        en: '"Come with us to Bremen and make music," said the donkey, and all four set off together.',
      },
      {
        de: 'Bis Bremen war es weit, und im Wald wollten sie übernachten.',
        zh: '到不來梅還很遠，牠們想在森林裡過夜。',
        en: 'Bremen was far, and they wanted to spend the night in the forest.',
      },
      {
        de: 'Da sah der Hahn von einem Baum aus ein Licht: Dort stand ein Räuberhaus.',
        zh: '這時公雞從樹上看見一點燈光：那裡有一間強盜的房子。',
        en: 'From a tree the rooster saw a light: there stood a robbers\' house.',
      },
      {
        de: 'Die Tiere stellten sich vor dem Fenster übereinander: Esel, Hund, Katze und Hahn.',
        zh: '動物們疊在一起站到窗前：驢、狗、貓和公雞。',
        en: 'The animals stood one on top of the other at the window: donkey, dog, cat and rooster.',
      },
      {
        de: 'Dann fingen sie alle zusammen an zu schreien: Der Esel iahte, der Hund bellte, die Katze miaute, der Hahn krähte.',
        zh: '然後牠們一起大叫：驢叫、狗吠、貓喵、雞啼。',
        en: 'Then they all began to cry out together: the donkey brayed, the dog barked, the cat meowed, the rooster crowed.',
      },
      {
        de: 'Mit Gepolter sprangen sie durch das Fenster, und die erschrockenen Räuber flohen in den Wald.',
        zh: '牠們轟然跳進窗子，受驚的強盜逃進了森林。',
        en: 'With a crash they leapt through the window, and the frightened robbers fled into the forest.',
      },
      {
        de: 'Die vier setzten sich an den Tisch und aßen sich satt.',
        zh: '四個夥伴坐到桌邊，吃了個飽。',
        en: 'The four sat down at the table and ate their fill.',
      },
      {
        de: 'In der Nacht schickten die Räuber einen Mann zurück, um nachzusehen.',
        zh: '半夜強盜派一個人回來查看。',
        en: 'In the night the robbers sent one man back to check.',
      },
      {
        de: 'Im Dunkeln kratzte ihn die Katze, der Hund biss ihn, der Esel schlug aus, und der Hahn schrie.',
        zh: '黑暗中貓抓他、狗咬他、驢踢他、雞啼叫。',
        en: 'In the dark the cat scratched him, the dog bit him, the donkey kicked, and the rooster screamed.',
      },
      {
        de: 'Der Räuber floh entsetzt und rief, im Haus sitze ein schreckliches Ungeheuer.',
        zh: '強盜嚇得逃走，喊說屋裡有個可怕的怪物。',
        en: 'The robber fled in terror, crying that a dreadful monster sat in the house.',
      },
      {
        de: 'Die Räuber kamen nie wieder, und den Tieren gefiel das Haus so gut, dass sie für immer darin blieben.',
        zh: '強盜再也沒回來，動物們很喜歡那房子，從此永遠住了下來。',
        en: 'The robbers never returned, and the animals liked the house so well that they stayed there forever.',
      },
    ],
  },
  {
    id: 'rapunzel',
    title: 'Rapunzel',
    titleZh: '長髮姑娘',
    emoji: '👸',
    level: 'B1',
    blurb: '長髮姑娘被女巫鎖在高塔裡，王子靠著她的長髮爬上塔，卻引來一場波折。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein Mann und eine Frau wünschten sich lange vergeblich ein Kind.',
        zh: '一對夫妻渴望孩子，卻久久未能如願。',
        en: 'A man and a woman long wished in vain for a child.',
      },
      {
        de: 'Hinter ihrem Haus lag der Garten einer mächtigen Zauberin, voller Rapunzeln.',
        zh: '他們屋後是一位強大女巫的花園，長滿了萵苣。',
        en: 'Behind their house lay the garden of a powerful sorceress, full of rapunzel lettuce.',
      },
      {
        de: 'Die Frau bekam solche Lust auf die Rapunzeln, dass sie zu sterben meinte.',
        zh: '妻子非常想吃那萵苣，覺得不吃就要死了。',
        en: 'The wife so craved the rapunzel that she thought she would die.',
      },
      {
        de: 'Der Mann stieg heimlich über die Mauer und stahl davon – doch die Zauberin ertappte ihn.',
        zh: '丈夫偷偷翻牆去摘——卻被女巫逮個正著。',
        en: 'The husband secretly climbed the wall and stole some – but the sorceress caught him.',
      },
      {
        de: '"Du darfst nehmen, so viel du willst, doch dafür musst du mir euer Kind geben", sagte sie.',
        zh: '「你要多少都行，但你們的孩子得給我。」她說。',
        en: '"You may take as much as you like, but you must give me your child," she said.',
      },
      {
        de: 'Als das Mädchen geboren war, nahm die Zauberin es mit und nannte es Rapunzel.',
        zh: '女孩出生後，女巫把她帶走，取名萵苣姑娘。',
        en: 'When the girl was born, the sorceress took her and named her Rapunzel.',
      },
      {
        de: 'Mit zwölf Jahren sperrte sie das schöne Kind in einen hohen Turm ohne Tür und Treppe.',
        zh: '女孩十二歲時，女巫把這美麗的孩子關進一座沒有門也沒有樓梯的高塔。',
        en: 'When she was twelve, she shut the lovely child in a high tower with no door and no stairs.',
      },
      {
        de: 'Rapunzel hatte lange, goldene Haare; rief die Zauberin, ließ sie die Zöpfe zum Fenster herab.',
        zh: '萵苣姑娘有一頭金色長髮；女巫一喊，她就把辮子從窗口垂下。',
        en: 'Rapunzel had long golden hair; when the sorceress called, she let her braids down from the window.',
      },
      {
        de: '"Rapunzel, Rapunzel, lass dein Haar herunter!", rief sie, und daran stieg die Alte hinauf.',
        zh: '「萵苣姑娘，萵苣姑娘，把頭髮放下來！」她喊著，便順著辮子爬上去。',
        en: '"Rapunzel, Rapunzel, let down your hair!" she called, and climbed up by it.',
      },
      {
        de: 'Eines Tages hörte ein Königssohn Rapunzel singen und sah, wie die Zauberin hinaufstieg.',
        zh: '有一天一位王子聽見萵苣姑娘唱歌，看見女巫如何爬上塔去。',
        en: 'One day a prince heard Rapunzel sing and saw how the sorceress climbed up.',
      },
      {
        de: 'Am Abend rief er dieselben Worte, und Rapunzel ließ ihr Haar für ihn herab.',
        zh: '傍晚他喊出同樣的話，萵苣姑娘也為他垂下頭髮。',
        en: 'In the evening he called the same words, and Rapunzel let down her hair for him.',
      },
      {
        de: 'Die beiden hatten sich lieb, und Rapunzel versprach, mit ihm fortzugehen.',
        zh: '兩人相愛了，萵苣姑娘答應跟他一起離開。',
        en: 'The two grew fond of each other, and Rapunzel promised to go away with him.',
      },
      {
        de: 'Doch sie verriet sich, und die zornige Zauberin schnitt ihr die Haare ab und verstieß sie in die Wüste.',
        zh: '但她說漏了嘴，憤怒的女巫剪掉她的頭髮，把她趕到荒野。',
        en: 'But she gave herself away, and the angry sorceress cut off her hair and cast her out into the wilderness.',
      },
      {
        de: 'Als der Königssohn kam, hängte die Zauberin die abgeschnittenen Haare hinaus – und er stürzte in die Dornen und erblindete.',
        zh: '王子來時，女巫把剪下的頭髮垂出窗外——他摔進荊棘，雙眼瞎了。',
        en: 'When the prince came, the sorceress hung out the cut-off hair – and he fell into the thorns and was blinded.',
      },
      {
        de: 'Jahrelang irrte der blinde Königssohn umher, bis er Rapunzels Stimme wiederfand.',
        zh: '瞎眼的王子流浪多年，直到再次聽見萵苣姑娘的聲音。',
        en: 'For years the blind prince wandered until he found Rapunzel\'s voice again.',
      },
      {
        de: 'Ihre Tränen fielen ihm in die Augen, und er konnte wieder sehen; zusammen zogen sie froh in sein Reich.',
        zh: '她的眼淚落進他的眼睛，他重見光明；兩人一同快樂地回到他的國度。',
        en: 'Her tears fell into his eyes, and he could see again; together they went happily to his kingdom.',
      },
    ],
  },
  {
    id: 'schneewittchen',
    title: 'Schneewittchen',
    titleZh: '白雪公主',
    emoji: '🍎',
    level: 'B1',
    blurb: '善妒的王后一再加害白雪公主，最後一顆毒蘋果讓她沉睡，直到王子出現。',
    source: grimmSource,
    segments: [
      {
        de: 'Eine Königin wünschte sich ein Kind, so weiß wie Schnee, so rot wie Blut und so schwarz wie das Holz am Fensterrahmen.',
        zh: '一位王后盼望一個孩子，皮膚白如雪、唇紅如血、髮黑如窗框的木頭。',
        en: 'A queen wished for a child as white as snow, as red as blood, and as black as the wood of the window frame.',
      },
      {
        de: 'Bald bekam sie ein solches Mädchen und nannte es Schneewittchen, starb aber bei der Geburt.',
        zh: '不久她生下這樣一個女孩，取名白雪公主，自己卻在生產時去世了。',
        en: 'Soon she had such a girl and named her Snow White, but died at her birth.',
      },
      {
        de: 'Der König nahm eine neue Frau, schön, aber stolz und neidisch.',
        zh: '國王娶了新王后，美麗卻驕傲又善妒。',
        en: 'The king took a new wife, beautiful but proud and envious.',
      },
      {
        de: 'Sie hatte einen Zauberspiegel und fragte: "Spieglein, Spieglein an der Wand, wer ist die Schönste im ganzen Land?"',
        zh: '她有一面魔鏡，問道：「魔鏡魔鏡牆上掛，誰是全國最美的人？」',
        en: 'She had a magic mirror and asked: "Mirror, mirror on the wall, who is the fairest of them all?"',
      },
      {
        de: 'Lange hieß die Antwort: "Ihr, Frau Königin." Doch Schneewittchen wurde immer schöner.',
        zh: '長久以來答案是：「王后，是您。」可白雪公主越長越美。',
        en: 'For a long time the answer was: "You, my queen." But Snow White grew ever more beautiful.',
      },
      {
        de: 'Eines Tages sprach der Spiegel: "Schneewittchen ist tausendmal schöner als Ihr."',
        zh: '有一天魔鏡說：「白雪公主比您美一千倍。」',
        en: 'One day the mirror said: "Snow White is a thousand times fairer than you."',
      },
      {
        de: 'Da befahl die Königin einem Jäger, das Kind im Wald zu töten.',
        zh: '王后於是命令一個獵人，到森林裡殺掉那孩子。',
        en: 'Then the queen ordered a huntsman to kill the child in the forest.',
      },
      {
        de: 'Der Jäger aber hatte Mitleid und ließ Schneewittchen laufen.',
        zh: '獵人卻動了憐憫，放走了白雪公主。',
        en: 'But the huntsman took pity and let Snow White go.',
      },
      {
        de: 'Das Mädchen fand ein kleines Haus, in dem sieben Zwerge wohnten.',
        zh: '女孩找到一間小屋，裡面住著七個小矮人。',
        en: 'The girl found a little house where seven dwarfs lived.',
      },
      {
        de: 'Die Zwerge nahmen sie auf, wenn sie ihnen den Haushalt führte.',
        zh: '矮人們收留了她，條件是她替他們料理家務。',
        en: 'The dwarfs took her in if she kept house for them.',
      },
      {
        de: 'Der Spiegel verriet der Königin, dass Schneewittchen noch lebte.',
        zh: '魔鏡向王后透露白雪公主還活著。',
        en: 'The mirror told the queen that Snow White was still alive.',
      },
      {
        de: 'Verkleidet kam die Königin zum Haus und schnürte Schneewittchen mit einem Mieder fast zu Tode.',
        zh: '王后喬裝來到小屋，用胸帶把白雪公主勒得幾乎斷氣。',
        en: 'In disguise the queen came to the house and laced Snow White nearly to death with a bodice.',
      },
      {
        de: 'Die Zwerge retteten sie, doch die Königin kam wieder und kämmte sie mit einem giftigen Kamm.',
        zh: '矮人救了她，但王后又來，用一把毒梳子梳她的頭。',
        en: 'The dwarfs saved her, but the queen came again and combed her with a poisoned comb.',
      },
      {
        de: 'Zuletzt brachte sie einen halb vergifteten Apfel; Schneewittchen biss hinein und fiel wie tot um.',
        zh: '最後王后帶來一顆一半有毒的蘋果；白雪公主咬了一口，倒下像死了一樣。',
        en: 'At last she brought a half-poisoned apple; Snow White bit into it and fell as if dead.',
      },
      {
        de: 'Diesmal konnten die Zwerge sie nicht erwecken und legten sie in einen gläsernen Sarg.',
        zh: '這次矮人喚不醒她，把她放進一具玻璃棺。',
        en: 'This time the dwarfs could not wake her and laid her in a glass coffin.',
      },
      {
        de: 'Ein Königssohn kam vorbei, verliebte sich und bat, den Sarg mitnehmen zu dürfen.',
        zh: '一位王子路過，愛上了她，請求帶走那口棺材。',
        en: 'A prince passed by, fell in love and begged to be allowed to take the coffin with him.',
      },
      {
        de: 'Als die Diener ihn trugen, fiel das Stück Apfel aus Schneewittchens Mund, und sie erwachte.',
        zh: '僕人抬棺時，蘋果碎塊從白雪公主口中掉出，她甦醒了。',
        en: 'As the servants carried it, the piece of apple fell from Snow White\'s mouth, and she awoke.',
      },
      {
        de: 'Die beiden heirateten, und die böse Königin wurde für all ihren Neid gestraft.',
        zh: '兩人結了婚，惡毒的王后為她所有的嫉妒受到了懲罰。',
        en: 'The two married, and the wicked queen was punished for all her envy.',
      },
    ],
  },
  {
    id: 'aschenputtel',
    title: 'Aschenputtel',
    titleZh: '灰姑娘',
    emoji: '👠',
    level: 'B1',
    blurb: '受繼母與姊姊欺負的灰姑娘，靠母親墳上小樹的幫助赴宴，掉下一隻金鞋。',
    source: grimmSource,
    segments: [
      {
        de: 'Einem reichen Mann wurde die Frau krank, und sterbend sagte sie zu ihrer Tochter: "Bleib fromm und gut."',
        zh: '一個富人的妻子病了，臨終對女兒說：「要保持虔誠善良。」',
        en: 'A rich man\'s wife fell ill, and dying she said to her daughter: "Stay devout and good."',
      },
      {
        de: 'Der Mann nahm eine neue Frau, die zwei stolze Töchter mitbrachte.',
        zh: '富人娶了新妻子，她帶來兩個驕傲的女兒。',
        en: 'The man took a new wife, who brought two proud daughters with her.',
      },
      {
        de: 'Sie quälten das Mädchen, nahmen ihm die Kleider und ließen es in der Asche schlafen – darum hieß es Aschenputtel.',
        zh: '她們折磨女孩，奪走她的衣服，讓她睡在灰燼裡——因此叫她灰姑娘。',
        en: 'They tormented the girl, took her clothes and made her sleep in the ashes – so she was called Cinderella.',
      },
      {
        de: 'Auf das Grab der Mutter pflanzte Aschenputtel ein Reis, das zu einem Bäumchen wuchs.',
        zh: '灰姑娘在母親墳上種了一枝樹苗，長成一棵小樹。',
        en: 'On her mother\'s grave Cinderella planted a twig that grew into a little tree.',
      },
      {
        de: 'Ein Vöglein auf dem Baum warf ihr herab, was sie sich wünschte.',
        zh: '樹上一隻小鳥，會把她想要的東西扔下來給她。',
        en: 'A little bird on the tree threw down to her whatever she wished for.',
      },
      {
        de: 'Der König gab ein Fest, drei Tage lang, damit sein Sohn eine Braut wähle.',
        zh: '國王舉辦為期三天的舞會，好讓王子挑選新娘。',
        en: 'The king held a feast for three days so that his son might choose a bride.',
      },
      {
        de: 'Aschenputtel durfte nicht mit, doch das Bäumchen schenkte ihr ein silbernes Kleid und goldene Schuhe.',
        zh: '灰姑娘不准去，但小樹送了她一件銀色禮服和金鞋。',
        en: 'Cinderella was not allowed to go, but the little tree gave her a silver dress and golden shoes.',
      },
      {
        de: 'Auf dem Fest tanzte der Königssohn nur mit ihr und ließ keinen anderen an sie heran.',
        zh: '舞會上王子只和她跳舞，不讓別人靠近她。',
        en: 'At the feast the prince danced only with her and let no one else near her.',
      },
      {
        de: 'Jeden Abend lief sie vor Mitternacht heimlich davon, und niemand wusste, wer sie war.',
        zh: '每晚她都在午夜前偷偷溜走，沒人知道她是誰。',
        en: 'Each evening she slipped away before midnight, and no one knew who she was.',
      },
      {
        de: 'Am dritten Abend blieb ihr goldener Schuh an einer mit Pech bestrichenen Treppe hängen.',
        zh: '第三晚，她的金鞋黏在塗了瀝青的台階上。',
        en: 'On the third evening her golden shoe stuck to a staircase smeared with pitch.',
      },
      {
        de: 'Der Königssohn sprach: "Keine andere wird meine Frau als die, der dieser Schuh passt."',
        zh: '王子說：「除了能穿上這隻鞋的人，我不娶別人。」',
        en: 'The prince said: "No other shall be my wife than the one this shoe fits."',
      },
      {
        de: 'Die erste Schwester schnitt sich eine Zehe ab, die zweite die Ferse, um in den Schuh zu passen.',
        zh: '大姊削掉一根腳趾，二姊削掉腳跟，好擠進鞋裡。',
        en: 'The first sister cut off a toe, the second her heel, to fit into the shoe.',
      },
      {
        de: 'Doch das Vöglein rief: "Blut ist im Schuh", und der Betrug kam heraus.',
        zh: '但小鳥喊：「鞋裡有血」，騙局被揭穿了。',
        en: 'But the little bird cried: "There\'s blood in the shoe," and the deceit was discovered.',
      },
      {
        de: 'Endlich probierte Aschenputtel den Schuh, und er passte ihr wie angegossen.',
        zh: '最後灰姑娘試了鞋，正好合腳。',
        en: 'At last Cinderella tried the shoe, and it fit her perfectly.',
      },
      {
        de: 'Da erkannte der Königssohn sie und rief: "Das ist die rechte Braut!"',
        zh: '王子認出了她，喊道：「這才是真正的新娘！」',
        en: 'Then the prince knew her and cried: "This is the true bride!"',
      },
      {
        de: 'Für ihre Bosheit wurden die falschen Schwestern gestraft, und Aschenputtel lebte glücklich mit dem Königssohn.',
        zh: '兩個壞姊姊因惡行受到懲罰，灰姑娘和王子幸福地生活在一起。',
        en: 'The false sisters were punished for their wickedness, and Cinderella lived happily with the prince.',
      },
    ],
  },
  {
    id: 'dornroeschen',
    title: 'Dornröschen',
    titleZh: '睡美人',
    emoji: '🌹',
    level: 'A2',
    blurb: '被詛咒的公主在十五歲刺到紡錘，沉睡百年，直到一位王子穿過荊棘喚醒她。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein König und eine Königin bekamen endlich ein Töchterchen und gaben ein großes Fest.',
        zh: '一位國王和王后終於有了一個小女兒，便舉辦盛大的慶典。',
        en: 'A king and queen at last had a little daughter and held a great feast.',
      },
      {
        de: 'Sie luden die weisen Frauen ein, doch eine wurde vergessen.',
        zh: '他們邀請了智慧仙女，卻漏掉了其中一位。',
        en: 'They invited the wise women, but one was forgotten.',
      },
      {
        de: 'Die weisen Frauen schenkten dem Kind Tugend, Schönheit und Reichtum.',
        zh: '仙女們賜給孩子美德、美貌和財富。',
        en: 'The wise women gave the child virtue, beauty and riches.',
      },
      {
        de: 'Da kam die vergessene Frau zornig herein und rief: "Mit fünfzehn Jahren wird sich die Prinzessin an einer Spindel stechen und tot fallen!"',
        zh: '那位被遺忘的仙女氣憤地進來，喊道：「公主十五歲時將被紡錘刺到，倒地死去！」',
        en: 'Then the forgotten woman came in angrily and cried: "At fifteen the princess will prick herself on a spindle and fall down dead!"',
      },
      {
        de: 'Eine andere weise Frau aber milderte den Fluch: nicht Tod, nur hundert Jahre Schlaf.',
        zh: '但另一位仙女減輕了詛咒：不是死，而是沉睡一百年。',
        en: 'But another wise woman softened the curse: not death, only a hundred years\' sleep.',
      },
      {
        de: 'Der König ließ alle Spindeln im Reich verbrennen.',
        zh: '國王下令燒掉全國所有的紡錘。',
        en: 'The king had all the spindles in the kingdom burned.',
      },
      {
        de: 'An ihrem fünfzehnten Geburtstag fand die Prinzessin ein altes Türmchen, in dem eine alte Frau spann.',
        zh: '在十五歲生日那天，公主發現一座古老的小塔，裡面有個老婦人在紡紗。',
        en: 'On her fifteenth birthday the princess found an old little tower where an old woman sat spinning.',
      },
      {
        de: 'Kaum berührte sie die Spindel, da stach sie sich und sank in tiefen Schlaf.',
        zh: '她剛碰到紡錘，就被刺到，沉入了深深的睡眠。',
        en: 'Hardly had she touched the spindle when she pricked herself and sank into a deep sleep.',
      },
      {
        de: 'Mit ihr schlief das ganze Schloss ein: König, Hofstaat, Pferde, Hunde, sogar das Feuer im Herd.',
        zh: '整座城堡也隨她沉睡：國王、群臣、馬、狗，連爐裡的火都靜止了。',
        en: 'With her the whole castle fell asleep: king, court, horses, dogs, even the fire in the hearth.',
      },
      {
        de: 'Rings um das Schloss wuchs eine dichte Dornenhecke und verbarg es ganz.',
        zh: '城堡四周長出濃密的荊棘籬，把它整個遮住。',
        en: 'Around the castle grew a thick hedge of thorns that hid it completely.',
      },
      {
        de: 'Viele Königssöhne wollten hindurch, doch die Dornen hielten sie fest, und sie kamen elend um.',
        zh: '許多王子想穿越，卻被荊棘困住，悲慘地喪命。',
        en: 'Many princes tried to get through, but the thorns held them fast, and they died miserably.',
      },
      {
        de: 'Nach hundert Jahren kam wieder ein Königssohn; gerade da war die Zeit erfüllt.',
        zh: '一百年後又來了一位王子；正巧期限已滿。',
        en: 'After a hundred years another prince came; just then the time was fulfilled.',
      },
      {
        de: 'Die Dornenhecke verwandelte sich in Blumen und ließ ihn ungehindert hindurch.',
        zh: '荊棘籬化作鮮花，讓他毫無阻礙地穿過。',
        en: 'The thorn hedge turned into flowers and let him pass unhindered.',
      },
      {
        de: 'Er fand Dornröschen und küsste sie, da schlug sie die Augen auf.',
        zh: '他找到睡美人，吻了她，她便睜開了眼睛。',
        en: 'He found Sleeping Beauty and kissed her, and she opened her eyes.',
      },
      {
        de: 'Mit ihr erwachte das ganze Schloss, und der Königssohn feierte mit Dornröschen Hochzeit.',
        zh: '整座城堡也隨她甦醒，王子與睡美人舉行了婚禮。',
        en: 'With her the whole castle awoke, and the prince celebrated his wedding with Sleeping Beauty.',
      },
    ],
  },
  {
    id: 'rumpelstilzchen',
    title: 'Rumpelstilzchen',
    titleZh: '名字古怪的小矮人',
    emoji: '🧵',
    level: 'B1',
    blurb: '少女靠神秘小矮人把稻草紡成金子，代價是她的孩子——除非她猜出他的名字。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein armer Müller prahlte vor dem König: "Meine Tochter kann Stroh zu Gold spinnen."',
        zh: '一個窮磨坊主在國王面前吹噓：「我女兒能把稻草紡成金子。」',
        en: 'A poor miller boasted to the king: "My daughter can spin straw into gold."',
      },
      {
        de: 'Der König ließ das Mädchen holen, sperrte es in eine Kammer voll Stroh und sprach: "Spinn bis morgen, sonst musst du sterben."',
        zh: '國王把女孩帶來，關進一間滿是稻草的房間，說：「天亮前紡完，否則你得死。」',
        en: 'The king had the girl brought, shut her in a room full of straw and said: "Spin until morning, or you must die."',
      },
      {
        de: 'Das Mädchen konnte es nicht und weinte.',
        zh: '女孩做不到，哭了起來。',
        en: 'The girl could not do it and wept.',
      },
      {
        de: 'Da trat ein kleines Männchen herein und sagte: "Was gibst du mir, wenn ich für dich spinne?"',
        zh: '這時一個小矮人走進來，說：「如果我替你紡，你給我什麼？」',
        en: 'Then a little man stepped in and said: "What will you give me if I spin for you?"',
      },
      {
        de: 'Es nahm ihr Halsband, und über Nacht war alles Stroh zu Gold gesponnen.',
        zh: '他拿走她的項鍊，一夜之間所有稻草都紡成了金子。',
        en: 'He took her necklace, and overnight all the straw was spun into gold.',
      },
      {
        de: 'Der gierige König gab ihr noch mehr Stroh, und das Männchen nahm diesmal ihren Ring.',
        zh: '貪心的國王給了她更多稻草，小矮人這次拿走她的戒指。',
        en: 'The greedy king gave her still more straw, and this time the little man took her ring.',
      },
      {
        de: 'In der dritten Nacht hatte das Mädchen nichts mehr zu geben.',
        zh: '第三晚，女孩再也沒有東西可給了。',
        en: 'On the third night the girl had nothing left to give.',
      },
      {
        de: '"So versprich mir dein erstes Kind, wenn du Königin bist", sagte das Männchen, und sie versprach es.',
        zh: '「那就答應我，等你當上王后，把你的第一個孩子給我。」小矮人說，她答應了。',
        en: '"Then promise me your first child when you are queen," said the little man, and she promised.',
      },
      {
        de: 'Der König heiratete das Mädchen, und ein Jahr später bekam sie ein Kind.',
        zh: '國王娶了女孩，一年後她生下一個孩子。',
        en: 'The king married the girl, and a year later she had a child.',
      },
      {
        de: 'Da kam das Männchen und forderte das Kind.',
        zh: '這時小矮人來了，索討那孩子。',
        en: 'Then the little man came and demanded the child.',
      },
      {
        de: 'Die Königin weinte so sehr, dass es ihr eine Frist gab: "Rätst du in drei Tagen meinen Namen, darfst du das Kind behalten."',
        zh: '王后哭得很傷心，他便給了她期限：「三天內猜出我的名字，孩子就歸你。」',
        en: 'The queen wept so much that he gave her a reprieve: "If you guess my name in three days, you may keep the child."',
      },
      {
        de: 'Die Königin schickte Boten aus und sammelte alle Namen, die sie finden konnte.',
        zh: '王后派出使者，蒐集所有能找到的名字。',
        en: 'The queen sent out messengers and gathered every name she could find.',
      },
      {
        de: 'Am dritten Tag sah ein Bote tief im Wald das Männchen ums Feuer tanzen und singen.',
        zh: '第三天，一個使者在森林深處看見小矮人繞著火堆又唱又跳。',
        en: 'On the third day a messenger deep in the forest saw the little man dancing and singing around a fire.',
      },
      {
        de: 'Es sang: "Ach, wie gut, dass niemand weiß, dass ich Rumpelstilzchen heiß!"',
        zh: '他唱著：「啊，真好，沒人知道我叫倫佩斯提爾欽！」',
        en: 'He sang: "Oh how good that no one knows that Rumpelstiltskin is my name!"',
      },
      {
        de: 'Als das Männchen wiederkam, fragte die Königin: "Heißt du etwa Rumpelstilzchen?"',
        zh: '小矮人再來時，王后問：「你該不會叫倫佩斯提爾欽吧？」',
        en: 'When the little man returned, the queen asked: "Is your name perhaps Rumpelstiltskin?"',
      },
      {
        de: '"Das hat dir der Teufel gesagt!", schrie es voller Wut und verschwand für immer.',
        zh: '「這是魔鬼告訴你的！」他憤怒地大叫，從此消失不見。',
        en: '"The devil told you that!" he screamed in fury and vanished forever.',
      },
    ],
  },
  {
    id: 'wolf-und-sieben-geisslein',
    title: 'Der Wolf und die sieben jungen Geißlein',
    titleZh: '狼與七隻小羊',
    emoji: '🐺',
    level: 'A2',
    blurb: '老山羊出門前叮囑七隻小羊提防大野狼，狼卻用詭計騙開了門。',
    source: grimmSource,
    segments: [
      {
        de: 'Eine alte Geiß hatte sieben junge Geißlein, die sie von Herzen liebte.',
        zh: '一隻老山羊有七隻小羊，牠全心全意地愛牠們。',
        en: 'An old goat had seven little kids whom she loved with all her heart.',
      },
      {
        de: 'Eines Tages wollte sie in den Wald und warnte: "Hütet euch vor dem Wolf!"',
        zh: '有一天牠要進森林，警告說：「小心那隻狼！」',
        en: 'One day she wanted to go into the forest and warned: "Beware of the wolf!"',
      },
      {
        de: '"Ihr erkennt ihn an seiner rauen Stimme und seinen schwarzen Füßen", sagte die Mutter.',
        zh: '「你們可以從他粗啞的嗓音和黑色的腳認出他。」母親說。',
        en: '"You will know him by his rough voice and his black feet," said the mother.',
      },
      {
        de: 'Bald klopfte der Wolf und rief: "Macht auf, ich bin es, eure Mutter."',
        zh: '不久狼來敲門，喊道：「開門，是我，你們的媽媽。」',
        en: 'Soon the wolf knocked and called: "Open up, it is me, your mother."',
      },
      {
        de: 'Doch an der rauen Stimme erkannten ihn die Geißlein und öffneten nicht.',
        zh: '但小羊們從粗啞的嗓音認出了他，沒有開門。',
        en: 'But by the rough voice the kids knew him and did not open.',
      },
      {
        de: 'Da fraß der Wolf Kreide, um seine Stimme fein zu machen.',
        zh: '於是狼吃了白堊，好讓嗓音變細。',
        en: 'Then the wolf ate chalk to make his voice soft.',
      },
      {
        de: 'Aber als er die schwarze Pfote ans Fenster legte, riefen sie: "Du bist der Wolf!"',
        zh: '但他把黑色的爪子放上窗口時，牠們喊：「你是狼！」',
        en: 'But when he put his black paw on the window, they cried: "You are the wolf!"',
      },
      {
        de: 'Da bestrich der Wolf seine Pfote mit Teig und Mehl, bis sie weiß war.',
        zh: '於是狼把爪子塗上麵團和麵粉，直到變白。',
        en: 'Then the wolf smeared his paw with dough and flour until it was white.',
      },
      {
        de: 'Nun glaubten ihm die Geißlein und machten die Tür auf.',
        zh: '這下小羊們信了，把門打開。',
        en: 'Now the kids believed him and opened the door.',
      },
      {
        de: 'Erschrocken versteckten sie sich, doch der Wolf fand und verschlang sechs von ihnen.',
        zh: '牠們嚇得躲起來，但狼找到並吞下了其中六隻。',
        en: 'Terrified they hid, but the wolf found and devoured six of them.',
      },
      {
        de: 'Nur das jüngste blieb im Uhrkasten verborgen.',
        zh: '只有最小的躲在時鐘盒裡，沒被發現。',
        en: 'Only the youngest stayed hidden in the clock case.',
      },
      {
        de: 'Als die Mutter heimkam, erzählte ihr das Geißlein alles.',
        zh: '母親回家後，小羊把一切都告訴了牠。',
        en: 'When the mother came home, the little kid told her everything.',
      },
      {
        de: 'Draußen fanden sie den satten Wolf schlafend; in seinem Bauch zappelte etwas.',
        zh: '在外面牠們發現吃飽的狼睡著了，肚子裡有東西在動。',
        en: 'Outside they found the full wolf asleep; something wriggled in his belly.',
      },
      {
        de: 'Die Mutter schnitt den Bauch auf, und heraus sprangen lebendig alle sechs Geißlein.',
        zh: '母親剖開狼肚，六隻小羊全都活蹦亂跳地跳了出來。',
        en: 'The mother cut open the belly, and out sprang all six kids alive.',
      },
      {
        de: 'Sie füllten den Bauch mit Steinen; der Wolf erwachte, fiel in den Brunnen und ertrank.',
        zh: '牠們往狼肚裡塞滿石頭；狼醒來，跌進井裡淹死了。',
        en: 'They filled the belly with stones; the wolf woke, fell into the well and drowned.',
      },
    ],
  },
  {
    id: 'frau-holle',
    title: 'Frau Holle',
    titleZh: '霍勒太太',
    emoji: '🪶',
    level: 'B1',
    blurb: '勤勞的女孩跳進井裡，來到霍勒太太的世界，誠實做工換來一身金子。',
    source: grimmSource,
    segments: [
      {
        de: 'Eine Witwe hatte zwei Töchter: Die eine war schön und fleißig, die andere hässlich und faul.',
        zh: '一個寡婦有兩個女兒：一個美麗又勤勞，另一個醜陋又懶惰。',
        en: 'A widow had two daughters: one was beautiful and industrious, the other ugly and lazy.',
      },
      {
        de: 'Die fleißige musste täglich am Brunnen sitzen und spinnen, bis ihr die Finger bluteten.',
        zh: '勤勞的女兒每天得坐在井邊紡紗，直到手指流血。',
        en: 'The industrious one had to sit by the well every day and spin until her fingers bled.',
      },
      {
        de: 'Einmal fiel ihr die blutige Spule in den Brunnen, und die Stiefmutter befahl, sie wieder heraufzuholen.',
        zh: '有一次帶血的紡錘掉進井裡，繼母命令她把它撈上來。',
        en: 'Once the bloody spindle fell into the well, and her stepmother ordered her to fetch it up again.',
      },
      {
        de: 'Verzweifelt sprang das Mädchen in den Brunnen und erwachte auf einer schönen Wiese.',
        zh: '女孩絕望地跳進井裡，醒來時發現自己在一片美麗的草地上。',
        en: 'In despair the girl jumped into the well and awoke on a beautiful meadow.',
      },
      {
        de: 'Sie kam an einen Backofen voll Brot, das rief: "Zieh mich heraus, sonst verbrenne ich!"',
        zh: '她來到一個滿是麵包的烤爐，麵包喊：「把我拿出來，不然我要燒焦了！」',
        en: 'She came to an oven full of bread that cried: "Take me out, or I shall burn!"',
      },
      {
        de: 'Dann kam sie an einen Apfelbaum, der rief: "Schüttle mich, meine Äpfel sind alle reif!"',
        zh: '接著她來到一棵蘋果樹，樹喊：「搖搖我吧，我的蘋果都熟了！」',
        en: 'Then she came to an apple tree that cried: "Shake me, my apples are all ripe!"',
      },
      {
        de: 'Sie tat beides und kam zu einem Haus, in dem eine Frau mit großen Zähnen wohnte.',
        zh: '兩件事她都照做了，然後來到一棟房子，裡面住著一個牙齒很大的婦人。',
        en: 'She did both and came to a house where a woman with big teeth lived.',
      },
      {
        de: 'Die Frau war Frau Holle und sagte: "Schüttelst du mein Bett gut aus, so schneit es auf der Welt."',
        zh: '那婦人正是霍勒太太，說：「只要你把我的床鋪抖得好，世上就會下雪。」',
        en: 'The woman was Mother Holle and said: "If you shake out my bed well, it snows on earth."',
      },
      {
        de: 'Das Mädchen diente fleißig und hatte es gut, doch bald bekam es Heimweh.',
        zh: '女孩勤快地服事，過得很好，但不久就想家了。',
        en: 'The girl served diligently and fared well, but soon grew homesick.',
      },
      {
        de: 'Frau Holle führte es an ein großes Tor, und als es hindurchging, fiel ein Goldregen auf es herab.',
        zh: '霍勒太太把她帶到一道大門前，她走過去時，一場金雨灑在她身上。',
        en: 'Mother Holle led her to a great gate, and as she passed through, a shower of gold fell upon her.',
      },
      {
        de: 'So kam sie ganz mit Gold bedeckt heim, und der Hahn rief: "Unsere goldene Jungfrau ist wieder hier!"',
        zh: '於是她渾身披金地回到家，公雞啼道：「我們的金姑娘回來了！」',
        en: 'So she came home all covered in gold, and the rooster crowed: "Our golden maiden is here again!"',
      },
      {
        de: 'Da wollte auch die faule Tochter solches Glück und sprang in den Brunnen.',
        zh: '懶女兒也想要這樣的好運，便跳進了井裡。',
        en: 'Then the lazy daughter wanted such luck too and jumped into the well.',
      },
      {
        de: 'Aber sie zog das Brot nicht heraus und schüttelte den Baum nicht; auch bei Frau Holle war sie faul.',
        zh: '但她沒把麵包拿出來，也沒搖樹；在霍勒太太那裡她也很懶。',
        en: 'But she did not take out the bread nor shake the tree; at Mother Holle\'s she was lazy too.',
      },
      {
        de: 'Zur Strafe goss Frau Holle ihr am Tor einen großen Kessel Pech über den Kopf.',
        zh: '作為懲罰，霍勒太太在門口把一大鍋瀝青澆在她頭上。',
        en: 'As punishment, Mother Holle poured a great kettle of pitch over her head at the gate.',
      },
      {
        de: 'Das Pech blieb ihr Leben lang an ihr kleben, und so bekam jede, was sie verdiente.',
        zh: '瀝青一輩子黏在她身上，於是各人都得到了應得的下場。',
        en: 'The pitch stuck to her all her life, and so each got what she deserved.',
      },
    ],
  },
  {
    id: 'hans-im-glueck',
    title: 'Hans im Glück',
    titleZh: '幸運的漢斯',
    emoji: '🍀',
    level: 'A2',
    blurb: '漢斯一路把金子換成越來越小的東西，最後兩手空空，卻覺得自己最幸運。',
    source: grimmSource,
    segments: [
      {
        de: 'Hans hatte sieben Jahre bei seinem Herrn gedient und wollte nun heim zu seiner Mutter.',
        zh: '漢斯在主人那裡做了七年工，如今想回家找母親。',
        en: 'Hans had served his master seven years and now wanted to go home to his mother.',
      },
      {
        de: 'Zum Lohn bekam er ein Stück Gold, so groß wie sein Kopf.',
        zh: '作為報酬，他得到一塊和他頭一樣大的金子。',
        en: 'As payment he received a lump of gold as big as his head.',
      },
      {
        de: 'Das Gold war schwer, und bald tat ihm die Schulter weh.',
        zh: '金子很重，不久他的肩膀就痛了。',
        en: 'The gold was heavy, and soon his shoulder ached.',
      },
      {
        de: 'Da kam ein Reiter, und Hans tauschte sein Gold gegen das Pferd.',
        zh: '這時來了一個騎士，漢斯用金子換了那匹馬。',
        en: 'Then a rider came, and Hans traded his gold for the horse.',
      },
      {
        de: 'Doch das Pferd warf ihn ab, und er tauschte es bei einem Bauern gegen eine Kuh.',
        zh: '但馬把他摔了下來，他便和一個農夫把馬換成一頭牛。',
        en: 'But the horse threw him off, and he traded it with a farmer for a cow.',
      },
      {
        de: 'Die Kuh gab keine Milch, also tauschte er sie gegen ein Schwein.',
        zh: '牛不產奶，於是他把牠換成一頭豬。',
        en: 'The cow gave no milk, so he traded it for a pig.',
      },
      {
        de: 'Das Schwein tauschte er bald gegen eine schöne fette Gans.',
        zh: '不久他又把豬換成一隻肥美的鵝。',
        en: 'He soon traded the pig for a fine fat goose.',
      },
      {
        de: 'Zuletzt gab er die Gans für einen Schleifstein und einen schweren Feldstein her.',
        zh: '最後他用鵝換了一塊磨刀石和一塊沉重的石頭。',
        en: 'At last he gave the goose for a grindstone and a heavy field-stone.',
      },
      {
        de: 'Die Steine waren schwer, und Hans wurde müde und durstig.',
        zh: '石頭很重，漢斯又累又渴。',
        en: 'The stones were heavy, and Hans grew tired and thirsty.',
      },
      {
        de: 'Als er sich an einem Brunnen bückte, um zu trinken, fielen die Steine hinein.',
        zh: '他在井邊彎腰喝水時，石頭掉進了井裡。',
        en: 'As he bent down at a well to drink, the stones fell in.',
      },
      {
        de: 'Hans war froh, dass er die schwere Last nun los war.',
        zh: '漢斯很高興，總算擺脫了沉重的負擔。',
        en: 'Hans was glad to be rid of the heavy burden at last.',
      },
      {
        de: '"So glücklich wie ich", rief er, "gibt es keinen Menschen unter der Sonne!"',
        zh: '「天底下沒有比我更幸運的人了！」他喊道。',
        en: '"There is no man under the sun as lucky as I!" he cried.',
      },
      {
        de: 'Mit leichtem Herzen und leeren Händen lief er weiter.',
        zh: '他心情輕鬆、兩手空空地繼續走。',
        en: 'With a light heart and empty hands he walked on.',
      },
      {
        de: 'So kam Hans im Glück fröhlich heim zu seiner Mutter.',
        zh: '就這樣，幸運的漢斯快快樂樂地回到了母親身邊。',
        en: 'And so Lucky Hans came home merrily to his mother.',
      },
    ],
  },
  {
    id: 'goldene-gans',
    title: 'Die goldene Gans',
    titleZh: '金鵝',
    emoji: '🪿',
    level: 'B1',
    blurb: '被看不起的「傻瓜」因為善良得到金鵝，引出一串黏成一條的人，逗笑了公主。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein Mann hatte drei Söhne; der jüngste hieß nur der Dummling und wurde von allen verspottet.',
        zh: '一個人有三個兒子；最小的被叫做傻瓜，受到大家的嘲笑。',
        en: 'A man had three sons; the youngest was called only Simpleton and was mocked by all.',
      },
      {
        de: 'Als der Älteste in den Wald ging, traf er ein graues Männchen, das um Essen bat.',
        zh: '大兒子進森林時，遇到一個灰衣小矮人向他討東西吃。',
        en: 'When the eldest went into the forest, he met a little grey man who begged for food.',
      },
      {
        de: 'Der Älteste gab nichts und verletzte sich kurz darauf mit der Axt.',
        zh: '大兒子什麼也不給，不久就被斧頭傷了自己。',
        en: 'The eldest gave nothing and soon hurt himself with the axe.',
      },
      {
        de: 'Dem zweiten Sohn erging es ebenso.',
        zh: '二兒子的下場也一樣。',
        en: 'The second son fared the same.',
      },
      {
        de: 'Dann ging der Dummling, teilte sein einfaches Essen mit dem Männchen und wurde belohnt.',
        zh: '然後傻瓜去了，把簡單的食物分給小矮人，得到了回報。',
        en: 'Then Simpleton went, shared his plain food with the little man and was rewarded.',
      },
      {
        de: 'Unter einem Baum fand er eine Gans mit Federn aus reinem Gold.',
        zh: '在一棵樹下，他發現一隻羽毛是純金的鵝。',
        en: 'Under a tree he found a goose with feathers of pure gold.',
      },
      {
        de: 'In einem Wirtshaus wollten drei Töchter heimlich eine goldene Feder nehmen.',
        zh: '在一家客棧裡，三個女兒想偷偷拔一根金羽毛。',
        en: 'At an inn, three daughters wanted to secretly take a golden feather.',
      },
      {
        de: 'Doch wer die Gans berührte, blieb daran kleben und konnte sich nicht mehr lösen.',
        zh: '但凡是碰到那隻鵝的人，都黏在上面，再也脫不開身。',
        en: 'But whoever touched the goose stuck fast and could not get free.',
      },
      {
        de: 'So hing bald eine ganze Reihe Menschen hintereinander an der Gans.',
        zh: '於是不久一長串人就一個接一個地黏在鵝上。',
        en: 'So soon a whole row of people hung one behind the other on the goose.',
      },
      {
        de: 'Der Dummling zog fröhlich weiter und merkte gar nicht, wie viele ihm folgten.',
        zh: '傻瓜快活地往前走，根本沒注意到後面跟了多少人。',
        en: 'Simpleton walked on merrily, not even noticing how many followed him.',
      },
      {
        de: 'In der Stadt lebte eine Königstochter, die noch nie gelacht hatte.',
        zh: '城裡住著一位從沒笑過的公主。',
        en: 'In the town lived a king\'s daughter who had never laughed.',
      },
      {
        de: 'Als sie den seltsamen Zug sah, lachte sie zum ersten Mal laut heraus.',
        zh: '當她看見那古怪的隊伍時，第一次放聲大笑。',
        en: 'When she saw the strange procession, she laughed out loud for the first time.',
      },
      {
        de: 'Der König hatte sie dem versprochen, der sie zum Lachen bringen würde.',
        zh: '國王曾答應，把她嫁給能逗她笑的人。',
        en: 'The king had promised her to whoever could make her laugh.',
      },
      {
        de: 'Mit Hilfe des grauen Männchens bestand der Dummling auch alle weiteren Aufgaben.',
        zh: '在灰衣小矮人的幫助下，傻瓜也通過了所有其他考驗。',
        en: 'With the little grey man\'s help, Simpleton passed all the further tasks too.',
      },
      {
        de: 'So heiratete der verspottete Dummling die Königstochter und wurde später König.',
        zh: '於是被嘲笑的傻瓜娶了公主，後來成了國王。',
        en: 'So the mocked Simpleton married the princess and later became king.',
      },
    ],
  },
  {
    id: 'koenig-drosselbart',
    title: 'König Drosselbart',
    titleZh: '畫眉嘴國王',
    emoji: '👑',
    level: 'B1',
    blurb: '驕傲的公主嘲笑所有求婚者，被父親嫁給窮樂師，歷經磨難後學會謙卑。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein König hatte eine wunderschöne, aber überaus stolze Tochter.',
        zh: '一位國王有個非常美麗、卻極其驕傲的女兒。',
        en: 'A king had a wonderfully beautiful but exceedingly proud daughter.',
      },
      {
        de: 'Sie wies jeden Freier ab und machte sich über jeden lustig.',
        zh: '她拒絕每一個求婚者，還嘲笑每一個人。',
        en: 'She turned away every suitor and made fun of each one.',
      },
      {
        de: 'Einen guten König mit etwas krummem Kinn nannte sie spöttisch "Drosselbart".',
        zh: '對一個下巴有點彎的好國王，她譏笑著叫他「畫眉嘴」。',
        en: 'A good king with a slightly crooked chin she mockingly called "Thrushbeard".',
      },
      {
        de: 'Da wurde ihr Vater zornig und schwor, sie dem ersten Bettler zu geben, der käme.',
        zh: '她的父親大怒，發誓要把她嫁給第一個上門的乞丐。',
        en: 'Then her father grew angry and swore to give her to the first beggar who came.',
      },
      {
        de: 'Bald kam ein armer Spielmann, und der König hielt sein Wort.',
        zh: '不久來了一個窮樂師，國王便信守了諾言。',
        en: 'Soon a poor minstrel came, and the king kept his word.',
      },
      {
        de: 'Die Prinzessin musste mit ihm fortziehen und arm in einer kleinen Hütte leben.',
        zh: '公主只得跟他離開，貧窮地住進一間小屋。',
        en: 'The princess had to go away with him and live poor in a little hut.',
      },
      {
        de: 'Sie sollte Körbe flechten und spinnen, doch ihre zarten Hände taugten nicht dazu.',
        zh: '她得編籃子、紡紗，可她嬌嫩的手不擅長這些。',
        en: 'She was to weave baskets and spin, but her delicate hands were no good at it.',
      },
      {
        de: 'Dann verkaufte sie Töpfe auf dem Markt, bis ein Reiter mitten hindurchsprengte und alles zerbrach.',
        zh: '後來她在市場上賣鍋，直到一個騎士衝過來，把一切都打碎了。',
        en: 'Then she sold pots at the market until a rider galloped through and smashed everything.',
      },
      {
        de: 'Zuletzt nahm man sie als Küchenmagd in einem königlichen Schloss auf.',
        zh: '最後她在一座王宮裡被收做廚房女傭。',
        en: 'At last she was taken on as a kitchen maid in a royal castle.',
      },
      {
        de: 'Heimlich steckte sie sich Reste in die Taschen, um nicht zu hungern.',
        zh: '她偷偷把剩菜塞進口袋，免得挨餓。',
        en: 'Secretly she put leftovers in her pockets so as not to go hungry.',
      },
      {
        de: 'Als ein großes Fest gefeiert wurde, zog der König sie zum Tanz.',
        zh: '一場盛大慶典舉行時，國王拉她去跳舞。',
        en: 'When a great feast was held, the king drew her to dance.',
      },
      {
        de: 'Da fielen die Speisereste aus ihren Taschen, und alle lachten über sie.',
        zh: '這時剩菜從她口袋裡掉出來，所有人都笑她。',
        en: 'Then the leftover food fell from her pockets, and everyone laughed at her.',
      },
      {
        de: 'Voller Scham wollte sie fliehen, doch der König hielt sie fest.',
        zh: '她羞愧難當想逃走，國王卻拉住了她。',
        en: 'Full of shame she wanted to flee, but the king held her fast.',
      },
      {
        de: '"Ich bin der Spielmann und auch König Drosselbart", sagte er; alles war geschehen, um ihren Stolz zu brechen.',
        zh: '「我就是那樂師，也是畫眉嘴國王。」他說；這一切都是為了挫挫她的驕傲。',
        en: '"I am the minstrel and also King Thrushbeard," he said; all this had happened to break her pride.',
      },
      {
        de: 'Die Prinzessin bereute ihren Hochmut, und sie feierten in Freude ihre Hochzeit.',
        zh: '公主為自己的傲慢悔悟，他們歡喜地舉行了婚禮。',
        en: 'The princess repented her arrogance, and they celebrated their wedding in joy.',
      },
    ],
  },
  {
    id: 'gaensemagd',
    title: 'Die Gänsemagd',
    titleZh: '牧鵝姑娘',
    emoji: '👧',
    level: 'B1',
    blurb: '公主被狠心的侍女頂替了身分，淪為牧鵝女，靠著一爐傾訴讓真相重見天日。',
    source: grimmSource,
    segments: [
      {
        de: 'Eine alte Königin schickte ihre Tochter in ein fernes Land, um den Königssohn zu heiraten.',
        zh: '一位老王后把女兒送到遙遠的國度，去嫁給那裡的王子。',
        en: 'An old queen sent her daughter to a far land to marry the prince.',
      },
      {
        de: 'Sie gab ihr eine Kammerjungfer, das sprechende Pferd Falada und ein Tuch mit drei Blutstropfen.',
        zh: '她給了女兒一個侍女、會說話的馬法拉達，和一塊滴了三滴血的手帕。',
        en: 'She gave her a maid, the talking horse Falada, and a cloth with three drops of blood.',
      },
      {
        de: 'Unterwegs aber zwang die boshafte Jungfer die Prinzessin, mit ihr Kleider und Rollen zu tauschen.',
        zh: '但途中惡毒的侍女逼公主和她交換衣服與身分。',
        en: 'On the way the wicked maid forced the princess to swap clothes and roles with her.',
      },
      {
        de: 'Am Hof hielt man die falsche Braut für die echte, und sie wurde dem Königssohn vermählt.',
        zh: '在宮中，人們把假新娘當成真公主，她便嫁給了王子。',
        en: 'At court the false bride was taken for the real one and was wedded to the prince.',
      },
      {
        de: 'Die echte Prinzessin musste mit dem Jungen Kürdchen die Gänse hüten.',
        zh: '真正的公主只得和小男孩庫德欣一起去放鵝。',
        en: 'The real princess had to herd the geese with the boy Conrad.',
      },
      {
        de: 'Aus Angst ließ die falsche Braut das treue Pferd Falada töten.',
        zh: '假新娘因害怕，命人殺了忠心的馬法拉達。',
        en: 'Out of fear the false bride had the faithful horse Falada killed.',
      },
      {
        de: 'Die Gänsemagd ließ Faladas Kopf über das dunkle Stadttor nageln.',
        zh: '牧鵝姑娘請人把法拉達的頭釘在陰暗的城門上。',
        en: 'The goose girl had Falada\'s head nailed over the dark town gate.',
      },
      {
        de: 'Jeden Morgen sprach der Kopf: "O du Falada, da du hangest", und sie antwortete traurig.',
        zh: '每天早晨那頭顱說：「啊，法拉達，你竟掛在這裡」，她便悲傷地回應。',
        en: 'Each morning the head said: "Oh Falada, there you hang," and she answered sadly.',
      },
      {
        de: 'Auf der Wiese löste sie ihr Haar, das wie reines Gold glänzte.',
        zh: '在草地上她散開頭髮，那頭髮像純金一樣閃亮。',
        en: 'On the meadow she let down her hair, which shone like pure gold.',
      },
      {
        de: 'Wollte Kürdchen ihr eine Locke nehmen, ließ sie den Wind seinen Hut forttragen.',
        zh: '庫德欣想拿她一綹頭髮時，她就讓風把他的帽子吹走。',
        en: 'When Conrad tried to take a lock, she made the wind carry off his hat.',
      },
      {
        de: 'Kürdchen beklagte sich beim alten König über das seltsame Mädchen.',
        zh: '庫德欣向老國王抱怨這個古怪的女孩。',
        en: 'Conrad complained to the old king about the strange girl.',
      },
      {
        de: 'Die Magd hatte geschworen zu schweigen, darum klagte sie ihr Leid nur einem eisernen Ofen.',
        zh: '女傭曾發誓保持沉默，於是她只對著一個鐵爐傾訴自己的苦楚。',
        en: 'The maid had sworn to be silent, so she told her sorrow only to an iron stove.',
      },
      {
        de: 'Der alte König aber hörte heimlich zu und erfuhr die ganze Wahrheit.',
        zh: '老國王卻偷偷在一旁聽著，得知了全部真相。',
        en: 'But the old king listened secretly and learned the whole truth.',
      },
      {
        de: 'Die echte Prinzessin wurde in königliche Kleider gekleidet, und alle staunten über ihre Schönheit.',
        zh: '真正的公主被換上華麗的王袍，眾人都驚嘆她的美貌。',
        en: 'The real princess was dressed in royal clothes, and all marveled at her beauty.',
      },
      {
        de: 'Die falsche Braut wurde für ihren Betrug gestraft, und der Königssohn nahm die echte Prinzessin zur Frau.',
        zh: '假新娘因她的欺騙受到懲罰，王子娶了真正的公主為妻。',
        en: 'The false bride was punished for her deceit, and the prince took the real princess as his wife.',
      },
    ],
  },
  {
    id: 'sieben-raben',
    title: 'Die sieben Raben',
    titleZh: '七隻烏鴉',
    emoji: '🐦‍⬛',
    level: 'B1',
    blurb: '七個哥哥因父親一句氣話變成烏鴉，小妹妹歷盡千辛萬苦去拯救他們。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein Mann hatte sieben Söhne und wünschte sich sehnlich eine Tochter.',
        zh: '一個人有七個兒子，殷切地盼望一個女兒。',
        en: 'A man had seven sons and longed dearly for a daughter.',
      },
      {
        de: 'Endlich kam ein Töchterchen zur Welt, doch es war klein und schwach.',
        zh: '終於一個小女兒出生了，可是又小又虛弱。',
        en: 'At last a little daughter was born, but she was small and weak.',
      },
      {
        de: 'Der Vater schickte die Söhne zur Quelle, um Taufwasser zu holen.',
        zh: '父親打發兒子們去泉邊取受洗的水。',
        en: 'The father sent the sons to the spring to fetch christening water.',
      },
      {
        de: 'Als sie zu lange ausblieben, rief der Vater zornig: "Ich wollte, die Jungen würden alle zu Raben!"',
        zh: '兒子們太久沒回來，父親氣憤地喊：「但願這些小子都變成烏鴉！」',
        en: 'When they stayed away too long, the father cried in anger: "I wish the boys would all turn into ravens!"',
      },
      {
        de: 'Kaum war das Wort gesprochen, flogen sieben Raben davon.',
        zh: '話一出口，七隻烏鴉就飛走了。',
        en: 'Hardly was the word spoken when seven ravens flew away.',
      },
      {
        de: 'Das Mädchen wuchs heran und erfuhr, dass es einst sieben Brüder gehabt hatte.',
        zh: '女孩漸漸長大，得知自己曾有七個哥哥。',
        en: 'The girl grew up and learned that she had once had seven brothers.',
      },
      {
        de: 'Voller Liebe machte es sich auf, die Brüder zu suchen und zu erlösen.',
        zh: '出於滿心的愛，她動身去尋找並拯救哥哥們。',
        en: 'Full of love she set out to find and free her brothers.',
      },
      {
        de: 'Die Sonne war zu heiß, der Mond zu grausam, doch die Sterne waren ihm freundlich.',
        zh: '太陽太熱，月亮太殘忍，星星卻對她友善。',
        en: 'The sun was too hot, the moon too cruel, but the stars were kind to her.',
      },
      {
        de: 'Ein Stern schenkte ihm ein kleines Beinchen als Schlüssel zum Glasberg.',
        zh: '一顆星星送她一根小骨頭，作為打開玻璃山的鑰匙。',
        en: 'A star gave her a little bone as a key to the glass mountain.',
      },
      {
        de: 'Doch das Mädchen verlor das Beinchen und schnitt sich kurzerhand den kleinen Finger ab.',
        zh: '但女孩弄丟了那根骨頭，索性把自己的小指頭割了下來。',
        en: 'But the girl lost the bone and promptly cut off her little finger.',
      },
      {
        de: 'Damit öffnete sie den Glasberg, wo ein Zwerg den Tisch für die Raben deckte.',
        zh: '她用它打開了玻璃山，山裡有個小矮人正為烏鴉們擺桌。',
        en: 'With it she opened the glass mountain, where a dwarf was setting the table for the ravens.',
      },
      {
        de: 'Heimlich ließ sie ihren Ring in eines der Becherchen fallen.',
        zh: '她偷偷把自己的戒指丟進其中一個小杯子裡。',
        en: 'Secretly she let her ring fall into one of the little cups.',
      },
      {
        de: 'Als die Raben tranken, erkannte einer den Ring der Schwester.',
        zh: '烏鴉們喝水時，其中一隻認出了妹妹的戒指。',
        en: 'As the ravens drank, one recognized his sister\'s ring.',
      },
      {
        de: 'Im selben Augenblick wurden sie wieder Menschen, und voller Freude zogen alle zusammen heim.',
        zh: '就在那一刻，牠們又變回了人，眾人滿心歡喜地一同回家。',
        en: 'At that very moment they became human again, and joyfully they all went home together.',
      },
    ],
  },
  {
    id: 'hase-und-igel',
    title: 'Der Hase und der Igel',
    titleZh: '兔子與刺蝟',
    emoji: '🦔',
    level: 'A2',
    blurb: '被兔子嘲笑腿彎的刺蝟，用一個聰明的小計謀，在賽跑中把驕傲的兔子累垮。',
    source: grimmSource,
    segments: [
      {
        de: 'An einem schönen Morgen stand ein Igel vor seiner Tür und sang ein Liedchen.',
        zh: '一個美好的早晨，一隻刺蝟站在自家門口哼著小曲。',
        en: 'On a fine morning a hedgehog stood before his door, singing a little song.',
      },
      {
        de: 'Auf dem Feld traf er den Hasen, der über seine krummen Beine spottete.',
        zh: '在田裡他遇到兔子，兔子嘲笑他彎曲的腿。',
        en: 'In the field he met the hare, who mocked his crooked legs.',
      },
      {
        de: 'Beleidigt schlug der Igel eine Wette vor: "Wir laufen um die Wette, und ich gewinne gegen dich."',
        zh: '刺蝟被惹惱了，提議打賭：「我們來賽跑，我會贏你。」',
        en: 'Offended, the hedgehog proposed a bet: "Let us race, and I will beat you."',
      },
      {
        de: 'Der Hase lachte, doch sie wetteten um einen Goldtaler und eine Flasche Branntwein.',
        zh: '兔子大笑，但他們還是以一枚金幣和一瓶燒酒打了賭。',
        en: 'The hare laughed, but they bet a gold coin and a bottle of brandy.',
      },
      {
        de: 'Schnell lief der Igel heim und holte seine Frau, die ihm zum Verwechseln ähnlich sah.',
        zh: '刺蝟趕緊跑回家，叫來和他長得一模一樣的太太。',
        en: 'Quickly the hedgehog ran home and fetched his wife, who looked exactly like him.',
      },
      {
        de: '"Stell dich ans Ende der Furche", sagte er ihr, "und ruf nur: Ich bin schon hier."',
        zh: '「你站在田溝的另一頭，」他對她說，「只要喊：我早就到了。」',
        en: '"Stand at the end of the furrow," he told her, "and just call: I\'m already here."',
      },
      {
        de: 'Der Hase und der Igel stellten sich an den Anfang des Ackers.',
        zh: '兔子和刺蝟在田地的起點站好。',
        en: 'The hare and the hedgehog took their places at the start of the field.',
      },
      {
        de: '"Auf die Plätze – los!", rief der Hase und raste die Furche hinab.',
        zh: '「各就各位——跑！」兔子喊著，沿田溝飛奔而下。',
        en: '"On your marks – go!" cried the hare and raced down the furrow.',
      },
      {
        de: 'Der Igel aber lief nur ein paar Schritte und blieb dann ruhig hocken.',
        zh: '刺蝟卻只跑了幾步，就安靜地蹲了下來。',
        en: 'But the hedgehog ran only a few steps and then crouched down quietly.',
      },
      {
        de: 'Am Ende der Furche rief die Igelfrau: "Ich bin schon hier!"',
        zh: '在田溝的盡頭，刺蝟太太喊：「我早就到了！」',
        en: 'At the end of the furrow the hedgehog\'s wife called: "I\'m already here!"',
      },
      {
        de: 'Der Hase staunte und wollte sofort noch einmal laufen.',
        zh: '兔子大為吃驚，立刻又想再跑一次。',
        en: 'The hare was amazed and wanted to run again at once.',
      },
      {
        de: 'So lief er hin und her, und jedes Mal rief ein Igel: "Ich bin schon hier!"',
        zh: '於是他來回奔跑，每一次都有一隻刺蝟喊：「我早就到了！」',
        en: 'So he ran back and forth, and each time a hedgehog called: "I\'m already here!"',
      },
      {
        de: 'Beim dreiundsiebzigsten Mal stürzte der Hase erschöpft zu Boden.',
        zh: '跑到第七十三次時，兔子精疲力竭地倒在地上。',
        en: 'On the seventy-third run the hare fell exhausted to the ground.',
      },
      {
        de: 'So lehrt das Märchen: Niemand soll sich über einen geringeren Mann lustig machen.',
        zh: '這故事因此教導：誰也不該嘲笑比自己卑微的人。',
        en: 'So the tale teaches: no one should mock a humbler man.',
      },
    ],
  },
  {
    id: 'strohhalm-kohle-bohne',
    title: 'Strohhalm, Kohle und Bohne',
    titleZh: '稻草、煤塊和豆子',
    emoji: '🫘',
    level: 'A2',
    blurb: '逃出爐火的稻草、煤塊和豆子結伴上路，在小溪邊發生意外——豆子從此有了黑縫。',
    source: grimmSource,
    segments: [
      {
        de: 'Eine alte Frau wollte Bohnen kochen und machte ein Feuer im Herd an.',
        zh: '一位老婦人想煮豆子，在爐裡生起了火。',
        en: 'An old woman wanted to cook beans and lit a fire in the hearth.',
      },
      {
        de: 'Dabei entkamen ihr ein Strohhalm, eine glühende Kohle und eine Bohne.',
        zh: '這時一根稻草、一塊燒紅的煤和一顆豆子從她那兒逃了出來。',
        en: 'In the process a straw, a glowing coal and a bean escaped from her.',
      },
      {
        de: 'Die drei waren froh, der Gefahr entronnen zu sein, und beschlossen, zusammen zu wandern.',
        zh: '三個夥伴慶幸躲過了危險，便決定一起去流浪。',
        en: 'The three were glad to have escaped the danger and decided to wander together.',
      },
      {
        de: 'Bald kamen sie an einen kleinen Bach, über den keine Brücke führte.',
        zh: '不久他們來到一條小溪邊，溪上沒有橋。',
        en: 'Soon they came to a little brook with no bridge across it.',
      },
      {
        de: 'Der Strohhalm legte sich von einem Ufer zum anderen.',
        zh: '稻草便從一岸橫躺到另一岸。',
        en: 'The straw laid itself from one bank to the other.',
      },
      {
        de: 'Die Kohle trat mutig auf den Halm, doch in der Mitte bekam sie Angst.',
        zh: '煤塊勇敢地踏上稻草，可走到中間就害怕了。',
        en: 'The coal stepped bravely onto the straw, but in the middle it grew afraid.',
      },
      {
        de: 'Sie blieb stehen, und der Strohhalm fing an zu brennen.',
        zh: '牠停了下來，稻草便燒了起來。',
        en: 'It stopped, and the straw began to burn.',
      },
      {
        de: 'Der Halm zerbrach, und Kohle und Halm fielen ins Wasser.',
        zh: '稻草斷了，煤塊和稻草都掉進了水裡。',
        en: 'The straw broke, and coal and straw fell into the water.',
      },
      {
        de: 'Die Bohne, die noch am Ufer wartete, lachte so sehr über die beiden, dass sie zerplatzte.',
        zh: '還在岸邊等著的豆子，笑這兩個夥伴笑得太厲害，竟然裂開了。',
        en: 'The bean, still waiting on the bank, laughed so hard at the two that it burst.',
      },
      {
        de: 'Zum Glück saß ein Schneider am Ufer und ruhte sich aus.',
        zh: '幸好有個裁縫坐在岸邊休息。',
        en: 'Luckily a tailor sat resting on the bank.',
      },
      {
        de: 'Er hatte Mitleid, holte Nadel und Faden und nähte die Bohne wieder zu.',
        zh: '他動了憐憫，拿出針線，把豆子重新縫好。',
        en: 'He took pity, fetched needle and thread and sewed the bean up again.',
      },
      {
        de: 'Weil aber sein Faden schwarz war, hat seither jede Bohne eine schwarze Naht.',
        zh: '但因為他的線是黑的，從此每顆豆子上都有一條黑縫。',
        en: 'But because his thread was black, ever since then every bean has a black seam.',
      },
    ],
  },
  {
    id: 'alter-grossvater',
    title: 'Der alte Großvater und der Enkel',
    titleZh: '老祖父和孫子',
    emoji: '👴',
    level: 'A2',
    blurb: '一個被冷落的老祖父，因為小孫子一句天真的話，讓父母重新學會了孝順。',
    source: grimmSource,
    segments: [
      {
        de: 'Es war einmal ein steinalter Mann, dem zitterten die Hände, und der sah und hörte kaum noch.',
        zh: '從前有一個非常年邁的老人，雙手發抖，幾乎看不見也聽不清。',
        en: 'Once there was a very old man whose hands trembled and who could barely see or hear.',
      },
      {
        de: 'Beim Essen verschüttete er die Suppe, und manchmal lief sie ihm aus dem Mund.',
        zh: '吃飯時他把湯灑出來，有時湯還從嘴角流出。',
        en: 'At meals he spilled his soup, and sometimes it ran from his mouth.',
      },
      {
        de: 'Sein Sohn und die Schwiegertochter ekelten sich davor.',
        zh: '他的兒子和媳婦對此感到嫌惡。',
        en: 'His son and daughter-in-law were disgusted by it.',
      },
      {
        de: 'Darum musste der Großvater in der Ecke sitzen und aus einem irdenen Schüsselchen essen.',
        zh: '於是祖父只得坐在角落，用一個小陶碗吃飯。',
        en: 'So the grandfather had to sit in the corner and eat from a little earthen bowl.',
      },
      {
        de: 'Einmal fiel ihm das Schüsselchen aus den zitternden Händen und zerbrach.',
        zh: '有一次小碗從他發抖的手中掉落，摔碎了。',
        en: 'Once the little bowl fell from his trembling hands and broke.',
      },
      {
        de: 'Da kauften sie ihm für ein paar Heller einen hölzernen Napf.',
        zh: '於是他們花了幾個小錢，給他買了一個木盆。',
        en: 'So they bought him a wooden trough for a few pennies.',
      },
      {
        de: 'Eines Tages saß der kleine vierjährige Enkel am Boden und legte Holzstückchen zusammen.',
        zh: '有一天，四歲的小孫子坐在地上，把一些小木片拼在一起。',
        en: 'One day the little four-year-old grandson sat on the floor, fitting bits of wood together.',
      },
      {
        de: '"Was machst du da?", fragte der Vater. "Ein Tröglein für euch, wenn ich groß bin", sagte das Kind.',
        zh: '「你在做什麼？」父親問。「做個小木盆，等我長大給你們用。」孩子說。',
        en: '"What are you making?" asked the father. "A little trough for you, when I grow up," said the child.',
      },
      {
        de: 'Da sahen sich Mann und Frau beschämt an und fingen an zu weinen.',
        zh: '夫妻倆羞愧地對望，哭了起來。',
        en: 'Then husband and wife looked at each other in shame and began to weep.',
      },
      {
        de: 'Von nun an setzten sie den Großvater wieder mit an den Tisch und waren freundlich zu ihm.',
        zh: '從此他們又讓祖父一同上桌，並且善待他。',
        en: 'From then on they brought the grandfather back to the table and were kind to him.',
      },
    ],
  },
  {
    id: 'bruederchen-und-schwesterchen',
    title: 'Brüderchen und Schwesterchen',
    titleZh: '小弟弟和小姐姐',
    emoji: '🦌',
    level: 'B1',
    blurb: '兄妹逃離女巫繼母，弟弟誤飲魔泉變成小鹿，姐姐守護著他，歷經波折終得團圓。',
    source: grimmSource,
    segments: [
      {
        de: 'Brüderchen und Schwesterchen hatten es bei ihrer bösen Stiefmutter sehr schlecht und liefen zusammen fort.',
        zh: '小弟弟和小姐姐在惡毒的繼母身邊過得很苦，便一起逃走了。',
        en: 'Little brother and little sister fared very badly with their wicked stepmother and ran away together.',
      },
      {
        de: 'Im Wald wurden sie durstig, doch die Stiefmutter, eine Hexe, hatte alle Quellen verzaubert.',
        zh: '在森林裡他們口渴了，可身為女巫的繼母已對所有泉水下了咒。',
        en: 'In the forest they grew thirsty, but the stepmother, a witch, had bewitched all the springs.',
      },
      {
        de: 'Die erste Quelle rauschte: "Wer aus mir trinkt, wird ein Tiger."',
        zh: '第一道泉水低語：「喝我的人會變成老虎。」',
        en: 'The first spring murmured: "Whoever drinks of me becomes a tiger."',
      },
      {
        de: 'Schwesterchen hörte es und bat den Bruder, nicht zu trinken.',
        zh: '小姐姐聽見了，求弟弟別喝。',
        en: 'The sister heard it and begged her brother not to drink.',
      },
      {
        de: 'Die dritte Quelle aber flüsterte: "Wer aus mir trinkt, wird ein Reh", und der Durst war zu groß.',
        zh: '但第三道泉水低聲說：「喝我的人會變成小鹿」，而口渴實在太難忍。',
        en: 'But the third spring whispered: "Whoever drinks of me becomes a fawn," and the thirst was too great.',
      },
      {
        de: 'Der Bruder trank und wurde gleich in ein Reh verwandelt.',
        zh: '弟弟一喝，立刻變成了一隻小鹿。',
        en: 'The brother drank and was at once turned into a fawn.',
      },
      {
        de: 'Schwesterchen band ihm ihr goldenes Strumpfband um den Hals und führte es an einem Band.',
        zh: '小姐姐把她金色的襪帶繫在牠脖子上，牽著牠走。',
        en: 'The sister tied her golden garter around its neck and led it by a band.',
      },
      {
        de: 'Im tiefen Wald fanden sie ein leeres Häuschen und lebten lange friedlich beisammen.',
        zh: '在森林深處他們找到一間空屋，長久平靜地相依為命。',
        en: 'Deep in the forest they found an empty little house and long lived peacefully together.',
      },
      {
        de: 'Eines Tages jagte ein König im Wald, und das Reh wollte den Jägern folgen.',
        zh: '有一天國王在森林裡打獵，小鹿想跟著獵人去。',
        en: 'One day a king hunted in the forest, and the fawn wanted to follow the hunters.',
      },
      {
        de: 'So fand der König das schöne Schwesterchen, gewann es lieb und nahm es zur Frau.',
        zh: '國王因此找到了美麗的小姐姐，愛上了她，娶她為妻。',
        en: 'So the king found the beautiful sister, came to love her, and took her as his wife.',
      },
      {
        de: 'Auch das Reh durfte mit ins Schloss und blieb stets an ihrer Seite.',
        zh: '小鹿也得以一同進宮，始終陪在她身邊。',
        en: 'The fawn too was allowed into the castle and always stayed at her side.',
      },
      {
        de: 'Doch die alte Hexe erfuhr von dem Glück und sann auf Rache.',
        zh: '但老女巫得知了這份幸福，便圖謀報復。',
        en: 'But the old witch learned of their happiness and plotted revenge.',
      },
      {
        de: 'Als die junge Königin ein Kind bekommen hatte, brachte die Hexe sie heimlich um und schob ihre eigene Tochter unter.',
        zh: '年輕的王后生下孩子後，女巫暗中害死了她，把自己的女兒頂替上去。',
        en: 'When the young queen had borne a child, the witch secretly killed her and put her own daughter in her place.',
      },
      {
        de: 'Nachts aber kam die tote Königin still zurück, um ihr Kind zu wiegen und das Reh zu streicheln.',
        zh: '但夜裡死去的王后悄悄回來，搖著孩子、撫摸小鹿。',
        en: 'But at night the dead queen quietly returned to rock her child and stroke the fawn.',
      },
      {
        de: 'Der König wachte, sprach sie an, und im selben Augenblick wurde sie durch Gottes Gnade wieder lebendig.',
        zh: '國王守候著，向她說話，就在那一刻，藉著上帝的恩慈，她又活了過來。',
        en: 'The king kept watch, spoke to her, and at that moment, by God\'s grace, she came alive again.',
      },
      {
        de: 'Die Hexe und ihre Tochter wurden gestraft; das Reh erhielt seine Gestalt zurück, und alle lebten glücklich zusammen.',
        zh: '女巫和她的女兒受到了懲罰；小鹿恢復了人形，眾人從此幸福地生活在一起。',
        en: 'The witch and her daughter were punished; the fawn regained its human form, and all lived happily together.',
      },
    ],
  },
  {
    id: 'tapferes-schneiderlein',
    title: 'Das tapfere Schneiderlein',
    titleZh: '勇敢的小裁縫',
    emoji: '✂️',
    level: 'B1',
    blurb: '一巴掌打死七隻蒼蠅的小裁縫，靠著機智一路騙過巨人、降伏猛獸，當上了國王。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein kleines Schneiderlein nähte an seinem Tisch, als ihm Fliegen auf das Brot mit Mus flogen.',
        zh: '一個小裁縫坐在桌邊縫衣，這時蒼蠅飛到他塗了果醬的麵包上。',
        en: 'A little tailor sat sewing at his table when flies landed on his bread and jam.',
      },
      {
        de: 'Mit einem Schlag traf er sieben auf einmal.',
        zh: '他一巴掌打死了七隻。',
        en: 'With one blow he struck seven at once.',
      },
      {
        de: 'Stolz nähte er sich einen Gürtel mit den Worten: "Siebene auf einen Streich."',
        zh: '他得意地給自己縫了一條腰帶，上面寫著：「一下打死七個」。',
        en: 'Proudly he sewed himself a belt with the words: "Seven at one stroke."',
      },
      {
        de: 'Dann zog er hinaus in die Welt, denn die Werkstatt war ihm zu klein.',
        zh: '然後他出門闖蕩世界，因為作坊對他來說太小了。',
        en: 'Then he set out into the world, for the workshop was too small for him.',
      },
      {
        de: 'Im Wald traf er einen Riesen, der ihn für einen großen Helden hielt.',
        zh: '在森林裡他遇到一個巨人，巨人把他當成了大英雄。',
        en: 'In the forest he met a giant, who took him for a great hero.',
      },
      {
        de: 'Der Riese drückte Wasser aus einem Stein, das Schneiderlein aber drückte Saft aus einem Käse.',
        zh: '巨人從石頭裡擠出水，小裁縫卻從乳酪裡擠出汁來。',
        en: 'The giant squeezed water from a stone, but the tailor squeezed juice from a cheese.',
      },
      {
        de: 'Der Riese warf einen Stein hoch in die Luft, das Schneiderlein ließ heimlich einen Vogel fliegen, der nicht zurückkam.',
        zh: '巨人把石頭高高拋向空中，小裁縫卻偷偷放飛一隻鳥，鳥再也沒落下來。',
        en: 'The giant threw a stone high in the air; the tailor secretly let a bird fly that did not come back.',
      },
      {
        de: 'So glaubte der Riese, das Schneiderlein sei stärker als er.',
        zh: '巨人於是相信小裁縫比自己還強。',
        en: 'So the giant believed the tailor was stronger than himself.',
      },
      {
        de: 'Bald kam das Schneiderlein an den Hof eines Königs und trat in seinen Dienst.',
        zh: '不久小裁縫來到一位國王的宮廷，當了差。',
        en: 'Soon the tailor came to a king\'s court and entered his service.',
      },
      {
        de: 'Der König wollte ihn loswerden und befahl ihm, zwei gefährliche Riesen zu besiegen.',
        zh: '國王想擺脫他，便命他去打敗兩個危險的巨人。',
        en: 'The king wanted to be rid of him and ordered him to defeat two dangerous giants.',
      },
      {
        de: 'Das Schneiderlein warf Steine auf die schlafenden Riesen, bis sie sich aus Wut gegenseitig erschlugen.',
        zh: '小裁縫朝熟睡的巨人扔石頭，直到他們氣得自相殘殺。',
        en: 'The tailor threw stones at the sleeping giants until they angrily killed each other.',
      },
      {
        de: 'Dann fing es ein Einhorn, indem es hinter einen Baum sprang und das Horn im Stamm stecken blieb.',
        zh: '接著他捉住一頭獨角獸：他閃到樹後，獨角獸的角便插進了樹幹。',
        en: 'Then he caught a unicorn by leaping behind a tree, so its horn stuck fast in the trunk.',
      },
      {
        de: 'Auch ein wildes Schwein lockte es in eine Kapelle und sperrte es ein.',
        zh: '他還把一頭野豬引進一座小教堂，把牠關了起來。',
        en: 'He also lured a wild boar into a chapel and locked it in.',
      },
      {
        de: 'Zur Belohnung gab ihm der König seine Tochter und das halbe Königreich.',
        zh: '作為獎賞，國王把女兒和半個王國給了他。',
        en: 'As a reward the king gave him his daughter and half the kingdom.',
      },
      {
        de: 'Später merkte die Frau, dass er nur ein Schneider war, und fürchtete sich.',
        zh: '後來妻子發覺他只是個裁縫，便害怕起來。',
        en: 'Later his wife noticed he was only a tailor and grew afraid.',
      },
      {
        de: 'Doch das kluge Schneiderlein wusste sich zu helfen und blieb bis an sein Ende König.',
        zh: '但聰明的小裁縫自有辦法，當國王一直當到老。',
        en: 'But the clever little tailor knew how to help himself and stayed king to the end.',
      },
    ],
  },
  {
    id: 'fischer-und-seine-frau',
    title: 'Der Fischer und seine Frau',
    titleZh: '漁夫和他的妻子',
    emoji: '🐟',
    level: 'B1',
    blurb: '漁夫放走一條會說話的比目魚，貪心的妻子卻越要越多，最後一無所有。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein armer Fischer wohnte mit seiner Frau Ilsebill in einer elenden Hütte am Meer.',
        zh: '一個窮漁夫和妻子伊瑟比爾住在海邊一間破爛的小屋裡。',
        en: 'A poor fisherman lived with his wife Ilsebill in a wretched hut by the sea.',
      },
      {
        de: 'Eines Tages fing er einen großen Butt, der zu sprechen begann.',
        zh: '有一天他釣到一條大比目魚，那魚竟開口說話。',
        en: 'One day he caught a large flounder that began to speak.',
      },
      {
        de: '"Lass mich leben, ich bin ein verzauberter Prinz", bat der Fisch, und der Fischer ließ ihn frei.',
        zh: '「饒我一命吧，我是被施了魔法的王子。」魚懇求，漁夫便放了牠。',
        en: '"Let me live, I am an enchanted prince," begged the fish, and the fisherman set him free.',
      },
      {
        de: 'Als Ilsebill das hörte, sprach sie: "Geh zurück und wünsch dir ein kleines Häuschen."',
        zh: '伊瑟比爾聽說後說：「回去吧，求一棟小房子。」',
        en: 'When Ilsebill heard this, she said: "Go back and wish for a little cottage."',
      },
      {
        de: 'Der Fischer rief am Ufer: "Buttje, Buttje in der See, meine Frau will einen anderen Wunsch."',
        zh: '漁夫在岸邊喊：「比目魚啊比目魚，我妻子又有個願望。」',
        en: 'At the shore the fisherman called: "Flounder, flounder in the sea, my wife has another wish."',
      },
      {
        de: 'Der Butt erfüllte den Wunsch, und sie hatten ein hübsches Häuschen.',
        zh: '比目魚滿足了願望，他們有了一棟漂亮的小屋。',
        en: 'The flounder granted the wish, and they had a pretty little cottage.',
      },
      {
        de: 'Doch bald wollte Ilsebill ein großes steinernes Schloss.',
        zh: '但不久伊瑟比爾又想要一座宏大的石頭城堡。',
        en: 'But soon Ilsebill wanted a great stone castle.',
      },
      {
        de: 'Der Butt gab es ihr, doch das Meer wurde schon dunkler.',
        zh: '比目魚給了她，可大海已經變得暗沉了些。',
        en: 'The flounder gave it to her, but the sea was already growing darker.',
      },
      {
        de: '"Ich will König werden", verlangte sie, und sie wurde König.',
        zh: '「我要當國王。」她要求，於是她成了國王。',
        en: '"I want to become king," she demanded, and she became king.',
      },
      {
        de: '"Ich will Kaiser werden", und auch das geschah.',
        zh: '「我要當皇帝。」這也實現了。',
        en: '"I want to become emperor," and that happened too.',
      },
      {
        de: '"Ich will Papst werden", und sie saß bald als Papst auf einem Thron.',
        zh: '「我要當教宗。」不久她便以教宗之尊坐上了寶座。',
        en: '"I want to become pope," and soon she sat enthroned as pope.',
      },
      {
        de: 'Jedes Mal wurde das Meer schwärzer, und der Wind heulte stärker.',
        zh: '每一次大海都變得更黑，風吼得更猛。',
        en: 'Each time the sea grew blacker, and the wind howled more fiercely.',
      },
      {
        de: 'Doch Ilsebill war noch immer nicht zufrieden.',
        zh: '可伊瑟比爾還是不滿足。',
        en: 'But Ilsebill was still not satisfied.',
      },
      {
        de: '"Ich will werden wie der liebe Gott", schrie sie zuletzt.',
        zh: '「我要變得像上帝一樣。」她最後尖叫道。',
        en: '"I want to become like dear God," she screamed at last.',
      },
      {
        de: 'Da brach ein gewaltiger Sturm los, und der Butt sprach: "Geh nur heim, sie sitzt wieder in der alten Hütte."',
        zh: '這時一場狂風暴雨爆發了，比目魚說：「回去吧，她又坐回那破舊的小屋裡了。」',
        en: 'Then a mighty storm broke loose, and the flounder said: "Just go home, she is sitting again in the old hut."',
      },
      {
        de: 'Und dort sitzen der Fischer und Ilsebill noch heute.',
        zh: '漁夫和伊瑟比爾至今還坐在那裡。',
        en: 'And there the fisherman and Ilsebill are sitting to this very day.',
      },
    ],
  },
  {
    id: 'tischlein-deck-dich',
    title: 'Tischlein deck dich',
    titleZh: '神奇的小桌子',
    emoji: '🍽️',
    level: 'B1',
    blurb: '三兄弟各得一件寶物——會擺菜的桌子、會吐金子的驢、會打人的棍子，鬥垮了奸詐的店主。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein Schneider hatte drei Söhne und eine einzige Ziege, die alle ernähren sollte.',
        zh: '一個裁縫有三個兒子和一隻山羊，全家都靠這隻羊。',
        en: 'A tailor had three sons and a single goat that was to feed them all.',
      },
      {
        de: 'Jeden Tag fragte der Vater die Ziege, ob sie satt sei, und sie log jedes Mal.',
        zh: '父親每天問山羊吃飽了沒，山羊每次都撒謊。',
        en: 'Each day the father asked the goat if it was full, and each time it lied.',
      },
      {
        de: 'Im Zorn jagte der Schneider erst seine Söhne und dann die undankbare Ziege fort.',
        zh: '一氣之下，裁縫先趕走了兒子，後又趕走了忘恩負義的山羊。',
        en: 'In anger the tailor drove out first his sons and then the ungrateful goat.',
      },
      {
        de: 'Die drei Söhne aber lernten in der Fremde jeder ein Handwerk.',
        zh: '三個兒子卻在外鄉各自學了一門手藝。',
        en: 'But the three sons each learned a trade in foreign parts.',
      },
      {
        de: 'Der älteste bekam ein Tischlein; sagte man "Tischlein deck dich", war es voll der besten Speisen.',
        zh: '大兒子得到一張小桌子；只要說「小桌子，擺好吧」，桌上就擺滿最好的菜餚。',
        en: 'The eldest got a little table; if you said "Table, set yourself," it filled with the finest food.',
      },
      {
        de: 'Der zweite bekam einen Esel; sagte man "Bricklebrit", spie er Gold aus dem Maul.',
        zh: '二兒子得到一頭驢；只要說「布里克布里特」，牠就從嘴裡吐出金子。',
        en: 'The second got a donkey; if you said "Bricklebrit," it spat gold from its mouth.',
      },
      {
        de: 'Der dritte bekam einen Knüppel in einem Sack, der auf Befehl jeden verprügelte.',
        zh: '三兒子得到一根裝在袋裡的棍子，一聲令下就會把人痛打一頓。',
        en: 'The third got a cudgel in a sack that, on command, thrashed anyone.',
      },
      {
        de: 'Der älteste wollte heim und kehrte unterwegs in einem Wirtshaus ein.',
        zh: '大兒子想回家，途中在一家客棧投宿。',
        en: 'The eldest wanted to go home and stopped at an inn on the way.',
      },
      {
        de: 'Der neugierige Wirt vertauschte heimlich das Zaubertischlein gegen ein gewöhnliches.',
        zh: '好奇的店主偷偷把魔法小桌子換成一張普通的。',
        en: 'The curious innkeeper secretly swapped the magic table for an ordinary one.',
      },
      {
        de: 'So stand der Sohn vor dem Vater mit einem Tisch, der nichts mehr hergab.',
        zh: '於是兒子在父親面前，桌子卻什麼也變不出來。',
        en: 'So the son stood before his father with a table that gave nothing.',
      },
      {
        de: 'Auch dem zweiten Sohn stahl der Wirt auf dieselbe Weise den goldenen Esel.',
        zh: '二兒子的金驢也被店主用同樣的手法偷走。',
        en: 'The innkeeper stole the golden donkey from the second son in the same way.',
      },
      {
        de: 'Der dritte Sohn aber kannte den Dieb und stellte sich schlafend.',
        zh: '但三兒子知道誰是賊，便假裝睡著。',
        en: 'But the third son knew the thief and pretended to be asleep.',
      },
      {
        de: 'Als der Wirt nach dem Sack griff, rief der Sohn: "Knüppel aus dem Sack!"',
        zh: '當店主去抓那袋子時，兒子喊：「棍子，出袋來！」',
        en: 'As the innkeeper reached for the sack, the son cried: "Cudgel out of the sack!"',
      },
      {
        de: 'Der Knüppel sprang heraus und prügelte den Wirt, bis er Tisch und Esel zurückgab.',
        zh: '棍子跳出來痛打店主，直到他把桌子和驢都還回來。',
        en: 'The cudgel sprang out and beat the innkeeper until he gave back the table and the donkey.',
      },
      {
        de: 'So brachte der jüngste Sohn alle Zaubergaben heim, und der Schneider lebte mit seinen Söhnen reich und zufrieden.',
        zh: '於是小兒子把所有寶物都帶回了家，裁縫和兒子們從此富足又滿足地生活在一起。',
        en: 'So the youngest son brought all the magic gifts home, and the tailor lived rich and content with his sons.',
      },
    ],
  },
  {
    id: 'wichtelmaenner',
    title: 'Die Wichtelmänner',
    titleZh: '鞋匠與小精靈',
    emoji: '🥿',
    level: 'A2',
    blurb: '窮鞋匠夜裡得到小精靈的幫忙，做出一雙雙好鞋；夫妻倆用一份小禮物回報了牠們。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein armer Schuster hatte nur noch Leder für ein einziges Paar Schuhe.',
        zh: '一個窮鞋匠只剩下夠做一雙鞋的皮革。',
        en: 'A poor shoemaker had only enough leather left for a single pair of shoes.',
      },
      {
        de: 'Am Abend schnitt er das Leder zu und ging schlafen.',
        zh: '傍晚他把皮革裁好，就去睡了。',
        en: 'In the evening he cut out the leather and went to sleep.',
      },
      {
        de: 'Am Morgen standen die Schuhe fertig und wunderschön auf dem Tisch.',
        zh: '早上桌上擺著一雙做好的、漂亮極了的鞋。',
        en: 'In the morning the shoes stood finished and beautiful on the table.',
      },
      {
        de: 'Ein Käufer zahlte gut, und der Schuster konnte Leder für zwei Paare kaufen.',
        zh: '一個買家付了好價錢，鞋匠便能買到做兩雙鞋的皮革。',
        en: 'A buyer paid well, and the shoemaker could buy leather for two pairs.',
      },
      {
        de: 'Auch diese Schuhe waren am Morgen fertig, und so ging es Nacht für Nacht.',
        zh: '這些鞋也在早上做好了，夜夜如此。',
        en: 'These shoes too were finished by morning, and so it went night after night.',
      },
      {
        de: 'Bald war der Schuster ein wohlhabender Mann.',
        zh: '不久鞋匠就成了富裕的人。',
        en: 'Soon the shoemaker was a well-to-do man.',
      },
      {
        de: 'Einmal wollten er und seine Frau sehen, wer ihnen half, und blieben heimlich wach.',
        zh: '有一次他和妻子想看看是誰在幫他們，便偷偷熬夜守著。',
        en: 'Once he and his wife wanted to see who helped them and secretly stayed awake.',
      },
      {
        de: 'Um Mitternacht kamen zwei kleine, nackte Männlein und nähten flink die Schuhe.',
        zh: '半夜時來了兩個赤裸的小精靈，手腳俐落地縫起鞋來。',
        en: 'At midnight two little naked men came and nimbly sewed the shoes.',
      },
      {
        de: 'Aus Dankbarkeit nähte die Frau ihnen winzige Kleider, und der Mann machte kleine Schuhe.',
        zh: '出於感激，妻子給他們縫了小小的衣服，丈夫做了小小的鞋。',
        en: 'Out of gratitude the wife sewed them tiny clothes, and the man made little shoes.',
      },
      {
        de: 'In der Nacht fanden die Wichtelmänner die Geschenke und zogen sich voller Freude an.',
        zh: '夜裡小精靈發現了禮物，高高興興地穿了起來。',
        en: 'In the night the elves found the gifts and joyfully put them on.',
      },
      {
        de: 'Sie tanzten und sprangen vor Glück und liefen zur Tür hinaus.',
        zh: '他們又跳又蹦，高興得跑出了門。',
        en: 'They danced and leapt for joy and ran out the door.',
      },
      {
        de: 'Sie kamen nie wieder, doch dem Schuster ging es sein Leben lang gut.',
        zh: '他們再也沒回來，但鞋匠這一輩子都過得很好。',
        en: 'They never came again, but the shoemaker fared well all his life.',
      },
    ],
  },
  {
    id: 'schneeweisschen-rosenrot',
    title: 'Schneeweißchen und Rosenrot',
    titleZh: '白雪與紅玫瑰',
    emoji: '🐻',
    level: 'B1',
    blurb: '善良的姊妹倆收留一隻大熊，又屢次救助忘恩的矮人，最後迎來意想不到的結局。',
    source: grimmSource,
    segments: [
      {
        de: 'Eine arme Witwe hatte zwei Töchter, die hießen Schneeweißchen und Rosenrot.',
        zh: '一個貧窮的寡婦有兩個女兒，名叫白雪和紅玫瑰。',
        en: 'A poor widow had two daughters called Snow-white and Rose-red.',
      },
      {
        de: 'Die beiden waren so gut und fleißig wie die zwei Rosenbäumchen vor dem Haus.',
        zh: '姊妹倆善良又勤勞，就像屋前的兩棵小玫瑰樹。',
        en: 'The two were as good and industrious as the two little rose trees in front of the house.',
      },
      {
        de: 'An einem Winterabend klopfte ein großer Bär an die Tür und bat um Wärme.',
        zh: '一個冬夜，一隻大熊來敲門，求個暖和的地方。',
        en: 'On a winter evening a great bear knocked at the door and asked for warmth.',
      },
      {
        de: 'Die Familie fürchtete sich zuerst, doch der Bär war sanft und freundlich.',
        zh: '一家人起初害怕，但這隻熊溫和又友善。',
        en: 'The family was afraid at first, but the bear was gentle and kind.',
      },
      {
        de: 'Den ganzen Winter spielten die Kinder mit ihm, im Frühling aber musste er fort.',
        zh: '整個冬天孩子們都和牠玩，可一到春天牠就得走了。',
        en: 'All winter the children played with him, but in spring he had to leave.',
      },
      {
        de: '"Ich muss meinen Schatz vor den bösen Zwergen hüten", sagte der Bär.',
        zh: '「我得守護我的寶藏，不讓壞矮人偷走。」熊說。',
        en: '"I must guard my treasure from the wicked dwarfs," said the bear.',
      },
      {
        de: 'Im Wald trafen die Mädchen oft einen Zwerg, dessen Bart immer irgendwo festsaß.',
        zh: '在森林裡，姊妹倆常遇到一個矮人，他的鬍子老是卡在什麼地方。',
        en: 'In the forest the girls often met a dwarf whose beard was always caught somewhere.',
      },
      {
        de: 'Einmal klemmte er im Baum, einmal an der Angel, einmal packte ihn ein Adler.',
        zh: '一次卡在樹裡，一次卡在魚線上，一次還被老鷹抓住。',
        en: 'Once it was stuck in a tree, once on a fishing line, once an eagle seized him.',
      },
      {
        de: 'Jedes Mal schnitten die Mädchen ein Stück vom Bart ab und befreiten ihn.',
        zh: '每一次姊妹倆都剪掉一截鬍子，把他救出來。',
        en: 'Each time the girls cut off a piece of his beard and freed him.',
      },
      {
        de: 'Doch statt zu danken, schimpfte der undankbare Zwerg jedes Mal.',
        zh: '但那忘恩負義的矮人非但不謝，每次還破口大罵。',
        en: 'But instead of thanking them, the ungrateful dwarf scolded them each time.',
      },
      {
        de: 'Eines Tages saß er bei seinen funkelnden Edelsteinen, als der Bär herbeikam.',
        zh: '有一天他正守著閃亮的寶石，大熊走了過來。',
        en: 'One day he sat by his sparkling jewels when the bear came up.',
      },
      {
        de: 'Der Zwerg flehte um sein Leben, doch der Bär schlug ihn mit einer Tatze nieder.',
        zh: '矮人苦苦哀求饒命，熊卻一掌把他打倒。',
        en: 'The dwarf begged for his life, but the bear struck him down with a paw.',
      },
      {
        de: 'Im selben Augenblick fiel das Bärenfell ab, und ein schöner Königssohn stand da.',
        zh: '就在那一刻，熊皮落了下來，站著一位英俊的王子。',
        en: 'At that moment the bearskin fell away, and a handsome prince stood there.',
      },
      {
        de: 'Der Zwerg hatte ihn verzaubert und seinen Schatz gestohlen; nun war der Bann gebrochen.',
        zh: '原來那矮人施咒害了他，還偷走他的寶藏；如今魔咒解除了。',
        en: 'The dwarf had bewitched him and stolen his treasure; now the spell was broken.',
      },
      {
        de: 'Schneeweißchen heiratete den Königssohn und Rosenrot seinen Bruder, und alle lebten glücklich.',
        zh: '白雪嫁給了王子，紅玫瑰嫁給了他的弟弟，大家都幸福地生活著。',
        en: 'Snow-white married the prince and Rose-red his brother, and all lived happily.',
      },
    ],
  },
  {
    id: 'kluge-else',
    title: 'Die kluge Else',
    titleZh: '聰明的愛爾莎',
    emoji: '🤔',
    level: 'A2',
    blurb: '「聰明的」愛爾莎凡事想得太遠，為一件還沒發生的事大哭，鬧出一連串荒唐笑話。',
    source: grimmSource,
    segments: [
      {
        de: 'Es war ein Mädchen, das hieß die kluge Else, weil es über alles weit voraus dachte.',
        zh: '有個女孩叫聰明的愛爾莎，因為她凡事都想得太遠。',
        en: 'There was a girl called Clever Else, because she thought far ahead about everything.',
      },
      {
        de: 'Ein Mann namens Hans wollte sie heiraten, wenn sie wirklich so klug wäre.',
        zh: '一個叫漢斯的人說，只要她真有那麼聰明，他就娶她。',
        en: 'A man named Hans wanted to marry her, if she really was so clever.',
      },
      {
        de: 'Beim Essen schickte man Else in den Keller, um Bier zu holen.',
        zh: '吃飯時，家人打發愛爾莎到地窖取啤酒。',
        en: 'At dinner Else was sent to the cellar to fetch beer.',
      },
      {
        de: 'Dort sah sie eine Kreuzhacke über sich an der Wand hängen.',
        zh: '她在那裡看見頭頂的牆上掛著一把十字鎬。',
        en: 'There she saw a pickaxe hanging on the wall above her.',
      },
      {
        de: 'Sie dachte: "Wenn ich Hans heirate und wir ein Kind bekommen, und es kommt hierher, fällt die Hacke herab und schlägt es tot."',
        zh: '她想：「要是我嫁給漢斯、生了孩子，孩子來到這裡，這鎬掉下來就會把他砸死。」',
        en: 'She thought: "If I marry Hans and we have a child, and it comes here, the axe will fall and strike it dead."',
      },
      {
        de: 'Da setzte sie sich hin und weinte über das Unglück, das noch gar nicht geschehen war.',
        zh: '於是她坐下來，為一件根本還沒發生的不幸大哭起來。',
        en: 'So she sat down and wept over a misfortune that had not even happened.',
      },
      {
        de: 'Weil sie nicht zurückkam, ging einer nach dem anderen hinab – und alle weinten mit.',
        zh: '因為她久久不回來，家人一個接一個下去——結果全都跟著哭。',
        en: 'Because she did not come back, one after another went down – and all wept with her.',
      },
      {
        de: 'Zuletzt kam Hans selbst, hörte den Grund und fand Else so klug, dass er sie heiratete.',
        zh: '最後漢斯親自下去，聽了原由，覺得愛爾莎真聰明，便娶了她。',
        en: 'At last Hans himself came down, heard the reason, found Else so clever that he married her.',
      },
      {
        de: 'Einmal sollte Else allein das Korn auf dem Feld schneiden.',
        zh: '有一次愛爾莎得一個人去田裡割麥。',
        en: 'Once Else was to reap the corn in the field alone.',
      },
      {
        de: 'Doch sie wurde müde, legte sich hin und schlief mitten am Tag ein.',
        zh: '可她累了，躺下來，大白天就睡著了。',
        en: 'But she grew tired, lay down and fell asleep in the middle of the day.',
      },
      {
        de: 'Hans band ihr im Scherz ein Netz mit Glöckchen um und ging heim.',
        zh: '漢斯開玩笑地給她繫上一張掛著小鈴鐺的網，就回家了。',
        en: 'As a joke Hans tied a net with little bells around her and went home.',
      },
      {
        de: 'Als sie erwachte und es überall klingelte, fragte sie verwirrt: "Bin ich es, oder bin ich es nicht?"',
        zh: '她醒來時周身叮噹作響，便糊塗地問：「這是我，還是不是我？」',
        en: 'When she awoke and everything jingled, she asked in confusion: "Is it I, or is it not I?"',
      },
      {
        de: 'Sie lief zum Haus, fragte durchs Fenster nach sich selbst, und als man Ja sagte, rannte sie fort und kam nie wieder.',
        zh: '她跑到屋前，隔著窗戶問自己在不在，聽到回答「在」，便一路跑走，再也沒回來。',
        en: 'She ran to the house, asked through the window after herself, and when they said yes, she ran off and never came back.',
      },
    ],
  },
  {
    id: 'daumesdick',
    title: 'Daumesdick',
    titleZh: '大拇指',
    emoji: '👍',
    level: 'A2',
    blurb: '只有大拇指般大的小男孩，被牛吞、被狼吃，靠機智一次次脫險，回到父母身邊。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein armes Bauernpaar wünschte sich ein Kind, und wäre es auch nur so groß wie ein Daumen.',
        zh: '一對貧窮的農夫夫妻盼望一個孩子，哪怕只有大拇指那麼大也好。',
        en: 'A poor peasant couple wished for a child, even if it were only as big as a thumb.',
      },
      {
        de: 'Bald kam ein winziger Junge zur Welt, den sie Daumesdick nannten.',
        zh: '不久一個小不點男孩出生了，他們叫他大拇指。',
        en: 'Soon a tiny boy was born, whom they named Thumbling.',
      },
      {
        de: 'Er blieb klein, war aber klug und half dem Vater, wo er konnte.',
        zh: '他一直長不大，卻很聰明，總在能幫忙的地方幫父親。',
        en: 'He stayed small but was clever and helped his father wherever he could.',
      },
      {
        de: 'Im Ohr des Pferdes sitzend, lenkte er den Wagen durch Zurufe.',
        zh: '他坐在馬耳朵裡，用吆喝聲駕著車。',
        en: 'Sitting in the horse\'s ear, he steered the cart by calling out.',
      },
      {
        de: 'Zwei fremde Männer sahen das Wunder und wollten Daumesdick kaufen.',
        zh: '兩個陌生男人看見這奇事，想把大拇指買下來。',
        en: 'Two strangers saw the wonder and wanted to buy Thumbling.',
      },
      {
        de: 'Er ließ sich mitnehmen, entwischte ihnen aber bald und versteckte sich in einem Mauseloch.',
        zh: '他任由他們帶走，卻很快溜掉，躲進了一個老鼠洞。',
        en: 'He let himself be taken but soon slipped away and hid in a mouse-hole.',
      },
      {
        de: 'Müde kroch er in ein leeres Schneckenhaus und schlief darin.',
        zh: '累了，他鑽進一個空蝸牛殼，在裡面睡著了。',
        en: 'Tired, he crept into an empty snail shell and slept in it.',
      },
      {
        de: 'Beim Fressen von Heu verschluckte ihn eine Kuh mitsamt dem Gras.',
        zh: '一頭牛吃乾草時，把他連草一起吞了下去。',
        en: 'While eating hay, a cow swallowed him along with the grass.',
      },
      {
        de: 'Aus dem Bauch der Kuh rief er so laut, dass man die Kuh schlachtete.',
        zh: '他在牛肚子裡大喊大叫，叫得人們把牛宰了。',
        en: 'From the cow\'s belly he called so loudly that the cow was slaughtered.',
      },
      {
        de: 'Doch im Magen lag er noch, und ein Wolf verschlang ihn mit den Resten.',
        zh: '可他還在牛胃裡，一隻狼把他連同剩餘的東西一起吞了。',
        en: 'But he still lay in the stomach, and a wolf devoured him with the remains.',
      },
      {
        de: 'Da rief Daumesdick: "Wolf, ich weiß ein Haus voll Speck und Würste!"',
        zh: '大拇指便喊：「狼啊，我知道有間屋子裝滿了培根和香腸！」',
        en: 'Then Thumbling cried: "Wolf, I know a house full of bacon and sausages!"',
      },
      {
        de: 'Er führte den Wolf zur Speisekammer seiner Eltern, wo der Wolf sich überfraß.',
        zh: '他把狼領到父母的食品儲藏室，狼在那裡撐得吃不下了。',
        en: 'He led the wolf to his parents\' pantry, where the wolf gorged itself.',
      },
      {
        de: 'So dick gefressen, kam der Wolf nicht mehr durch das Loch hinaus.',
        zh: '吃得太撐，狼再也鑽不出那個洞了。',
        en: 'So bloated, the wolf could no longer get out through the hole.',
      },
      {
        de: 'Daumesdick schrie, der Vater erschlug den Wolf, und froh hielten die Eltern ihr Söhnchen wieder im Arm.',
        zh: '大拇指大喊，父親打死了狼，父母歡喜地把小兒子重新抱在懷裡。',
        en: 'Thumbling shouted, the father killed the wolf, and joyfully the parents held their little son in their arms again.',
      },
    ],
  },
  {
    id: 'goldene-vogel',
    title: 'Der goldene Vogel',
    titleZh: '金鳥',
    emoji: '🐤',
    level: 'B1',
    blurb: '為了尋找偷金蘋果的金鳥，最小的王子在一隻聰明狐狸的幫助下，闖過重重難關。',
    source: grimmSource,
    segments: [
      {
        de: 'In einem Garten wuchs ein Baum mit goldenen Äpfeln, doch jede Nacht verschwand einer.',
        zh: '一座花園裡有棵長金蘋果的樹，可每晚都會少一顆。',
        en: 'In a garden grew a tree with golden apples, but every night one disappeared.',
      },
      {
        de: 'Der jüngste Königssohn wachte und sah, dass ein goldener Vogel die Äpfel stahl.',
        zh: '最小的王子守夜，看見是一隻金鳥偷走了蘋果。',
        en: 'The youngest prince kept watch and saw that a golden bird stole the apples.',
      },
      {
        de: 'Die drei Söhne zogen aus, den wunderbaren Vogel zu suchen.',
        zh: '三個兒子動身去尋找那神奇的鳥。',
        en: 'The three sons set out to find the wonderful bird.',
      },
      {
        de: 'Unterwegs gab ein Fuchs jedem den Rat, in das ärmliche Wirtshaus einzukehren.',
        zh: '途中一隻狐狸勸每個人都去投宿那家簡陋的客棧。',
        en: 'On the way a fox advised each to stop at the humble inn.',
      },
      {
        de: 'Die älteren Brüder lachten, wählten das lustige Wirtshaus und vergaßen ihre Aufgabe.',
        zh: '哥哥們嘲笑這話，挑了那家熱鬧的客棧，把任務忘得一乾二淨。',
        en: 'The elder brothers laughed, chose the merry inn and forgot their task.',
      },
      {
        de: 'Nur der jüngste folgte dem Fuchs und kam so zum Schloss des goldenen Vogels.',
        zh: '只有最小的聽了狐狸的話，因而來到金鳥所在的城堡。',
        en: 'Only the youngest followed the fox and so came to the castle of the golden bird.',
      },
      {
        de: '"Nimm den Vogel, aber lass den goldenen Käfig stehen", warnte der Fuchs.',
        zh: '「拿走鳥，但別碰那金籠子。」狐狸叮囑。',
        en: '"Take the bird, but leave the golden cage," warned the fox.',
      },
      {
        de: 'Der Sohn griff doch nach dem Käfig, und sogleich wurde er gefangen.',
        zh: '兒子卻還是去拿籠子，立刻就被抓住了。',
        en: 'But the son reached for the cage and was caught at once.',
      },
      {
        de: 'Zur Strafe sollte er erst das goldene Pferd holen.',
        zh: '作為懲罰，他得先去取那匹金馬。',
        en: 'As punishment he was first to fetch the golden horse.',
      },
      {
        de: 'Wieder vergaß er den Rat des Fuchses, nahm den goldenen Sattel und wurde erneut gefangen.',
        zh: '他又忘了狐狸的勸告，拿了金馬鞍，再次被擒。',
        en: 'Again he forgot the fox\'s advice, took the golden saddle and was caught again.',
      },
      {
        de: 'Nun musste er die schöne Prinzessin aus dem goldenen Schloss holen.',
        zh: '這下他得去把美麗的公主從金色城堡裡帶出來。',
        en: 'Now he had to fetch the beautiful princess from the golden castle.',
      },
      {
        de: 'Mit Hilfe des klugen Fuchses gelang am Ende alles, und er bekam Prinzessin, Pferd und Vogel.',
        zh: '在聰明狐狸的幫助下，最後一切都成了，他得到了公主、馬和金鳥。',
        en: 'With the clever fox\'s help everything succeeded in the end, and he won princess, horse and bird.',
      },
      {
        de: 'Doch seine neidischen Brüder fanden ihn, warfen ihn in einen Brunnen und nahmen alles.',
        zh: '可他妒忌的哥哥們找到了他，把他扔進井裡，奪走了一切。',
        en: 'But his envious brothers found him, threw him into a well and took everything.',
      },
      {
        de: 'Der treue Fuchs aber half ihm wieder heraus, und die Wahrheit kam ans Licht.',
        zh: '忠心的狐狸又把他救了上來，真相也大白於天下。',
        en: 'But the faithful fox helped him out again, and the truth came to light.',
      },
      {
        de: 'Die falschen Brüder wurden gestraft, der jüngste Sohn heiratete die Prinzessin und erlöste zuletzt auch den Fuchs.',
        zh: '奸詐的哥哥們受到懲罰，小兒子娶了公主，最後也解救了那隻狐狸。',
        en: 'The false brothers were punished, the youngest son married the princess and at last freed the fox too.',
      },
    ],
  },
  {
    id: 'sechse-durch-die-welt',
    title: 'Sechse kommen durch die ganze Welt',
    titleZh: '六個好漢走遍天下',
    emoji: '💪',
    level: 'B1',
    blurb: '一個被虧待的士兵，召集六個各有奇能的夥伴，靠著本領向吝嗇的國王討回公道。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein Soldat wurde nach dem Krieg ohne Lohn entlassen und beschloss, sich zu rächen.',
        zh: '一個士兵戰後沒拿到報酬就被遣散，決心要討回公道。',
        en: 'A soldier was discharged after the war without pay and resolved to get even.',
      },
      {
        de: 'Unterwegs sammelte er sechs Gefährten mit ganz besonderen Gaben.',
        zh: '途中他召集了六個各有奇特本領的夥伴。',
        en: 'On the way he gathered six companions with quite special gifts.',
      },
      {
        de: 'Der eine war so stark, dass er Bäume wie Halme ausriss.',
        zh: '一個力大無窮，能像拔草一樣拔起大樹。',
        en: 'One was so strong he pulled up trees like blades of grass.',
      },
      {
        de: 'Der zweite traf mit seiner Büchse jedes Ziel in weiter Ferne.',
        zh: '第二個用他的火槍，再遠的目標都能命中。',
        en: 'The second hit any target far away with his gun.',
      },
      {
        de: 'Der dritte konnte durch sein Blasen Windmühlen in der Ferne drehen.',
        zh: '第三個一吹氣，就能讓遠處的風車轉動。',
        en: 'The third could turn windmills in the distance by blowing.',
      },
      {
        de: 'Der vierte lief so schnell, dass er dafür ein Bein abschnallen musste.',
        zh: '第四個跑得飛快，跑時還得卸下一條腿。',
        en: 'The fourth ran so fast that he had to unbuckle one leg for it.',
      },
      {
        de: 'Der fünfte ließ es frieren, wenn er sein Hütchen gerade rückte.',
        zh: '第五個只要把小帽子擺正，天就會結冰。',
        en: 'The fifth made it freeze when he set his little hat straight.',
      },
      {
        de: 'So kamen sie zu einem König, dessen Tochter im Wettlauf jeden Freier besiegte.',
        zh: '他們就這樣來到一位國王那裡，他的女兒賽跑能勝過每個求婚者。',
        en: 'So they came to a king whose daughter beat every suitor in a race.',
      },
      {
        de: 'Der schnelle Läufer trat für die Gefährten an und war bald weit voraus.',
        zh: '飛毛腿替夥伴們出賽，很快就遙遙領先。',
        en: 'The swift runner ran for the companions and was soon far ahead.',
      },
      {
        de: 'Unterwegs legte er sich aber zum Schlafen hin und verlor fast das Rennen.',
        zh: '可他半路躺下睡著了，差點輸掉比賽。',
        en: 'But on the way he lay down to sleep and nearly lost the race.',
      },
      {
        de: 'Da schoss der Jäger das Kissen unter seinem Kopf weg und weckte ihn rechtzeitig.',
        zh: '這時獵人一槍打掉他枕著的枕頭，及時把他喚醒。',
        en: 'Then the huntsman shot away the pillow under his head and woke him in time.',
      },
      {
        de: 'Der zornige König wollte sie in einer eisernen Stube verbrennen.',
        zh: '惱怒的國王想把他們關進鐵屋裡燒死。',
        en: 'The angry king wanted to burn them in an iron room.',
      },
      {
        de: 'Doch der Mann mit dem Hütchen ließ es frieren, und ihnen geschah nichts.',
        zh: '但戴小帽的人讓屋裡結了冰，他們毫髮無傷。',
        en: 'But the man with the little hat made it freeze, and nothing happened to them.',
      },
      {
        de: 'Zuletzt trug der Starke das ganze Gold des Königs davon, und die sechs zogen reich nach Hause.',
        zh: '最後大力士把國王所有的金子都搬走了，六個好漢富足地回了家。',
        en: 'At last the strong man carried off all the king\'s gold, and the six went home rich.',
      },
    ],
  },
  {
    id: 'katze-und-maus',
    title: 'Katze und Maus in Gesellschaft',
    titleZh: '貓和老鼠做朋友',
    emoji: '🐱',
    level: 'A2',
    blurb: '貓和老鼠合存了一罐過冬的油，貓卻偷偷吃光，還編出三個謊言來掩飾。',
    source: grimmSource,
    segments: [
      {
        de: 'Eine Katze und eine Maus wollten zusammen leben und beschlossen, Freunde zu sein.',
        zh: '一隻貓和一隻老鼠想住在一起，決定做朋友。',
        en: 'A cat and a mouse wanted to live together and decided to be friends.',
      },
      {
        de: 'Für den Winter kauften sie ein Töpfchen Fett und versteckten es unter dem Altar in der Kirche.',
        zh: '為了過冬，牠們買了一小罐油脂，藏在教堂的祭壇下。',
        en: 'For the winter they bought a little pot of fat and hid it under the altar in the church.',
      },
      {
        de: 'Bald aber bekam die Katze großen Appetit auf das Fett.',
        zh: '但不久貓就很想吃那油脂了。',
        en: 'But soon the cat got a great craving for the fat.',
      },
      {
        de: '"Ich bin zu einer Taufe eingeladen", log sie und schlich heimlich in die Kirche.',
        zh: '「我受邀去參加一個洗禮。」牠撒謊，偷偷溜進教堂。',
        en: '"I am invited to a christening," she lied and secretly slipped into the church.',
      },
      {
        de: 'Dort fraß sie die oberste Schicht des Fettes ab.',
        zh: '牠在那裡把最上面一層油脂舔吃掉了。',
        en: 'There she ate off the top layer of the fat.',
      },
      {
        de: 'Auf die Frage nach dem Namen des Kindes sagte sie: "Hautab."',
        zh: '老鼠問孩子叫什麼名字，牠說：「去皮。」',
        en: 'Asked the child\'s name, she said: "Skin-off."',
      },
      {
        de: 'Ein zweites Mal log sie wieder und fraß bis zur Hälfte; das Kind hieß angeblich "Halbaus".',
        zh: '第二次牠又撒謊，把油脂吃到一半；那孩子據說叫「半光」。',
        en: 'A second time she lied again and ate down to the half; the child was supposedly called "Half-gone."',
      },
      {
        de: 'Beim dritten Mal leerte sie das Töpfchen ganz; dieses Kind hieß "Ganzaus".',
        zh: '第三次牠把整罐都吃光了；這孩子叫「全光」。',
        en: 'The third time she emptied the pot completely; this child was called "All-gone."',
      },
      {
        de: 'Als der Winter kam, wollten beide zu ihrem Vorrat.',
        zh: '冬天來了，兩個都想取出儲糧。',
        en: 'When winter came, both wanted to go to their store.',
      },
      {
        de: 'Doch das Töpfchen war leer, und die Maus begriff endlich den Betrug.',
        zh: '可罐子是空的，老鼠終於明白上了當。',
        en: 'But the pot was empty, and the mouse finally understood the deceit.',
      },
      {
        de: 'Kaum hatte sie es ausgesprochen, da sprang die Katze auf sie zu und fraß sie.',
        zh: '牠話一說出口，貓就撲上去把牠吃了。',
        en: 'Hardly had she said it when the cat sprang at her and ate her up.',
      },
      {
        de: '"Siehst du", schließt das Märchen, "so geht es in der Welt."',
        zh: '「你看，」故事這樣作結，「世道就是如此。」',
        en: '"You see," the tale concludes, "that is the way of the world."',
      },
    ],
  },
  {
    id: 'teufel-drei-goldene-haare',
    title: 'Der Teufel mit den drei goldenen Haaren',
    titleZh: '魔鬼的三根金髮',
    emoji: '😈',
    level: 'B1',
    blurb: '一個帶著「幸運胎膜」出生的男孩，注定娶到公主，還得從魔鬼頭上取下三根金髮。',
    source: grimmSource,
    segments: [
      {
        de: 'Einem armen Paar wurde ein Sohn mit einer Glückshaut geboren; man weissagte, er werde mit vierzehn die Königstochter heiraten.',
        zh: '一對窮夫妻生了個帶著「幸運胎膜」的兒子；有人預言他十四歲時會娶到公主。',
        en: 'A poor couple had a son born with a caul; it was foretold he would marry the king\'s daughter at fourteen.',
      },
      {
        de: 'Der habgierige König kaufte das Kind, steckte es in eine Schachtel und warf es ins Wasser.',
        zh: '貪心的國王買下這孩子，把他裝進一個盒子，扔進了水裡。',
        en: 'The greedy king bought the child, put it in a box and threw it into the water.',
      },
      {
        de: 'Doch das Kind ertrank nicht; ein Müller fand es und zog es auf.',
        zh: '但孩子沒淹死；一個磨坊主發現了他，把他養大。',
        en: 'But the child did not drown; a miller found it and raised it.',
      },
      {
        de: 'Jahre später erkannte der König den Jungen und schickte ihn mit einem Brief zur Königin.',
        zh: '多年後國王認出了這男孩，叫他帶一封信去交給王后。',
        en: 'Years later the king recognized the boy and sent him with a letter to the queen.',
      },
      {
        de: 'In dem Brief stand, man solle den Boten sofort töten.',
        zh: '信上寫著：要立刻殺掉送信的人。',
        en: 'The letter said the messenger was to be killed at once.',
      },
      {
        de: 'Unterwegs übernachtete der Junge bei Räubern, die den Brief heimlich austauschten.',
        zh: '途中男孩在強盜窩過夜，強盜偷偷把信換了。',
        en: 'On the way the boy spent the night with robbers, who secretly swapped the letter.',
      },
      {
        de: 'Nun stand darin, der Bote solle sogleich die Königstochter heiraten – und so geschah es.',
        zh: '現在信上改成：要立刻讓送信人娶公主——事情果然就這樣成了。',
        en: 'Now it said the messenger should marry the princess at once – and so it happened.',
      },
      {
        de: 'Der zornige König verlangte als Bedingung drei goldene Haare vom Kopf des Teufels.',
        zh: '憤怒的國王便提出條件：要拿到魔鬼頭上的三根金髮。',
        en: 'The angry king demanded as a condition three golden hairs from the Devil\'s head.',
      },
      {
        de: 'Auf der langen Reise stellte man dem Jungen drei Fragen, die niemand beantworten konnte.',
        zh: '在漫長的旅途中，人們向男孩提出三個誰也答不出的問題。',
        en: 'On the long journey the boy was asked three questions no one could answer.',
      },
      {
        de: 'Beim Teufel verbarg ihn die alte Großmutter und versprach zu helfen.',
        zh: '到了魔鬼家，年邁的祖母把他藏了起來，答應幫忙。',
        en: 'At the Devil\'s house, the old grandmother hid him and promised to help.',
      },
      {
        de: 'Während der Teufel schlief, riss sie ihm dreimal ein goldenes Haar aus.',
        zh: '趁魔鬼睡著時，她拔下了他三根金髮。',
        en: 'While the Devil slept, she plucked out a golden hair three times.',
      },
      {
        de: 'Jedes Mal tat sie, als habe sie einen seltsamen Traum, und der Teufel erzählte die Lösungen.',
        zh: '每一次她都假裝做了個古怪的夢，魔鬼便把答案說了出來。',
        en: 'Each time she pretended she had a strange dream, and the Devil told the answers.',
      },
      {
        de: 'So erfuhr der Junge, warum der Brunnen versiegt, der Baum verdorrt und der Fährmann gefangen war.',
        zh: '男孩因此得知：那口井為何乾涸、那棵樹為何枯萎、那擺渡人為何脫不了身。',
        en: 'So the boy learned why the well had dried up, the tree had withered, and the ferryman was trapped.',
      },
      {
        de: 'Mit den drei Haaren und den Antworten kehrte er reich beschenkt zurück.',
        zh: '他帶著三根金髮和那些答案，滿載著賞賜回來了。',
        en: 'With the three hairs and the answers he returned richly rewarded.',
      },
      {
        de: 'Der gierige König lief selbst zum Fluss, um auch Gold zu holen.',
        zh: '貪心的國王親自跑到河邊，也想去拿金子。',
        en: 'The greedy king ran to the river himself, to fetch gold too.',
      },
      {
        de: 'Doch der Fährmann drückte ihm die Stange in die Hand, und nun muss der König für immer rudern.',
        zh: '可擺渡人把篙塞進他手裡，如今國王只得永遠擺渡下去。',
        en: 'But the ferryman pressed the pole into his hand, and now the king must ferry forever.',
      },
    ],
  },
  {
    id: 'treue-johannes',
    title: 'Der treue Johannes',
    titleZh: '忠實的約翰',
    emoji: '🤝',
    level: 'B1',
    blurb: '忠僕約翰為了保護年輕的國王，獨自承擔了三場災禍的祕密，甚至甘願變成石頭。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein sterbender König vertraute seinen Sohn dem treuen Diener Johannes an.',
        zh: '一位垂死的國王把兒子託付給忠心的僕人約翰。',
        en: 'A dying king entrusted his son to the faithful servant John.',
      },
      {
        de: '"Zeig ihm alles", sagte er, "nur nicht das Zimmer mit dem Bild der Königstochter vom goldenen Dach."',
        zh: '「什麼都給他看，」他說，「只有那間掛著『金頂公主』畫像的房間不行。」',
        en: '"Show him everything," he said, "but not the room with the portrait of the Princess of the Golden Roof."',
      },
      {
        de: 'Doch der junge König drängte, bis Johannes ihm das Zimmer öffnete.',
        zh: '但年輕的國王一再堅持，約翰只好為他打開那房間。',
        en: 'But the young king pressed until John opened the room for him.',
      },
      {
        de: 'Beim Anblick des Bildes verliebte er sich so sehr, dass er ohnmächtig wurde.',
        zh: '一看到那畫像，他愛得如此之深，竟昏了過去。',
        en: 'At the sight of the portrait he fell so in love that he fainted.',
      },
      {
        de: 'Als Kaufleute verkleidet segelten sie mit goldenen Schätzen in das Land der Prinzessin.',
        zh: '他們扮成商人，載著金色珍寶航向公主的國度。',
        en: 'Disguised as merchants, they sailed with golden treasures to the princess\'s land.',
      },
      {
        de: 'Sie lockten die Prinzessin auf das Schiff, fuhren davon, und sie willigte ein, ihn zu heiraten.',
        zh: '他們把公主誘上船，揚帆而去，她也答應嫁給他。',
        en: 'They lured the princess onto the ship, sailed away, and she agreed to marry him.',
      },
      {
        de: 'Auf der Fahrt hörte Johannes drei Raben von drei Gefahren weissagen.',
        zh: '航行途中，約翰聽見三隻烏鴉預言三場災難。',
        en: 'On the voyage John heard three ravens foretell three dangers.',
      },
      {
        de: 'Wer das Geheimnis verriete, würde zu Stein, sagten sie.',
        zh: '牠們說，誰要是洩露這祕密，就會變成石頭。',
        en: 'Whoever revealed the secret would turn to stone, they said.',
      },
      {
        de: 'An Land sprang ein fuchsroter Hengst herbei; Johannes erschoss ihn rasch.',
        zh: '上岸時奔來一匹火紅的駿馬；約翰迅速把牠射死。',
        en: 'On land a fiery red horse came bounding; John quickly shot it dead.',
      },
      {
        de: 'Ein prächtiges Brauthemd lag bereit; Johannes warf es ins Feuer, ehe der König es anzog.',
        zh: '一件華麗的新郎襯衣已備好；約翰趁國王還沒穿，就把它扔進了火裡。',
        en: 'A splendid bridal shirt lay ready; John threw it into the fire before the king put it on.',
      },
      {
        de: 'Niemand verstand sein seltsames Tun, und der König wurde immer misstrauischer.',
        zh: '沒人明白他這些古怪舉動，國王也越來越疑心。',
        en: 'No one understood his strange deeds, and the king grew ever more suspicious.',
      },
      {
        de: 'Beim Hochzeitstanz sank die Braut wie tot zu Boden; Johannes eilte herbei und rettete sie.',
        zh: '婚禮舞會上，新娘像死了一樣倒下；約翰急忙趕來救了她。',
        en: 'At the wedding dance the bride sank down as if dead; John rushed up and saved her.',
      },
      {
        de: 'Doch nun schien er ein Verräter, und man verurteilte ihn zum Tode.',
        zh: '可這下他看來像個叛徒，被判了死刑。',
        en: 'But now he seemed a traitor, and he was condemned to death.',
      },
      {
        de: 'Auf dem Schafott erzählte Johannes endlich die ganze Wahrheit – und wurde dabei zu Stein.',
        zh: '在斷頭台上，約翰終於說出全部真相——話一說完便化成了石頭。',
        en: 'On the scaffold John at last told the whole truth – and as he did, he turned to stone.',
      },
      {
        de: 'Voll Reue ließ der König die steinerne Gestalt in seinem Schlafzimmer aufstellen.',
        zh: '國王滿懷悔恨，把那石像立在自己的臥室裡。',
        en: 'Full of remorse, the king had the stone figure set up in his bedroom.',
      },
      {
        de: 'Durch ein großes Opfer erweckte er Johannes schließlich wieder zum Leben, und alle waren versöhnt.',
        zh: '國王最終以一場巨大的犧牲讓約翰復活，眾人盡釋前嫌。',
        en: 'Through a great sacrifice the king at last brought John back to life, and all were reconciled.',
      },
    ],
  },
  {
    id: 'allerleirauh',
    title: 'Allerleirauh',
    titleZh: '千皮獸',
    emoji: '🧥',
    level: 'B1',
    blurb: '公主披著千種毛皮做的斗篷逃離王宮，藏身為廚房女傭，靠三件華服重獲身分。',
    source: grimmSource,
    segments: [
      {
        de: 'Eine sterbende Königin nahm dem König das Versprechen ab, nur eine ebenso schöne Frau mit goldenem Haar zu heiraten.',
        zh: '一位垂死的王后要國王答應，只娶一個和她一樣美、一樣有金髮的女人。',
        en: 'A dying queen made the king promise to marry only a woman as beautiful with golden hair as she.',
      },
      {
        de: 'Doch nur seine eigene Tochter war so schön, und der König wollte sie zur Frau nehmen.',
        zh: '可只有他自己的女兒這麼美，國王竟想娶她為妻。',
        en: 'But only his own daughter was so beautiful, and the king wanted to take her as his wife.',
      },
      {
        de: 'Entsetzt verlangte die Tochter drei unmögliche Kleider und einen Mantel aus tausenderlei Pelz.',
        zh: '女兒驚駭萬分，便要求三件不可能的禮服和一件用千種毛皮做的斗篷。',
        en: 'Horrified, the daughter demanded three impossible dresses and a cloak of a thousand kinds of fur.',
      },
      {
        de: 'Eines sollte wie die Sonne, eines wie der Mond und eines wie die Sterne glänzen.',
        zh: '一件要像太陽，一件要像月亮，一件要像星星那樣閃亮。',
        en: 'One was to shine like the sun, one like the moon, and one like the stars.',
      },
      {
        de: 'Als der König alles beschaffte, floh sie nachts im Pelzmantel und nannte sich Allerleirauh.',
        zh: '國王把一切都備齊後，她趁夜披著毛皮斗篷逃走，自稱「千皮獸」。',
        en: 'When the king procured it all, she fled by night in the fur cloak and called herself Allerleirauh.',
      },
      {
        de: 'Sie schwärzte sich Gesicht und Hände und versteckte sich in einem hohlen Baum.',
        zh: '她把臉和手抹黑，躲進一棵空心的樹裡。',
        en: 'She blackened her face and hands and hid in a hollow tree.',
      },
      {
        de: 'In einem fremden Schloss fand man sie und nahm sie als Küchenmagd auf.',
        zh: '在一座陌生的城堡裡，人們發現了她，收她做廚房女傭。',
        en: 'In a foreign castle she was found and taken on as a kitchen maid.',
      },
      {
        de: 'Eines Abends gab der König ein Fest, und heimlich legte Allerleirauh ihren Pelz ab.',
        zh: '一天晚上國王舉辦宴會，千皮獸偷偷脫下了毛皮。',
        en: 'One evening the king held a feast, and secretly Allerleirauh took off her fur.',
      },
      {
        de: 'Im Sonnenkleid erschien sie im Saal, und der König tanzte nur mit ihr.',
        zh: '她穿著太陽禮服出現在大廳，國王只和她跳舞。',
        en: 'In the sun dress she appeared in the hall, and the king danced only with her.',
      },
      {
        de: 'Danach kochte sie ihm eine Suppe und ließ heimlich einen goldenen Ring hineinfallen.',
        zh: '之後她替他煮了湯，偷偷把一枚金戒指放了進去。',
        en: 'Afterwards she cooked him a soup and secretly let a golden ring fall into it.',
      },
      {
        de: 'Beim zweiten Fest kam sie im Mondkleid und ließ ein winziges goldenes Spinnrad in die Suppe gleiten.',
        zh: '第二場宴會她穿著月亮禮服而來，把一個小巧的金紡車放進湯裡。',
        en: 'At the second feast she came in the moon dress and slipped a tiny golden spinning wheel into the soup.',
      },
      {
        de: 'Beim dritten Mal trug sie das Sternenkleid, und der König steckte ihr unbemerkt einen Ring an den Finger.',
        zh: '第三次她穿上星星禮服，國王悄悄在她手指上戴了一枚戒指。',
        en: 'The third time she wore the star dress, and unnoticed the king slipped a ring onto her finger.',
      },
      {
        de: 'In der Eile vergaß sie, sich wieder ganz zu schwärzen.',
        zh: '匆忙之間，她忘了把自己重新抹黑。',
        en: 'In her haste she forgot to blacken herself completely again.',
      },
      {
        de: 'So entdeckte der König unter dem Pelz das goldene Haar und den Ring.',
        zh: '於是國王在毛皮底下發現了金髮和那枚戒指。',
        en: 'So the king discovered the golden hair and the ring beneath the fur.',
      },
      {
        de: 'Allerleirauh war keine Magd, sondern eine Königstochter, und der König machte sie zu seiner Braut.',
        zh: '千皮獸原來不是女傭，而是位公主，國王便娶她為新娘。',
        en: 'Allerleirauh was no maid but a king\'s daughter, and the king made her his bride.',
      },
    ],
  },
  {
    id: 'jorinde-und-joringel',
    title: 'Jorinde und Joringel',
    titleZh: '約琳德和約林格爾',
    emoji: '🌼',
    level: 'B1',
    blurb: '少女約琳德被女巫變成夜鶯，未婚夫靠一朵夢中的血紅花，解開了魔咒。',
    source: grimmSource,
    segments: [
      {
        de: 'Mitten im Wald stand ein altes Schloss, in dem eine böse Zauberin wohnte.',
        zh: '森林中央有一座古堡，裡面住著一個壞女巫。',
        en: 'In the middle of the forest stood an old castle where a wicked sorceress lived.',
      },
      {
        de: 'Am Tag verwandelte sie sich in eine Katze oder Eule, in der Nacht wieder in einen Menschen.',
        zh: '白天她變成貓或貓頭鷹，夜裡又變回人。',
        en: 'By day she turned into a cat or an owl, by night back into a person.',
      },
      {
        de: 'Wer dem Schloss zu nahe kam, blieb wie erstarrt stehen und konnte sich nicht rühren.',
        zh: '誰走得離城堡太近，就會像凝固了一樣站住，動彈不得。',
        en: 'Whoever came too near the castle stood frozen and could not move.',
      },
      {
        de: 'Junge Mädchen verwandelte sie in Vögel und sperrte sie in Käfige.',
        zh: '她把年輕女孩變成鳥，關進籠子裡。',
        en: 'Young girls she turned into birds and locked them in cages.',
      },
      {
        de: 'Jorinde und Joringel, ein verlobtes Paar, gingen am Abend im Wald spazieren.',
        zh: '約琳德和約林格爾這對未婚夫妻，傍晚在森林裡散步。',
        en: 'Jorinde and Joringel, an engaged couple, walked in the forest one evening.',
      },
      {
        de: 'Ohne es zu merken, kamen sie dem verzauberten Schloss zu nahe.',
        zh: '他們沒留意，竟走得離那座著魔的城堡太近了。',
        en: 'Without noticing, they came too near the enchanted castle.',
      },
      {
        de: 'Da wurde Jorinde in eine Nachtigall verwandelt, und Joringel konnte sich nicht bewegen.',
        zh: '約琳德於是變成了一隻夜鶯，約林格爾則動彈不得。',
        en: 'Then Jorinde was turned into a nightingale, and Joringel could not move.',
      },
      {
        de: 'Die Eule trug die Nachtigall fort, und als Joringel sich wieder regen konnte, war Jorinde verschwunden.',
        zh: '貓頭鷹把夜鶯叼走了，等約林格爾能動時，約琳德已不見蹤影。',
        en: 'The owl carried the nightingale away, and when Joringel could move again, Jorinde was gone.',
      },
      {
        de: 'Verzweifelt diente er lange als Hirt in einem fremden Dorf.',
        zh: '他絕望之下，在一個陌生的村子裡放了很久的牧。',
        en: 'In despair he served a long time as a shepherd in a strange village.',
      },
      {
        de: 'Eines Nachts träumte er von einer blutroten Blume mit einer Perle in der Mitte.',
        zh: '一天夜裡，他夢見一朵血紅的花，花心有一顆珍珠。',
        en: 'One night he dreamed of a blood-red flower with a pearl in its center.',
      },
      {
        de: 'Neun Tage suchte er, bis er die Blume endlich fand.',
        zh: '他找了九天，終於找到了那朵花。',
        en: 'He searched for nine days until he finally found the flower.',
      },
      {
        de: 'Mit der Blume berührte er das Schlosstor, und alle Zauber wichen vor ihm.',
        zh: '他用那朵花碰了城堡的門，所有的魔法都在他面前退去。',
        en: 'With the flower he touched the castle gate, and all the magic gave way before him.',
      },
      {
        de: 'Er erlöste Jorinde und die vielen anderen Vögel, und die beiden lebten lange glücklich zusammen.',
        zh: '他解救了約琳德和許許多多其他的鳥，兩人從此長久幸福地生活在一起。',
        en: 'He freed Jorinde and the many other birds, and the two lived happily together for a long time.',
      },
    ],
  },
  {
    id: 'zwoelf-brueder',
    title: 'Die zwölf Brüder',
    titleZh: '十二兄弟',
    emoji: '👬',
    level: 'B1',
    blurb: '十二個哥哥因妹妹的出生變成烏鴉，妹妹為了解救他們，立誓七年不開口說話。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein König hatte zwölf Söhne und bestimmte: Würde das dreizehnte Kind ein Mädchen, so müssten die Brüder sterben.',
        zh: '一位國王有十二個兒子，並下令：若第十三個孩子是女孩，哥哥們就得死。',
        en: 'A king had twelve sons and decreed: if the thirteenth child were a girl, the brothers must die.',
      },
      {
        de: 'Heimlich warnte die Königin den jüngsten Sohn Benjamin, und die zwölf flohen in den Wald.',
        zh: '王后偷偷警告最小的兒子本雅明，十二兄弟便逃進了森林。',
        en: 'Secretly the queen warned the youngest son Benjamin, and the twelve fled into the forest.',
      },
      {
        de: 'Aus Trauer schworen sie, jedes Mädchen zu töten, das ihnen begegnete.',
        zh: '出於悲憤，他們發誓要殺掉每一個遇見的女孩。',
        en: 'Out of grief they swore to kill every girl they met.',
      },
      {
        de: 'Das Schwesterchen wuchs heran und erfuhr von seinen zwölf Brüdern.',
        zh: '小妹妹漸漸長大，得知自己有十二個哥哥。',
        en: 'The little sister grew up and learned of her twelve brothers.',
      },
      {
        de: 'Es machte sich auf, sie zu suchen, und fand zuerst den guten Benjamin.',
        zh: '她動身去尋找他們，最先找到了善良的本雅明。',
        en: 'She set out to find them and first found the kind Benjamin.',
      },
      {
        de: 'Als die Brüder hörten, wie lieb ihre Schwester war, nahmen sie sie freudig auf.',
        zh: '哥哥們聽說妹妹這麼可愛，便歡喜地接納了她。',
        en: 'When the brothers heard how dear their sister was, they joyfully took her in.',
      },
      {
        de: 'Eines Tages pflückte sie im Garten zwölf weiße Lilien, um den Brüdern eine Freude zu machen.',
        zh: '有一天她在花園裡摘了十二朵白百合，想讓哥哥們高興。',
        en: 'One day she picked twelve white lilies in the garden to please her brothers.',
      },
      {
        de: 'Da verwandelten sich die zwölf Brüder im selben Augenblick in Raben und flogen davon.',
        zh: '就在那一刻，十二個哥哥變成了烏鴉，飛走了。',
        en: 'At that moment the twelve brothers turned into ravens and flew away.',
      },
      {
        de: 'Eine alte Frau sagte: "Du kannst sie nur erlösen, wenn du sieben Jahre lang nicht sprichst."',
        zh: '一個老婦人說：「只有你七年不說話，才能解救他們。」',
        en: 'An old woman said: "You can free them only if you do not speak for seven years."',
      },
      {
        de: 'Das Mädchen schwieg von da an und lebte still in einem Baum im Wald.',
        zh: '女孩從此沉默不語，靜靜地住在森林裡的一棵樹上。',
        en: 'From then on the girl was silent and lived quietly in a tree in the forest.',
      },
      {
        de: 'Ein König fand sie, gewann sie lieb und nahm die schöne Stumme zur Frau.',
        zh: '一位國王找到了她，愛上了她，娶了這位美麗的啞女。',
        en: 'A king found her, came to love her, and took the beautiful mute girl as his wife.',
      },
      {
        de: 'Doch die böse Mutter des Königs verleumdete sie, weil sie nie ein Wort sprach.',
        zh: '可國王那惡毒的母親因她從不開口，便誣陷她。',
        en: 'But the king\'s wicked mother slandered her because she never spoke a word.',
      },
      {
        de: 'Man verurteilte die junge Königin zum Tode auf dem Scheiterhaufen.',
        zh: '年輕的王后被判處火刑。',
        en: 'The young queen was condemned to die at the stake.',
      },
      {
        de: 'Doch im letzten Augenblick waren die sieben Jahre um, und zwölf Raben rauschten herbei.',
        zh: '可就在最後一刻，七年期滿了，十二隻烏鴉呼嘯而至。',
        en: 'But at the last moment the seven years were over, and twelve ravens came rushing in.',
      },
      {
        de: 'Sie wurden wieder zu Brüdern, retteten die Schwester, und die böse Mutter wurde gestraft.',
        zh: '牠們又變回了哥哥，救下了妹妹，惡毒的母親則受到懲罰。',
        en: 'They became brothers again, saved their sister, and the wicked mother was punished.',
      },
    ],
  },
  {
    id: 'einaeuglein-zweiaeuglein-dreiaeuglein',
    title: 'Einäuglein, Zweiäuglein und Dreiäuglein',
    titleZh: '一隻眼、兩隻眼和三隻眼',
    emoji: '👁️',
    level: 'B1',
    blurb: '長著兩隻眼睛的「平凡」女孩被姊妹欺負，靠一隻神奇山羊和一棵金樹改變了命運。',
    source: grimmSource,
    segments: [
      {
        de: 'Eine Frau hatte drei Töchter: Einäuglein mit einem Auge, Zweiäuglein mit zweien und Dreiäuglein mit dreien.',
        zh: '一個女人有三個女兒：長一隻眼的一隻眼、長兩隻眼的兩隻眼、長三隻眼的三隻眼。',
        en: 'A woman had three daughters: One-eye with one eye, Two-eyes with two, and Three-eyes with three.',
      },
      {
        de: 'Weil Zweiäuglein aussah wie alle Menschen, verachteten es Mutter und Schwestern.',
        zh: '因為兩隻眼長得和常人一樣，母親和姊妹都瞧不起她。',
        en: 'Because Two-eyes looked like ordinary people, her mother and sisters despised her.',
      },
      {
        de: 'Es bekam nur die Reste und musste oft hungern.',
        zh: '她只能吃殘羹剩飯，常常挨餓。',
        en: 'She got only the leftovers and often went hungry.',
      },
      {
        de: 'Eines Tages weinte es auf der Wiese, da erschien eine weise Frau.',
        zh: '有一天她在草地上哭泣，這時出現了一位智慧的婦人。',
        en: 'One day she wept on the meadow, and a wise woman appeared.',
      },
      {
        de: '"Sag zu deiner Ziege: Zicklein, meck, Tischlein, deck – dann hast du genug zu essen", riet sie.',
        zh: '她出主意：「對你的山羊說：小羊咩咩、桌子擺擺——你就有得吃了。」',
        en: 'She advised: "Say to your goat – little goat bleat, little table be set – and you will have enough to eat."',
      },
      {
        de: 'Von nun an war Zweiäuglein satt, und die Schwestern wunderten sich.',
        zh: '從此兩隻眼不再餓肚子，姊妹們都很納悶。',
        en: 'From then on Two-eyes was full, and the sisters wondered.',
      },
      {
        de: 'Einäuglein sollte aufpassen, doch Zweiäuglein sang es in den Schlaf.',
        zh: '一隻眼奉命監視，可兩隻眼把她唱得睡著了。',
        en: 'One-eye was to keep watch, but Two-eyes sang her to sleep.',
      },
      {
        de: 'Dreiäuglein aber vergaß Zweiäuglein einzuschläfern, und das dritte Auge sah alles.',
        zh: '但兩隻眼忘了哄三隻眼的第三隻眼睛入睡，那隻眼把一切都看見了。',
        en: 'But Two-eyes forgot to lull Three-eyes\' third eye, and that eye saw everything.',
      },
      {
        de: 'Aus Neid schlachteten sie die gute Ziege.',
        zh: '出於嫉妒，她們把那隻好山羊宰了。',
        en: 'Out of envy they slaughtered the good goat.',
      },
      {
        de: 'Die weise Frau riet Zweiäuglein, die Eingeweide der Ziege im Garten zu vergraben.',
        zh: '智慧的婦人勸兩隻眼把山羊的內臟埋在花園裡。',
        en: 'The wise woman advised Two-eyes to bury the goat\'s entrails in the garden.',
      },
      {
        de: 'Am Morgen stand dort ein Baum mit silbernen Blättern und goldenen Früchten.',
        zh: '早上那裡長出一棵樹，銀色的葉子、金色的果實。',
        en: 'In the morning a tree stood there with silver leaves and golden fruit.',
      },
      {
        de: 'Nur Zweiäuglein konnte die goldenen Früchte pflücken; den Schwestern wichen die Zweige aus.',
        zh: '只有兩隻眼摘得到金果子；樹枝會躲開兩個姊姊。',
        en: 'Only Two-eyes could pluck the golden fruit; the branches drew away from the sisters.',
      },
      {
        de: 'Ein Ritter kam vorbei, und Zweiäuglein reichte ihm heimlich einen goldenen Zweig.',
        zh: '一位騎士路過，兩隻眼偷偷遞給他一根金樹枝。',
        en: 'A knight came by, and Two-eyes secretly handed him a golden branch.',
      },
      {
        de: 'Der Ritter nahm das gute Mädchen mit und machte es zu seiner Frau.',
        zh: '騎士把這善良的女孩帶走，娶她為妻。',
        en: 'The knight took the good girl with him and made her his wife.',
      },
      {
        de: 'Der wunderbare Baum folgte ihr, und später verzieh sie sogar ihren reuigen Schwestern.',
        zh: '那棵神奇的樹也跟著她去了，後來她甚至原諒了悔悟的姊姊們。',
        en: 'The wonderful tree followed her, and later she even forgave her repentant sisters.',
      },
    ],
  },
  {
    id: 'wasser-des-lebens',
    title: 'Das Wasser des Lebens',
    titleZh: '生命之水',
    emoji: '💧',
    level: 'B1',
    blurb: '三個王子去尋找能救活父王的生命之水，只有謙和有禮的小王子得到了矮人的指點。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein alter König lag todkrank, und seine drei Söhne zogen aus, das Wasser des Lebens zu suchen.',
        zh: '一位老國王病危垂死，三個兒子動身去尋找生命之水。',
        en: 'An old king lay mortally ill, and his three sons set out to seek the water of life.',
      },
      {
        de: 'Die beiden älteren Söhne antworteten einem Zwerg grob und blieben darauf in engen Schluchten stecken.',
        zh: '兩個哥哥粗魯地回答一個矮人，結果被困在狹窄的山谷裡。',
        en: 'The two elder sons answered a dwarf rudely and afterwards got stuck in narrow ravines.',
      },
      {
        de: 'Der jüngste aber war höflich, und der Zwerg zeigte ihm den Weg.',
        zh: '但最小的兒子很有禮貌，矮人便為他指了路。',
        en: 'But the youngest was polite, and the dwarf showed him the way.',
      },
      {
        de: '"In einem verzauberten Schloss findest du das Wasser, doch sei vor zwölf Uhr wieder draußen."',
        zh: '「在一座著魔的城堡裡你能找到那水，但十二點前一定要出來。」',
        en: '"In an enchanted castle you will find the water, but be out again before twelve o\'clock."',
      },
      {
        de: 'Mit einer eisernen Rute öffnete er die Tore und ging an zwei Löwen vorbei.',
        zh: '他用一根鐵杖打開了城門，走過兩頭獅子。',
        en: 'With an iron wand he opened the gates and passed two lions.',
      },
      {
        de: 'Im Schloss traf er eine schöne Prinzessin, die ihn bat, in einem Jahr zur Hochzeit wiederzukommen.',
        zh: '城堡裡他遇到一位美麗的公主，她請他一年後回來成婚。',
        en: 'In the castle he met a beautiful princess, who asked him to return in a year for the wedding.',
      },
      {
        de: 'Er schöpfte das Wasser des Lebens und eilte kurz vor zwölf Uhr hinaus.',
        zh: '他舀起生命之水，趕在十二點前匆匆出來。',
        en: 'He drew the water of life and hurried out just before twelve.',
      },
      {
        de: 'Gegen den Rat des Zwerges befreite er unterwegs seine beiden Brüder.',
        zh: '他違背矮人的勸告，途中救出了兩個哥哥。',
        en: 'Against the dwarf\'s advice he freed his two brothers on the way.',
      },
      {
        de: 'Doch die neidischen Brüder vertauschten heimlich das Wasser gegen Salzwasser.',
        zh: '可妒忌的哥哥們偷偷把那水換成了鹹水。',
        en: 'But the envious brothers secretly swapped the water for salt water.',
      },
      {
        de: 'So schien es, als wolle der jüngste den Vater vergiften, und der König wurde zornig.',
        zh: '於是看來像是小兒子想毒害父親，國王大怒。',
        en: 'So it seemed the youngest wanted to poison their father, and the king grew angry.',
      },
      {
        de: 'Erst die echten Wasser der Brüder heilten den König, und er hielt sie für die Guten.',
        zh: '後來是哥哥們那份真水治好了國王，他便以為他們才是好兒子。',
        en: 'Only the brothers\' real water healed the king, and he took them for the good ones.',
      },
      {
        de: 'Inzwischen ließ die Prinzessin eine goldene Straße zu ihrem Schloss bauen.',
        zh: '與此同時，公主下令修一條通往她城堡的金色大道。',
        en: 'Meanwhile the princess had a golden road built to her castle.',
      },
      {
        de: 'Nur der wahre Bräutigam sollte mitten darauf hereinreiten.',
        zh: '只有真正的新郎才能從正中央騎馬進來。',
        en: 'Only the true bridegroom was to ride straight up the middle of it.',
      },
      {
        de: 'Die älteren Brüder ritten scheu daneben, doch der jüngste ritt geradewegs hinauf.',
        zh: '哥哥們膽怯地從旁邊繞行，小兒子卻一直騎到正中央上去。',
        en: 'The elder brothers timidly rode beside it, but the youngest rode straight up.',
      },
      {
        de: 'So erkannte man den treuen Sohn; er heiratete die Prinzessin, und die falschen Brüder flohen davon.',
        zh: '於是人們認出了那忠厚的兒子；他娶了公主，奸詐的哥哥們則逃之夭夭。',
        en: 'So the faithful son was known; he married the princess, and the false brothers fled.',
      },
    ],
  },
  {
    id: 'alter-sultan',
    title: 'Der alte Sultan',
    titleZh: '老蘇丹',
    emoji: '🐕',
    level: 'A2',
    blurb: '一隻又老又沒牙的忠狗差點被主人射殺，靠狼的一個計謀重獲信任，卻始終守著忠義。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein Bauer hatte einen treuen Hund namens Sultan, der nun alt und zahnlos geworden war.',
        zh: '一個農夫有一隻忠心的狗叫蘇丹，如今牠老了，牙也掉光了。',
        en: 'A farmer had a faithful dog named Sultan, who had now grown old and toothless.',
      },
      {
        de: 'Der Bauer wollte ihn erschießen, weil er zu nichts mehr nütze sei.',
        zh: '農夫想把牠射死，因為牠再也沒用了。',
        en: 'The farmer wanted to shoot him because he was of no more use.',
      },
      {
        de: 'Traurig klagte Sultan dem Wolf sein Leid.',
        zh: '蘇丹傷心地向狼訴說自己的苦處。',
        en: 'Sadly Sultan told the wolf his sorrow.',
      },
      {
        de: 'Der Wolf gab ihm einen Rat: "Ich trage das Kind des Bauern fort, und du rettest es."',
        zh: '狼給牠出了個主意：「我把農夫的孩子叼走，你再把牠救回來。」',
        en: 'The wolf gave him advice: "I will carry off the farmer\'s child, and you rescue it."',
      },
      {
        de: 'So geschah es: Sultan brachte das Kind zurück, und der Bauer war voller Dankbarkeit.',
        zh: '事情果然如此：蘇丹把孩子帶了回來，農夫滿懷感激。',
        en: 'So it happened: Sultan brought the child back, and the farmer was full of gratitude.',
      },
      {
        de: 'Von nun an durfte der alte Hund es sich gut gehen lassen.',
        zh: '從此這隻老狗可以好好享清福了。',
        en: 'From then on the old dog could take his ease.',
      },
      {
        de: 'Bald aber verlangte der Wolf zum Dank, ein Schaf stehlen zu dürfen.',
        zh: '但不久狼便要求作為回報，讓牠偷一隻羊。',
        en: 'But soon the wolf demanded, as thanks, to be allowed to steal a sheep.',
      },
      {
        de: 'Sultan blieb treu und warnte den Bauern, und der Wolf musste mit leerem Magen fliehen.',
        zh: '蘇丹依然忠心，警告了農夫，狼只得餓著肚子逃走。',
        en: 'Sultan stayed loyal and warned the farmer, and the wolf had to flee with an empty stomach.',
      },
      {
        de: 'Beleidigt forderte der Wolf den Hund zum Kampf und brachte ein Wildschwein als Helfer mit.',
        zh: '狼受了氣，向狗下了戰書，還帶來一頭野豬當幫手。',
        en: 'Offended, the wolf challenged the dog to a fight and brought a wild boar as a helper.',
      },
      {
        de: 'Sultan aber kam nur mit einer alten Katze, die auf drei Beinen humpelte.',
        zh: '蘇丹卻只帶來一隻瘸著三條腿的老貓。',
        en: 'But Sultan came only with an old cat that hobbled on three legs.',
      },
      {
        de: 'Das Schwein versteckte sich im Gebüsch, doch seine Ohren schauten heraus.',
        zh: '野豬躲進灌木叢，可耳朵露在外面。',
        en: 'The boar hid in the bushes, but its ears stuck out.',
      },
      {
        de: 'Die Katze hielt sie für eine Maus, biss zu, und voller Schreck flohen Wolf und Schwein für immer.',
        zh: '貓把那耳朵當成老鼠，一口咬下去，狼和野豬嚇得永遠逃走了。',
        en: 'The cat took them for a mouse and bit; in terror the wolf and boar fled for good.',
      },
    ],
  },
  {
    id: 'drei-spinnerinnen',
    title: 'Die drei Spinnerinnen',
    titleZh: '三個紡織女',
    emoji: '🧶',
    level: 'A2',
    blurb: '一個懶得紡紗的女孩，靠三個長相奇特的紡織女幫忙，最後反而再也不用紡紗了。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein Mädchen war so faul, dass es um nichts in der Welt spinnen wollte.',
        zh: '一個女孩懶得要命，說什麼也不肯紡紗。',
        en: 'A girl was so lazy that she would not spin for anything in the world.',
      },
      {
        de: 'Eines Tages schlug die Mutter es vor Zorn, gerade als die Königin vorbeikam.',
        zh: '有一天母親一氣之下打了她，正巧王后經過。',
        en: 'One day the mother beat her in anger, just as the queen passed by.',
      },
      {
        de: 'Aus Scham log die Mutter: "Sie spinnt so gern, dass ich nicht genug Flachs kaufen kann."',
        zh: '母親羞愧地撒謊：「她太愛紡紗了，我都買不起那麼多亞麻。」',
        en: 'Out of shame the mother lied: "She loves spinning so much that I cannot buy enough flax."',
      },
      {
        de: 'Die Königin freute sich und nahm das Mädchen mit in ihr Schloss.',
        zh: '王后聽了很高興，把女孩帶回了宮裡。',
        en: 'The queen was delighted and took the girl with her to the castle.',
      },
      {
        de: 'Sie zeigte ihr Zimmer voller Flachs: "Spinnst du das alles, sollst du meinen Sohn heiraten."',
        zh: '她讓女孩看滿是亞麻的房間：「你把這些都紡完，就嫁給我兒子。」',
        en: 'She showed her rooms full of flax: "If you spin all this, you shall marry my son."',
      },
      {
        de: 'Das Mädchen verzweifelte, denn es konnte gar nicht spinnen.',
        zh: '女孩絕望了，因為她根本不會紡紗。',
        en: 'The girl despaired, for she could not spin at all.',
      },
      {
        de: 'Da traten drei hässliche Frauen herein und boten ihre Hilfe an.',
        zh: '這時三個醜陋的女人走進來，主動提出幫忙。',
        en: 'Then three ugly women came in and offered their help.',
      },
      {
        de: 'Die eine hatte einen breiten Plattfuß, die zweite eine herabhängende Lippe, die dritte einen breiten Daumen.',
        zh: '一個有寬扁的腳，一個有下垂的嘴唇，一個有寬大的拇指。',
        en: 'One had a broad flat foot, the second a drooping lip, the third a broad thumb.',
      },
      {
        de: '"Wir spinnen dir alles, wenn du uns zur Hochzeit einlädst und dich unser nicht schämst."',
        zh: '「只要你請我們去參加婚禮、不嫌棄我們，我們就替你把一切都紡好。」',
        en: '"We will spin it all for you if you invite us to the wedding and are not ashamed of us."',
      },
      {
        de: 'Das Mädchen versprach es, und die drei spannen den ganzen Flachs in kurzer Zeit.',
        zh: '女孩答應了，三人很快就把所有亞麻都紡完了。',
        en: 'The girl promised, and the three spun all the flax in a short time.',
      },
      {
        de: 'Hocherfreut richtete die Königin die Hochzeit aus.',
        zh: '王后大喜，便為他們籌辦了婚禮。',
        en: 'Overjoyed, the queen arranged the wedding.',
      },
      {
        de: 'Bei der Feier fragte der Bräutigam die drei, woher ihre seltsamen Gestalten kämen.',
        zh: '婚宴上，新郎問那三人怎麼長成這奇怪的模樣。',
        en: 'At the feast the bridegroom asked the three how they came by their strange shapes.',
      },
      {
        de: '"Vom vielen Spinnen", sagten sie; da verbot der Prinz seiner Braut, je wieder zu spinnen.',
        zh: '「都是紡紗紡多了。」她們說；王子於是禁止新娘再碰紡車。',
        en: '"From all the spinning," they said; so the prince forbade his bride ever to spin again.',
      },
    ],
  },
  {
    id: 'eisenhans',
    title: 'Der Eisenhans',
    titleZh: '鐵漢斯',
    emoji: '🧔',
    level: 'B1',
    blurb: '一個男孩放走了被囚的野人鐵漢斯，在他的暗中相助下，從園丁一路成為公主的丈夫。',
    source: grimmSource,
    segments: [
      {
        de: 'In einem Wald lebte ein wilder Mann, der auf dem Grund eines Teiches hauste.',
        zh: '在一座森林裡住著一個野人，他棲身在一個池塘的底部。',
        en: 'In a forest lived a wild man who dwelt at the bottom of a pool.',
      },
      {
        de: 'Man fing ihn und sperrte ihn in einen eisernen Käfig im Schlosshof.',
        zh: '人們把他捉住，關進城堡庭院裡的一個鐵籠子。',
        en: 'He was caught and locked in an iron cage in the castle courtyard.',
      },
      {
        de: 'Eines Tages rollte dem Königssohn seine goldene Kugel in den Käfig.',
        zh: '有一天王子的金球滾進了籠子裡。',
        en: 'One day the prince\'s golden ball rolled into the cage.',
      },
      {
        de: 'Um sie zurückzubekommen, holte der Junge heimlich den Schlüssel und ließ den wilden Mann frei.',
        zh: '為了把球要回來，男孩偷偷拿來鑰匙，放走了那野人。',
        en: 'To get it back, the boy secretly fetched the key and set the wild man free.',
      },
      {
        de: 'Aus Furcht vor Strafe floh er mit Eisenhans in den Wald.',
        zh: '因為怕受罰，他便跟著鐵漢斯逃進了森林。',
        en: 'Out of fear of punishment, he fled into the forest with Iron Hans.',
      },
      {
        de: 'Eisenhans ließ ihn einen goldenen Brunnen hüten und verbot ihm, ihn zu berühren.',
        zh: '鐵漢斯叫他看守一口金井，禁止他碰它。',
        en: 'Iron Hans set him to guard a golden well and forbade him to touch it.',
      },
      {
        de: 'Doch das Haar des Jungen fiel hinein und wurde ganz golden.',
        zh: '可男孩的頭髮掉了進去，整個變成了金色。',
        en: 'But the boy\'s hair fell in and turned all golden.',
      },
      {
        de: 'Eisenhans schickte ihn fort, versprach aber: "Rufst du mich, so komme ich dir zu Hilfe."',
        zh: '鐵漢斯打發他走，卻答應：「只要你呼喚我，我就會來幫你。」',
        en: 'Iron Hans sent him away but promised: "If you call me, I will come to your aid."',
      },
      {
        de: 'Der Junge wurde Gärtner an einem fremden Hof und verbarg sein goldenes Haar unter einer Mütze.',
        zh: '男孩在一個陌生的宮廷當園丁，把金髮藏在帽子底下。',
        en: 'The boy became a gardener at a foreign court and hid his golden hair under a cap.',
      },
      {
        de: 'Als Krieg ausbrach, rief er Eisenhans, der ihm ein Pferd und ein ganzes Heer gab.',
        zh: '戰爭爆發時，他呼喚鐵漢斯，鐵漢斯給了他一匹馬和一整支軍隊。',
        en: 'When war broke out, he called Iron Hans, who gave him a horse and a whole army.',
      },
      {
        de: 'Heimlich gewann der Junge die Schlacht und kehrte unerkannt zurück.',
        zh: '男孩暗中贏得了戰役，無人認出地回來了。',
        en: 'Secretly the boy won the battle and returned unrecognized.',
      },
      {
        de: 'Später warf die Königstochter bei einem Fest goldene Äpfel unter die Ritter.',
        zh: '後來在一場慶典上，公主向騎士們拋出金蘋果。',
        en: 'Later, at a feast, the princess threw golden apples among the knights.',
      },
      {
        de: 'Dreimal fing der Junge auf andersfarbigen Pferden die Äpfel und ritt jedes Mal davon.',
        zh: '男孩三次騎著不同顏色的馬接住蘋果，每次都騎走了。',
        en: 'Three times the boy caught the apples on differently colored horses and rode off each time.',
      },
      {
        de: 'Schließlich wurde er entdeckt, und unter der Mütze kam das goldene Haar zum Vorschein.',
        zh: '最後他被發現了，帽子底下露出了金色的頭髮。',
        en: 'At last he was discovered, and beneath the cap the golden hair came to light.',
      },
      {
        de: 'Da erschien Eisenhans: Er war ein verwunschener König gewesen, nun erlöst, und brachte reiche Schätze.',
        zh: '這時鐵漢斯出現了：他原是一位被施了魔法的國王，如今得救，還帶來了豐厚的寶藏。',
        en: 'Then Iron Hans appeared: he had been an enchanted king, now freed, and brought rich treasures.',
      },
    ],
  },
  {
    id: 'weisse-schlange',
    title: 'Die weiße Schlange',
    titleZh: '白蛇',
    emoji: '🐍',
    level: 'B1',
    blurb: '一個僕人嚐了白蛇後聽懂了動物語言，又因善待動物，闖過公主出的三道難題。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein weiser König ließ sich jeden Tag eine zugedeckte Schüssel bringen, die niemand öffnen durfte.',
        zh: '一位睿智的國王每天讓人端上一個蓋著的盤子，誰也不准打開。',
        en: 'A wise king had a covered dish brought to him each day that no one was allowed to open.',
      },
      {
        de: 'Ein neugieriger Diener hob den Deckel und fand darin eine weiße Schlange.',
        zh: '一個好奇的僕人掀開蓋子，發現裡面是一條白蛇。',
        en: 'A curious servant lifted the lid and found a white snake inside.',
      },
      {
        de: 'Er kostete ein Stückchen und verstand auf einmal die Sprache der Tiere.',
        zh: '他嚐了一小口，忽然就聽懂了動物的語言。',
        en: 'He tasted a little piece and suddenly understood the language of animals.',
      },
      {
        de: 'Bald wurde er beschuldigt, den Ring der Königin gestohlen zu haben.',
        zh: '不久他被指控偷了王后的戒指。',
        en: 'Soon he was accused of stealing the queen\'s ring.',
      },
      {
        de: 'Da hörte er eine Ente klagen, sie habe den Ring verschluckt.',
        zh: '這時他聽見一隻鴨子哀叫，說自己把戒指吞了下去。',
        en: 'Then he heard a duck lamenting that it had swallowed the ring.',
      },
      {
        de: 'So fand sich der Ring, und der Diener war frei; zum Dank bekam er ein Pferd und Geld für eine Reise.',
        zh: '戒指因此找到了，僕人獲釋；為了酬謝，他得到一匹馬和一筆盤纏去旅行。',
        en: 'So the ring was found and the servant was freed; in thanks he received a horse and money for a journey.',
      },
      {
        de: 'Unterwegs rettete er drei Fische, die auf dem Trockenen lagen, und setzte sie ins Wasser.',
        zh: '途中他救了三條擱淺的魚，把牠們放回水裡。',
        en: 'On the way he saved three fish that lay on dry land and put them back in the water.',
      },
      {
        de: 'Er ritt um einen Ameisenhaufen herum, um die fleißigen Ameisen nicht zu stören.',
        zh: '他繞著一個蟻丘騎過去，免得驚擾那些勤勞的螞蟻。',
        en: 'He rode around an ant-hill so as not to disturb the busy ants.',
      },
      {
        de: 'Und er gab zwei jungen Raben, die hungerten, sein eigenes Pferd zu fressen.',
        zh: '他還把自己的馬給兩隻挨餓的小烏鴉吃。',
        en: 'And he gave his own horse to two starving young ravens to eat.',
      },
      {
        de: 'In einer Stadt wollte er eine stolze Königstochter gewinnen, die schwere Aufgaben stellte.',
        zh: '在一座城裡，他想娶一位驕傲的公主，她出了一道道難題。',
        en: 'In a town he sought to win a proud princess who set hard tasks.',
      },
      {
        de: 'Er sollte einen Ring aus dem tiefen Meer holen – da brachten ihn die Fische herauf.',
        zh: '他得從深海裡撈出一枚戒指——那些魚便替他撈了上來。',
        en: 'He was to fetch a ring from the deep sea – then the fish brought it up for him.',
      },
      {
        de: 'Er sollte Hirsekörner aus dem Gras auflesen – da sammelten die Ameisen alle ein.',
        zh: '他得把撒在草裡的小米粒撿起來——螞蟻們便把它們全收齊了。',
        en: 'He was to gather millet seeds from the grass – then the ants collected them all.',
      },
      {
        de: 'Er sollte einen Apfel vom Baum des Lebens holen – da flogen die Raben hin und brachten ihn.',
        zh: '他得從生命之樹上摘一顆蘋果——烏鴉們便飛去把它叼了回來。',
        en: 'He was to fetch an apple from the tree of life – then the ravens flew off and brought it.',
      },
      {
        de: 'Sie teilten den Apfel, gewannen einander lieb und feierten bald Hochzeit.',
        zh: '他們分食了那顆蘋果，彼此相愛，不久就舉行了婚禮。',
        en: 'They shared the apple, came to love each other, and soon celebrated their wedding.',
      },
    ],
  },
  {
    id: 'bienenkoenigin',
    title: 'Die Bienenkönigin',
    titleZh: '蜂王',
    emoji: '🐝',
    level: 'B1',
    blurb: '被叫做傻瓜的小王子一路善待螞蟻、鴨子和蜜蜂，最後靠牠們的回報解開了魔咒。',
    source: grimmSource,
    segments: [
      {
        de: 'Zwei Königssöhne zogen in die Welt und gerieten in ein wildes, schlechtes Leben.',
        zh: '兩個王子出外闖蕩，過起了放蕩墮落的生活。',
        en: 'Two princes went out into the world and fell into a wild, bad life.',
      },
      {
        de: 'Der jüngste, den man Dummling nannte, zog aus, um sie zu suchen.',
        zh: '最小的、被叫做傻瓜的那個，動身去尋找他們。',
        en: 'The youngest, called Simpleton, set out to find them.',
      },
      {
        de: 'Unterwegs wollten die Brüder einen Ameisenhaufen zerstören, doch Dummling hielt sie zurück.',
        zh: '途中哥哥們想毀掉一個蟻丘，傻瓜卻攔住了他們。',
        en: 'On the way the brothers wanted to destroy an ant-hill, but Simpleton held them back.',
      },
      {
        de: 'Sie wollten Enten töten und ein Bienennest ausräuchern – auch das verbot Dummling.',
        zh: '他們想殺鴨子、用煙燻蜂巢——傻瓜也都禁止了。',
        en: 'They wanted to kill ducks and smoke out a bees\' nest – Simpleton forbade that too.',
      },
      {
        de: 'Schließlich kamen sie zu einem Schloss, in dem alles zu Stein erstarrt war.',
        zh: '最後他們來到一座城堡，裡面的一切都化成了石頭。',
        en: 'At last they came to a castle where everything was turned to stone.',
      },
      {
        de: 'Ein kleines graues Männchen zeigte drei Aufgaben, um den Bann zu brechen.',
        zh: '一個灰衣小矮人指出三道解除魔咒的難題。',
        en: 'A little grey man showed three tasks to break the spell.',
      },
      {
        de: 'Zuerst sollte man tausend Perlen aus dem Moos im Wald auflesen.',
        zh: '首先要把撒在森林青苔裡的一千顆珍珠撿起來。',
        en: 'First, a thousand pearls had to be gathered from the moss in the forest.',
      },
      {
        de: 'Die beiden Brüder scheiterten, doch die dankbaren Ameisen sammelten alle Perlen für Dummling.',
        zh: '兩個哥哥都失敗了，但感恩的螞蟻替傻瓜把所有珍珠都收齊了。',
        en: 'The two brothers failed, but the grateful ants gathered all the pearls for Simpleton.',
      },
      {
        de: 'Dann musste der Schlüssel zur Schlafkammer aus dem tiefen See geholt werden.',
        zh: '接著要從深湖裡取出臥室的鑰匙。',
        en: 'Then the key to the bedchamber had to be fetched from the deep lake.',
      },
      {
        de: 'Die Enten, die Dummling verschont hatte, tauchten hinab und brachten ihn herauf.',
        zh: '被傻瓜放過的鴨子潛了下去，把鑰匙叼了上來。',
        en: 'The ducks that Simpleton had spared dived down and brought it up.',
      },
      {
        de: 'Zuletzt sollte man unter drei schlafenden Prinzessinnen die jüngste erkennen.',
        zh: '最後要在三位沉睡的公主中認出最小的那一位。',
        en: 'Finally, the youngest of three sleeping princesses had to be recognized.',
      },
      {
        de: 'Da kam die Bienenkönigin und setzte sich auf den Mund, der Honig gegessen hatte.',
        zh: '這時蜂王飛來，停在吃過蜂蜜的那張嘴上。',
        en: 'Then the queen bee came and settled on the lips that had eaten honey.',
      },
      {
        de: 'So gelang alles, der Bann brach, und Dummling heiratete die jüngste Prinzessin.',
        zh: '於是一切都成了，魔咒解除，傻瓜娶了最小的公主。',
        en: 'So all succeeded, the spell broke, and Simpleton married the youngest princess.',
      },
    ],
  },
  {
    id: 'marienkind',
    title: 'Marienkind',
    titleZh: '聖母的孩子',
    emoji: '⛪',
    level: 'B1',
    blurb: '聖母收養的女孩因為打開禁忌之門又不肯認錯，受了重罰，直到真心懺悔才獲得寬恕。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein armer Holzhacker konnte seine kleine Tochter nicht mehr ernähren.',
        zh: '一個窮樵夫再也養不起他的小女兒了。',
        en: 'A poor woodcutter could no longer feed his little daughter.',
      },
      {
        de: 'Da nahm die Jungfrau Maria das Kind mit sich in den Himmel.',
        zh: '於是聖母瑪利亞把孩子帶到了天上。',
        en: 'Then the Virgin Mary took the child with her to heaven.',
      },
      {
        de: 'Eines Tages gab sie dem Mädchen die Schlüssel zu dreizehn Türen.',
        zh: '有一天她把十三道門的鑰匙交給女孩。',
        en: 'One day she gave the girl the keys to thirteen doors.',
      },
      {
        de: '"Zwölf darfst du öffnen, die dreizehnte aber nicht", sagte Maria.',
        zh: '「十二道你可以開，但第十三道不行。」瑪利亞說。',
        en: '"Twelve you may open, but not the thirteenth," said Mary.',
      },
      {
        de: 'Die Neugier war zu groß, und das Mädchen öffnete doch die verbotene Tür.',
        zh: '好奇心太強了，女孩還是打開了那道禁忌之門。',
        en: 'Curiosity was too great, and the girl opened the forbidden door after all.',
      },
      {
        de: 'Dabei wurde ihr Finger von einem Glanz golden, und sie konnte es nicht abwaschen.',
        zh: '這時她的手指被一道光照得金黃，怎麼也洗不掉。',
        en: 'In doing so her finger turned golden from a radiance, and she could not wash it off.',
      },
      {
        de: 'Maria fragte dreimal, doch das Mädchen leugnete jedes Mal.',
        zh: '瑪利亞問了三次，女孩卻每次都否認。',
        en: 'Mary asked three times, but the girl denied it each time.',
      },
      {
        de: 'Zur Strafe verlor sie die Sprache und wurde in eine wilde Einöde gebracht.',
        zh: '作為懲罰，她失去了說話的能力，被送到一片荒野。',
        en: 'As punishment she lost the power of speech and was brought to a wild wasteland.',
      },
      {
        de: 'Ein König fand die stumme Schöne im Wald und nahm sie zur Frau.',
        zh: '一位國王在森林裡發現了這位啞美人，娶她為妻。',
        en: 'A king found the mute beauty in the forest and took her as his wife.',
      },
      {
        de: 'Dreimal bekam sie ein Kind, und jedes Mal nahm Maria es fort, weil sie nicht gestand.',
        zh: '她三次生下孩子，每一次瑪利亞都把孩子帶走，因為她不肯認錯。',
        en: 'Three times she bore a child, and each time Mary took it away, because she would not confess.',
      },
      {
        de: 'Das Volk glaubte, die Königin habe ihre Kinder getötet, und verurteilte sie zum Feuer.',
        zh: '百姓以為王后害死了自己的孩子，便判她火刑。',
        en: 'The people believed the queen had killed her children and condemned her to the fire.',
      },
      {
        de: 'Auf dem Scheiterhaufen bereute sie endlich von Herzen ihre Lüge.',
        zh: '在火刑柱上，她終於發自內心懺悔自己的謊言。',
        en: 'At the stake she at last repented her lie from her heart.',
      },
      {
        de: 'Da fiel Regen und löschte die Flammen, und Maria erschien vor ihr.',
        zh: '這時降下雨來，澆熄了火焰，瑪利亞出現在她面前。',
        en: 'Then rain fell and quenched the flames, and Mary appeared before her.',
      },
      {
        de: 'Sie gab ihr die Sprache und die drei Kinder zurück und verzieh ihr von Herzen.',
        zh: '她把說話的能力和三個孩子都還給了她，並真心原諒了她。',
        en: 'She gave her back her speech and her three children and forgave her with all her heart.',
      },
    ],
  },
  {
    id: 'baerenhaeuter',
    title: 'Der Bärenhäuter',
    titleZh: '熊皮人',
    emoji: '🐾',
    level: 'B1',
    blurb: '一個士兵和魔鬼打賭：七年不洗不禱、披著熊皮就能致富，最後贏得自由與真心的新娘。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein Soldat ohne Familie wurde nach dem Krieg entlassen und wusste nicht, wovon er leben sollte.',
        zh: '一個沒有家人的士兵戰後被遣散，不知道靠什麼過活。',
        en: 'A soldier without family was discharged after the war and did not know how to live.',
      },
      {
        de: 'Da erschien der Teufel und bot ihm einen seltsamen Handel an.',
        zh: '這時魔鬼出現了，向他提出一樁古怪的交易。',
        en: 'Then the Devil appeared and offered him a strange bargain.',
      },
      {
        de: 'Sieben Jahre lang dürfe er sich nicht waschen, nicht kämmen und nicht beten und müsse ein Bärenfell tragen.',
        zh: '七年之內他不准洗澡、不准梳頭、不准禱告，還得披著一張熊皮。',
        en: 'For seven years he must not wash, not comb his hair, not pray, and must wear a bearskin.',
      },
      {
        de: 'Hielte er durch, würde er frei und für immer reich; sonst gehöre seine Seele dem Teufel.',
        zh: '若他撐得過去，就能自由，且永遠富有；否則靈魂就歸魔鬼。',
        en: 'If he held out, he would be free and rich forever; otherwise his soul belonged to the Devil.',
      },
      {
        de: 'Der Mantel war immer voller Geld, doch bald sah der Mann wild und furchtbar aus.',
        zh: '那件斗篷裡總是裝滿了錢，可不久這人就變得野蠻又可怕。',
        en: 'The coat was always full of money, but soon the man looked wild and dreadful.',
      },
      {
        de: 'Alle nannten ihn nur den Bärenhäuter und fürchteten sich vor ihm.',
        zh: '大家都只叫他熊皮人，見了他都害怕。',
        en: 'Everyone called him only Bearskin and was afraid of him.',
      },
      {
        de: 'Trotzdem half er den Armen und teilte sein Geld großzügig aus.',
        zh: '儘管如此，他仍幫助窮人，慷慨地把錢分給別人。',
        en: 'Even so, he helped the poor and shared his money generously.',
      },
      {
        de: 'Einmal rettete er einen verarmten alten Mann aus großer Not.',
        zh: '有一次他救了一個落魄的老人，使他脫離困境。',
        en: 'Once he saved an impoverished old man from great distress.',
      },
      {
        de: 'Aus Dankbarkeit versprach ihm der Alte eine seiner drei Töchter zur Frau.',
        zh: '出於感激，老人答應把三個女兒中的一個嫁給他。',
        en: 'Out of gratitude the old man promised him one of his three daughters in marriage.',
      },
      {
        de: 'Die beiden älteren wandten sich voller Ekel ab, doch die jüngste sagte ja.',
        zh: '兩個姊姊嫌惡地別過臉去，最小的女兒卻答應了。',
        en: 'The two elder turned away in disgust, but the youngest said yes.',
      },
      {
        de: 'Der Bärenhäuter brach einen Ring entzwei, gab ihr die Hälfte und zog wieder fort.',
        zh: '熊皮人把一枚戒指掰成兩半，給了她一半，便又離開了。',
        en: 'Bearskin broke a ring in two, gave her half and went away again.',
      },
      {
        de: 'Als die sieben Jahre um waren, musste der Teufel ihn säubern, und er wurde wieder ein schöner Mann.',
        zh: '七年期滿，魔鬼只得把他收拾乾淨，他又變回了一個英俊的男子。',
        en: 'When the seven years were over, the Devil had to clean him up, and he became a handsome man again.',
      },
      {
        de: 'Reich und stattlich kehrte er zurück, und die jüngste Tochter erkannte ihn am halben Ring.',
        zh: '他富有又體面地回來了，最小的女兒憑著那半枚戒指認出了他。',
        en: 'Rich and stately he returned, and the youngest daughter knew him by the half ring.',
      },
      {
        de: 'Die beiden stolzen Schwestern aber vergingen sich vor Ärger, und er heiratete die treue jüngste.',
        zh: '兩個驕傲的姊姊氣得不得了，他則娶了忠厚的小女兒。',
        en: 'But the two proud sisters were consumed with vexation, and he married the faithful youngest.',
      },
    ],
  },
  {
    id: 'kluge-bauerntochter',
    title: 'Die kluge Bauerntochter',
    titleZh: '聰明的農家女',
    emoji: '🌾',
    level: 'B1',
    blurb: '一個農家女靠著過人的機智解開國王的謎題當上王后，又用巧思化解了一場危機。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein armer Bauer fand beim Pflügen einen goldenen Mörser im Acker.',
        zh: '一個窮農夫在犁地時，從田裡挖出一個金臼。',
        en: 'A poor peasant found a golden mortar in his field while plowing.',
      },
      {
        de: 'Seine kluge Tochter warnte: "Gib ihn dem König nicht ohne den Stößel, sonst gibt es Ärger."',
        zh: '他聰明的女兒警告：「別把它獻給國王，除非連杵一起，否則會惹麻煩。」',
        en: 'His clever daughter warned: "Do not give it to the king without the pestle, or there will be trouble."',
      },
      {
        de: 'Der Bauer hörte nicht und schenkte dem König den Mörser allein.',
        zh: '農夫沒聽，只把金臼獻給了國王。',
        en: 'The peasant did not listen and gave the king only the mortar.',
      },
      {
        de: 'Der König verlangte auch den Stößel und warf den Bauern ins Gefängnis.',
        zh: '國王便又要那根杵，還把農夫關進了大牢。',
        en: 'The king demanded the pestle too and threw the peasant into prison.',
      },
      {
        de: 'Immerzu klagte der Bauer: "Hätte ich nur auf meine Tochter gehört!"',
        zh: '農夫不停地哀嘆：「我要是聽女兒的話就好了！」',
        en: 'The peasant kept lamenting: "If only I had listened to my daughter!"',
      },
      {
        de: 'Da ließ der König die kluge Tochter holen und gab ihr ein schweres Rätsel auf.',
        zh: '國王於是召來那聰明的女兒，給她出了一道難解的謎題。',
        en: 'Then the king sent for the clever daughter and set her a hard riddle.',
      },
      {
        de: 'Sie solle kommen: nicht gekleidet und nicht nackt, nicht reitend und nicht gehend.',
        zh: '她得這樣前來：既不穿衣也不裸身，既不騎馬也不步行。',
        en: 'She was to come neither clothed nor naked, neither riding nor walking.',
      },
      {
        de: 'Da wickelte sie sich in ein Fischnetz und ließ sich von einem Esel ziehen, einen Zeh am Boden.',
        zh: '於是她用一張漁網把自己裹起來，讓一頭驢拖著走，一根腳趾點著地。',
        en: 'So she wrapped herself in a fishing net and let a donkey drag her, one toe on the ground.',
      },
      {
        de: 'Der König war begeistert von ihrer Klugheit und machte sie zur Königin.',
        zh: '國王對她的聰慧讚嘆不已，便立她為王后。',
        en: 'The king was delighted with her cleverness and made her his queen.',
      },
      {
        de: '"Aber misch dich nie in meine Urteile", befahl er ihr.',
        zh: '「但你絕不可插手我的判決。」他命令道。',
        en: '"But never meddle in my judgments," he ordered her.',
      },
      {
        de: 'Eines Tages half sie heimlich einem Bauern zu seinem Recht, und der König wurde zornig.',
        zh: '有一天她暗中幫一個農夫討回了公道，國王大怒。',
        en: 'One day she secretly helped a peasant get justice, and the king grew angry.',
      },
      {
        de: 'Er schickte sie fort, erlaubte ihr aber, das Liebste aus dem Schloss mitzunehmen.',
        zh: '他要趕她走，卻准她從宮裡帶走她最珍愛的東西。',
        en: 'He sent her away but allowed her to take the dearest thing from the palace.',
      },
      {
        de: 'In der Nacht ließ sie den König fest einschlafen und trug ihn selbst in ihr altes Elternhaus.',
        zh: '夜裡她讓國王沉沉睡去，親手把他抬回了自己的老家。',
        en: 'In the night she made the king fall fast asleep and carried him herself to her old family home.',
      },
      {
        de: '"Du bist mir das Liebste", sagte sie; da lachte der König, und sie blieben für immer zusammen.',
        zh: '「你就是我最珍愛的。」她說；國王笑了，兩人從此永遠在一起。',
        en: '"You are the dearest thing to me," she said; then the king laughed, and they stayed together forever.',
      },
    ],
  },
  {
    id: 'fitchers-vogel',
    title: 'Fitchers Vogel',
    titleZh: '菲切爾的怪鳥',
    emoji: '🪺',
    level: 'B1',
    blurb: '邪惡的魔法師擄走三姊妹，最小的妹妹靠機智救出姊姊、化裝成怪鳥逃脫，並懲治了惡人。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein böser Zauberer ging als Bettler umher und entführte schöne Mädchen.',
        zh: '一個邪惡的魔法師扮成乞丐四處遊蕩，拐走美麗的女孩。',
        en: 'A wicked sorcerer went about as a beggar and carried off beautiful girls.',
      },
      {
        de: 'So nahm er die älteste von drei Schwestern in sein Haus mit.',
        zh: '他就這樣把三姊妹中的大姊帶回了家。',
        en: 'So he took the eldest of three sisters to his house.',
      },
      {
        de: 'Er gab ihr alle Schlüssel und ein Ei und verbot ihr nur eine einzige Kammer.',
        zh: '他把所有鑰匙和一顆蛋交給她，只禁止她進一個房間。',
        en: 'He gave her all the keys and an egg and forbade her only one single room.',
      },
      {
        de: 'Kaum war er fort, öffnete sie die verbotene Tür und erschrak zu Tode.',
        zh: '他一走，她就打開了那道禁門，嚇得魂飛魄散。',
        en: 'As soon as he was gone, she opened the forbidden door and was frightened to death.',
      },
      {
        de: 'Vor Schreck fiel ihr das Ei zu Boden, und der Fleck ließ sich nicht mehr abwaschen.',
        zh: '嚇得她把蛋掉在地上，那污漬怎麼也洗不掉。',
        en: 'In her fright the egg fell to the floor, and the stain could not be washed off.',
      },
      {
        de: 'Daran sah der Zauberer, dass sie ungehorsam gewesen war, und sie verschwand.',
        zh: '魔法師由此看出她違了命，她便消失不見了。',
        en: 'By this the sorcerer saw she had been disobedient, and she vanished.',
      },
      {
        de: 'Der zweiten Schwester erging es genauso.',
        zh: '二姊的下場也一模一樣。',
        en: 'The same happened to the second sister.',
      },
      {
        de: 'Die jüngste aber war klug und legte das Ei zuerst sicher beiseite.',
        zh: '但最小的妹妹很聰明，先把蛋安穩地放到一邊。',
        en: 'But the youngest was clever and first put the egg safely aside.',
      },
      {
        de: 'Dann öffnete sie die Kammer, fand ihre Schwestern und brachte sie wieder zu sich.',
        zh: '然後她打開那房間，找到了兩個姊姊，把她們救醒。',
        en: 'Then she opened the room, found her sisters and brought them back to life.',
      },
      {
        de: 'Weil ihr Ei sauber blieb, glaubte der Zauberer, sie sei treu, und musste ihr gehorchen.',
        zh: '因為她的蛋保持乾淨，魔法師以為她忠順，便不得不聽她的話。',
        en: 'Because her egg stayed clean, the sorcerer believed her faithful and had to obey her.',
      },
      {
        de: 'Heimlich versteckte sie die Schwestern in einem Korb, den der Zauberer zu ihren Eltern trug.',
        zh: '她偷偷把姊姊們藏進一個籃子，讓魔法師把籃子送到她父母家。',
        en: 'Secretly she hid her sisters in a basket that the sorcerer carried to her parents.',
      },
      {
        de: 'Sich selbst wälzte sie in Honig und Federn, bis sie wie ein seltsamer Vogel aussah.',
        zh: '她把自己滾上蜂蜜和羽毛，直到看起來像一隻怪鳥。',
        en: 'She rolled herself in honey and feathers until she looked like a strange bird.',
      },
      {
        de: 'So entkam sie unerkannt, während die Hochzeitsgäste den "Fitchersvogel" für ein Wunder hielten.',
        zh: '她就這樣不被認出地逃了出來，賓客們還把這「菲切爾怪鳥」當成奇景。',
        en: 'So she escaped unrecognized, while the wedding guests took the "Fitcher\'s bird" for a wonder.',
      },
      {
        de: 'Ihre Familie kam herbei, und der böse Zauberer kam mitsamt seinem Haus im Feuer um.',
        zh: '她的家人趕來了，邪惡的魔法師連同他的房子一起在大火中喪生。',
        en: 'Her family came, and the wicked sorcerer perished with his house in the fire.',
      },
    ],
  },
  {
    id: 'drei-federn',
    title: 'Die drei Federn',
    titleZh: '三片羽毛',
    emoji: '🪽',
    level: 'B1',
    blurb: '老國王吹出三片羽毛來選繼承人，被看輕的小兒子靠地底一隻蟾蜍的幫助贏得了王位。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein alter König hatte drei Söhne; den jüngsten nannte man nur den Dummling.',
        zh: '一位老國王有三個兒子；最小的被叫做傻瓜。',
        en: 'An old king had three sons; the youngest was called only Simpleton.',
      },
      {
        de: 'Um einen Erben zu wählen, blies er drei Federn in die Luft.',
        zh: '為了選繼承人，他把三片羽毛吹向空中。',
        en: 'To choose an heir, he blew three feathers into the air.',
      },
      {
        de: '"Wohin sie fliegen, dahin sollt ihr gehen", sagte der König.',
        zh: '「羽毛飛到哪裡，你們就去哪裡。」國王說。',
        en: '"Where they fly, there you shall go," said the king.',
      },
      {
        de: 'Eine Feder flog nach Osten, eine nach Westen, die dritte fiel gerade zu Boden.',
        zh: '一片往東飛，一片往西飛，第三片直直落到地上。',
        en: 'One feather flew east, one west, the third dropped straight to the ground.',
      },
      {
        de: 'Die zwei älteren Brüder lachten über Dummling, der nirgendwohin gehen konnte.',
        zh: '兩個哥哥嘲笑無處可去的傻瓜。',
        en: 'The two elder brothers laughed at Simpleton, who could go nowhere.',
      },
      {
        de: 'Doch neben der Feder fand Dummling eine Falltür und stieg hinab.',
        zh: '可傻瓜在羽毛旁發現了一道地板門，便走了下去。',
        en: 'But beside the feather Simpleton found a trapdoor and climbed down.',
      },
      {
        de: 'Unten saß eine dicke Kröte mit vielen kleinen Kröten um sich.',
        zh: '下面坐著一隻肥蟾蜍，周圍圍著許多小蟾蜍。',
        en: 'Below sat a fat toad with many little toads around her.',
      },
      {
        de: 'Der König wollte den schönsten Teppich; die Kröte gab Dummling einen prächtigen.',
        zh: '國王要最美的地毯；蟾蜍給了傻瓜一條華麗的。',
        en: 'The king wanted the finest carpet; the toad gave Simpleton a splendid one.',
      },
      {
        de: 'Dann wollte er den schönsten Ring; auch den bekam Dummling von der Kröte.',
        zh: '接著國王要最美的戒指；傻瓜也從蟾蜍那裡得到了。',
        en: 'Then he wanted the most beautiful ring; that too Simpleton got from the toad.',
      },
      {
        de: 'Zuletzt sollte jeder die schönste Frau heimbringen.',
        zh: '最後每人都要帶回最美的女子。',
        en: 'Finally each was to bring home the most beautiful woman.',
      },
      {
        de: 'Die Kröte verwandelte ein kleines Krötlein in ein wunderschönes Mädchen.',
        zh: '蟾蜍把一隻小蟾蜍變成了一位美麗的姑娘。',
        en: 'The toad turned a little toad into a beautiful maiden.',
      },
      {
        de: 'Die Brüder aber brachten nur grobe Bauernweiber mit.',
        zh: '哥哥們卻只帶來粗陋的村婦。',
        en: 'But the brothers brought only coarse peasant women.',
      },
      {
        de: 'So gewann Dummling jede Probe, und der Vater gab ihm das Königreich.',
        zh: '於是傻瓜贏得了每一場比試，父親把王國交給了他。',
        en: 'So Simpleton won every test, and his father gave him the kingdom.',
      },
    ],
  },
  {
    id: 'spindel-weberschiffchen-nadel',
    title: 'Spindel, Weberschiffchen und Nadel',
    titleZh: '紡錘、梭子和針',
    emoji: '🪡',
    level: 'B1',
    blurb: '一個勤勞善良的孤女，靠著教母留下的紡錘、梭子和針，引來尋訪「最窮也最富」新娘的王子。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein armes Mädchen wuchs bei seiner Patin auf, die ihm Spinnen, Weben und Nähen beibrachte.',
        zh: '一個貧窮的女孩在教母身邊長大，教母教她紡紗、織布和縫紉。',
        en: 'A poor girl grew up with her godmother, who taught her to spin, weave and sew.',
      },
      {
        de: 'Als die Patin starb, hinterließ sie ihr nur ein Häuschen, eine Spindel, ein Weberschiffchen und eine Nadel.',
        zh: '教母去世時，只留給她一間小屋、一個紡錘、一個梭子和一根針。',
        en: 'When the godmother died, she left her only a little house, a spindle, a shuttle and a needle.',
      },
      {
        de: 'Das Mädchen war arm, aber fleißig, fromm und bescheiden.',
        zh: '女孩雖窮，卻勤勞、虔誠又謙遜。',
        en: 'The girl was poor but industrious, devout and modest.',
      },
      {
        de: 'Eines Tages suchte ein Königssohn eine Braut, die zugleich die ärmste und die reichste wäre.',
        zh: '有一天，一位王子在尋找一個既最窮又最富的新娘。',
        en: 'One day a prince was looking for a bride who was at once the poorest and the richest.',
      },
      {
        de: 'Er ritt durch das Dorf, während das Mädchen am Fenster saß und spann.',
        zh: '他騎馬穿過村子，那時女孩正坐在窗邊紡紗。',
        en: 'He rode through the village while the girl sat at the window, spinning.',
      },
      {
        de: 'Sie sang leise: "Spindel, Spindel, geh hinaus und bring mir einen Freier ins Haus."',
        zh: '她輕聲唱：「紡錘啊紡錘，快出門去，給我帶個郎君回家裡。」',
        en: 'She sang softly: "Spindle, spindle, go out and bring me a suitor into the house."',
      },
      {
        de: 'Da sprang die Spindel aus ihrer Hand und lief dem Königssohn nach.',
        zh: '紡錘便從她手中跳出來，追著王子跑去。',
        en: 'Then the spindle leapt from her hand and ran after the prince.',
      },
      {
        de: 'Hinter sich zog sie einen glänzenden goldenen Faden her.',
        zh: '它身後拖著一條閃亮的金線。',
        en: 'Behind it trailed a shining golden thread.',
      },
      {
        de: 'Inzwischen webte das Weberschiffchen ganz allein einen wunderschönen Teppich.',
        zh: '與此同時，梭子獨自織出了一張美麗的地毯。',
        en: 'Meanwhile the shuttle wove a beautiful carpet all by itself.',
      },
      {
        de: 'Und die Nadel nähte flink Tücher und schmückte das ganze Häuschen.',
        zh: '而那根針則飛快地縫起布來，把整間小屋裝點一新。',
        en: 'And the needle nimbly sewed cloths and decorated the whole little house.',
      },
      {
        de: 'Dem goldenen Faden folgte der Königssohn bis zu dem Häuschen zurück.',
        zh: '王子順著金線一路找回到那間小屋。',
        en: 'The prince followed the golden thread back to the little house.',
      },
      {
        de: 'Drinnen fand er das Mädchen, das im ärmlichen Kleid wie eine Rose strahlte.',
        zh: '屋裡他看見那女孩，雖衣著寒酸，卻像玫瑰一樣容光煥發。',
        en: 'Inside he found the girl, who in her poor dress shone like a rose.',
      },
      {
        de: '"Du bist die Ärmste und doch die Reichste", sagte er und nahm sie zur Frau.',
        zh: '「你最窮，卻又最富。」他說，便娶她為妻。',
        en: '"You are the poorest and yet the richest," he said, and took her as his wife.',
      },
    ],
  },
  {
    id: 'goldene-schluessel',
    title: 'Der goldene Schlüssel',
    titleZh: '金鑰匙',
    emoji: '🗝️',
    level: 'A2',
    blurb: '一個窮男孩在雪地裡撿到一把金鑰匙和一個小鐵箱——箱裡藏著什麼，故事留給你想像。',
    source: grimmSource,
    segments: [
      {
        de: 'Zur Winterzeit, als tiefer Schnee lag, musste ein armer Junge mit dem Schlitten Holz holen.',
        zh: '寒冬時節，大雪覆蓋大地，一個窮男孩得駕著雪橇去取柴。',
        en: 'In winter, when deep snow lay, a poor boy had to fetch wood on a sledge.',
      },
      {
        de: 'Als er das Holz beisammenhatte und ganz erfroren war, wollte er noch ein Feuer machen.',
        zh: '等他把柴收好，凍得不行，便想先生一堆火取暖。',
        en: 'When he had gathered the wood and was quite frozen, he wanted to make a fire first.',
      },
      {
        de: 'Da scharrte er den Schnee weg und fand auf dem Boden einen kleinen goldenen Schlüssel.',
        zh: '他撥開積雪，在地上發現了一把小小的金鑰匙。',
        en: 'As he scraped away the snow, he found on the ground a little golden key.',
      },
      {
        de: 'Er dachte: "Wo der Schlüssel ist, muss auch das Schloss sein", und grub in der Erde.',
        zh: '他心想：「有鑰匙的地方，一定也有鎖。」便在土裡挖了起來。',
        en: 'He thought: "Where there is a key, there must also be a lock," and dug in the earth.',
      },
      {
        de: 'Da fand er ein eisernes Kästchen.',
        zh: '他果然找到一個小鐵箱。',
        en: 'Then he found a little iron box.',
      },
      {
        de: '"Wenn nur der Schlüssel passt!", dachte er; und wirklich, es war ein kleines Schlüsselloch da.',
        zh: '「但願鑰匙合用！」他想；果然，箱上有個小小的鑰匙孔。',
        en: '"If only the key fits!" he thought; and sure enough, there was a little keyhole.',
      },
      {
        de: 'Er steckte ihn hinein und drehte ihn einmal ganz herum.',
        zh: '他把鑰匙插進去，整整轉了一圈。',
        en: 'He put it in and turned it all the way around once.',
      },
      {
        de: 'Nun müssen wir warten, bis er das Kästchen ganz aufgeschlossen und den Deckel aufgemacht hat; dann erfahren wir, welche wunderbaren Dinge darin lagen.',
        zh: '現在我們得等他把箱子完全打開、掀起蓋子，才會知道裡面藏著什麼奇妙的東西。',
        en: 'Now we must wait until he has fully unlocked the box and lifted the lid; then we shall learn what wonderful things lay inside.',
      },
    ],
  },
  {
    id: 'das-eselein',
    title: 'Das Eselein',
    titleZh: '小驢子',
    emoji: '🫏',
    level: 'B1',
    blurb: '生來像驢子的王子彈得一手好琴，贏得公主的心；一張被燒掉的驢皮，讓他變回了人。',
    source: grimmSource,
    segments: [
      {
        de: 'Ein König und eine Königin wünschten sich lange ein Kind.',
        zh: '一位國王和王后久久盼望一個孩子。',
        en: 'A king and queen long wished for a child.',
      },
      {
        de: 'Endlich kam ein Sohn zur Welt, doch er sah aus wie ein kleines Eselein.',
        zh: '終於一個兒子出生了，可他長得像一頭小驢子。',
        en: 'At last a son was born, but he looked like a little donkey.',
      },
      {
        de: 'Das Eselein wuchs fröhlich heran und lernte, schön die Laute zu spielen.',
        zh: '小驢子快快樂樂地長大，學會了把魯特琴彈得很動聽。',
        en: 'The little donkey grew up merrily and learned to play the lute beautifully.',
      },
      {
        de: 'Doch einmal sah es sein Spiegelbild im Wasser und wurde traurig über seine Gestalt.',
        zh: '但有一次牠在水裡看見自己的倒影，為自己的模樣難過起來。',
        en: 'But once it saw its reflection in the water and grew sad about its shape.',
      },
      {
        de: 'Da zog das Eselein in die Welt hinaus, nur mit einem treuen Begleiter.',
        zh: '於是小驢子帶著一個忠實的同伴，走向了外面的世界。',
        en: 'So the little donkey went out into the world with only a faithful companion.',
      },
      {
        de: 'An einem fremden Hof spielte es so schön, dass alle entzückt waren.',
        zh: '在一個陌生的宮廷裡，牠彈得如此動聽，所有人都聽得入了迷。',
        en: 'At a foreign court it played so beautifully that everyone was enchanted.',
      },
      {
        de: 'Die Königstochter gewann das wunderliche Eselein von Herzen lieb.',
        zh: '公主打從心底愛上了這隻奇特的小驢子。',
        en: 'The king\'s daughter came to love the curious little donkey with all her heart.',
      },
      {
        de: 'Zur Freude aller heirateten die beiden.',
        zh: '在眾人的歡喜中，兩人結了婚。',
        en: 'To everyone\'s joy, the two were married.',
      },
      {
        de: 'In der Nacht aber streifte das Eselein seine Haut ab und war ein schöner junger Mann.',
        zh: '可一到夜裡，小驢子便褪下牠的皮，變成一位英俊的青年。',
        en: 'But at night the little donkey slipped off its skin and was a handsome young man.',
      },
      {
        de: 'Am Morgen zog es die Eselshaut wieder an, und niemand ahnte das Geheimnis.',
        zh: '早上牠又披上驢皮，誰也料想不到這個祕密。',
        en: 'In the morning it put the donkey skin back on, and no one guessed the secret.',
      },
      {
        de: 'Der alte König erfuhr davon und wachte heimlich in der Nacht.',
        zh: '老國王得知此事，便在夜裡偷偷守候。',
        en: 'The old king learned of it and secretly kept watch at night.',
      },
      {
        de: 'Als der junge Mann schlief, warf der König die Eselshaut ins Feuer.',
        zh: '趁年輕人睡著時，國王把那張驢皮扔進了火裡。',
        en: 'While the young man slept, the king threw the donkey skin into the fire.',
      },
      {
        de: 'So blieb er für immer ein Mensch, wurde später König und lebte glücklich mit seiner Frau.',
        zh: '於是他永遠成了人，後來當上國王，和妻子幸福地生活在一起。',
        en: 'So he remained a human forever, later became king and lived happily with his wife.',
      },
    ],
  },
];

export const findStory = (id: string): Story | undefined =>
  stories.find((s) => s.id === id);
