/**
 * conjugate.mjs — 德語動詞變位（事實型資料，非造句）。
 *
 * 歌德 Wortliste 只列動詞原形、不列變位；本模組補上背單字-動詞卡所需的關鍵變化：
 *   現在式第三人稱單數 (präsens 3sg)、過去式第三人稱 (präteritum 3sg)、
 *   完成式分詞 (Partizip II) 與完成式助動詞 (haben/sein)。
 *
 * - 強變化／不規則動詞：查 STRONG 表（語言學上固定的事實）。
 * - 規則（弱變化）動詞：依規則推導（含可分前綴的 ge- 位置、-et 插入、-ieren 不加 ge-）。
 * - 可分前綴的強變化動詞：未列在 STRONG 時，由基礎動詞 + 前綴推導。
 */

/** 強／不規則動詞：lemma → [präsens3sg, präteritum3sg, partizipII, aux] */
const STRONG = {
  sein: ['ist', 'war', 'gewesen', 'sein'],
  haben: ['hat', 'hatte', 'gehabt', 'haben'],
  werden: ['wird', 'wurde', 'geworden', 'sein'],
  // Modalverben
  können: ['kann', 'konnte', 'gekonnt', 'haben'],
  müssen: ['muss', 'musste', 'gemusst', 'haben'],
  dürfen: ['darf', 'durfte', 'gedurft', 'haben'],
  wollen: ['will', 'wollte', 'gewollt', 'haben'],
  sollen: ['soll', 'sollte', 'gesollt', 'haben'],
  mögen: ['mag', 'mochte', 'gemocht', 'haben'],
  // Bewegung / Zustandswechsel → sein
  gehen: ['geht', 'ging', 'gegangen', 'sein'],
  kommen: ['kommt', 'kam', 'gekommen', 'sein'],
  fahren: ['fährt', 'fuhr', 'gefahren', 'sein'],
  laufen: ['läuft', 'lief', 'gelaufen', 'sein'],
  fallen: ['fällt', 'fiel', 'gefallen', 'sein'],
  fliegen: ['fliegt', 'flog', 'geflogen', 'sein'],
  schwimmen: ['schwimmt', 'schwamm', 'geschwommen', 'sein'],
  bleiben: ['bleibt', 'blieb', 'geblieben', 'sein'],
  sterben: ['stirbt', 'starb', 'gestorben', 'sein'],
  wachsen: ['wächst', 'wuchs', 'gewachsen', 'sein'],
  steigen: ['steigt', 'stieg', 'gestiegen', 'sein'],
  springen: ['springt', 'sprang', 'gesprungen', 'sein'],
  geschehen: ['geschieht', 'geschah', 'geschehen', 'sein'],
  reiten: ['reitet', 'ritt', 'geritten', 'sein'],
  rennen: ['rennt', 'rannte', 'gerannt', 'sein'],
  verschwinden: ['verschwindet', 'verschwand', 'verschwunden', 'sein'],
  // haben-Verben (Vokalwechsel)
  essen: ['isst', 'aß', 'gegessen', 'haben'],
  geben: ['gibt', 'gab', 'gegeben', 'haben'],
  nehmen: ['nimmt', 'nahm', 'genommen', 'haben'],
  sehen: ['sieht', 'sah', 'gesehen', 'haben'],
  lesen: ['liest', 'las', 'gelesen', 'haben'],
  sprechen: ['spricht', 'sprach', 'gesprochen', 'haben'],
  treffen: ['trifft', 'traf', 'getroffen', 'haben'],
  helfen: ['hilft', 'half', 'geholfen', 'haben'],
  werfen: ['wirft', 'warf', 'geworfen', 'haben'],
  brechen: ['bricht', 'brach', 'gebrochen', 'haben'],
  gelten: ['gilt', 'galt', 'gegolten', 'haben'],
  vergessen: ['vergisst', 'vergaß', 'vergessen', 'haben'],
  empfehlen: ['empfiehlt', 'empfahl', 'empfohlen', 'haben'],
  stehlen: ['stiehlt', 'stahl', 'gestohlen', 'haben'],
  // haben-Verben (ohne Präsens-Vokalwechsel)
  finden: ['findet', 'fand', 'gefunden', 'haben'],
  binden: ['bindet', 'band', 'gebunden', 'haben'],
  trinken: ['trinkt', 'trank', 'getrunken', 'haben'],
  singen: ['singt', 'sang', 'gesungen', 'haben'],
  beginnen: ['beginnt', 'begann', 'begonnen', 'haben'],
  gewinnen: ['gewinnt', 'gewann', 'gewonnen', 'haben'],
  schreiben: ['schreibt', 'schrieb', 'geschrieben', 'haben'],
  bleiben_x: ['bleibt', 'blieb', 'geblieben', 'sein'],
  treiben: ['treibt', 'trieb', 'getrieben', 'haben'],
  schließen: ['schließt', 'schloss', 'geschlossen', 'haben'],
  genießen: ['genießt', 'genoss', 'genossen', 'haben'],
  gießen: ['gießt', 'goss', 'gegossen', 'haben'],
  verlieren: ['verliert', 'verlor', 'verloren', 'haben'],
  ziehen: ['zieht', 'zog', 'gezogen', 'haben'],
  bieten: ['bietet', 'bot', 'geboten', 'haben'],
  schlafen: ['schläft', 'schlief', 'geschlafen', 'haben'],
  tragen: ['trägt', 'trug', 'getragen', 'haben'],
  schlagen: ['schlägt', 'schlug', 'geschlagen', 'haben'],
  waschen: ['wäscht', 'wusch', 'gewaschen', 'haben'],
  fangen: ['fängt', 'fing', 'gefangen', 'haben'],
  hängen: ['hängt', 'hing', 'gehangen', 'haben'],
  halten: ['hält', 'hielt', 'gehalten', 'haben'],
  lassen: ['lässt', 'ließ', 'gelassen', 'haben'],
  raten: ['rät', 'riet', 'geraten', 'haben'],
  laden: ['lädt', 'lud', 'geladen', 'haben'],
  rufen: ['ruft', 'rief', 'gerufen', 'haben'],
  heißen: ['heißt', 'hieß', 'geheißen', 'haben'],
  stehen: ['steht', 'stand', 'gestanden', 'haben'],
  liegen: ['liegt', 'lag', 'gelegen', 'haben'],
  sitzen: ['sitzt', 'saß', 'gesessen', 'haben'],
  bitten: ['bittet', 'bat', 'gebeten', 'haben'],
  schneiden: ['schneidet', 'schnitt', 'geschnitten', 'haben'],
  leiden: ['leidet', 'litt', 'gelitten', 'haben'],
  streiten: ['streitet', 'stritt', 'gestritten', 'haben'],
  greifen: ['greift', 'griff', 'gegriffen', 'haben'],
  pfeifen: ['pfeift', 'pfiff', 'gepfiffen', 'haben'],
  beißen: ['beißt', 'biss', 'gebissen', 'haben'],
  reißen: ['reißt', 'riss', 'gerissen', 'haben'],
  scheinen: ['scheint', 'schien', 'geschienen', 'haben'],
  schieben: ['schiebt', 'schob', 'geschoben', 'haben'],
  riechen: ['riecht', 'roch', 'gerochen', 'haben'],
  lügen: ['lügt', 'log', 'gelogen', 'haben'],
  treten: ['tritt', 'trat', 'getreten', 'haben'],
  fließen: ['fließt', 'floss', 'geflossen', 'sein'],
  fressen: ['frisst', 'fraß', 'gefressen', 'haben'],
  heben: ['hebt', 'hob', 'gehoben', 'haben'],
  wiegen: ['wiegt', 'wog', 'gewogen', 'haben'],
  schießen: ['schießt', 'schoss', 'geschossen', 'haben'],
  stechen: ['sticht', 'stach', 'gestochen', 'haben'],
  frieren: ['friert', 'fror', 'gefroren', 'haben'],
  scheiden: ['scheidet', 'schied', 'geschieden', 'haben'],
  schweigen: ['schweigt', 'schwieg', 'geschwiegen', 'haben'],
  stinken: ['stinkt', 'stank', 'gestunken', 'haben'],
  weisen: ['weist', 'wies', 'gewiesen', 'haben'],
  biegen: ['biegt', 'bog', 'gebogen', 'haben'],
  // gemischte (Rückumlaut)
  bringen: ['bringt', 'brachte', 'gebracht', 'haben'],
  denken: ['denkt', 'dachte', 'gedacht', 'haben'],
  kennen: ['kennt', 'kannte', 'gekannt', 'haben'],
  nennen: ['nennt', 'nannte', 'genannt', 'haben'],
  brennen: ['brennt', 'brannte', 'gebrannt', 'haben'],
  wissen: ['weiß', 'wusste', 'gewusst', 'haben'],
  tun: ['tut', 'tat', 'getan', 'haben'],
  // häufige präfigierte (explizit, der Korrektheit halber)
  verstehen: ['versteht', 'verstand', 'verstanden', 'haben'],
  bekommen: ['bekommt', 'bekam', 'bekommen', 'haben'],
  gefallen: ['gefällt', 'gefiel', 'gefallen', 'haben'],
  verlassen: ['verlässt', 'verließ', 'verlassen', 'haben'],
  behalten: ['behält', 'behielt', 'behalten', 'haben'],
  erhalten: ['erhält', 'erhielt', 'erhalten', 'haben'],
  anfangen: ['fängt an', 'fing an', 'angefangen', 'haben'],
  ankommen: ['kommt an', 'kam an', 'angekommen', 'sein'],
  mitkommen: ['kommt mit', 'kam mit', 'mitgekommen', 'sein'],
  zurückkommen: ['kommt zurück', 'kam zurück', 'zurückgekommen', 'sein'],
  aufstehen: ['steht auf', 'stand auf', 'aufgestanden', 'sein'],
  einladen: ['lädt ein', 'lud ein', 'eingeladen', 'haben'],
  abfahren: ['fährt ab', 'fuhr ab', 'abgefahren', 'sein'],
  ausgehen: ['geht aus', 'ging aus', 'ausgegangen', 'sein'],
  fernsehen: ['sieht fern', 'sah fern', 'ferngesehen', 'haben'],
  anrufen: ['ruft an', 'rief an', 'angerufen', 'haben'],
  einsteigen: ['steigt ein', 'stieg ein', 'eingestiegen', 'sein'],
  aussteigen: ['steigt aus', 'stieg aus', 'ausgestiegen', 'sein'],
  umsteigen: ['steigt um', 'stieg um', 'umgestiegen', 'sein'],
  mitnehmen: ['nimmt mit', 'nahm mit', 'mitgenommen', 'haben'],
  teilnehmen: ['nimmt teil', 'nahm teil', 'teilgenommen', 'haben'],
  vorschlagen: ['schlägt vor', 'schlug vor', 'vorgeschlagen', 'haben'],
  wehtun: ['tut weh', 'tat weh', 'wehgetan', 'haben'],
};
delete STRONG.bleiben_x;

