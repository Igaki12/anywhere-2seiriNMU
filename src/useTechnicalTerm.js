import { useState } from 'react'

export const useTechnicalTerm = () => {
  const [technicalTerm, setTechnicalTerm] = useState([
    // term[0]が代表名として大きく表示される。
    {
      term: ['血液抗凝固剤', 'EDTA', 'クエン酸ナトリウム', 'ヘパリン'],
      explanation:
        'EDTAとクエン酸ナトリウムは血中のカルシウムを除去することで、ヘパリンはアンチトロンビンのトロンビン抑制作用を増強することで血液が凝固することを防ぐ',
    },
    {
      term: [
        '平均赤血球容積',
        'mean corpuscular volume',
        'MCV',
        '大球性',
        '小球性',
      ],
      explanation:
        'Ht/赤血球数。正常例は45/5*10^6で、大きいと大球性、小さいと小球性',
    },
    {
      term: [
        '平均ヘモグロビン含有量',
        'mean corpuscular Hb',
        'MCH',
        '高色素',
        '低色素',
      ],
      explanation:
        'Hb値/赤血球数。正常例は16/5*10^6で、大きいと高色素性、小さいと低色素性',
    },
    {
      term: [
        '平均赤血球ヘモグロビン濃度',
        'mean corpuscular Hb concentration',
        'MCHC',
        '低飽和',
        '高飽和',
      ],
      explanation:
        'Hb値/Ht。正常例は16/45で、大きいと高飽和性、小さいと低飽和性',
    },
    {
      term: ['Crush症候群', 'クラッシュ症候群', '挫滅症候群'],
      explanation:
        '筋細胞の壊死などで筋肉組織内のカリウムやミオグロビンなどが急激に血中に供給されると、カリウムイオンが致死的不整脈→心停止を招き、ミオグロビンが尿細管を閉鎖することで急性腎不全や尿毒症を引き起こす。阪神淡路大震災で注目される。「がれきの中の医療」',
    },
    {
      term: ['アドレナリン', 'adrenaline', 'エピネフリン', 'epinephrine'],
      explanation:
        'カテコールアミンの一種で、チロシン→L-ドーパ→ドーパミン→ノルアドレナリン→アドレナリンの経路で合成される。ノルアドレナリンまでは交感神経節後線維や脳でも合成されるが、アドレナリンへの変換は副腎髄質にのみ分布するPNMTが必須。',
    },
    {
      term: ['強心配糖体', 'ウワバイン'],
      explanation:
        '植物から取れる強力な心収縮力増強薬で、Na⁺-K⁺ ATPaseを阻害することで細胞内Na⁺濃度を上昇させる。Na⁺-Ca²⁺ exchangerの活動が遅れた心筋は細胞内Ca²⁺濃度が上昇し収縮力が上昇する',
    },
    {
      term: ['増幅単極肢誘導', 'aVR', 'aVL', 'aVF'],
      explanation:
        '不関電極（電位0）を疑似的に体の中心(Wilsonの中心点)に作り、そこから右手(aVR)、左手(aVL)、左脚(aVF)方向の電位を記録する心電図の誘導法',
    },
    {
      term: ['単極胸部誘導', 'V₁', 'V₂', 'V₃', 'V₄', 'V₅', 'V₆'],
      explanation:
        '不関電極（電位0）を疑似的に体の中心(Wilsonの中心点)に作り、そこから胸部前面（V₁が正中右側～V₆が左側）の方向の電位を記録する心電図の誘導法。V₁~V₂:右室～心室中隔付近、V₃~V₄:左室前壁・心尖部、V₅~V₆:左室側壁',
    },
    {
      term: ['起坐呼吸'],
      explanation:
        '起坐位または半坐位で、やや心臓の位置を高くすることで右心系への静脈還流を減らす呼吸方法',
    },
    {
      term: ['ネフローゼ症候群', '低蛋白血症'],
      explanation:
        '尿に蛋白が流出した結果血中蛋白が減り（低蛋白血症）、むくみ（浮腫）が生じる疾患',
    },
    {
      term: ['アンジオテンシン', 'アンギオテンシン'],
      explanation:
        'アンジオテンシノーゲンは肝臓で合成されるタンパク質で、腎臓輸入細動脈の顆粒細胞由来のレニンによりアンジオテンシンⅠに分解される。さらに血管内皮細胞から放出されるアンジオテンシン変換酵素ACEのはたらきでアンジオテンシンⅡに変換されると、強い血管平滑筋収縮作用で血圧を上げる。',
    },
    {
      term: ['ジアシルグリセロール', 'DG'],
      explanation:
        'ホスホリパーゼC:PLCによって細胞膜のPIP₂→DG+IP₃（イノシトール3リン酸）で作られる。DGはCキナーゼを活性化し、電位依存性Ca²⁺チャネルを活性化することで血管平滑筋収縮に関与する。',
    },
    {
      term: ['イノシトール三リン酸', 'IP₃'],
      explanation:
        'ホスホリパーゼC:PLCによって細胞膜のPIP₂→DG（ジアシルグリセロール）+IP₃で作られる。IP₃は筋小胞体にあるCa²⁺チャネルのIP₃受容体に結合して開口させ、血管平滑筋収縮に関与する',
    },
    {
      term: ['一酸化窒素', 'NO', 'ニトログリセリン'],
      explanation:
        'アドレナリンβ₃受容体やアセチルコリン受容体からの刺激を受けた血管内皮細胞によって産生され、血管を弛緩させる。狭心症に対する薬としてニトログリセリンがあり、NOが血管を拡張させる作用を利用している（舌下投与）。',
    },
    {
      term: ['スターリングの心臓の法則', 'スターリング', 'Frank-Starling'],
      explanation:
        '心筋は伸びた状態の時ほど収縮力が増す特徴があり、心室の充満度に伴って心室筋の収縮力（1回の拍出量）が変化するという法則。この法則には神経は関与しない',
    },
    {
      term: ['ベインブリッジ反射', 'Bainbridge reflex', 'ベインブリッジ'],
      explanation:
        '静脈還流量が増加し心臓の伸展受容器が引き延ばされ興奮すると、迷走神経→血管運動中枢（延髄）→交感神経の経路で心臓の収縮力（1回の拍出量）が増加する。スターリングの法則と並ぶ心拍出量の自動調節機構。',
    },
    {
      term: [
        '心房性ナトリウム利尿ペプチド',
        'ANP',
        'atrial natriuretic peptide',
      ],
      explanation:
        '心房から放出され腎臓に働きかけ尿中へのNa⁺排出を促進する。心房筋が伸展すると放出され、血圧を下げ体液量を減らすことによって心臓への負担を減らす。レニン-アンジオテンシン-アルドステロン系の作用による過度のNa⁺貯留に拮抗する',
    },
    {
      term: [
        'レニン-アンジオテンシン-アルドステロン系',
        'アルドステロン',
        'aldosterone',
        '鉱質コルチコイド',
      ],
      explanation:
        'アルドステロンは副腎皮質球状帯から分泌される鉱質コルチコイドの一種で、腎臓集合管でのNa⁺再吸収を促進し、細胞外液量（血液量）を増加させる。腎臓輸入細動脈壁の顆粒細胞から分泌されるレニンによって制御される。',
    },
    {
      term: ['中枢性尿崩症', '尿崩症', 'バソプレシン感受性尿崩症', '多尿症'],
      explanation:
        '尿崩症はバソプレシン（下垂体後葉由来）の欠乏のために非常に薄い尿が過剰に作られる病気。',
    },
    {
      term: ['過換気症候群', 'hyperventilation syndrome'],
      explanation:
        '心理的ストレス等で過換気（過呼吸）をきたした結果、呼吸性アルカローシスを引きおこす。過呼吸になると血中CO₂が過度に排出され、炭酸の電離平衡（CO₂+H₂O⇔H₂CO₃⇔H⁺+HCO₃⁻）が左に遷移しH⁺が減少し、それを補ったアルブミンがH⁺の代わりにCa²⁺と結合することでFree Ca²⁺が不足し、テタニー症状（筋肉の痙攣・硬直・しびれ等）を引き起こし動けなくなる。',
    },
    {
      term: ['Wenchebach型房室ブロック', 'Wenckebach'],
      explanation:
        '第2度房室ブロックAV block（房室結節=心房→心室間で命令が伝わったり、伝わらなかったりする）の一種で、1)PQ間隔が徐々に伸びて、2)心室に命令が伝わらなくなる（QRS波が見られない）症状を繰り返す。同じ第2度房室ブロックのMobitzⅡ型と比べて危険度が低い。',
    },
    {
      term: [
        '第1度房室ブロック',
        'first-degree atrioventricular block',
        '1度AVブロック',
      ],
      explanation:
        '房室結節=心房→心室間の伝導障害によって、心房から心室への刺激伝導が遅延する病態。正常P波は全てQRS波を伴うが、PR間隔に0.21秒以上の遅延がみられる。心拍数が規則正しく保たれているため自覚症状や血圧低下などを伴わないことがほとんど。',
    },
    {
      term: [
        '第3度房室ブロック',
        '完全房室ブロック',
        'third-degree atrioventricular block',
        'complete AV block',
      ],
      explanation:
        '房室結節=心房→心室間の伝導障害によって、心房から心室への刺激伝導が完全に途絶えている状態。心室は自発的に脈が生じる（補充調律）場合があり、その時はP波より遅いリズムで独立したQRS波が観測される',
    },
    {
      term: ['MobitzⅡ型房室ブロック', 'Mobitz'],
      explanation:
        '第2度房室ブロックAV block（房室結節=心房→心室間で命令が伝わったり、伝わらなかったりする）の一種で、1)PQ間隔は一定で（異常に長い）、2)時々心室に命令が伝わらなくなる（QRS波が見られない）症状を繰り返す。同じ第2度房室ブロックのWenckebach型と比べて危険度が高い。',
    },
    {
      term: ['心房細動', 'atrial fibrillation'],
      explanation:
        '心房のあちこちで勝手に命令が出て、心室が不規則に収縮する。P波の代わりにf波(funny)が観測され、RR間隔がバラバラでやや頻脈となる。不整脈の一種で心房内に血栓を形成しやすいため、ワーファリンなどの抗凝固剤を投与する必要がある。',
    },
    {
      term: ['心室細動', 'ventricular fibrillation'],
      explanation:
        '心室が細かく震えているだけで、血液を送り出すことができない状態。意識・脈がなくAEDでの除細動の対象となる。特徴的な心電図（間隔・幅・高さが全てバラバラ）が観測される。',
    },
    {
      term: ['心室期外収縮', 'premature ventricular contraction'],
      explanation:
        '心室から早めに命令が出ることで、洞房結節からの正常な命令が1回休みとなり、正常より早いタイミングで幅の広いQRS波が出現する。上室期外収縮とは命令が出る場所が異なる（心房など/心室）ため、プルキンエ線維を介さない幅の広いQRS波が観測される',
    },
    {
      term: ['上室期外収縮', 'supraventricular premature contraction'],
      explanation:
        '上室（心房・房室結節・ヒス束）から早めに命令が出ることで、洞房結節からの正常な命令が1回休みとなり、正常より早いタイミングで幅の狭いQRS波が出現する。刺激発生部位によって異常QRS波の前後が微妙に変化する。心室期外収縮とは命令が出る場所が異なる（心室/心房など）ため、プルキンエ線維を介した幅の狭いQRS波が観測される。',
    },
    {
      term: ['心室頻拍', 'ventricular tachycardia'],
      explanation:
        '心室から通常より早いペースで規則的な命令が出る不整脈。RR間隔が短く一定で、QRS波の高さが一定で、特徴的な心電図（心室からプルキンエ線維を介さずに伝わる幅の広い凸型の波）が観測される',
    },
    {
      term: ['上室頻拍', 'supraventricular tachycardia', '発作性上室頻拍'],
      explanation:
        '心臓に異常な電気回路が存在するため命令が心房と心室をぐるぐる回り消えない不整脈。RR間隔が短く一定で、QRS波の高さが一定で、特徴的な心電図（プルキンエ線維を介した幅の狭い∧型の波）が観測される',
    },
    {
      term: ['心房粗動', 'atrial flutter'],
      explanation:
        '命令が心房内でぐるぐる回り消えず、それが数回に1回の割合で定期的に心室へ伝わる不整脈。心房は1分間に300回程度収縮し、洞房結節の伝導速度が遅いため数回に1回の割合で心室へ伝わる。心房細動で生じるf波より大きく規則的なF波が観測される。',
    },
    {
      term: ['右脚ブロック', 'right bundle branch block'],
      explanation:
        'プルキンエ線維の右脚だけが遮断され、右心室の興奮が左に比べて遅れる→QRS波の幅が広く（3目盛り以上だと完全右脚ブロックと呼ばれる）、V₁誘導で大きな+のR’波が観測される。',
    },
    {
      term: ['WPW症候群', 'Wolff-Parkinson-White syndrome'],
      explanation:
        '心房→心室間に異常な副伝導路（ケント束など）が存在することで、信号が早く伝わってしまう状態。PQ間隔が0.12秒以下で、副伝導路を介して早く伝わった信号がデルタ波としてQRS波初期に観測され、またQRS時間の延長がみられる。',
    },
    {
      term: ['洞不全症候群', 'sick sinus syndrome'],
      explanation:
        '洞房結節からの刺激が数秒間、心房に伝わらなくなった状態。心房筋より先の部位全てに一時的に命令が伝わらなくなるため、P波もQRS波も全く見られない時間が生じる。第2度房室ブロックとは遮断箇所が異なり、こちらではP波（心房筋の脱分極）も見られない。',
    },
    {
      term: ['労作性狭心症', '狭心症', 'angina'],
      explanation:
        '心筋に供給される酸素が不足するために胸部に一時的な痛みや圧迫感が起きる病気。発作時はST低下が見られる。心筋梗塞とは違って治療で完治が望める。',
    },
    {
      term: ['左脚ブロック', 'left bundle branch block'],
      explanation:
        'プルキンエ線維の左脚だけが遮断され、左心室の興奮が右に比べて遅れる→QRS波の幅が広く（3目盛り異常だと完全左脚ブロックと呼ばれる）、V₁誘導で深いS波・V₆誘導でRR’波もしくは大きなR波・V₆誘導でST低下や陰性T波が観測される。',
    },
    {
      term: ['高カリウム血症', 'hyperkalemia'],
      explanation:
        '血中のカリウム濃度が高すぎるためK⁺チャネルの外向き電流が阻害される→常時脱分極状態で電位依存性Na⁺チャネルが不活化→活動電位の初動が遅れることにより伝導が遅延する不整脈。カリウムはNa⁺などと比べて順応に時間がかかるため、極端なカリウム保持薬剤投与は厳禁。他にも腎不全や低アルドステロン症が原因となりうる。正常構造p390に詳細',
    },
    {
      term: ['心筋梗塞', 'myocardial infarction'],
      explanation:
        '心筋が壊死することにより壊死部分に向かう起電力が低下することで、異常に深いQ波が観測される。梗塞後30分～数時間ではST上昇がみられる。狭心症と違って完治することはなく、異常Q波は残り続ける。壊死した部分によってST上昇の出現誘導が変化する：例えばV₂～V₄なら前壁/Ⅱ・Ⅲ誘導なら下壁/Ⅰ・V₅～V₆誘導なら側壁',
    },
    {
      term: ['PQ間隔', 'PQ interval'],
      explanation:
        'P波開始～Q波開始（Q波がなければR波）の間隔。正常値は0.12秒～0.20秒=3目盛り～5目盛り',
    },
    {
      term: ['2,3-DPG', '2,3-diphosphoglycerate'],
      explanation:
        '赤血球中の解糖過程で産生。ヘモグロビン酸素解離曲線を右方へ移動させる',
    },
    {
      term: ['ポワズイユの法則', 'ポワズイユ', 'Poiseuille'],
      explanation:
        'ΔP =(8ηl/πr4)*Q (ri液体の粘性，r:管の半径，I:管の長さ，Qは血流量、ΔPは血圧差　）　これより、血管抵抗は、血管半径の4乗に反比例することがわかる。よって、細い血管では血管抵抗が大きく、血圧が大きく低下する',
    },
    {
      term: ['溶血性黄疸', '肝前性黄疸'],
      explanation:
        '赤血球の破壊が亢進し、肝細胞でのビリルビンの処理が追いつかない。非抱合型（間接）ビリルビン濃度が↑。排泄されるビリルビンが増えるので、尿中ウロビリノーゲンが↑',
    },
    {
      term: ['閉塞性黄疸', '肝後性黄疸'],
      explanation:
        '胆道閉塞による胆汁うっ滞。胆道が閉鎖しているため直接ビリルビンが血中へ逆流し、尿から排出される。（尿ビリルビンは正常では－）便が灰白色になり、尿中ウロビリノーゲンが↓。',
    },
    {
      term: ['肝性黄疸', '肝細胞性黄疸'],
      explanation:
        '1)肝組織が線維化し直接ビリルビンの胆管への排泄が障害されるタイプ（慢性肝炎など）では血中に逆流し、血中・尿中ビリルビン濃度が↑、その分尿中ウロビリノーゲンは↓。　一方、2)遺伝的にグルクロン酸抱合障害/ビリルビン取り込み障害がある場合は、間接ビリルビンが変換されにくく血中間接ビリルビンが↑、その分尿中ウロビリノーゲンは↓、',
    },
    {
      term: ['代謝性アシドーシス'],
      explanation: '腎臓の酸排泄が破綻することにより生じる。',
    },
    {
      term: ['糸球体濾過圧'],
      explanation:
        '糸球体濾過圧は静水圧差ΔPと膠原浸透圧差Δπによって決定される。',
    },
    {
      term: ['糸球体濾過量', 'GFR', 'glomerular filtration rate'],
      explanation:
        '糸球体濾過量GFR=Kf(糸球体濾過係数) × 糸球体濾過圧Puf　血管平滑筋による自動調節により体血圧90-180mmHgの範囲内でほぼ一定に保たれる。　正常なら約0.12L/min。輸入細動脈が収縮すると↓、輸出細動脈が収縮すると↑（あまりに収縮すると血流が阻害されるのでやや下がる）',
    },
    {
      term: ['腎血漿流量', 'RPF', 'renal plasma flow'],
      explanation: '正常なら約0.6L/min。輸入細動脈や輸出細動脈が収縮すると↓。',
    },
    {
      term: ['緻密班', 'macula densa'],
      explanation:
        '遠位尿細管の血管極に面する部分。細胞が小型で核が密集している。遠位尿細管の濾液中Cl⁻濃度（濾液流量）を感知しレニン分泌などを誘導する。',
    },
    {
      term: ['血清クレアチニン', 'Creatinine', 'クレアチニン'],
      explanation:
        'Cr:クレアチン（運動時にATPの供給源としてはたらくたんぱく質）の代謝産物。糸球体濾過◎再吸収×尿細管分泌×（クリアされるのがほぼ濾過のステップのみ）。イヌリン同様糸球体濾過量GFRに比例して排泄されるが、腎機能が低下すると排泄できず血液中に増えていく。',
    },
    {
      term: ['イヌリン', 'inulin'],
      explanation:
        '主にフルクトースが32個結合した多糖類。糸球体濾過◎再吸収×尿細管分泌×。→イヌリンクリアランスはGFRを反映する',
    },
    {
      term: ['パラアミノ馬尿酸', 'oara-aminohippuric acid', 'PAH'],
      explanation:
        '馬などの草食動物の尿から発見された有機酸。糸球体濾過・尿細管分泌によってほとんど（約90%）が血漿から除去される。PAHクリアランスは腎血漿流量RPFを反映する',
    },
    {
      term: ['クリアランス', 'Clearance'],
      explanation:
        'クリアランスCA = (分時尿量V * 尿中濃度UA)/血漿濃度PA。ある尿中排泄物が1分間に何mLの血液から除去されたか[mL/min]、を示す指標。',
    },
    {
      term: [
        'Na⁺依存性グルコース輸送体',
        'SGLT',
        'sodium/glucose cotransporter',
      ],
      explanation:
        '小腸や近位尿細管で、管腔→細胞内へNa⁺の濃度勾配に応じてグルコースを輸送する共輸送体。SGLT1は小型（10%を再吸収/予備能）、SGLT2は大型（90%を再吸収）。SGLT2阻害薬は尿糖を排泄させることで血糖降下作用があり、糖尿病や心不全や慢性腎臓病に対して有効',
    },
    {
      term: ['近位尿細管'],
      explanation:
        '再吸収：グルコース(100%),HCO₃⁻(約90%),アミノ酸（100%）,電解質Na⁺,K⁺(受動輸送/約60-70%),H₂O(受動輸送/約60-70%)',
    },
    {
      term: ['ヘンレループ', 'Loop of Henre'],
      explanation:
        'Na⁺/K⁺/2Cl⁻共輸送体やそれによる対向流増幅系(皮質→髄質の方向に大きな浸透圧勾配)により更なる再吸収を行う。下行脚では間質浸透圧↑なので水が受動的に出ていく。',
    },
    {
      term: ['抗利尿ホルモン', 'antidiuretic hormone', 'ADH'],
      explanation:
        '尿を濃縮するホルモン。脱水状態を感知した視床下部浸透圧受容器→下垂体後葉から放出され、集合管の血管側に存在するV₂受容体に結合し水チャネルタンパクaquaporin（水受動輸送）を活性化させ水の透過性が上昇する。',
    },
    {
      term: ['QRS波', 'QRS'],
      explanation:
        'Q波が無ければRS間隔を計測する。正常は0.06~0.10秒=1.5目盛り~2.5目盛り。',
    },
    {
      term: ['カフェイン'],
      explanation:
        'コーヒー、紅茶に含まれる。アデノシン受容体を阻害することで、濾液流量が増加しても輸入細動脈が収縮せず、利尿効果がある。',
    },
    {
      term: ['Na⁺/K⁺/2Cl⁻共輸送体', 'ループ利尿薬作用部位'],
      explanation:
        'ヘンレループ太い上行脚で再吸収される。ループ利尿薬作用部位。Na⁺もK⁺も排泄するので、副作用として低カリウム血症がある',
    },
    {
      term: ['Na⁺/Cl⁻共輸送体', 'サイアザイド利尿薬'],
      explanation:
        '遠位曲尿細管から再吸収される。サイアザイド（3大利尿薬）作用部位Na⁺もK⁺も排泄するので、副作用として低カリウム血症がある。',
    },
    {
      term: ['アルドステロン受容体'],
      explanation:
        '皮質集合管主細胞でNa⁺/K⁺ ATPaseによってNa⁺が再吸収される。アルドステロン受容体拮抗薬（3大利尿薬）作用部位。Na⁺は排泄するが、K⁺は分泌抑制（=K⁺保持）を誘導するので、高カリウム血症が副作用となる。カリウム血症を抑えるため他の利尿薬と併用されやすい。',
    },
    {
      term: ['レニン', 'Renin'],
      explanation:
        '腎臓の輸入細動脈の顆粒細胞から分泌されるホルモン。腎濾液流量低下・交感神経β1刺激・輸入細動脈圧低下により分泌促進される。アンジオテンシノーゲンをアンジオテンシン1に分解し、アンジオテンシンⅡ→全身の血管（輸出細動脈）収縮/アルドステロン→腎集合管でNa⁺再吸収を誘導し最終的に血圧を上昇させる。',
    },
    {
      term: ['アルドステロン', '電解質コルチコイド', 'aldosterone'],
      explanation:
        'レニンなどの制御により副腎皮質から分泌される。腎集合管のアルドステロン受容体に作用してNa⁺/K⁺ ATPaseを活性化しNa⁺再吸収・K⁺分泌を誘導し、体液量の維持・血圧上昇にはたらく。',
    },
    {
      term: ['原発性アルドステロン症'],
      explanation:
        '副腎皮質における自律的なアルドステロン過生成が原因。二次性高血圧・低カリウム血症・夜間多尿など',
    },
    {
      term: ['水利尿薬', 'トルパプタン'],
      explanation:
        '皮質集合管のV₂受容体を阻害し、バソプレシンの作用を抑える。副作用として高Na⁺、高カリウム血症がある。',
    },
    {
      term: ['エリスロポエチン', 'erythropoietin', 'EPO'],
      explanation:
        '貧血・低酸素刺激により腎臓から分泌されるホルモン→赤血球を増加させる。慢性腎臓病では産生低下（腎性貧血）。この場合はEPO注射により治療できる、',
    },
    {
      term: ['低酸素誘導因子', 'HIF', 'hypoxia inducible factor'],
      explanation:
        '低酸素で誘導される転写調節因子。低酸素下でのみ分解されない部品をもち、エリスロポエチンの遺伝子の発現に関わる',
    },
    {
      term: ['間在細胞'],
      explanation:
        '皮質集合管のα間在細胞はアシドーシスや低カリウム血症の際にはたらき、管腔膜のH⁺/K⁺ ATPaseの機能によりH⁺分泌とK⁺再吸収を促進する。β間在細胞はアルカローシス時にHCO₃⁻を分泌する。',
    },
    {
      term: ['パラトルモン', 'PTH', 'parathyroid hormone'],
      explanation:
        '特に血漿Ca²⁺濃度が8mg/dLを下回ると副甲状腺から分泌され、主に3つの経路により血中Ca²⁺濃度を上昇させる。1)破骨細胞に作用し骨吸収→Ca²⁺やPを遊離。　2)腎尿細管でCa²⁺再吸収・P排泄。　3)腎臓でビタミンD₃を活性化（水酸化）し、小腸からCa²⁺吸収を行う。カルシトニンと拮抗的に作用する。',
    },
    {
      term: ['ビタミンD', 'vitaminD', 'ビタミンD₃'],
      explanation:
        'コレステロール誘導体（7-デヒドロコレステロール）が紫外線によりビタミンD₃に変換され、肝臓・腎臓で水酸化されると活性化し、活性型ビタミンD₃は腸管でCa²⁺やP吸収促進作用をする。パラトルモンは腎での水酸化を促進する。外出不足などにより子どものビタミンD欠乏性くる病は増加している。',
    },
    {
      term: ['アニオンギャップ', 'Anion Gap'],
      explanation:
        '正常人体内では血漿中のタンパク質が負電荷に偏っている事で電気的平衡を保っている。[AG] = [Na⁺] - [Cl⁻] - [HCO₃⁻]　正常値12mEq/Lこの濃度が高すぎると代謝性アシドーシスを発症する事がある。',
    },
    {
      term: ['るいそう', 'るい痩', 'emaciation'],
      explanation:
        '脂肪組織が病的に減少した症候。いわゆる痩せの程度が著しい状態。肥満症・症候性肥満と対極にある概念。',
    },
    {
      term: ['コレシストキニン', 'バンクレオザイミン', 'CCK'],
      explanation:
        '主に十二指腸粘膜のI細胞から分泌されるペプチドホルモン。大脳皮質ニューロンや回腸結腸の粘膜下神経細胞中にも含まれる。通過するペプチド・アミノ酸・脂肪酸で刺激され、小腸・大腸の運動性を高め、幽門括約筋を収縮させる。膵酵素分泌を促すバンクレオザイミンと同一の物質。',
    },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
  ])
  const showTechnicalTerm = () => {
    return technicalTerm.filter(
      (value) => value.term && value.term !== [] && value.term !== [''],
    )
  }
  return {
    showTechnicalTerm,
  }
}
