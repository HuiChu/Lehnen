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
];

export const findStory = (id: string): Story | undefined =>
  stories.find((s) => s.id === id);