/** 可分前綴（長的優先比對）。語意上不分離者（über/unter/wieder/durch…）刻意不列。 */
const SEP = [
  'zusammen', 'zurück', 'vorbei', 'weiter', 'fern', 'teil', 'fest', 'frei',
  'mit', 'nach', 'vor', 'weg', 'her', 'hin', 'los',
  'ab', 'an', 'auf', 'aus', 'bei', 'ein', 'um', 'zu',
];
/** 不可分前綴（über/unter/wider 在常見動詞多為不可分，這裡按不可分推導） */
const INSEP = ['be', 'emp', 'ent', 'er', 'ver', 'zer', 'miss', 'ge', 'über', 'unter', 'wider'];

/** 規則動詞中以 sein 構成完成式者（移動/狀態變化） */
const WEAK_SEIN = new Set([
  'reisen', 'wandern', 'klettern', 'folgen', 'begegnen', 'passieren',
  'landen', 'eilen', 'wachen',
]);
/** 詞幹結尾需插入 -e-（除 d/t 外的子音叢 + m/n） */
const NEEDS_ET_STEMS = new Set(['öffn', 'rechn', 'zeichn', 'atm', 'regn', 'ordn', 'trockn', 'widm']);

/** 取詞幹：-eln/-ern 去尾 n，其餘去尾 en。 */
function stemOf(core) {
  if (core.endsWith('eln') || core.endsWith('ern')) return core.slice(0, -1);
  return core.replace(/en$/, '');
}

/** 弱變化推導：回傳 [p3, pt, pp, aux] */
function weakForms(lemma) {
  let prefix = null;
  let sep = false;
  let core = lemma;
  for (const p of SEP) {
    if (lemma.startsWith(p) && lemma.length > p.length + 2) {
      prefix = p;
      core = lemma.slice(p.length);
      sep = true;
      break;
    }
  }
  if (!prefix) {
    for (const p of INSEP) {
      if (lemma.startsWith(p) && lemma.length > p.length + 2) {
        prefix = p;
        sep = false;
        break;
      }
    }
  }
  const stem = stemOf(core);
  const needsE = /[td]$/.test(stem) || NEEDS_ET_STEMS.has(stem);
  const t = needsE ? 'et' : 't';
  const te = needsE ? 'ete' : 'te';
  const noGe = (prefix && !sep) || core.endsWith('ieren');

  let p3 = stem + t;
  let pt = stem + te;
  let pp;
  if (sep) {
    p3 = `${stem + t} ${prefix}`;
    pt = `${stem + te} ${prefix}`;
    pp = `${prefix}ge${stem}${t}`;
  } else {
    pp = `${noGe ? '' : 'ge'}${stem}${t}`;
  }
  const base = sep ? core : lemma;
  const aux = WEAK_SEIN.has(base) || WEAK_SEIN.has(lemma) ? 'sein' : 'haben';
  return [p3, pt, pp, aux];
}

/** 由 STRONG 的基礎動詞 + 前綴推導（未顯式列出的präfigierte強變化動詞）。 */
function derivePrefixedStrong(lemma) {
  for (const p of SEP) {
    if (lemma.startsWith(p) && STRONG[lemma.slice(p.length)]) {
      const [p3, pt, pp, aux] = STRONG[lemma.slice(p.length)];
      return [`${p3} ${p}`, `${pt} ${p}`, `${p}${pp}`, aux];
    }
  }
  for (const p of INSEP) {
    if (lemma.startsWith(p) && STRONG[lemma.slice(p.length)]) {
      const [p3, pt, pp] = STRONG[lemma.slice(p.length)];
      const ppNoGe = pp.startsWith('ge') ? pp.slice(2) : pp;
      return [`${p}${p3}`, `${p}${pt}`, `${p}${ppNoGe}`, 'haben'];
    }
  }
  return null;
}

/**
 * 回傳某動詞原形的關鍵變位。
 * @param {string} lemma 動詞不定式
 * @returns {{ präsens:string, präteritum:string, partizip:string, aux:'haben'|'sein' }}
 */
export function conjugate(lemma) {
  const forms = STRONG[lemma] ?? derivePrefixedStrong(lemma) ?? weakForms(lemma);
  const [präsens, präteritum, partizip, aux] = forms;
  return { präsens, präteritum, partizip, aux };
}

/** 是否為已知的不規則動詞（供品質檢查/標示用）。 */
export function isStrong(lemma) {
  return !!(STRONG[lemma] ?? derivePrefixedStrong(lemma));
}

/** 常用動詞中文字義（事實型字義，非例句；先涵蓋高頻 A1 核心，其餘日後補）。 */
export const GLOSS = {
  sein: '是；存在', haben: '有', werden: '變成；將要',
  können: '能、會', müssen: '必須', dürfen: '可以、被允許', wollen: '想要',
  sollen: '應該', mögen: '喜歡',
  gehen: '走、去', kommen: '來', fahren: '開車、搭乘前往', laufen: '跑、走路',
  fallen: '掉落', fliegen: '飛', schwimmen: '游泳', bleiben: '停留、保持',
  stehen: '站立', liegen: '躺、位於', sitzen: '坐', essen: '吃', trinken: '喝',
  geben: '給', nehmen: '拿、取', sehen: '看見', lesen: '閱讀', schreiben: '寫',
  sprechen: '說、講', sagen: '說', fragen: '問', antworten: '回答',
  hören: '聽', verstehen: '理解、聽懂', wissen: '知道', kennen: '認識',
  denken: '想、思考', glauben: '相信、認為', heißen: '叫做、名為',
  machen: '做、製作', arbeiten: '工作', lernen: '學習', studieren: '（大學）就讀',
  spielen: '玩、演奏', kaufen: '買', kosten: '價值（多少錢）', bezahlen: '付款',
  brauchen: '需要', suchen: '尋找', finden: '找到、覺得', bringen: '帶來',
  holen: '去拿、取來', tragen: '攜帶、穿（衣）', wohnen: '居住', leben: '生活、活著',
  treffen: '遇見、碰面', helfen: '幫助', warten: '等待', öffnen: '打開',
  schließen: '關閉', anfangen: '開始', beginnen: '開始', aufhören: '停止',
  schlafen: '睡覺', aufstehen: '起床', anrufen: '打電話', telefonieren: '通電話',
  einkaufen: '購物', kochen: '煮、烹飪', putzen: '清潔', waschen: '洗',
  lieben: '愛', danken: '感謝', feiern: '慶祝', reisen: '旅行',
  ankommen: '抵達', mitkommen: '一起來', einladen: '邀請', besuchen: '拜訪',
  zeigen: '指示、展示', erklären: '解釋', wiederholen: '重複', üben: '練習',
  vergessen: '忘記', verlieren: '失去、遺失', gewinnen: '贏得', gefallen: '討人喜歡',
  schmecken: '嚐起來（好吃）', regnen: '下雨', schneien: '下雪', dauern: '持續',
  bekommen: '得到、收到', schicken: '寄送', mieten: '租', verkaufen: '賣',
};
