import { useState } from 'react'

// import u from './img/question/スクリーンショット 2022-06-24 .png'
import cardiacNerves from './img/answer/cardiacNerves.png'
import synthesizeCatecholamine from './img/answer/synthesizeCatecholamine.png'
import C2020m from './img/question/C2020m.png'
import cardiacIonChannel from './img/answer/cardiacIonChannel.png'
import coronalPlane from './img/answer/coronalPlane.png'
import measureBloodPressure from './img/answer/MeasureBloodPressure.png'
import myocardialInfarction from './img/answer/myocardialInfarction.png'
import hyperventilation from './img/answer/hyperVentilation.png'
import vasoconstriction from './img/answer/vasoconstriction.png'
import vasorelaxation from './img/answer/vasorelaxation.png'
import ventilationPerfusionRatio from './img/answer/ventilationPerfusionRatio.png'
import ecg1 from './img/question/ecg1.png'
import ecg2 from './img/question/ecg2.png'
import ecg3 from './img/question/ecg3.png'
import ecg4 from './img/question/ecg4.png'
import ecg5 from './img/question/ecg5.png'
import ecg6 from './img/question/ecg6.png'
import ecg7 from './img/question/ecg7.png'
import ecg8 from './img/question/ecg8.png'
import ecg9 from './img/question/ecg9.png'
import ecg10 from './img/question/ecg10.png'
import ecg11 from './img/question/ecg11.png'
import ecg12 from './img/question/ecg12.png'
import ecg13 from './img/question/ecg13.png'
import ecg14 from './img/question/ecg14.png'
import ecg15 from './img/question/ecg15.png'
import ecg16 from './img/question/ecg16.png'
import ecg17 from './img/question/ecg17.png'
import ecg18 from './img/question/ecg18.png'
import ecg19 from './img/question/ecg19.png'
import ecg20 from './img/question/ecg20.png'
import ecg21 from './img/question/ecg21.png'
import ecg22 from './img/question/ecg22.png'
import ecg23 from './img/question/ecg23.png'
import ecg24 from './img/question/ecg24.png'
import ecg25 from './img/question/ecg25.png'
import ecg26 from './img/question/ecg26.png'
import ecg27 from './img/question/ecg27.png'
import ecg28 from './img/question/ecg28.png'
import ecg29 from './img/question/ecg29.png'
import ecg30 from './img/question/ecg30.png'
import ecg31 from './img/question/ecg31.png'
import ecg32 from './img/question/ecg32.png'
import ecg33 from './img/question/ecg33.png'
import ecg34 from './img/question/ecg34.png'
import ecg35 from './img/question/ecg35.png'
import ecg36 from './img/question/ecg36.png'
import ecg37 from './img/question/ecg37.png'
import ecg38 from './img/question/ecg38.png'
import ecg39 from './img/question/ecg39.png'
import ecg40 from './img/question/ecg40.png'
import ecg41 from './img/question/ecg41.png'
import ecg42 from './img/question/ecg42.png'
import ecg43 from './img/question/ecg43.png'
import ecg44 from './img/question/ecg44.png'
import ecg45 from './img/question/ecg45.png'
import ecg46 from './img/question/ecg46.png'
import avBlock1 from './img/answer/avBlock1.png'
import avBlock3 from './img/answer/avBlock3.png'
import mobitz from './img/answer/mobitz.png'
import wenckebach from './img/answer/wenckebach.png'
import atrialFibrillation from './img/answer/atrialFibrillation.png'
import atrialFlutter from './img/answer/atrialFlutter.png'
import prematureVcontraction from './img/answer/prematureVcontraction.png'
import RBundleBrunchBlock from './img/answer/RBundleBranchBlock.png'
import supraventricularTachycardia from './img/answer/supraventricularTachycardia.png'
import SVPrematureContraction from './img/answer/SVprematureContraction.png'
import ventricularFibrillation from './img/answer/ventricularFibrillation.png'
import ventricularTachycardia from './img/answer/ventricularTachycardia.png'
import angina from './img/answer/angina.png'
import hyperkalemia from './img/answer/hyperkalemia.png'
import LBundleBranchBlock from './img/answer/LBundleBranchBlock.png'
import sickSinusSyndrome from './img/answer/sickSinusSyndrome.png'
import WPW from './img/answer/WPW.png'

import aldosterone from './img/answer/aldosterone.png'
import kidneyFloodControl from './img/answer/kidneyFloodControl.png'
import vitaminB12 from './img/answer/vitaminB12.png'
import bilirubin from './img/answer/bilirubin.png'
import CD4 from './img/answer/CD4.png'
import coagulation from './img/answer/coagulation.png'
import FEV1 from './img/answer/FEV1%.png'
import haemoglobin from './img/answer/haemoglobin.png'
import ODC from './img/answer/ODC.png'
import ventilationDisorder from './img/answer/ventilationDisorder.png'
import swallowing from './img/answer/swallowing.png'
import parietalCell from './img/answer/parietalCell.png'
import digestProtein from './img/answer/digestProtein.png'
import gastricCancer from './img/answer/gastricCancer.png'
import digestiveSecretion from './img/answer/digestiveSecretion.png'
import portalHypertension from './img/answer/portalHypertension.png'
import adjacentPHinKidney from './img/answer/adjacentPHinKidney.png'
import autonomicNerve from './img/answer/autonomicNerve.png'
import calculateCareer from './img/answer/calculateCareer.JPG'
import carbonicAnhydrase from './img/answer/carbonicAnhydrase.png'
import kidneyPressureBalance from './img/answer/kidneyPressureBalance.png'
import parasympatheticNerve from './img/answer/parasympatheticNerve.png'
import RhPregnancy from './img/answer/RhPregnancy.png'
import sympatheticNerve from './img/answer/sympatheticNerve.png'
import vessel from './img/answer/vessel.png'
import E20202 from './img/question/E20202.png'
import hematopoiesis from './img/answer/hematopoiesis.png'
import gasPressure from './img/answer/gasPressure.png'
import lungCapacity from './img/answer/lungCapacity.png'
import anionGap from './img/answer/anionGap.png'
import ANP from './img/answer/ANP.png'
import collectingTubuleReabsorption from './img/answer/collectingTubuleReabsorption.png'
import diuretic from './img/answer/diuretic.png'
import A201911 from './img/question/A201911.png'
import A201912 from './img/question/A201912.png'
import A201913 from './img/question/A201913.png'
import A201914 from './img/question/A201914.png'
import A201850 from './img/question/A201850.png'
import actionPotential from './img/answer/actionPotential.png'
import glomerularFiltration from './img/answer/glomerularFiltration.png'
import glomeruli from './img/answer/glomeruli.png'
import CDDC from './img/answer/CDDC.png'
import controlP from './img/answer/controlP.png'
import dehydration from './img/answer/dehydration.png'
import H2CO3 from './img/answer/H2CO3.png'
import immunoGloblin from './img/answer/immunoGloblin.png'
import reentry from './img/answer/reentry.png'
import respiratoryReflex from './img/answer/respiratoryReflex.png'
import superoxide from './img/answer/superoxide.png'
import vonWillebrand from './img/answer/vonWillebrand.png'
import cardiacPotential from './img/answer/CardiacPotential.png'
import clearanceExample from './img/answer/clearanceExample.png'
import B20182 from './img/question/B20182.png'
import lipidSynthesize from './img/answer/lipidSynthesize.png'
import lipidAbsorption from './img/answer/lipidAbsorption.png'

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '出席確認など',
      groupContents: [
        {
          detailInfo: 'レジュメ質問',
          questionImg: [],
          questionSentence:
            'ヒスタミンの作用を述べよ。好塩基球以外に、ヒスタミンを分泌する細胞はなにか？',
          choices: [],
          answerImg: [],
          answer:
            'ヒスタミンは血管を拡張する作用がある。好塩基球以外に肥満細胞がヒスタミンを分泌する。',
          commentary: '',
        },
        {
          detailInfo: 'レジュメ質問',
          questionImg: [],
          questionSentence: 'アルカローシスになる理由を化学反応式で説明せよ。',
          choices: [],
          answerImg: [],
          answer:
            '過呼吸により二酸化炭素が肺から排出されるため、炭酸イオンの平衡が移動し、血中の水素イオン濃度が低下する。',
          commentary:
            'CO2 + H20 <=> H2CO3 <=> H + HCO3　この平衡式がCO2濃度低下により左に遷移し、血液のpHが上昇する',
        },
        {
          detailInfo: 'レジュメ質問',
          questionImg: [],
          questionSentence:
            '過呼吸以外の理由で、血液のpHが変化する病態を挙げよ。',
          choices: [],
          answerImg: [H2CO3],
          answer: '腎不全',
          commentary:
            '肺からはCO₂、腎臓からは尿酸などの酸を排出することでpHを調節している。どちらかに異常があると、もう一方がそれを代償しようとする。',
        },
        {
          detailInfo: 'レジュメ質問',
          questionImg: [],
          questionSentence: '血液のCO2やpHの変化は、どのように感知されるか？',
          choices: [],
          answerImg: [autonomicNerve],
          answer: '延髄中枢などの化学受容器で',
          commentary: '',
        },
        {
          detailInfo: 'レジュメ質問7/11',
          questionImg: [],
          questionSentence: '高カリウム血症は、なぜ致死的な不整脈を招くのか？',
          choices: [],
          answerImg: [hyperkalemia],
          answer:
            'カリウムイオンの濃度が細胞外液で高くなると、内向き整流性Kイオンチャネルなどが作用しなくなり、静止膜電位が高くなるとナトリウムチャネルが不活化されパルスが発生しなくなるから。',
          commentary: '',
        },
        {
          detailInfo: 'レジュメ質問7/11',
          questionImg: [],
          questionSentence:
            '高カリウム血症の原因として、どのようなものが考えられるか？',
          choices: [],
          answerImg: [hyperkalemia],
          answer: 'クラッシュ症候群、塩化カリウム製剤投与',
          commentary: '',
        },
        {
          detailInfo: 'レジュメ質問7/11',
          questionImg: [],
          questionSentence:
            '心拡張期は大動脈弁が閉鎖しているのに、なぜ、血圧が維持されるのか？',
          choices: [],
          answerImg: [vessel],
          answer:
            '弾性動脈である大動脈は伸展性に富むため、収縮期に心臓から送り出された血液の一部は大動脈に貯留し、拡張期に縮みながら血液を末梢に送ることで血圧をある程度維持する。',
          commentary:
            '動脈硬化が進行すると最高血圧は高くなり、拡張期血圧は逆に低くなる。',
        },
        {
          detailInfo: 'レジュメ質問7/13',
          questionImg: [],
          questionSentence:
            '緊張したときに、顔面蒼白、心悸亢進、体のほてりが生じるのはなぜか？',
          choices: [],
          answerImg: [autonomicNerve],
          answer:
            '交感神経からのノルアドレナリン分泌によって皮膚の血管が収縮し、心拍出量が増え、熱放出量が減り、ほてりが生じる。',
          commentary:
            '皮膚の血管を収縮させるのはα1受容体、心拍出量が増えるのはβ1受容体。',
        },
        {
          detailInfo: 'レジュメ質問7/14',
          questionImg: [],
          questionSentence:
            '立ち眩みの際に、目の前が暗くなり、しばらくすると胸がドキドキするのはなぜか？',
          choices: [],
          answerImg: [autonomicNerve],
          answer:
            '心臓からの拍出量が減り、脳へ行く血液量が減った後、脳への血流量低下を感知して心機能亢進が起こるから。',
          commentary:
            '血圧低下は頚動脈洞などに存在する高圧受容器が感知して、舌咽神経→交感神経を介して心筋へ作用する',
        },

        {
          detailInfo: '7/26',
          questionImg: [],
          questionSentence: '糸球体でろ過されないものは次のうちどれか',
          choices: ['アミノ酸', 'イヌリン', 'ぶどう糖', 'アルブミン', '電解質'],
          answerImg: [],
          answer: 'アルブミン',
          commentary: '→ネフローゼ症候群',
        },
        {
          detailInfo: '7/26',
          questionImg: [],
          questionSentence: '血清クレアチニンについて、正しいものはどれか',
          choices: [],
          answerImg: [],
          answer: '準備中',
          commentary:
            'アンジオテンシン受容体拮抗薬は輸出細動脈を弛緩させるため一次的にGFRが低下し血清クレアチニンが増加するが、腎機能が低下しているわけではない。',
        },
        {
          detailInfo: '7/26(1)',
          questionImg: [],
          questionSentence:
            'ある疾患の患者において、 血清 Cr(クレ アチニン) 濃度 0.8mg/dL、 24時間蓄尿に おける尿Cr濃度 100mg/dL、 24時間尿量は 1500mLであった。 クレアチニンクリアラ ンスを計算せよ。',
          answerImg: [],
          answer: '130',
          commentary: 'クレアチンクリアランスCCr参考',
        },
        {
          detailInfo: '7/28(1)',
          questionImg: [],
          questionSentence:
            ' A decrease in sodium (Na+) concentration in the distal tubule: (遠位尿細管におけるナト リウム濃度の減少はどの現象を引き起こす か)',
          answerImg: [kidneyFloodControl],
          answer: '',
          commentary:
            'Na⁺濃度の減少=腎濾液流量の減少。緻密班でのCl⁻濃度低下と同値で、緻密班からのシグナル→輸入細動脈でのレニン分泌。※レニンは緻密班からは分泌されない。また腎濾液流量GFRが減少しているので、輸出細動脈は縮小する方向で調節される。ATPは濾液流量が増加したときに作用し緻密班から放出される。',
          choices: [
            'promotes renin release from the  juxtaglomerular cells. (傍糸球体細胞/JG 細胞からレニン放出を促進する)',
            'inhibits renin secretion from the macula densa (緻密斑からのレニン分泌を阻害 する)',
            'decreases constriction of the efferent arteriole. (輸出細動脈の収縮を減少させる)',
            'increases renin secretion from the macula densa.(緻密斑からのレニン分泌 を増加させる)',
            'promotes ATP release from the  juxtaglomerular cells. (傍糸球体細胞/JG 細胞からのATP放出を促進する)',
            'わからない、または、時間切れ',
          ],
        },
        {
          detailInfo: '7/28(2)',
          questionImg: [],
          questionSentence:
            ' Loop diuretics (such as furosemide or bumetanide) produce a diuresis by targeting which of the following transporters?',
          answerImg: [],
          answer: 'NKCC-2 (Na⁺-K⁺-2CI⁻) cotransporters',
          commentary:
            '心臓病治療薬ジキタリスもここにはたらく。Loop diuretics=ループ利尿薬。EnaCは管腔側に存在するナトリウムチャネル。SGLT',
          choices: [
            'Epithelial sodium channel (ENaC)',
            'NKCC-2 (Na+-K+-2CI-) cotransporters',
            'Na+-glucose cotransporters',
            'Na+/K+ ATPase',
            'Na+/H+ antiporters',
            'わからない、または、時間切れ',
          ],
        },
        {
          detailInfo: '7/28(3)',
          questionImg: [],
          questionSentence:
            ' The kidneys perform all of the following functions EXCEPT:(腎臓の機能でないのはどれか)',
          answerImg: [],
          answer: '',
          commentary:
            'H⁺排泄は近位尿細管で行われる。ビタミンDは腎臓・肝臓で水酸化され活性化される。アルドステロンの産生自体は副腎皮質で行われる（腎臓レニンで制御される）アンモニアは腎臓近位尿細管でグルタミン酸Gln',
          choices: [
            'excretion of excess acid (過剰な酸の排 泄)',
            'activation of vitamin D',
            'production of aldosterone',
            'Ammoniagenesis',
            'regulation of fluid and electrolyte homeostasis',
            'わからない、または、時間切れ',
          ],
        },
        {
          detailInfo: '7/28スライド',
          questionImg: [],
          questionSentence:
            '呼吸困難を訴える60歳男性の、以下の動脈血ガス所見を解釈してください。pH7.28(正常値7.35未満) / PaO₂55Torr(正常値80より小さい) / PaCO₂70Torr(正常値45より大きい) / HCO₃⁻32mEq/L',
          choices: [],
          answerImg: [],
          answer: '一部代償された呼吸性アシドーシス',
          commentary:
            'pH7.3未満なので治療必要なアシドーシス。CO₂濃度が高いので呼吸性アシドーシス。一部代償（HCO₃⁻上昇）が起こっている。長期的なアシドーシスは完全に代償されている場合もある。',
        },
        {
          detailInfo: '7/28(4)',
          questionImg: [],
          questionSentence:
            ' Use the following blood values to determine the acid-base disorder.(以下の血液検査値を用いて、 どの酸塩基異常が生じているか判断しなさい) pH=7.28 PC02-26 mmHg HCO3-14 mEq/L Na+=136 mEq/L K+=5.0 mEq/L Cl-=100 mEq/L',
          answerImg: [],
          answer: 'Metabolic acidosis from acid gain',
          commentary:
            'diarrhea:下痢　pH7.4未満なのでacidosis。今回はCO₂もHCO₃⁻も基準値より低い→代謝性Metabolic　炭酸平衡がHCO₃⁻側に傾き（代償）、アニオンギャップを計測すると上昇していることがわかるので、from acid gainとなる。',
          choices: [
            'Metabolic alkalosis',
            'Metabolic acidosis from acid gain',
            'Respiratory acidosis',
            'Metabolic acidosis from diarrhea',
            'Respiratory alkalosis',
            ' わからない、 または、 時間切れ',
          ],
        },
        {
          detailInfo: '7/28',
          questionImg: [],
          questionSentence:
            '1. A patient with renal tubular acidosis ( 尿細管性アシドーシス) would be expected to have which set of blood values?　pH--HCO3-(mmol/L) --PCO2 (mmHg) --- Na+ (mmol/L) --- Cl- (mmol/L)',
          choices: [
            '7.66--22--20---143 --- 111',
            '7.52--38--48---146 --- 100',
            '7.07--14--50---144 --- 102',
            '7.25--12--28---142 --- 102',
            '7.29--14--30---143 --- 117',
          ],
          answerImg: [anionGap],
          answer: '7.29--14--30---143 --- 117',
          commentary:
            'アニオンギャップが正常値なので尿細管性アシドーシスとなる。（Cl⁻が高いことが特徴）',
        },
      ],
    },
    {
      groupTag: '消化器CBT',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '消化管運動について正しいものはどれか？',
          choices: [
            '副交感神経刺激は消化管運動を抑制する',
            '嚥下運動は2相に分けることができる',
            '消化管運動には蠕動・振り子・分節運動がある',
            '舌の運動は舌咽神経支配である',
            '嚥下時、下部食道括約筋は収縮する',
          ],
          answerImg: [swallowing],
          answer: '消化管運動には蠕動・振り子・分節運動がある',
          commentary:
            '副交感神経刺激は消化管運動を促進させる。嚥下運動は3相（口腔・咽頭・食道相。舌の運動は舌下神経支配である。嚥下時に下部食道括約筋は弛緩する',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ヒスタミンH₂受容体拮抗薬が作用するのはどれか',
          choices: [
            '主細胞',
            '壁細胞',
            '副細胞',
            'アウエルバッハ神経叢',
            'マイスナー神経叢',
          ],
          answerImg: [parietalCell],
          answer: '壁細胞',
          commentary:
            'H₂受容体のの他ガストリン受容体、M₁ムスカリン性アセチルコリン受容体が胃酸分泌を刺激する',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '胃酸の役割はどれか',
          choices: [
            '糖の分解',
            '食物の殺菌',
            'ペプシンの変性',
            '粘膜保護',
            'タンパク吸収',
          ],
          answerImg: [],
          answer: '食物の殺菌',
          commentary:
            '胃酸はpH1~3で、ペプシノーゲン（→ペプシン）の変性を促進する。ペプシンによりタンパク質の消化は行われるが、吸収には関与しない。粘膜保護は表面粘膜細胞からの粘液、糖の分解は唾液や膵液や小腸膜酵素で行われる。胃で吸収されるのはアルコールなどごく少量。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'タンパク質の分解に関与しないのはどれか',
          choices: [
            'ペプシン',
            'アミラーゼ',
            'トリプシン',
            'エラスターゼ',
            'キモトリプシン',
          ],
          answerImg: [digestProtein],
          answer: 'アミラーゼ',
          commentary:
            'アミラーゼはデンプン→マルトースなどに分解する酵素。他はタンパク質分解酵素である',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '小腸上皮細胞においてナトリウムと共輸送されるのはどれか',
          choices: ['ビタミンB12', '鉄', '脂質', '尿素', 'グルコース'],
          answerImg: [],
          answer: 'グルコース',
          commentary:
            'グルコースは小腸上皮細胞でナトリウムと共輸送される:SGLT1。ほか、脂質・鉄は主に空腸、ビタミンB12は回腸、アンモニアは胃や小腸で吸収されるが、Naとの共輸送ではない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '60歳男性。小腸大量切除術後、完全静脈栄養にて加療中である。術後3か月目に四肢末端に落屑を伴う疣贅, 壊死を認めた。原因として最も考えられるのはどれか。',
          choices: [
            '葉酸欠乏',
            'ビタミンC',
            'ビタミンB₁欠乏',
            '必須アミノ酸欠乏',
            '亜鉛欠乏',
          ],
          answerImg: [],
          answer: '亜鉛欠乏',
          commentary:
            '亜鉛は小腸で吸収される。欠乏すると四肢末端の紅斑・びらん・味覚障害・創傷治癒遅延が生じる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '小腸で生成される食事由来のリポタンパク質はどれか',
          choices: ['カイロミクロン', 'LDL', 'IDL', 'VLDL', 'HDL'],
          answerImg: [lipidSynthesize],
          answer: '',
          commentary:
            'カイロミクロンは、食事により脂質を吸収する際に小腸で合成される。VLDLは肝臓で合成され、VLDL→IDL→LDLとなる',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '消化管ホルモンの作用の組み合わせで正しいのはどれか',
          choices: [
            'ガストリン-下部食道括約筋弛緩',
            'コレシストキニン-Oddi括約筋収縮',
            'セクレチン-胆汁分泌抑制',
            'VIP-小腸液分泌促進',
            'ソマトスタチン-胃酸分泌促進',
          ],
          answerImg: [],
          answer: 'VIP(血管作動性腸管ペプチド)-小腸液分泌促進',
          commentary:
            '胃酸分泌抑制・小腸液分泌促進・血管拡張・心拍出量増加作用を持つ。他は全て逆で、ガストリンは下部食道括約筋を収縮、CCKはOddi括約筋を弛緩、セクレチンは胆汁分泌促進、ソマトスタチンは胃酸など全体的に抑制としてはたらく。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '肝臓の生理について誤っているものはどれか',
          choices: [
            '胆汁合成を行う',
            '血小板合成を行う',
            '門脈血流は肝動脈血流より多い',
            'Cantlie（カントリー）線は外科的右葉と外科的左葉を分ける',
            '外科的右葉は外科的左葉より大きい',
          ],
          answerImg: [],
          answer: '血小板合成を行う',
          commentary: '血小板合成は骨髄巨核球が行う。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '肝臓を構成する細胞とその役割の組み合わせで適切なのはどれか',
          choices: [
            '肝実質細胞-異物の貪食',
            '肝星細胞-ビタミンAの貯蔵',
            '胆管上皮細胞-胆汁生成',
            '伊東細胞-抗原提示',
            'Kupffer(クッパー細胞)-コラーゲン産生',
          ],
          answerImg: [],
          answer: '肝星細胞-ビタミンAの貯蔵',
          commentary:
            '肝星細胞は伊東細胞とも呼ばれ、体内の80%のビタミンAが貯蔵される。他、Kuppfer細胞は異物の貪食、胆汁合成は肝実質細胞が担当する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '膵液について誤っているのはどれか？',
          choices: [
            'pH3で活性が最大となる。',
            'リパーゼは脂肪を分解する',
            'アミラーゼはデンプンを分解する',
            'トリプシンはタンパクを分解する',
            '重炭酸イオンを含んでいる。',
          ],
          answerImg: [],
          answer: 'pH3で活性が最大となる',
          commentary:
            '膵液は十二指腸に分泌され、pH8~9のHCO₃⁻存在下で活性が高まる。膵液はアミラーゼ（デンプン→マルトース）トリプシン（タンパク質→ペプチド）、リパーゼ（脂肪→脂肪酸・グリセリン）など多様な酵素を含んでいる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '胃酸分泌における腸相に関与するのはどれか',
          choices: [
            'ヒスタミン',
            'アセチルコリン',
            'セクレチン',
            'ガストリン',
            'モチリン',
          ],
          answerImg: [digestiveSecretion],
          answer: 'セクレチン',
          commentary:
            '胃酸分泌は脳相（刺激）・胃相（刺激）・腸相（抑制）の3相。脳相では、視覚・味覚刺激などにより迷走神経からアセチルコリンの分泌→ガストリン（G細胞）・胃酸（壁細胞）・ヒスタミン（ECL細胞・肥満細胞）などの分泌を促す。胃相では胃内に入った食物による物理的刺激などによりガストリン（G細胞）・胃酸分泌などが促進される。腸相では、食物が十二指腸に達することによりセクレチン（十二指腸のS細胞）分泌が促進→ガストリン・胃酸分泌を抑制する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '嚥下の際に行われるのはどれか',
          choices: [
            '舌根の下降',
            '咽頭の後方移動',
            '下鼻道の閉塞',
            '咽頭の挙上',
            '食道の挙上',
          ],
          answerImg: [swallowing],
          answer: '咽頭の挙上',
          commentary:
            '舌根と咽頭は一塊として前上方に挙上し、舌根部の後方移動と伴って、咽頭が舌根部に押し付けられ咽頭蓋が咽頭前庭を覆うように閉塞し、食塊が気道に侵入するのを防ぐ。その他、閉塞するのは下鼻道ではなく鼻咽頭腔（咽頭相）で、舌根は膨隆（口腔相）したり後方移動（咽頭相）したりし、咽頭は咽頭挙筋により挙上（咽頭相）する。食道が挙上することはない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '早期胃癌の深達度で最も深いのはどれか',
          choices: ['粘膜下層', '粘膜固有層', '漿膜', '固有筋層', '粘膜筋板'],
          answerImg: [gastricCancer],
          answer: '粘膜下層',
          commentary:
            '早期胃癌は粘膜下層までの浸潤である。上皮→粘膜固有層→粘膜筋板→粘膜下層→固有筋層（内斜・中輪・外縦）→漿膜の順に深くなり、粘膜下層までの癌を早期胃癌という。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '胃全摘手術の後も分泌が障害されないのはどれか',
          choices: [
            '内因子',
            'トリプシン',
            'ソマトスタチン',
            'ガストリン',
            'ペプシン',
          ],
          answerImg: [],
          answer: 'トリプシン',
          commentary:
            'トリプシンは膵から分泌される蛋白分解酵素で、胃全摘にて障害されない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '肝硬変において腹水の原因となるのはどれか？',
          choices: [
            '血漿膠原浸透圧低下',
            '糸球体濾過量の増加',
            '血漿タンパク増加',
            '血管浸透圧亢進',
            '循環血漿量増加',
          ],
          answerImg: [portalHypertension],
          answer: '血漿膠原浸透圧低下',
          commentary:
            '肝硬変での腹水貯留には、1)肝でのアルブミン合成阻害による膠原浸透圧低下、2)肝線維化による門脈圧亢進などが関与している。その他糸球体濾過量が低下すると体内におけるH₂O・ナトリウム貯留がみられるようになり、蕁麻疹などでは血管浸透圧亢進が浮腫を誘導する。',
        },
        {
          detailInfo: 'CBT準拠問題',
          questionImg: [],
          questionSentence:
            '消化管の感染防御システムのうち、自然免疫に関係するのはどれか',
          choices: ['壁細胞', '杯細胞', '形質細胞', '樹状細胞', 'パネート細胞'],
          answerImg: [],
          answer: 'パネート細胞',
          commentary:
            '壁細胞は胃酸分泌、杯細胞は粘液分泌でともに非免疫系の防御システムである。一方形質細胞は免疫グロブリン産生、樹状細胞は抗原提示でともに獲得免疫系の防御システムである。パネート細胞は小腸陰窩に存在してリゾチームなどのAMP（抗微生物タンパク質）を分泌する自然免疫系の防御システムである。',
        },
        {
          detailInfo: 'CBT準拠問題',
          questionImg: [],
          questionSentence: '消化管の壁内神経叢について正しいのはどれか。',
          choices: [
            '消化管の蠕動運動を抑制している',
            '食道から小腸までの消化管壁内に存在する',
            'マイスナーMessner神経叢は輪走筋と縦走筋の間に存在する。',
            '先天的な欠如によってヒルシュスプリングHirschsprung病を発症する',
            'アウエルバッハAuerbach神経叢は中枢神経からの指令がないと機能しない。',
          ],
          answerImg: [],
          answer:
            '先天的な欠如によってヒルシュスプリングHirschsprung病を発症する',
          commentary:
            '腸管神経系は食道から直腸までの消化管壁内に存在し、消化管運動や腸液分泌をコントロールしている。ヒルシュスプリングHirschsprung病（無神経叢性巨大結腸症）は、筋層間神経叢・粘膜下神経叢の先天的欠損により発症する。この患者では無神経節部位における蠕動運動が欠如しており、小児では3週間に1回の割合以下でしか排便できない。',
        },
        {
          detailInfo: 'CBT準拠問題',
          questionImg: [],
          questionSentence: '肝臓の働きについて正しいのはどれか',
          choices: [
            'ビタミンCを貯蔵する',
            'アンモニアから尿酸を産生する',
            'グルコースからアミノ酸を産生する',
            'β酸化によりコレステロールを産生する',
            'グルコースをグリコーゲンに変換して貯蔵する',
          ],
          answerImg: [],
          answer: 'グルコースをグリコーゲンに変換して貯蔵する',
          commentary:
            'ビタミンCは貯蔵できない。アンモニアから産生されるのは尿素。アミノ酸はグルコースから産生されない（アミノ酸→グルコースは起こる）β酸化は脂肪酸の分解',
        },
        {
          detailInfo: 'CBT準拠問題',
          questionImg: [],
          questionSentence: '胃液の作用について正しいのはどれか',
          choices: [
            '糖分解酵素を多量に含む',
            'ミセルの形成に重要である',
            '脂肪分解酵素を多量に含む',
            'ビタミンB12の吸収に重要である',
            'タンパク質の分解吸収に重要である。',
          ],
          answerImg: [],
          answer: 'ビタミンB12の吸収に重要である',
          commentary:
            '胃液に含まれる主な消化酵素はペプシノーゲンである。これはタンパク質の分解酵素であるが、この酵素が欠乏しても膵液中の酵素があればタンパク質の分解吸収に支障はない。ミセル形成は胆汁の作用である。胃液の内因子がビタミンB12の吸収に必要不可欠である。',
        },
        {
          detailInfo: 'CBT準拠問題',
          questionImg: [],
          questionSentence: '胃酸の分泌を抑制するのはどれか',
          choices: [
            'ガストリン',
            'ヒスタミン',
            '迷走神経刺激',
            'アセチルコリン',
            'プロトンポンプ阻害薬',
          ],
          answerImg: [parietalCell],
          answer: 'プロトンポンプ阻害薬',
          commentary:
            '胃酸の分泌機序にプロトンポンプは必須である。ガストリン・ヒスタミン・アセチルコリン（迷走神経刺激）はいずれも胃液分泌を促進する',
        },
        {
          detailInfo: 'CBT準拠問題',
          questionImg: [],
          questionSentence: '膵液について正しいのはどれか',
          choices: [
            '酸性である',
            'ペプシンを含む',
            'リパーゼを含む',
            'マルターゼを含む',
            '脂肪の乳化に重要である',
          ],
          answerImg: [],
          answer: 'リパーゼを含む',
          commentary:
            'ペプシンは胃液中、マルターゼは小腸上皮の酵素である。乳化は胆汁の作用。胃液の酸性を中和するために、膵液にはHCO₃⁻が多量に含まれていることを知らなければならない。',
        },
        {
          detailInfo: 'CBT準拠問題',
          questionImg: [],
          questionSentence: '膵液の分泌刺激と分泌物の関係で正しいのはどれか',
          choices: [
            '迷走神経の刺激-酵素を多量に含む',
            'セクレチンによる刺激-酵素を多量に含む',
            '十二指腸の酸による刺激-酵素を多量に含む',
            'ガストリンによる刺激-HCO₃⁻を多量に含む',
            'コレシストキニンによる刺激-HCO₃⁻を多量に含む',
          ],
          answerImg: [],
          answer: '迷走神経の刺激-酵素を多量に含む',
          commentary:
            '酵素を多量に含む膵液と、HCO₃⁻を多量に含む膵液とでは、分泌刺激が異なっている。迷走神経・コレシストキニンCCK・ガストリンは消化酵素を多量に分泌させる。酸やセクレチンはHCO₃⁻を分泌させる。HCO₃⁻は胃酸を中和する。',
        },
        {
          detailInfo: 'CBT準拠問題',
          questionImg: [],
          questionSentence:
            '膵液の分泌機能が低下したときの症候として正しいのはどれか。',
          choices: [
            '便の比重が大きくなる',
            '血液凝固能が低下する',
            'ビタミンB12の吸収が低下する',
            '十二指腸内がアルカリ性に傾く',
            '骨へのカルシウム沈着が多くなる',
          ],
          answerImg: [],
          answer: '血液凝固能が低下する',
          commentary:
            '脂肪吸収が低下するため、便の比重は小さくなる。血液凝固能低下は、主にビタミンK吸収不足によるビタミンK依存因子の産生低下が原因である。ビタミンB12吸収低下は胃液分泌障害による。膵液にはHCO₃⁻が含まれるので、分泌が低下すると酸性に傾く。脂溶性ビタミンD吸収不全によりカルシウム吸収も低下する。',
        },
        {
          detailInfo: 'CBT準拠問題',
          questionImg: [],
          questionSentence: '小腸における栄養素の吸収について正しいのはどれか',
          choices: [
            '脂肪はミセルの形で吸収される',
            '側底膜には2種類のグルコース輸送体GLUT2・GLUT5がある',
            '上皮細胞で形成される主要なリポタンパク質はキロミクロンである。',
            '冊子縁のNa⁺-グルコース輸送体SGLT1はATPを必要する',
            'タンパク質は終末消化によりポリペプチドまで分解されて吸収される',
          ],
          answerImg: [lipidAbsorption],
          answer:
            '上皮細胞で形成される主要なリポタンパク質はキロミクロンである。',
          commentary:
            'ミセルは最終消化された後、吸収される。側底膜にあるグルコース輸送体はGLUT2のみである。Na⁺-グルコース共輸送体SGLT1は二次性能動輸送であってATPはない。',
        },
        {
          detailInfo: 'CBT準拠問題',
          questionImg: [],
          questionSentence:
            '手術により小腸を90%除去した患者に最も生じがたい病態はどれか',
          choices: ['貧血', '脱水', '脂肪便', '骨粗鬆症', 'るいそう（やせ）'],
          answerImg: [],
          answer: '脱水',
          commentary:
            '栄養素の吸収不全によりるいそう・脂肪便が生じる。鉄・ビタミンB12吸収不全の結果貧血も生じる。ビタミンD・カルシウム吸収不全により骨粗鬆症にもなりやすい。対して、塩分や水は残存している腸（大腸が主）で吸収可能である。',
        },
        {
          detailInfo: 'CBT準拠問題',
          questionImg: [],
          questionSentence: '消化管ホルモンで正しいのはどれか',
          choices: [
            'グレリンは摂食によって分泌が増加する。',
            'コレシストキニンは中枢神経系にも存在する',
            'ガストリンは幽門前庭のG細胞から管腔側へ分泌される',
            'ソマトスタチンは成長ホルモン放出ホルモンとも呼ばれる',
            '膵液によって胃からの酸が中和されるとセクレチン分泌は増加する。',
          ],
          answerImg: [],
          answer: 'コレシストキニンは中枢神経系にも存在する',
          commentary:
            '消化管ホルモン（広義）は消化管内分泌細胞・神経などから放出される。コレシストキニンは上部小腸の粘膜上皮のI細胞から分泌されるが、中枢神経系にも存在し、食物摂取の調節にも関与しているといわれている。',
        },
        // {
        //   detailInfo: 'CBT準拠問題',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ['', '', '', '', ''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '2020中間(記述以外)',
      groupContents: [
        {
          detailInfo: 'A(1)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'プルキンエ線維の伝達速度は、心室筋の伝達速度よりも速い',
            '房室結節の伝達速度は、心房筋の伝達速度よりも速い',
            '交感神経が興奮すると、洞房結節の興奮頻度が増加する',
          ],
          answerImg: [cardiacNerves],
          answer:
            'プルキンエ線維の伝達速度は、心室筋の伝達速度よりも速い/交感神経が興奮すると、洞房結節の興奮頻度が増加する',
          commentary:
            '神経伝達は径が大きいほど速い：プルキンエ線維>心筋>結節。心臓に豊富なβ1アドレナリン受容体は心機能亢進作用がある。',
        },
        {
          detailInfo: 'A(2)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'カテコールアミンは、チロシンから合成される',
            'ノルアドレナリンは、アドレナリンから合成される',
            'L-ドーパは、パーキンソン病の治療薬として用いられる',
          ],
          answerImg: [synthesizeCatecholamine],
          answer:
            'カテコールアミンは、チロシンから合成される/L-ドーパは、パーキンソン病の治療薬として用いられる',
          commentary:
            'パーキンソン病は脳黒質でドーパミン産生が低下する病気であるが、ドーパミン自体は血液脳関門を通過できないためL-DOPAが治療で使われる',
        },
        {
          detailInfo: 'A(3)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '最低血圧が高くなると、前負荷が増大する',
            '心室の拡張終期容量は、後負荷の指標になる',
            'Frank-Starlingの法則によると、前負荷が増加すれば、一回拍出量も増加する',
          ],
          answerImg: [],
          answer:
            'Frank-Starlingの法則によると、前負荷が増加すれば、一回拍出量も増加する',
          commentary:
            '最低血圧は拍出時の負担に関係する（後負荷）。拡張終期容量は収縮する直前にかかる負荷（前負荷）',
        },
        {
          detailInfo: 'A(4)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '1音は、房室弁が開放する際に聴取される',
            '2音は、動脈弁の閉鎖時に聴取される',
            '下半身のリンパ管は胸管に合流して、右静脈角で静脈に合流する',
          ],
          answerImg: [],
          answer: '2音は、動脈弁の閉鎖時に聴取される',
          commentary: '1音は閉鎖音、下半身のリンパ管は左静脈角で合流する',
        },
        {
          detailInfo: 'A(5)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'α1アドレナリン受容体の刺激は、末梢血管平滑筋を収縮させ、その結果拡張期血圧を上昇させる',
            'β1アドレナリン受容体の刺激は、心拍出量を増加させる',
            'β2アドレナリン受容体の刺激は、気管支平滑筋を収縮させる',
          ],
          answerImg: [sympatheticNerve],
          answer:
            'α1アドレナリン受容体の刺激は、末梢血管平滑筋を収縮させ、その結果拡張期血圧を上昇させる/β1アドレナリン受容体の刺激は、心拍出量を増加させる',
          commentary:
            'β2アドレナリン受容体の刺激は、気管支平滑筋を弛緩させる（気管支を収縮させるのは副交感神経系）',
        },
        {
          detailInfo: 'A(6)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'Na-Kイオンポンプは、3個のNaイオンを排出して2個のKイオンを取り込む',
            'Na-Kイオンポンプは、強心配糖体により活性化される',
            'Na-Caイオン交換系では、3個のNaイオンと1個のCaイオンが交換される',
          ],
          answerImg: [cardiacIonChannel],
          answer:
            'Na-Kイオンポンプは、3個のNaイオンを排出して2個のKイオンを取り込む/Na-Caイオン交換系では、3個のNaイオンと1個のCaイオンが交換される',
          commentary: '強心配糖体はNa-Kイオンポンプの阻害剤。',
        },
        {
          detailInfo: 'A(7)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'P波は洞房結節の脱分極を反映する',
            'QRS波は心室の脱分極を反映する',
            '洞房結節の自動能が低下すると、PQ間隔が延長する',
          ],
          answerImg: [],
          answer: 'QRS波は心室の脱分極を反映する',
          commentary:
            'P波は心房筋の脱分極（洞房結節の脱分極はさらに速度が遅いため心電図に映らない）。またPQ間隔が長くなるのは房室ブロックなど、心房→心室への伝導路に異常が見られるとき。',
        },
        {
          detailInfo: 'A(8)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '心筋梗塞では、発症後30分から2時間程度経過した時点で、ST上昇を認める',
            '心筋梗塞では、胸痛が消失した後も、異常Q波が残る',
            'V1,V2,V3,V4で異常Q波を認めた際は、前壁中隔梗塞が疑われる',
          ],
          answerImg: [myocardialInfarction],
          answer: 'すべて正しい',
          commentary:
            '異常Q波は壊死した心筋が興奮伝導を止めることによって発生する、負に大きなQ波の観測',
        },
        {
          detailInfo: 'A(9)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'Ⅱ誘導では、左手と左足の電位差を計測する',
            'aVR誘導では、右手と左脚の電位差を計測する',
            'V₁の電極は、第5肋間胸骨右縁に装着する',
          ],
          answerImg: [coronalPlane],
          answer: '全て誤り',
          commentary:
            'Ⅱ誘導は右手→左脚、Ⅲ誘導は左手→左脚。aVR,aVL,aVFは増幅単極肢誘導と呼ばれる。',
        },
        {
          detailInfo: 'A(10)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '胎児では、右心室の血液は卵円孔を通過して左心室へ流入する',
            '胎児では、肺動脈の血液が動脈管を通過して大動脈へ流入する',
            '卵円孔は、生後六ヶ月程度で閉鎖して卵円窩となる',
          ],
          answerImg: [],
          answer: '胎児では、肺動脈の血液が動脈管を通過して大動脈へ流入する',
          commentary:
            '卵円孔は心房中隔のシャントで、右心房から左心房への流れ。卵円孔が封鎖するのは出生直後（個人差あり）',
        },
        {
          detailInfo: 'A(11)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '心臓から拍出された血液のうち、約5%が冠動脈へ流れる',
            '心臓から拍出された血液のうち、約20%が腎臓へ流れる',
            '心臓から拍出された血液のうち、約15%が脳へ流れる',
          ],
          answerImg: [],
          answer: 'すべて正しい',
          commentary:
            '安静時は5%が冠動脈へ、20%が腎臓へ、15%が脳へ、30%が内臓へ、15%が筋へ、10%が皮膚へ',
        },
        {
          detailInfo: 'A(12)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '運動時に内臓への血流量が低下するのは、内臓の毛細血管が収縮するからである',
            '腎臓は、ビタミンAを活性化させる作用を有す',
            '大静脈が右心房へ入る部分の圧を中心静脈圧という',
          ],
          answerImg: [],
          answer: '大静脈が右心房へ入る部分の圧を中心静脈圧という',
          commentary:
            '毛細血管は平滑筋を持たず、血流調節を行っているのは主に細動脈。腎臓が活性化するのはビタミンD',
        },
        {
          detailInfo: 'A(13)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '左冠動脈の血流量は、心臓の収縮期よりも拡張期の方で多い。',
            '冠動脈の血流量は、局所の酸素濃度の低下や、水素イオン・乳酸・アデノシンなどの上昇によって増加する',
            '静脈の血液量は、動脈の血液量よりも多い。',
          ],
          answerImg: [vessel],
          answer: 'すべて正しい',
          commentary: '',
        },
        {
          detailInfo: 'A(14)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '通常の血圧測定（例：上腕動脈）では、平均血圧=(最高血圧+最低血圧)÷2が成り立つ',
            '動脈硬化では、脈波の伝播速度が低下する',
            '最高血圧と最低血圧の圧差を、脈圧という。',
          ],
          answerImg: [measureBloodPressure],
          answer: '最高血圧と最低血圧の圧差を、脈圧という。',
          commentary:
            '平均血圧は上腕動脈では最低血圧+脈圧/3。動脈硬化では伝達速度が上昇する',
        },
        {
          detailInfo: 'A(15)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'ヒスタミンは毛細血管の細胞間隙を広げることにより、血管透過性を亢進させる',
            '腎糸球体の毛細血管は、連続型である',
            '肝臓の毛細血管は有窓型である',
          ],
          answerImg: [],
          answer:
            'ヒスタミンは毛細血管の細胞間隙を広げることにより、血管透過性を亢進させる',
          commentary:
            '腎糸球体の毛細血管は有窓型（隔膜なし/洞様毛細血管ではない）。一方肝臓の毛細血管は不連続型（類洞/洞様毛細血管）',
        },
        {
          detailInfo: 'A(16)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '心不全では、心拍出量の低下のために肺にうっ血が生じ、肺水腫による呼吸困難が生じる',
            '起坐呼吸は、心不全患者に認める所見である',
            'ネフローゼ症候群では、蛋白尿と浮腫を認める',
          ],
          answerImg: [],
          answer: 'すべて正しい',
          commentary: '起坐呼吸　ネフローゼ症候群',
        },
        {
          detailInfo: 'A(17)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'アンギオテンシンⅡ、バソプレシンは、いずれも血管平滑筋を収縮させる',
            'ホスホリパーゼC(PLC)が活性化されると、細胞膜からイノシトール三リン酸IP₃とジアシルグリセロールDGが産生される',
            'IP₃は筋小胞体のIP₃受容体へ結合して、Caイオンの放出を促す',
          ],
          answerImg: [vasoconstriction],
          answer: 'すべて正しい',
          commentary:
            'レニン-アンギオテンシン系は、全身の血圧を維持するシステムである。PLCによってPIP₂→IP₃+DGが産生されるとそれぞれがCa²⁺を細胞内に呼び込み血管平滑筋を収縮させる',
        },
        {
          detailInfo: 'A(18)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'アセチルコリン・ブラジキニンは、いずれも血管内皮細胞の受容体へ統合して内皮細胞でのNOの産生を誘発する',
            'NOSとは、NOの合成酵素を意味する',
            '血管平滑筋のCキナーゼが活性化すると、血管平滑筋は弛緩する',
          ],
          answerImg: [vasorelaxation],
          answer:
            'アセチルコリン・ブラジキニンは、いずれも血管内皮細胞の受容体へ統合して内皮細胞でのNOの産生を誘発する/NOSとは、NOの合成酵素を意味する',
          commentary:
            'NOS=NO Synthase。血管弛緩機構は最初に血管内皮細胞でNOやプロスタサイクリンなどの物質を産生するところから始まる。最終的にAキナーゼ・GキナーゼがホスホランバンやCa²⁺ATPaseに作用して平滑筋が弛緩する。CキナーゼはDGで活性化されCa²⁺チャネルを活性化させる血管収縮機構に関与する物質',
        },
        {
          detailInfo: 'A(19)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '心房性ナトリウム利尿ペプチドは、血管収縮作用を有している',
            '頚動脈洞と大動脈弓には、動脈壁の伸展により興奮する圧受容器が存在し、各々舌咽神経・迷走神経を介して延髄の孤束核へ情報を伝達する',
            '静脈還流量が増加すると、血管運動中枢が興奮して心収縮力が増強する。この現象をペインブリッジ反射という。',
          ],
          answerImg: [ANP],
          answer:
            '頚動脈洞と大動脈弓には、動脈壁の伸展により興奮する圧受容器が存在し、各々舌咽神経・迷走神経を介して延髄の孤束核へ情報を伝達する/静脈還流量が増加すると、血管運動中枢が興奮して心収縮力が増強する。この現象をペインブリッジ反射という。',
          commentary:
            '心房性ナトリウム利尿ペプチドANPは、血圧を下げ心臓の負担を下げるはたらきがある。',
        },
        {
          detailInfo: 'A(20)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '尿崩症とは、レニンの分泌低下による尿量の顕著な増加を意味する',
            '血流速度が増大すると、内皮細胞へのずり応力が生じ、内皮細胞から分泌される物質の作用により血管平滑筋が収縮する',
            '肺血管には、低酸素により収縮するという特徴がある',
          ],
          answerImg: [],
          answer: '肺血管には、低酸素により収縮するという特徴がある',
          commentary:
            '尿崩症はバソプレシン欠乏によって起こる。ずり応力は内皮細胞を刺激し、NOやPGI₂などを放出して平滑筋を弛緩させ血管を拡張させる（でないとさらに血流が早くなってしまう）',
        },
        {
          detailInfo: 'A(21)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '肺の換気血流比は、肺尖部よりも肺底部の方が高い。',
            '脾腫、腹水、食道静脈瘤、 痔核は、いずれも門脈圧亢進症で認める所見である。',
            '二酸化炭素分圧の上昇により、脳血管は拡張する',
          ],
          answerImg: [ventilationPerfusionRatio],
          answer:
            '脾腫、腹水、食道静脈瘤、 痔核は、いずれも門脈圧亢進症で認める所見である。/二酸化炭素分圧の上昇により、脳血管は拡張する',
          commentary:
            '換気血流比=VA(換気量)/Q(血流量)は血流量の極端な偏りのため肺尖部のほうが高い。',
        },
        {
          detailInfo: 'A(22)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '皮膚血管には動静脈吻合が存在し、この吻合の開閉によって皮膚の血流量が調節されている',
            '脳組織の主たるエネルギー源は脂質である',
            '門脈とは、2つの毛細血管網に挟まれた血管のことである。',
          ],
          answerImg: [],
          answer:
            '皮膚血管には動静脈吻合が存在し、この吻合の開閉によって皮膚の血流量が調節されている/門脈とは、2つの毛細血管網に挟まれた血管のことである。',
          commentary: '脳のエネルギー源はグルコースかケトン体。',
        },
        {
          detailInfo: 'A(23)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '採血時に抗凝固剤を加えて遠沈した上清を血清という',
            'EDTAは、血液凝固に必要なカルシウムを取り除くことにより、抗凝固作用を発揮する',
            'ヘパリンは、トロンビンに直接結合することにより、抗凝固作用を発揮する',
          ],
          answerImg: [coagulation],
          answer:
            'EDTAは、血液凝固に必要なカルシウムを取り除くことにより、抗凝固作用を発揮する',
          commentary:
            '血清→血漿、抗凝固剤を加えないで放置した上清を血清という。ヘパリンが作用するのはアンチトロンビン（これのトロンビン不活化作用を調節）',
        },
        {
          detailInfo: 'A(24)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'Crush症候群では、組織の挫滅のために細胞内のカリウムが急激に血中に放出され、致命的な不整脈をきたす',
            '血液のpHの正常値は、7.0±0.05である',
            '血漿タンパクは負に帯電しているため、電気泳動により陽極側に移動する',
          ],
          answerImg: [],
          answer:
            'Crush症候群では、組織の挫滅のために細胞内のカリウムが急激に血中に放出され、致命的な不整脈をきたす/血漿タンパクは負に帯電しているため、電気泳動により陽極側に移動する',
          commentary:
            '血漿のpHの正常値は7.4前後で、酸性物質を多く腎臓や肺から放出するため弱アルカリ性。',
        },
        {
          detailInfo: 'A(25)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '過換気症候群では、血中のカルシウムイオンとアルブミンの結合が低下する',
            '赤血球の寿命は120日である',
            '溶血性貧血では、末梢血中の網状赤血球が増加する',
          ],
          answerImg: [hyperventilation],
          answer:
            '赤血球の寿命は120日である/溶血性貧血では、末梢血中の網状赤血球が増加する',
          commentary:
            '過換気症候群ではCO₂濃度低下によるH⁺不足（アルカローシス）をアルブミンから補うため、代わりにアルブミンはCa²⁺と結合してfree Ca²⁺が減少しテタニー症状を引き起こす。溶血性貧血では血液が過度に破壊されるため、それを補う造血が活発に行われる',
        },
        {
          detailInfo: 'A(26)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '巨赤芽球性貧血は、葉酸やビタミンB12の不足が原因である',
            '悪性貧血では、内因子の欠乏のために、消化管でのビタミンB12の吸収が阻害される',
            '内因子は胃の壁細胞から分泌される',
          ],
          answerImg: [vitaminB12],
          answer: 'すべて正しい',
          commentary: '葉酸が不足する巨赤芽球性貧血は、悪性貧血とは呼ばない',
        },
        {
          detailInfo: 'A(27)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '胎児期には肝臓や脾臓で造血が行われている',
            'HbAはHbFより酸素結合能が高い',
            '鎌状赤血球症の保因者がマラリアに罹患すると、重篤化しやすい',
          ],
          answerImg: [],
          answer: '胎児期には肝臓や脾臓で造血が行われている',
          commentary:
            '胎児が持つHbFは成人のHbAより酸素結合能が高い。鎌状赤血球はマラリアに強い',
        },
        {
          detailInfo: 'A(28)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '鉄欠乏性貧血では、血清フェリチン値が上昇する',
            '体内の鉄の1/4はヘモグロビン中に存在している',
            'トランスフェリンは、鉄の運搬を担う血清蛋白である',
          ],
          answerImg: [],
          answer: 'トランスフェリンは、鉄の運搬を担う血清蛋白である',
          commentary:
            '鉄欠乏性貧血では鉄が不足しているためフェリチン値が下がる。体内の鉄の2/3がヘモグロビン中に存在する',
        },
        {
          detailInfo: 'A(29)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '好中球は白血球の中で最も数が多い',
            '好酸球は寄生虫疾患で低値を示す',
            '好塩基球はヒスタミンを放出してⅠ型アレルギーに関与する',
          ],
          answerImg: [],
          answer:
            '好中球は白血球の中で最も数が多い/好塩基球はヒスタミンを放出してⅠ型アレルギーに関与する',
          commentary: '好酸球は寄生虫疾患で高値を示す',
        },
        {
          detailInfo: 'A(30)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '好中球の表面には、Fc受容体とC3b受容体が存在し、オプソニン作用に寄与する',
            '好中球は、活性酸素種を産生して、貪食した微生物を殺菌する',
            'C5aは、好中球の走化性を促す',
          ],
          answerImg: [],
          answer: 'すべて正しい',
          commentary: '',
        },
        {
          detailInfo: 'A(31)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'IgGの補体活性化能は、IgMの補体活性化能よりも高い',
            'IgAは、涙や母乳中に分泌される',
            'IgMは5量体を形成する',
          ],
          answerImg: [],
          answer: 'IgAは、涙や母乳中に分泌される/IgMは5量体を形成する',
          commentary: 'IgMは激烈な免疫反応を示す',
        },
        {
          detailInfo: 'A(32)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '抗体の多様性は、V(D)J recombinationにより生み出される',
            '補体活性化の古典経路は、抗原抗体複合体とC1の結合により誘発される',
            'C3bとC5bは、アナフィラトキシンと呼ばれる',
          ],
          answerImg: [],
          answer:
            '抗体の多様性は、V(D)J recombinationにより生み出される/補体活性化の古典経路は、抗原抗体複合体とC1の結合により誘発される',
          commentary: 'アナフィラトキシンと呼ばれるのはC3aとC5b',
        },
        {
          detailInfo: 'A(33)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '血管壁が損傷してコラーゲンが露出すると、フィブリノゲンがコラーゲンと血小板を架橋し、血小板の血管壁への粘着が促進される',
            'トロンボキサンA2とプロスタサイクリンは、ともに血小板凝集を促進する',
            'プラスミンは、フィブリンの分解を阻害する',
          ],
          answerImg: [vonWillebrand],
          answer: 'すべて誤り',
          commentary:
            '血小板の血管壁への粘着を促進するのはフォン・ウィルブランド因子。トロンボキサンA₂とブロスタサイクリンは互いに作用が拮抗する。プラスミンはフィブリンの分解を促進する',
        },
        {
          detailInfo: 'A(34)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '誤嚥性肺炎は左肺で起きやすい',
            '外肋間筋は、呼息時に収縮する',
            '胸膜の表面は内皮で覆われている',
          ],
          answerImg: [],
          answer: 'すべて誤り',
          commentary:
            '右肺は気管支がまっすぐ降りていくため誤嚥性肺炎を起こしやすい。外肋間筋は吸息時。胸膜表面は中皮（中皮腫はアスベストなどが原因）',
        },
        {
          detailInfo: 'A(35)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '肺活量は、スパイロメーターで計測可能である',
            '残気量は、スパイロメーターで計測可能である',
            '予備呼気量は、スパイロメーターで計測可能である',
          ],
          answerImg: [lungCapacity],
          answer:
            '肺活量は、スパイロメーターで計測可能である/予備呼気量は、スパイロメーターで計測可能である',
          commentary: '残気量は計測不可能',
        },
        {
          detailInfo: 'A(36)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '肺でのガス交換において、二酸化炭素の拡散能は、酸素の拡散能よりも高い',
            'pHの低下は、酸素解離曲線を右方へ移動させる',
            '2,3-DPGの低下は、酸素解離曲線を右方へ移動させる。',
          ],
          answerImg: [ODC],
          answer:
            '肺でのガス交換において、二酸化炭素の拡散能は、酸素の拡散能よりも高い/pHの低下は、酸素解離曲線を右方へ移動させる',
          commentary:
            '2,3-DPGの上昇が酸素解離曲線を右方へ移動させる。pHが低下している場所=CO₂が多い場所では酸素が必要',
        },
        {
          detailInfo: 'A(37)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '末梢化学受容器の一つである頚動脈小体は、主に酸素分圧の低下を感知する',
            '頚動脈小体で感知された情報は、迷走神経を介して延髄の孤束核へ伝達される',
            '延髄腹側の中枢化学受容器は、二酸化炭素分圧の上昇を感知する',
          ],
          answerImg: [autonomicNerve],
          answer:
            '末梢化学受容器の一つである頚動脈小体は、主に酸素分圧の低下を感知する/延髄腹側の中枢化学受容器は、二酸化炭素分圧の上昇を感知する',
          commentary: '頚動脈小体→舌咽神経、大動脈小体→迷走神経',
        },
        {
          detailInfo: 'A(38)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'Kussmaul呼吸では、過呼吸と無呼吸が繰り返される',
            'Cheyne-Strokes呼吸は、ゆっくりとした深く規則的な呼吸で,糖尿病ケトアシドーシスで特徴的に認められる',
            'Hering-Breuer反射は、肺の伸展受容器を介する呼吸調節反射である',
          ],
          answerImg: [respiratoryReflex],
          answer:
            'Hering-Breuer反射は、肺の伸展受容器を介する呼吸調節反射である',
          commentary:
            '過呼吸と無呼吸が繰り返されるのはCheyne-Strokes呼吸。ゆっくりとした深い呼吸がKussmaul呼吸',
        },
        {
          detailInfo: 'A(39)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'ホールデン効果によると、酸素分圧が上昇するほど、血中の二酸化炭素の運搬量が増加する',
            'ヘモグロビンに対する一酸化炭素の親和性は、酸素の200倍以上高い',
            'ミオグロビンの酸素親和性は、ヘモグロビンよりも高い',
          ],
          answerImg: [ODC],
          answer:
            'ヘモグロビンに対する一酸化炭素の親和性は、酸素の200倍以上高い/ミオグロビンの酸素親和性は、ヘモグロビンよりも高い',
          commentary:
            'ホールデン効果によると、酸素分圧が上昇するほど、血中の二酸化炭素の運搬量が低下する',
        },
        {
          detailInfo: 'A(40)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'ハプトグロビンは、ヘモグロビンを運搬する血漿タンパクである',
            '一次免疫応答では、IgMの分泌量がIgGよりも多いのに対して、二次免疫応答では逆転する',
            '免疫グロブリンのクラススイッチは、ゲノムの組み換えによって生ずる',
          ],
          answerImg: [],
          answer: 'すべて正しい',
          commentary: '',
        },
        {
          detailInfo: 'A(41)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '成人女性の方が成人男性より、体内水分量が多い',
            '細胞外液の主な陰イオンは、Cl⁻とHPO₄²⁻である',
            '血漿浸透圧が上昇すると、体内の恒常性を維持するために高張尿が生成される',
          ],
          answerImg: [],
          answer:
            '血漿浸透圧が上昇すると、体内の恒常性を維持するために高張尿が生成される',
          commentary:
            '成人女性の方が成人男性より、体内水分量が少ない。細胞外液の主な陰イオンは、Cl⁻とHCO₃⁻である',
        },
        {
          detailInfo: 'A(42)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'ネフロンは尿を生成する構造的な単位で、糸球体から遠位尿細管まで、枝分かれのない一本道である',
            '腎臓の皮質迷路には糸球体、近位尿細管曲部、遠位尿細管曲部および集合管の一部がふくまれる',
            '近位尿細管上皮細胞の内腔側には冊子縁が存在する',
          ],
          answerImg: [],
          answer: 'すべて正しい',
          commentary: '',
        },
        {
          detailInfo: 'A(43)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '輸入細動脈と輸出細動脈の間にはメサンギウム細胞が存在する',
            '糸球体基底膜のプロテオグリカンはへパラン硫酸を主成分とし、陽性の電荷を帯びている',
            '糸球体足細胞の足突起の間にはスリット膜が存在し、その構成因子のひとつであるネフリンに異常があると、フィンランド型先天性ネフローゼ症候群を引き起こす',
          ],
          answerImg: [],
          answer:
            '輸入細動脈と輸出細動脈の間にはメサンギウム細胞が存在する/糸球体足細胞の足突起の間にはスリット膜が存在し、その構成因子のひとつであるネフリンに異常があると、フィンランド型先天性ネフローゼ症候群を引き起こす',
          commentary:
            '基底膜は陰性の電荷を帯びており、主にタンパク質を通さない役割をする。',
        },
        {
          detailInfo: 'A(44)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '糸球体で赤血球はろ過されないが、血小板はろ過される',
            '分子量11,500のβ2-ミクログロブリンは糸球体でろ過される',
            '糸球体の足細胞はニューロンと同様に細胞分裂をすることがない細胞で、障害を受けると糸球体から脱落する',
          ],
          answerImg: [],
          answer:
            '分子量11,500のβ2-ミクログロブリンは糸球体でろ過される/糸球体の足細胞はニューロンと同様に細胞分裂をすることがない細胞で、障害を受けると糸球体から脱落する',
          commentary: '血小板はろ過されない',
        },
        {
          detailInfo: 'A(45)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'アデノシンが輸入細動脈のA₁受容体に結合すると、輸入細動脈は弛緩し、糸球体濾過量は上昇',
            'アンギオテンシンⅡの働きにより、輸入細動脈が収縮し糸球体濾過量は減少する',
            '糸球体濾過量が増加すると、輸入細動脈の顆粒細胞からのレニンの分泌は抑制される',
          ],
          answerImg: [kidneyFloodControl],
          answer:
            '糸球体濾過量が増加すると、輸入細動脈の顆粒細胞からのレニンの分泌は抑制される',
          commentary:
            'レニンは遠位尿細管の緻密班領域を流れる濾液量の低下により分泌促進され、主に糸球体濾過量を増やす方向（輸出細動脈の収縮など）に作用していく。',
        },
        {
          detailInfo: 'A(46)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '健常人に2g/日の食塩制限を行うと、レニンの濃度は上昇する',
            '健常人に2g/日の食塩制限を行うと、アンギオテンシンⅡの濃度は上昇する',
            '健常人に2g/日の食塩制限を行うと、心房性ナトリウム利尿ペプチドの濃度は上昇する',
          ],
          answerImg: [kidneyFloodControl],
          answer:
            '健常人に2g/日の食塩制限を行うと、レニンの濃度は上昇する/健常人に2g/日の食塩制限を行うと、アンギオテンシン2の濃度は上昇する',
          commentary:
            '健常人に2g/日の食塩制限を行うと、心房性ナトリウム利尿ペプチドの濃度は減少する。他、濾液のCl⁻濃度が低下するので、レニン-アンジオテンシンⅡ系は活発化する',
        },
        {
          detailInfo: 'A(47)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '低カリウム血症の際にアルカローシスが連動する',
            '体内でＫ⁺が不足しているとき、皮質集合管のβ間在細胞で、Ｋ⁺が再吸収される',
            'アルドステロンの分泌が不足すると、低カリウム血症が引き起こされる',
          ],
          answerImg: [aldosterone],
          answer: '低カリウム血症の際にアルカローシスが連動する',
          commentary:
            'K⁺不足時にK⁺が再吸収されるのは皮質集合管のα細胞。アルドステロンは腎臓集合管のNa⁺/K⁺ ATPaseを促進してK⁺を排出する',
        },
        {
          detailInfo: 'A(48)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'サイアザイド系利尿剤は近位尿細管におけるNaイオンの再吸収を阻害する',
            'ループ利尿薬により低カリウム血症が引き起こされる',
            'トリアムテレンにより低カリウム血症が引き起こされる',
          ],
          answerImg: [],
          answer: 'ループ利尿薬により低カリウム血症が引き起こされる',
          commentary:
            'サイアザイド系利尿剤は遠位尿細管におけるNaイオンの再吸収を阻害する。トリアムテレンにより高カリウム血症が引き起こされる',
        },
        {
          detailInfo: 'A(49)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '腎臓で副甲状腺ホルモンPTHの働きにより無機リンの再吸収は促進される',
            '腎臓で副甲状腺ホルモンPTHの働きによりカルシウムの再吸収は促進される',
            '腎臓で副甲状腺ホルモンPTHの働きによりマグネシウムの再吸収は促進される',
          ],
          answerImg: [],
          answer:
            '腎臓で副甲状腺ホルモンPTHの働きによりカルシウムの再吸収は促進される',
          commentary:
            'PTHは無機リンのさあい吸収を抑制し、マグネシウム再吸収にはLi⁺が関係する',
        },
        {
          detailInfo: 'A(50)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '不揮発性酸由来の水素イオンを排泄するため、近位尿細管においてグルタミンからアンモニアが産生される',
            '不揮発性酸由来の水素イオンを排泄するため、集合管においてHCO₃⁻が産生される',
            'ケトン体や乳酸の蓄積するアシドーシスではアニオンギャップは増加する',
          ],
          answerImg: [],
          answer: 'すべて正しい',
          commentary: '参考　アニオンギャップ',
        },
        {
          detailInfo: 'B(1)',
          questionImg: [],
          questionSentence:
            'ニトログリセリンは、体内で（　）に変換されて血管平滑筋を弛緩させる',
          answerImg: [],
          answer: 'NO',
          commentary: '舌下投与',
        },
        {
          detailInfo: 'B(2)',
          questionImg: [],
          questionSentence: 'テント状T波は、高（　）血症で認める。',
          answerImg: [hyperkalemia],
          answer: 'カリウム',
          commentary: '致命的な不整脈が生じる',
        },
        {
          detailInfo: 'B(3)',
          questionImg: [],
          questionSentence:
            '狭心症の発作時には、心電図所見として（　）を認める',
          answerImg: [angina],
          answer: 'ST低下',
          commentary: '労作性狭心症など',
        },
        {
          detailInfo: 'B(4)',
          questionImg: [],
          questionSentence:
            'WPW症候群の心電図では、副伝導路を介した心室筋の興奮が（　）波として検出される。',
          answerImg: [WPW],
          answer: 'デルタ',
          commentary: '',
        },
        {
          detailInfo: 'B(5)',
          questionImg: [],
          questionSentence:
            '心筋細胞において、電位依存性Ca²⁺チャネルを介してCa²⁺が細胞内へ流入すると、リアノジン受容体が活性化されて開口し、Ca²⁺が筋小胞体から細胞質へ放出される。この現象を、（　）という。',
          answerImg: [],
          answer: 'Ca²⁺-induced Ca²⁺release',
          commentary:
            'CICRと略される。骨格筋ではT細管側のDHP受容体の立体構造が変化することが隣接する筋小胞体のリアノジン受容体開口のトリガーとなる点で異なる（骨格筋の方が反応が素早い）',
        },
        {
          detailInfo: 'B(6)',
          questionImg: [],
          questionSentence:
            'ノルアドレナリンが心筋細胞の受容体に結合すると、心筋細胞内のAキナーゼが活性化して（　）をリン酸化し、その結果、筋小胞体のCa²⁺ATPaseが活性化する。',
          answerImg: [vasoconstriction],
          answer: 'ホスホランバン',
          commentary: '',
        },
        {
          detailInfo: 'B(7)',
          questionImg: [],
          questionSentence: '低酸素環境下では、腎臓から（　）が分泌される',
          answerImg: [],
          answer: 'エリスロポエチン',
          commentary: '',
        },
        {
          detailInfo: 'B(8)',
          questionImg: [],
          questionSentence:
            'ポワズイユの法則によると、血管抵抗は、血管半径の（　）乗に反比例する',
          answerImg: [],
          answer: '4',
          commentary: 'ポワズイユの法則',
        },
        {
          detailInfo: 'B(9)',
          questionImg: [],
          questionSentence:
            '心室筋の静止電位は、（　）チャネルの開口により維持される',
          answerImg: [],
          answer: '内向き整流K⁺チャネル',
          commentary:
            '血中カリウム濃度が上がると心室筋は静止電位を維持できなくなる',
        },
        {
          detailInfo: 'B(10)',
          questionImg: [],
          questionSentence: '間接ビリルビンは、血中で（　）と結合している',
          answerImg: [bilirubin],
          answer: 'アルブミン',
          commentary: '',
        },
        {
          detailInfo: 'B(11)',
          questionImg: [],
          questionSentence: 'ビリルビンは肝臓において（　）と縫合する',
          answerImg: [bilirubin],
          answer: 'グルクロン酸',
          commentary: '',
        },
        {
          detailInfo: 'B(12)',
          questionImg: [],
          questionSentence:
            'MHCクラスⅡ分子は、ヘルパーT細胞の表面に存在する（　）と結合する',
          answerImg: [CD4],
          answer: 'CD4',
          commentary: 'MHCクラスⅠ分子（基本的に全ての細胞表面に発現）→CD8',
        },
        {
          detailInfo: 'B(13)',
          questionImg: [],
          questionSentence:
            'ビタミンKの存在下で合成される凝固因子を全て記載せよ',
          answerImg: [coagulation],
          answer: '第Ⅱ・Ⅶ・Ⅸ・Ⅹ因子',
          commentary: 'ワーファリンが関係',
        },
        {
          detailInfo: 'B(14)',
          questionImg: [],
          questionSentence:
            'Infantile respiratory distress syndrome:IRDSは、（　）の欠乏が原因である',
          answerImg: [],
          answer: '肺サーファクタント',
          commentary: 'Ⅱ型肺胞上皮細胞は28週前後までできてこない',
        },
        {
          detailInfo: 'B(15)',
          questionImg: [],
          questionSentence:
            'ヘモグロビンの酸素解離曲線は、（　）効果のためにS字曲線を描く',
          answerImg: [ODC],
          answer: 'アロステリック効果',
          commentary:
            '4量体のうちどれか1か所でも酸素を受け取ると、他の3か所が酸素を受け取りやすくなる。逆もしかり。',
        },
        {
          detailInfo: 'B(16)',
          questionImg: [],
          questionSentence: '閉塞性換気障害では、（　）が70%未満になる',
          answerImg: [ventilationDisorder, FEV1],
          answer: '1秒率',
          commentary: 'FEV1%の数値が大きく悪化するのは閉塞性障害だけ',
        },
        {
          detailInfo: 'D(1)',
          questionImg: [],
          questionSentence:
            '5%ブドウ糖液を1200ml輸液すると、細胞内液に（　ml）、間質液に（　ml）、血管内に（　ml）、分布する',
          answerImg: [],
          answer: '800ml,300ml,100ml',
          commentary:
            '等張液であるから、単純に体液の存在比から考えればよく、細胞内液：間質液：血漿＝8:3:1',
        },
        {
          detailInfo: 'D(2)',
          questionImg: [],
          questionSentence:
            '尿細管のうち、アミノ酸を最も多く吸収するのは。(　)尿細管である',
          answerImg: [],
          answer: '近位',
          commentary: '微絨毛が発達している',
        },
        {
          detailInfo: 'D(3)',
          questionImg: [],
          questionSentence:
            '血漿中のグルコースが、尿細管で100%再吸収された場合、グルコースクリアランスの値は、（　）となる。',
          answerImg: [],
          answer: '0',
          commentary: '',
        },
        {
          detailInfo: 'D(4)',
          questionImg: [],
          questionSentence:
            '腎血流量(RBF)は、腎血漿流量(RPF)とヘマトクリット値を用いると、どのような式で表されるか。（　）',
          answerImg: [],
          answer: 'RBF = RPF/(1-Ht)',
          commentary: '',
        },
        {
          detailInfo: 'D(5)',
          questionImg: [],
          questionSentence:
            '慢性腎不全では、（　）カルシウム血症を引き起こす。',
          answerImg: [],
          answer: '低',
          commentary: '',
        },

        // {
        //   detailInfo: 'A(1)',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ['','',''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '2020中間記述',
      groupContents: [
        {
          detailInfo: '2020中間C(1)',
          questionImg: [C2020m],
          questionSentence: '心電図の診断名と判定根拠を記述せよ',
          answerImg: [wenckebach],
          answer: 'Wenckebach型房室ブロック',
          commentary:
            'PQ間隔が長くなっていき、時々心室に命令が伝わらなくなる（QRS消失）',
        },
        {
          detailInfo: '2020中間C(2)',
          questionImg: [],
          questionSentence:
            '上室期外収縮と心室期外収縮の心電図所見の違いを、刺激伝達速度に言及して説明せよ',
          answerImg: [prematureVcontraction, SVPrematureContraction],
          answer:
            '上室期外収縮はプルキンエ線維を通るので、QRS波の幅が短い（心房での刺激伝達速度が早い）。心室期外収縮はプルキンエ線維を通らないので、心房での刺激伝達速度が遅い（QRS波の幅が広い）',
          commentary: '',
        },
        {
          detailInfo: '2020中間C(3)',
          questionImg: [],
          questionSentence:
            '緊張したときに、顔面蒼白、心悸亢進、体のほてりを認めるのはなぜか。各症状について説明せよ',
          choices: [],
          answerImg: [autonomicNerve],
          answer:
            '緊張時には交感神経からノルアドレナリンが放出される。α1受容体刺激によって細動脈が収縮し、皮膚への血液が減ることにより顔面蒼白となる。またβ1受容体刺激によって心臓の拍出が増え、心悸亢進となる。皮膚血流が減少するので、熱放散量が減少しほてりが生じる。',
          commentary: '',
        },
        {
          detailInfo: '2020中間C(4)',
          questionImg: [],
          questionSentence:
            '心室拡張期は、心臓から大動脈への血流は途絶えているが、それにもかかわらず全身への血流が維持されているのはなぜか。大動脈の組織学的な特徴に言及して説明せよ。',
          choices: [],
          answerImg: [vessel],
          answer:
            '大動脈は弾性繊維が豊富なので、心室収縮期には大動脈壁が押し広げられて血液を貯え、拡張期には大動脈壁が収縮して血液を末梢へ送り出すことで血圧を維持している。',
          commentary: '',
        },
        {
          detailInfo: '2020中間C(5)',
          questionImg: [],
          questionSentence:
            '血中の二酸化炭素濃度が高まるにつれて血液が酸性になるのはなぜか。二酸化炭素と水分子の化学反応を記載して説明せよ。また、この反応の律速段階を触媒する酵素名を記載せよ。',
          choices: [],
          answerImg: [carbonicAnhydrase],
          answer:
            'CO₂ + H₂O ⇔ H₂CO₃ ⇔ H⁺ + HCO₃⁻ 炭酸脱水酵素carbonic anhydraseが触媒',
          commentary:
            '二酸化炭素が増えると平衡が右に移動しH⁺が増え、アシドーシスを生じる。',
        },
        {
          detailInfo: '2020中間C(6)',
          questionImg: [],
          questionSentence: '膵癌の患者で灰白色の便を認めた。理由を説明せよ',
          choices: [],
          answerImg: [bilirubin],
          answer: '胆管が圧迫されてビリルビンが腸へ排出されないから',
          commentary:
            '膵頭部や肝臓に癌が生じるとビリルビンが消化管へ排出されず、腸内細菌によるウロビリノーゲン生成が行われない。尿の色も薄くなる。',
        },
        {
          detailInfo: '2020中間C(7)',
          questionImg: [],
          questionSentence:
            'Rh式血液型不適合妊娠では胎児の溶血が生じるのに対して、ABO式血液型不適合妊娠では胎児への影響はほとんどない。理由を述べよ。',
          choices: [],
          answerImg: [RhPregnancy],
          answer:
            '抗D抗体はIgG型なので胎盤を通過するが、抗A,B抗体はIgM型であるから胎盤を通過せず、胎児に影響しない。',
          commentary:
            '胎盤はIgG抗体のみ通す。このため胎児は母親のIgG抗体のおかげで生後半年ほど風邪を引かない。',
        },
        {
          detailInfo: '2020中間C(8)',
          questionImg: [],
          questionSentence:
            '嚢胞性繊維症は、常染色体劣性の遺伝病であり、欧米白人の2500人に一人が発症する。この場合、保因者（キャリア）は何人に1人か。計算過程も記載せよ',
          choices: [],
          answerImg: [calculateCareer],
          answer: '25人に1人',
          commentary:
            '劣性の遺伝病の場合、両親から異常遺伝子aを受け取る必要がある。片側の親から異常遺伝子aをうけとる確率は√2500 → 1/50なので、片側からだけ異常遺伝子を受け取るキャリアAaの確率は約1/50 + 1/50 = 1/25',
        },
        {
          detailInfo: '2020中間E(1)',
          questionImg: [],
          questionSentence:
            '糸球体内の毛細血管圧が60mmHg、糸球体毛細血管膠原浸透圧が25mmHg、ボウマン腔内の液体の静水圧が15mmHg、ボウマン腔内の液体の膠原浸透圧が4mmHgだったとき糸球体浸透圧は何mmHgと計算されるか答えなさい。',
          choices: [],
          answerImg: [kidneyPressureBalance],
          answer: '(60-15) - (25-4) = 24(mmHg)',
          commentary:
            '毛細血管における濾過圧P = 静水圧差ΔP - 膠原浸透圧差Δπ。静水圧の差は濾過圧を大きくする方向に、膠原浸透圧の差は濾過に対して逆向きの圧力として作用する',
        },
        {
          detailInfo: '2020中間E(2)問1',
          questionImg: [E20202],
          questionSentence:
            '換気駆動力の低下により呼吸性アシドーシスが引き起こされた際、腎臓による代償性反応が起こった後の状態を表すものはグラフの1~6の中でどれか、番号を答えなさい。',
          choices: [],
          answerImg: [adjacentPHinKidney],
          answer: '3',
          commentary:
            '換気駆動力の低下→CO₂濃度上昇。そのままだと2の状態（アシドーシス）だが、腎臓でH⁺分泌（HCO₃産生）が行われることで数日かけて血漿pHは補正される',
        },
        {
          detailInfo: '2020中間E(2)問2',
          questionImg: [],
          questionSentence:
            '換気駆動力の低下により呼吸性アシドーシスが引き起こされた際、腎臓による代償性反応とは具体的にどのようなものか、簡潔に答えなさい',
          choices: [],
          answerImg: [adjacentPHinKidney],
          answer:
            '換気駆動力の低下によりCO₂(←→ H⁺ + HCO₃⁻)濃度が上昇すると、血漿のpHが低下し高炭酸ガス血漿となる。一方腎臓では代償性反応として集合管でH⁺分泌やHCO₃⁻新生、近位尿細管でGln→NH₃産生→NH₄⁺として尿中排出する反応が起こり、1日最大300mEqの酸負荷に対応する',
          commentary: '',
        },
        // {
        //   detailInfo: '2020中間C(2)',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '2019中間(記述以外)',
      groupContents: [
        {
          detailInfo: 'A(1)',
          questionImg: [],
          questionSentence: '正しいものを全て選べ',
          choices: [
            'eythropoietinは、赤血球の増殖因子である',
            'G-CSFはリンパ球の増殖因子である',
            'M-CSFは、好酸球の増殖因子である。',
            'thrombopoietinは、好中球の増殖因子である',
          ],
          answerImg: [hematopoiesis],
          answer: 'eythropoietinは、赤血球の増殖因子である',
          commentary:
            'G-CSFは好中球の増殖因子、M-CSFは単球の増殖因子、thrombopoietinは血小板の増殖因子。',
        },
        {
          detailInfo: 'A(2)',
          questionImg: [],
          questionSentence: '血小板の凝集を促進するものを全て選べ',
          choices: [
            'ADP',
            'フィブリノゲン',
            'トロンビン',
            'プロスタサイクリン',
          ],
          answerImg: [coagulation],
          answer: 'ADP、フィブリノゲン、トロンビン',
          commentary:
            'プロスタサイクリンPGI₂は血小板の凝集を抑制する。ADPやセロトニンは血小板の密顆粒中に存在し、細胞外に放出されることで他の血小板を活性化させる。フィブリノゲンは血小板同士を連結することで一次血栓をつくる。トロンビンはフィブリノゲン→フィブリンへ変換し血餅を形成する。',
        },
        {
          detailInfo: 'A(3)',
          questionImg: [],
          questionSentence: '正しいものを全て選べ',
          choices: [
            '血友病Aは、第Ⅸ因子の異常が原因である',
            '血友病Aは、女性よりも男性の方が多い',
            '血友病Bは、女性よりも男性の方が少ない',
            '血友病Bの原因遺伝子は、X染色体上に存在する。',
          ],
          answerImg: [],
          answer:
            '血友病Aは、女性よりも男性の方が多い / 血友病Bの原因遺伝子は、X染色体上に存在する。',
          commentary:
            '血友病A→第8因子、血友病B→第9因子。血友病はX染色体上の遺伝子異常（劣性）なので男性の方が発症しやすい。',
        },
        {
          detailInfo: 'A(4)',
          questionImg: [],
          questionSentence: '正しいものを全て選べ',
          choices: [
            'カルシウムとマグネシウムは、血液凝固に必須である',
            'EDTAは、カルシウムの除去により血液凝固を抑制する',
            'クエン酸ナトリウムは、マグネシウム除去により血液凝固を抑制する。',
            '凝固した血液を遠心して得た上清を血漿という',
          ],
          answerImg: [coagulation],
          answer: 'EDTAは、カルシウムの除去により血液凝固を抑制する',
          commentary:
            'マグネシウムは血液凝固に関係しない。凝固した血液を延伸して得た上清は血清。参考：クエン酸ナトリウム',
        },
        {
          detailInfo: 'A(5)',
          questionImg: [],
          questionSentence: '正しいものを全て選べ',
          choices: [
            'phosphatidylinositol-4,5-bisphosphate(PIP₂)は、phospholipase C(PLC)により、diacylglycerol(DG)とinositol-4,5-triphosphate(IP₃)に変換される',
            'PIP₂は、細胞膜の構成要素である',
            'DGは、proteinkinase C(PKC)を活性化させる',
            'IP₃は、小胞体からのカルシウム放出を促進する',
          ],
          answerImg: [vasoconstriction],
          answer: 'すべて正しい',
          commentary: '参考:PIP₂ IP₃ DG',
        },
        {
          detailInfo: 'A(6)',
          questionImg: [],
          questionSentence: '正しいものを全て選べ',
          choices: [
            '肺動脈弁は大動脈弁の前方に位置する',
            '冠動脈の血流量は、心室の収縮期よりも拡張期の方が多い',
            '心筋は、冠動脈により供給される血中酸素の約40%を消費する',
            '房室結節の伝導速度は、心房筋の伝導速度より早い',
          ],
          answerImg: [],
          answer:
            '肺動脈弁は大動脈弁の前方に位置する / 動脈の血流量は、心室の収縮期よりも拡張期の方が多い',
          commentary:
            '心筋は冠動脈により供給される血中酸素の75％を消費（他の組織は25％ぐらい）。プルキンエ線維、ヒス束、左・右脚＞固有心筋（心室・心房筋）＞特殊心筋（結節）',
        },
        {
          detailInfo: 'A(7)',
          questionImg: [],
          questionSentence: 'ニトログリセリンに関して正しいものを全て選べ',
          choices: [
            '心筋梗塞に対して顕著な効果を示す',
            '舌下錠として投与する',
            '体内ではNOに変換されたうえで、標的細胞へ作用する',
            '冠動脈を収縮させる作用を示す。',
          ],
          answerImg: [],
          answer:
            '舌下錠として投与する / 体内ではNOに変換されたうえで、標的細胞へ作用する',
          commentary:
            'ニトログリセリンは血管平滑筋を弛緩させる（血管を広げる）。心筋梗塞ではすでに心筋や血管は壊死していると考えられて投与しても効果なし',
        },
        {
          detailInfo: 'A(8)',
          questionImg: [],
          questionSentence: '正しいものを全て選べ',
          choices: [
            'Ⅰ音は、僧帽弁が閉じる際に聴取される',
            'Ⅱ音は、大動脈弁が開く際に聴取される',
            'Ⅲ音は三尖弁が閉じる際に聴取される',
            'Ⅳ音は、肺動脈弁が開く際に聴取される',
          ],
          answerImg: [],
          answer: 'Ⅰ音は、僧帽弁が閉じる際に聴取される',
          commentary:
            'Ⅰ音は房室弁の閉鎖音、Ⅱ音は動脈弁の閉鎖音。Ⅲ・Ⅳ音は正常時は聞こえない（過剰心音といわれる）。Ⅲ音は心室の急速充満期に発生し、心不全の兆候。Ⅳ音は心房収縮期に心室で聞こえる音で、肺高血圧症などで心室が異常拡張している場合に聞こえる。',
        },
        {
          detailInfo: 'A(9)',
          questionImg: [],
          questionSentence: '正しいものを全て選べ',
          choices: [
            'リンパ管には弁がない',
            '胸管は、鎖骨下動脈へ連結する',
            '心臓のNa⁺-K⁺ポンプは、2個のNa⁺を排出し、3個のK⁺を取り込む',
            '心臓のNa⁺-Ca²⁺交換系では、3個のNa⁺と1個のCa²⁺が交換される',
          ],
          answerImg: [cardiacIonChannel],
          answer: '心臓のNa⁺-Ca²⁺交換系では、3個のNa⁺と1個のCa²⁺が交換される',
          commentary:
            'リンパ管、静脈には弁がある。胸管は鎖骨下静脈へ連結。Na⁺-K⁺ ATPaseもNCXも3個のNa⁺を運ぶ（イオンの中でNa⁺が最も動かしやすい傾向にある）。ただし方向は逆',
        },
        {
          detailInfo: 'A(10)',
          questionImg: [],
          questionSentence: '正しいものを全て選べ',
          choices: [
            '肢誘導では、前額面における心臓の電気的活動方向を計測する',
            '胸部誘導では、水平面における心臓の電気的活動方向を計測する',
            'P波は洞房結節の興奮を示す',
            'QRS波は房室結節の興奮を示す',
          ],
          answerImg: [coronalPlane],
          answer:
            '肢誘導では、前額面における心臓の電気的活動方向を計測する / 胸部誘導では、水平面における心臓の電気的活動方向を計測する',
          commentary:
            '肢誘導とは標準四肢誘導や増幅単極肢誘導のことで、垂直方向。胸部誘導とは単極胸部誘導のことで、水平方向の電位変化を計測している。P波は心房筋の興奮、QRS波は心室筋の興奮（結節は伝導速度が小さすぎて計測されない）',
        },
        {
          detailInfo: 'A(12)',
          questionImg: [],
          questionSentence: '正しいものを全て選べ',
          choices: [
            '有窓型の毛細血管は、肝臓で見られる',
            '洞様の毛細血管は、腎臓で見られる',
            '毛細血管壁は、一層の平滑筋細胞で形成される',
            'ヒスタミンは、毛細血管における血液透過性を高める作用を有す',
          ],
          answerImg: [],
          answer: 'ヒスタミンは、毛細血管における血液透過性を高める作用を有す',
          commentary:
            '肝臓は洞様毛細血管、腎臓は有窓型毛細血管（隔膜なし）、毛細血管を覆うのは周皮細胞',
        },
        {
          detailInfo: 'A(13)',
          questionImg: [],
          questionSentence: '血管平滑筋の収縮を促進するものを全て選べ',
          choices: [
            'angiotensinⅡ',
            'prostacyclin',
            'bradykinin',
            'acetylcholine',
          ],
          answerImg: [vasoconstriction],
          answer: 'angiotensinⅡ（アンジオテンシンⅡ）',
          commentary:
            'プロスタサイクリンProstacyclinはPGI₂のこと。ブラジキニンBrabykininは血管拡張(空咳の原因)。アセチルコリンAcetylcholineは副交感神経なので末梢血管を拡張',
        },
        {
          detailInfo: 'A(14)',
          questionImg: [],
          questionSentence: '正しいものを全て選べ',
          choices: [
            '脳血管は、二酸化炭素分圧の上昇時に拡張する',
            '神経細胞の主たるエネルギー源は脂肪酸である',
            '門脈とは、2つの毛細血管網に挟まれた血管のことである',
            '炭酸脱水酵素は、赤血球内に豊富に存在する',
          ],
          answerImg: [carbonicAnhydrase],
          answer:
            '脳血管は、二酸化炭素分圧の上昇時に拡張する / 門脈とは、2つの毛細血管網に挟まれた血管のことである / 炭酸脱水酵素は、赤血球内に豊富に存在する',
          commentary: '神経細胞はグルコースかケトン体が栄養源。',
        },
        {
          detailInfo: 'A(15)',
          questionImg: [],
          questionSentence:
            'ヘモグロビンの酸素解離曲線を右方へ移動させる要因を、全て選べ',
          choices: [
            'pH低下',
            '二酸化炭素分圧低下',
            '2,3-diphosphoglycerate(2,3-DPG)上昇',
            '温度上昇',
          ],
          answerImg: [ODC],
          answer: 'pH低下、2,3-diphosphoglycerate(2,3-DPG)上昇、温度上昇',
          commentary:
            '酸素解離曲線を右方へ移動させる要因は、pH低下=CO₂濃度上昇・温度上昇・2,3-DPG上昇。酸素解離曲線が右方へ移動すると、筋肉などに酸素を渡しやすくなる。',
        },
        {
          detailInfo: 'A(16)',
          questionImg: [],
          questionSentence: '正しいものを全て選べ',
          choices: [
            '健常者の動脈血酸素分圧は、約160mmHgである',
            '健常者の動脈血二酸化炭素分圧は、約40mmHgである',
            '健常者の静脈血酸素分圧は、約40mmHgである',
            '健常者の静脈血二酸化炭素分圧は、約46mmHgである',
          ],
          answerImg: [gasPressure],
          answer:
            '健常者の動脈血二酸化炭素分圧は、約40mmHgである / 健常者の静脈血酸素分圧は、約40mmHgである / 健常者の静脈血二酸化炭素分圧は、約46mmHgである',
          commentary:
            '肺胞気で100mmHgあった酸素分圧が、静脈血では40mmHgまで消費され、二酸化炭素分圧と逆転する。',
        },
        {
          detailInfo: 'A(17)',
          questionImg: [],
          questionSentence: 'スパイロメーターで計測できるものを全て選べ',
          choices: ['一回換気量', '予備吸気量', '全肺気量', '残気量'],
          answerImg: [lungCapacity],
          answer: '一回換気量、予備呼気量',
          commentary:
            '残気量RVが含まれる要素は計測不可能。逆に努力して呼吸できる幅に収まる量は計測可能',
        },
        {
          detailInfo: 'B(1)',
          questionImg: [],
          questionSentence:
            '生体の特定の状態が一定に維持されることを（　）とよぶ',
          answerImg: [],
          answer: 'ホメオスタシス',
          commentary: '',
        },
        {
          detailInfo: 'B(2)',
          questionImg: [],
          questionSentence:
            '生理食塩水における塩化ナトリウムの含有率は、（　）％である',
          answerImg: [],
          answer: '0.9',
          commentary: '',
        },
        {
          detailInfo: 'B(3)',
          questionImg: [],
          questionSentence: '（　）％のブドウ糖液は、生理食塩水と等張である',
          answerImg: [],
          answer: '5',
          commentary: '',
        },
        {
          detailInfo: 'B(4)',
          questionImg: [],
          questionSentence:
            '成人において、血液が体重に占める割合は、約（　）％である',
          answerImg: [],
          answer: '8',
          commentary: '',
        },
        {
          detailInfo: 'B(5)',
          questionImg: [],
          questionSentence:
            '虫刺されで局所的な腫れを生じるのは、（　）細胞の細胞間隙が拡大するためである。',
          answerImg: [],
          answer: '血管内皮細胞',
          commentary: '',
        },
        {
          detailInfo: 'B(6)',
          questionImg: [],
          questionSentence:
            '溶血により産生されたビリルビンが尿中に出ないのは、ビリルビンが（　）と結合しているからである。',
          answerImg: [],
          answer: 'アルブミン',
          commentary:
            'アルブミンは負電荷により正常時は腎糸球体で濾過されない。→ネフローゼ症候群',
        },
        {
          detailInfo: 'B(7)',
          questionImg: [],
          questionSentence:
            '胎生5か月における主たる造血部位は、（　）と脾臓である',
          answerImg: [],
          answer: '肝臓',
          commentary: '',
        },
        {
          detailInfo: 'B(8)',
          questionImg: [],
          questionSentence: '鎌状赤血球症は、（　）の多発地帯に多い。',
          answerImg: [],
          answer: 'マラリア',
          commentary: '',
        },
        {
          detailInfo: 'B(9)',
          questionImg: [],
          questionSentence:
            'erythropoietinを産生する主たる臓器は、（　）である',
          answerImg: [],
          answer: '腎臓',
          commentary: '',
        },
        {
          detailInfo: 'B(10)',
          questionImg: [],
          questionSentence: '肝臓の組織マクロファージを、（　）細胞という。',
          answerImg: [],
          answer: 'クッパー細胞',
          commentary: '',
        },
        {
          detailInfo: 'B(11)',
          questionImg: [],
          questionSentence:
            'CD4陽性T細胞は、抗原提示細胞の表面において、MHC（　）分子が提示した抗原を認識する',
          answerImg: [CD4],
          answer: 'クラスⅡ',
          commentary: 'CD8はMHCクラスⅠ分子',
        },
        {
          detailInfo: 'B(12)',
          questionImg: [],
          questionSentence: '母乳を介して乳児へ移行する抗体の種類を記せ',
          answerImg: [],
          answer: 'IgA',
          commentary: '胎盤を通過するのはIgG',
        },
        {
          detailInfo: 'B(13)',
          questionImg: [],
          questionSentence:
            '肥満細胞の表面には、（　）に対する受容体が存在する。そこへ抗原が結合することで、ヒスタミンが放出される。抗体の種類を記せ',
          answerImg: [],
          answer: 'IgE',
          commentary: '',
        },
        {
          detailInfo: 'B(14)',
          questionImg: [],
          questionSentence: 'ビタミンK依存性の凝固因子を4つ記せ',
          answerImg: [],
          answer: '2,7,9,10',
          commentary:
            'ワーファリンはビタミンKの働きを抑えて血栓ができるのを防ぐ。ビタミンKは納豆菌が腸内で産生できる',
        },
        {
          detailInfo: 'B(15)',
          questionImg: [],
          questionSentence: 'プラスミンは（　）を分解する',
          answerImg: [coagulation],
          answer: 'フィブリン',
          commentary: '',
        },
        {
          detailInfo: 'B(16)',
          questionImg: [],
          questionSentence:
            'カテコールアミンは、アミノ酸の（　）から合成される',
          answerImg: [synthesizeCatecholamine],
          answer: 'チロシン',
          commentary:
            'チロシン→L-DOPA→ドーパミン→ノルアドレナリン→アドレナリン',
        },
        {
          detailInfo: 'B(17)',
          questionImg: [],
          questionSentence: 'ドーパミンの前駆体は、（　）である',
          answerImg: [synthesizeCatecholamine],
          answer: 'L-DOPA',
          commentary:
            'チロシン→L-DOPA→ドーパミン→ノルアドレナリン→アドレナリン',
        },
        {
          detailInfo: 'B(18)',
          questionImg: [],
          questionSentence:
            'カテコールアミン受容体の中の、（　）受容体は、心機能を亢進させる作用を有す',
          answerImg: [autonomicNerve],
          answer: 'β₁受容体',
          commentary: '',
        },
        {
          detailInfo: 'B(19)',
          questionImg: [],
          questionSentence:
            'カテコールアミン受容体の中の、（　）受容体は、気管支平滑筋の弛緩によって気道を拡張させる作用を有し、喘息の治療へも応用されている。',
          answerImg: [autonomicNerve],
          answer: 'β₂受容体',
          commentary:
            'ノルアドレナリンはこの受容体に作用しない（アドレナリンだけ）',
        },
        {
          detailInfo: 'B(20)',
          questionImg: [],
          questionSentence: '心筋が機能的合胞体をなすのは、（　）の存在による',
          answerImg: [],
          answer: 'gap junction',
          commentary: '',
        },
        {
          detailInfo: 'B(21)',
          questionImg: [],
          questionSentence: '動脈硬化では、（　）波の伝達速度が亢進する',
          answerImg: [],
          answer: '脈波',
          commentary: '',
        },
        {
          detailInfo: 'B(22)',
          questionImg: [],
          questionSentence:
            '血流速度が増大すると、（　）応力を受けた血管内皮から、血管拡張作用を有す物質が放出される',
          answerImg: [],
          answer: 'ずり',
          commentary: '放出されるのはNOやPGI₂',
        },
        {
          detailInfo: 'B(23)',
          questionImg: [],
          questionSentence:
            '血圧は、（　）と大動脈弓に存在する圧受容器により感知される',
          answerImg: [autonomicNerve],
          answer: '頚動脈洞',
          commentary: '経路の脳神経は異なるが、同じ孤束核へ信号を伝える。',
        },
        {
          detailInfo: 'B(24)',
          questionImg: [],
          questionSentence:
            '肺サーファクタントは表面張力を緩和することにより、（　）の萎縮を防いでいる。',
          answerImg: [],
          answer: '肺胞',
          commentary: '',
        },
        {
          detailInfo: 'B(25)',
          questionImg: [],
          questionSentence:
            'Cystic fibrosis の原因は、（　）チャネルの遺伝的異常である。',
          answerImg: [],
          answer: 'Cl⁻',
          commentary: '嚢胞性繊維症は常染色体劣性遺伝疾患',
        },
        {
          detailInfo: 'B(26)',
          questionImg: [],
          questionSentence:
            '心房細動を有す患者は、心房内に（　）が形成されやすく、そのため脳梗塞を起こしやすい',
          answerImg: [],
          answer: '血栓',
          commentary: '',
        },
        {
          detailInfo: 'B問1(1)',
          questionImg: [],
          questionSentence:
            '腎血漿流量をRPF、ヘマトクリットをHtとすると、腎血流量はどのように表されるか。',
          answerImg: [],
          answer: '｛1/(1-Ht)｝×RPF',
          commentary:
            'Htは血中に赤血球がしめる割合。血液の固体成分はほとんど赤血球と考えられるので',
        },
        {
          detailInfo: 'B問1(2)',
          questionImg: [],
          questionSentence:
            '血漿浸透圧が上昇すると、Kイオンの分泌は（　）される',
          answerImg: [collectingTubuleReabsorption],
          answer: '抑制',
          commentary:
            '（正常構造p380）血漿浸透圧を構成する主な浸透圧成分はNa⁺である。過剰なNa⁺は、腎臓におけるNa⁺再吸収量を減らす。Na⁺の能動的な再吸収は細胞の側底膜に存在するNa⁺/K⁺ ATPase活性に依存しており、Na⁺再吸収量が減るとK⁺分泌量も減少する',
        },
        {
          detailInfo: 'B問1(3)',
          questionImg: [],
          questionSentence:
            '循環血流量が増加すると、心房圧が上昇し心房筋伸展刺激により心房性ナトリウム利尿ペプチドが分泌される。これにより、尿細管中の浸透圧は（　）するため、水の再吸収は抑制される',
          answerImg: [ANP],
          answer: '上昇',
          commentary:
            '水の再吸収は濃度勾配（浸透圧）にしたがって受動的に行われる。ANPはNa⁺再吸収を抑制することで水の再吸収も抑制している。',
        },
        {
          detailInfo: 'B問1(4)',
          questionImg: [],
          questionSentence:
            '血漿浸透圧が上昇すると、下垂体後葉からのバソプレシンの分泌は（　）される',
          answerImg: [],
          answer: '促進',
          commentary:
            'バソプレシンADHは集合管細胞の管腔膜の水透過性を上げ、尿を濃縮する作用（抗利尿作用）がある。→水の再吸収が促進される',
        },
        {
          detailInfo: 'B問1(5)',
          questionImg: [],
          questionSentence:
            '遠位尿細管が糸球体と接する部分は（　）とよばれる特殊な上皮を形成している。この部分は、ここに到達する尿量を尿中Cl⁻濃度の形で監視している',
          answerImg: [],
          answer: '緻密班',
          commentary: '',
        },
        {
          detailInfo: 'B問1(6)',
          questionImg: [],
          questionSentence:
            'ループ利尿薬は尿細管のうち、（　）に作用し、Na⁺-K⁺-Cl⁻共輸送体を阻害することで、ナトリウムを尿中に排泄させ利尿作用を発揮する。',
          answerImg: [diuretic],
          answer: '太い上行脚TAL',
          commentary: '',
        },
        {
          detailInfo: 'B問1(7)',
          questionImg: [],
          questionSentence:
            '女性の血清クレアチニンの値の正常範囲は、男性のその値より（　）。',
          answerImg: [],
          answer: '小さい',
          commentary:
            'クレアチンは筋肉が収縮する際にエネルギーとなるATPの再生に利用される。クレアチニンはその代謝産物',
        },
        {
          detailInfo: 'B問1(8)',
          questionImg: [],
          questionSentence:
            '代謝性アシドーシスの代償性反応として、肺での呼吸は（　）する。',
          answerImg: [],
          answer: '促進',
          commentary:
            'CO₂ + H₂O ←→ H₂CO₃ ←→ H⁺ + HCO₃⁻より、二酸化炭素濃度を下げようとする。',
        },
        {
          detailInfo: 'B問1(9)',
          questionImg: [],
          questionSentence:
            '集合管においてHCO₃⁻が新生される際に生じるH⁺は、尿細管中に移動し、（　）として尿中に排泄される',
          answerImg: [],
          answer: 'HPO₄²⁻/NH₃',
          commentary:
            'NH₃はアシドーシス時に腎臓で過剰なH⁺を排出する際に用いられる',
        },
        {
          detailInfo: 'B問1(10)',
          questionImg: [],
          questionSentence:
            'ケトン体や有機酸の蓄積するアシドーシスでは、アニオンギャップは（　）する',
          answerImg: [anionGap],
          answer: '増加',
          commentary:
            '糖尿病性ケトアシドーシスなどでは、酸性物質が体内に蓄積することで代謝性アシドーシスを引き起こす。',
        },
        // {
        //   detailInfo: 'B()',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '2019中間記述',
      groupContents: [
        {
          detailInfo: 'A問3',
          questionImg: [],
          questionSentence:
            '黄疸患者で尿ウロビリノーゲンを検出できない場合、黄疸の原因としてどのようなものを考えるか。理由も記載せよ。',
          answerImg: [bilirubin],
          answer:
            'ビリルビンを腸へ排出する経路が閉塞しているため（閉塞性黄疸）腸内細菌によるウロビリノーゲン変換が行われていない。例えば膵頭部癌',
          commentary:
            '正常なら腸内細菌によってビリルビン→ウロビリノーゲンに変換され一部が再吸収され尿中に排泄される。',
        },
        {
          detailInfo: 'A問4',
          questionImg: [],
          questionSentence:
            'A型の血清へB型の血球を加えると、どうなるか。理由も記せ。',
          answerImg: [],
          answer: '凝集する',
          commentary:
            'B型の赤血球にはB抗原があり、A型の血清には抗B抗体（IgM）が含まれているから',
        },
        {
          detailInfo: 'A問5',
          questionImg: [],
          questionSentence:
            '大動脈弁が閉鎖して左心室からの血液の拍出がなくなっても、血液は途絶せず、血圧も維持される。理由を説明せよ',
          answerImg: [vessel],
          answer:
            '大動脈は弾性繊維が豊富で、心臓収縮期は伸展して血液を一部貯留し心臓拡張期には収縮して貯留血液を送り出すから。',
          commentary: '動脈硬化によりこの作用は失われる→高血圧',
        },
        {
          detailInfo: 'A問6',
          questionImg: [],
          questionSentence: 'Crush症候群で心機能が停止するのはなぜか',
          answerImg: [hyperkalemia],
          answer:
            'Crush症候群により細胞外K⁺濃度が上昇し、K⁺チャネルによる再分極が行われなくなり膜電位が上昇し電位依存性Na⁺チャネルが不活化されてしまうから',
          commentary:
            '(正常構造p110)電位依存性Na⁺チャネルの閾値は-50mV前後で、これより膜電位が下がらない状態が続くと機能せず脈が跳ぶ。参考：高カリウム血症',
        },
        {
          detailInfo: 'A問7',
          questionImg: [],
          questionSentence:
            '心室筋と洞房結節の活動電位を図示し、相違点を二つ記載せよ',
          answerImg: [actionPotential],
          answer:
            '洞房結節には電位依存性Na⁺チャネルによる素早い脱分極（1相）と、L型電位依存性Ca²⁺チャネルによる非常に長い脱分極（2相）がみられない。',
          commentary:
            'そのほか、内向き整流性K⁺チャネルによる静止膜電位の固定がみられない。',
        },
        {
          detailInfo: 'A問8',
          questionImg: [],
          questionSentence:
            'スターリングの心臓の法則を、「前負荷」と「一回心拍出量」の用語を用いて説明せよ',
          answerImg: [],
          answer:
            '生理的範囲内で、前負荷が増大するほど一回拍出量が多くなるという法則',
          commentary:
            '心筋が伸展するとアクチンとミオシンの連結橋の数が増えて収縮力が強くなる。',
        },
        {
          detailInfo: 'A問9',
          questionImg: [],
          questionSentence:
            '１万人に一人が発症する常染色体劣性遺伝病について、キャリア（保因者）は何人に一人かを、計算過程とともに記せ',
          answerImg: [calculateCareer],
          answer: '1/100 * ほぼ1 * 2 = 1/50',
          commentary: '',
        },
        {
          detailInfo: 'A問10',
          questionImg: [],
          questionSentence:
            'スパイロメーターによる呼吸機能障害の分類方法について説明せよ',
          answerImg: [ventilationDisorder],
          answer:
            '1秒率が70%未満だと閉塞性換気障害、%肺活量（肺活量の予測値に対する実測値の割合）が80%未満だと拘束性換気障害、両方だと混合性換気障害',
          commentary: '',
        },
        {
          detailInfo: 'A問11',
          questionImg: [A201911],
          questionSentence: '以下の心電図の診断名と、診断の根拠を記せ',
          answerImg: [atrialFlutter],
          answer: '心房粗動',
          commentary: 'F波',
        },
        {
          detailInfo: 'A問12',
          questionImg: [A201912],
          questionSentence: '以下の心電図の診断名と、診断の根拠を記せ',
          answerImg: [mobitz],
          answer: 'MobitzⅡ型房室ブロック',
          commentary: 'QRS波の一部消失　PQ間隔一定',
        },
        {
          detailInfo: 'A問13',
          questionImg: [A201913],
          questionSentence: '以下の心電図の診断名と、診断の根拠を記せ',
          answerImg: [ventricularFibrillation],
          answer: '心室細動',
          commentary: '',
        },
        {
          detailInfo: 'A問14',
          questionImg: [A201914],
          questionSentence: '以下の心電図の診断名と、診断の根拠を記せ',
          answerImg: [prematureVcontraction],
          answer: '心室期外収縮',
          commentary: 'QRS波の幅が広い',
        },
        {
          detailInfo: 'B問2',
          questionImg: [],
          questionSentence:
            '糸球体で血液が濾過されるためには、糸球体毛細血管圧が、血液の濾過される方向と反対向きに働く力より大きくなければならない。糸球体において、この糸球体毛細血管圧と逆向きに働く力にはどのようなものがあるのか、簡潔に答えなさい。',
          answerImg: [glomerularFiltration],
          answer:
            '逆向きに働く力：膠質浸透圧差に伴う力（血漿膠質浸透圧）かボウマン腔圧',
          commentary:
            '糸球体浸透圧P = 静水圧差ΔP - 膠原浸透圧差Δπ = 糸球体毛細血管圧 - ボウマン腔圧 + 血漿膠質浸透圧。糸球体濾過圧は内圧差と浸透圧差で決まるということ（そして浸透圧差は濾過に対して逆向きに働く）',
        },
        {
          detailInfo: 'B問3',
          questionImg: [],
          questionSentence:
            'ネフローゼ症候群で高LDLコレステロール血症などの脂質異常症が見られることがあるのはなぜか。簡潔に答えなさい。',
          answerImg: [],
          answer:
            '尿中にタンパクが流出して血中アルブミンが低下すると、LDLやVLDLといった肝臓のリポタンパクの合成が非特異的に促進されるから',
          commentary: '',
        },
        {
          detailInfo: 'B問4',
          questionImg: [],
          questionSentence:
            '糸球体基底膜に存在するへパラン硫酸プロテオグリカンが破壊されると、アルブミンなどが尿中に観察されることがある。この理由をへパラン硫酸プロテオグリカンの持っている物質の特性を踏まえて、簡潔に答えなさい',
          answerImg: [glomeruli],
          answer:
            'プロテオグリカンはヘパラン硫酸を主成分とし、糸球体基底膜GBM全体の陰性荷電の主役である。これが破壊されると陰性荷電をもつ分子が濾過されてしまう',
          commentary:
            'ろ過障壁にはサイズ選択性障壁size selective barrierと荷電選択性障壁charge selective barrierがある',
        },
        {
          detailInfo: 'B問5',
          questionImg: [],
          questionSentence:
            '腎機能の指標としてクレアチニン・クリアランス値Ccrが用いられる事がある。尿中のクレアチニン濃度をUcr、血清中のクレアチニン濃度をPcr、24時間の畜尿で得られた尿量をVとすると、Ccrはどのように表されるのか、記入しなさい',
          answerImg: [],
          answer: 'Ccr = (Ucr×V/1440)/Pcr',
          commentary:
            'Ccr=（Ucr/Pcr）×（V/1440）でも。24時間=1440分通算のVを1分あたりに直す',
        },
        {
          detailInfo: 'B問6',
          questionImg: [],
          questionSentence:
            '試験紙法による検査で尿蛋白が陰性でも、定量検査で尿蛋白が検出される場合がある。この例を1つあげなさい。',
          answerImg: [],
          answer:
            '例1)オーバーフロー蛋白尿（分子量の小さな蛋白が血中に多く産生されて糸球体の濾過量を上回ることで尿に蛋白が出現する）。例2)ベンスジョーンズ蛋白が出現する円柱腎症。',
          commentary:
            '尿試験紙は低いpHに緩衝されており、タンパク質は濾液のpHによって荷電する。その荷電によりpH指示薬の色調が変化し、どのくらい尿蛋白がでているか把握できる。試験紙法で検出される蛋白の大部分はアルブミン。',
        },
      ],
    },
    {
      groupTag: '2018中間(記述以外)',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '成人では、細胞内液は体重の（　）％を占める。',
          choices: ['20', '30', '40', '50', '60'],
          answerImg: [],
          answer: '40',
          commentary:
            '細胞内液:間質液:血漿 = 8:3:1。全体重の6割が水分なので、この2/3が細胞内液ICF',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '血液のpHの正常値は、（　）±0.05である。',
          choices: ['7.0', '7.2', '7.4', '7.6', '7.8'],
          answerImg: [],
          answer: '7.4',
          commentary:
            '酸性物質や二酸化炭素は腎臓や肺から排出されやすいので、ややアルカリ性',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '（　）%の食塩水の浸透圧は、体液の浸透圧とほぼ等張である',
          answerImg: [],
          answer: '0.9',
          commentary: '生理食塩水。ブドウ糖なら5%',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '血中の（　）は、体内の貯蔵鉄の量を反映する',
          answerImg: [],
          answer: 'フェリチン',
          commentary:
            '血清中のフェリチンは、鉄をほとんど含まないが、体内の貯蔵鉄量を鋭敏に反映するので、鉄欠乏の検査マーカーとしての意義が高い。→鉄欠乏性貧血',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '腎不全で貧血をきたすのは、腎臓での（　）産生が低下するためである',
          answerImg: [],
          answer: 'エリスロポエチン',
          commentary: '→腎性貧血　EPO注射で治療',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '正しいものを全て選べ',
          choices: [
            'IgMは胎盤を通過しない',
            'IgEはⅠ型アレルギーで低下する',
            'IgGは血中の免疫グロブリンの中で、最も濃度が高い',
            'HIVは、CD8陽性細胞へ感染する',
            '直接型ビリルビンは、血中ではアルブミンと結合している',
          ],
          answerImg: [immunoGloblin, bilirubin],
          answer:
            'IgMは胎盤を通過しない / IgGは血中の免疫グロブリンの中で、最も濃度が高い',
          commentary:
            '胎盤を通過するのはIgG。IgEはⅠ型（即時型）アレルギーで中心的な役割をする。血漿中濃度はIgG > IgA > IgM > IgD > IgEの順。HIVが感染するのはCD4陽性T細胞（ヘルパーT）。アルブミンと結合しているのは間接型ビリルビン（グルクロン酸抱合を受けていない）',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '（　）は、superoxide をhydrogen peroxideに変換する酵素である',
          answerImg: [superoxide],
          answer: 'SOD/superoxide dismutase',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '補体活性化の古典的経路は、（　）複合体のFc部にC₁が結合することで連鎖的に生じる',
          answerImg: [],
          answer: '抗原抗体',
          commentary:
            '古典的経路のみ抗体の関与が必要。その他、補体活性化の最終産物は膜侵襲複合体という。細菌などの細胞膜に穴をあける。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'von Willebrand因子は、血管内皮の損傷時に、内皮下の（　）へ結合する',
          answerImg: [vonWillebrand],
          answer: 'コラーゲン線維',
          commentary:
            'フォン・ウィルブランド因子は血小板（の膜に存在するGpⅠb-Ⅴ-Ⅸ）とコラーゲンとの間を架橋する。正常構造p496',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '血小板の凝集を促進する因子を全て選べ',
          choices: ['ADP', 'PAF', 'トロンビン', 'PGI₂', 'NO', 'フィブリン'],
          answerImg: [],
          answer: 'ADP、PAF、トロンビン、フィブリン',
          commentary:
            'PAF:血小板活性化因子。ADPは血小板の密顆粒中に存在し、セロトニンとともに細胞外に放出されること（脱顆粒）で他の血小板を活性化させる',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '肝臓での合成にビタミンKが必須な凝固因子を4つ挙げよ。',
          answerImg: [],
          answer: '2,7,9,10',
          commentary: 'にく・なっとう',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'フィブリンは（　）により分解される',
          answerImg: [coagulation],
          answer: 'プラスミン',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '心臓のⅠ音に寄与するものを全て選べ',
          choices: [
            '僧帽弁の閉鎖',
            '僧帽弁の開放',
            '大動脈弁の閉鎖',
            '大動脈弁の開放',
            '三尖弁の閉鎖',
            '三尖弁の開放',
            '肺動脈弁の閉鎖',
            '肺動脈弁の開放',
          ],
          answerImg: [],
          answer: '僧帽弁の閉鎖　三尖弁の閉鎖',
          commentary: 'Ⅰ音は房室弁が閉鎖する音。Ⅱ音は動脈弁が閉鎖する音。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '以下のうちで、刺激伝達速度が最も遅いものはどれか',
          choices: ['プルキンエ線維', 'ヒス束', '心房筋', '心室筋', '洞房結節'],
          answerImg: [cardiacPotential],
          answer: '洞房結節',
          commentary:
            '伝達速度はプルキンエ線維・ヒス束 > 心房筋・心室筋 > 洞房結節・房室結節',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'Na⁺-K⁺ポンプ(Na⁺-K⁺ ATPase)は、（　）個のNa⁺を細胞外へ排出して、2個のK⁺を取り込む',
          answerImg: [cardiacIonChannel],
          answer: '3',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'リエントリーは、頻脈性不整脈の主なメカニズムの一つである。リエントリーの回路は一方向性ブロックと（　）の低下の2条件がそろうことで形成される',
          answerImg: [reentry],
          answer: '伝導速度',
          commentary: '参考：心房粗動・上室頻拍',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'ポアズイユの法則が成立するのは、血液の流れが（　）流を形成している場合である',
          answerImg: [],
          answer: '層流laminar flow',
          commentary:
            '流速が早くなると、流れの中に渦が生じ、流体の各部分が互いに不規則に入り乱れる。このような流れを乱流turbulent flowという。乱流下では法則は成立しない',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'ポワズイユの法則によると、血管抵抗は血管半径の（　）乗に反比例する',
          answerImg: [],
          answer: '4',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '安静時に血流量が最も多いものを選べ',
          choices: ['冠動脈', '脳', '内臓', '筋肉', '皮膚'],
          answerImg: [],
          answer: '内臓',
          commentary: '冠動脈5%,腎20%,脳15%,内臓30%,皮膚10%,筋15%',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '体内で血管総断面積が最大なのはどれか',
          choices: ['動脈', '細動脈', '毛細血管', '細静脈', '静脈'],
          answerImg: [vessel],
          answer: '毛細血管',
          commentary: '容量血管とよばれるのは静脈',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '最高血圧と最低血圧の差を（　）という',
          answerImg: [measureBloodPressure],
          answer: '脈圧',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '心臓の拍動に伴う末梢血管系内の血圧・体積の変化を（　）という',
          answerImg: [],
          answer: '心拍変動？',
          commentary:
            '心臓の拍動に伴う血圧の変化を血圧の心拍変動と呼びます。一方、呼吸に伴う血圧の変化を血圧の呼吸変動と呼びます。息を吸ったときに血圧は低下し、息を吐いたときに上昇します。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '重力の影響で、（　）cmあたり1mmHgの静水圧差が生じる',
          answerImg: [],
          answer: '1.35cm',
          commentary:
            '水銀Hgの密度（比重）は約13.5g/cmで、水の13.5倍→水銀1mmと水13.5mmに働く重力が同じ',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '細胞膜のphosphatidylinositol-4,5-bisphosphate(PIP₂)がphospholipase C(PLC)により切断されると、（　）とinositol-1,4,5-trisphosphate(IP₃)が生成される',
          answerImg: [],
          answer: 'ジアシルグリセロール(DG)',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'IP₃は、細胞内の（　）の濃度の上昇に寄与する',
          answerImg: [vasoconstriction],
          answer: 'Ca²⁺',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'アドレナリン受容体には複数の種類が存在し、その中の（　）受容体は、心機能の亢進に寄与する',
          answerImg: [autonomicNerve],
          answer: 'β₁受容体',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '血管平滑筋の収縮を促進する物質を全て選べ',
          choices: [
            'アンギオテンシンⅡ',
            'バゾプレッシン',
            'ブラジキニン',
            'アセチルコリン',
            'アドレノメジュリン',
            'ヒスタミン',
          ],
          answerImg: [vasoconstriction],
          answer: 'アンギオテンシンⅡ、バゾプレッシンADH',
          commentary:
            'アドレノメジュリン（アドレノメデュリン）・ブラジキニン・アセチルコリンは血管弛緩作用。ヒスタミンは血管壁透過性も亢進する',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '（　）は、心房壁が伸展されると放出され、利尿や血管平滑筋の弛緩を促す',
          answerImg: [ANP],
          answer: 'ANP',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '血流のずり応力は、（　）細胞を刺激して、NOやPGI₂などの放出を促す',
          answerImg: [],
          answer: '血管内皮細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '頚動脈洞圧受容器が刺激されると、その情報は、舌咽神経を介して、延髄の（　）へ達する',
          answerImg: [autonomicNerve],
          answer: '孤束核',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '末梢組織で生成したCO₂は、炭酸脱水酵素の働きにより、H⁺と（　）に変換される',
          answerImg: [],
          answer: 'HCO₃⁻',
          commentary: 'CO2 + H20 <-> H2CO3 <-> H + HCO3 ',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '全身の血流が急激に低下し、その結果、末梢組織への血流の供給が不足した状態を、（　）という。',
          answerImg: [],
          answer: '血行障害',
          commentary: '疼痛が伴うことがある',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '頚動脈小体、大動脈小体は、主に（　）の低下を感知する',
          answerImg: [],
          answer: '酸素分圧',
          commentary:
            'これら末梢性化学受容器に対して、延髄の中枢性化学受容器は主に二酸化炭素分圧を感知する',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '気道の中で、ガス交換に関与しない部分を（　）という。',
          answerImg: [],
          answer: '導管部',
          commentary:
            '導管部（解剖学的死腔/気道系）：気管～終末細気管支　呼吸部（肺胞実質系）：呼吸細気管支～肺胞嚢',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'Cystic fibrosisは（　）チャネルの遺伝的異常が原因である',
          answerImg: [],
          answer: 'Cl⁻',
          commentary:
            '嚢胞性線維症は常染色体劣性遺伝で、欧米白人の1/2500が発病。外分泌液が著しく粘稠',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'スパイロメーターで測定できないものを全て選べ',
          choices: [
            '全肺気量',
            '肺活量',
            '一回換気量',
            '残気量',
            '機能的残気量',
            '予備吸気量',
            '予備呼気量',
          ],
          answerImg: [lungCapacity],
          answer: '全肺気量、残気量、機能的残気量',
          commentary:
            'スパイロメーターでは残気量RVや、残気量を含む指標が全て測定できない',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '酸素解離曲線を右方へ移動させる要因を全て選べ',
          choices: [
            'pH低下',
            '二酸化炭素分圧上昇',
            '温度低下',
            '2,3-DPG低下',
            '高血糖',
          ],
          answerImg: [ODC],
          answer: 'pH低下、二酸化炭素分圧上昇、高血糖',
          commentary:
            '例えば糖尿病性ケトアシドーシスはpH低下と同義。その他、温度上昇・2,3-DPG上昇でも右方へ移動する。参考：ボーア効果',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'ホールデン効果によると、血液が含有する（　）の量は、酸素分圧の上昇に反比例して減少する。',
          answerImg: [CDDC],
          answer: '二酸化炭素',
          commentary:
            '保有できなくなった二酸化炭素は速やかに肺から排出されるため都合が良い',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '肺の伸展受容器を介する呼吸反射を、（　）反射という',
          answerImg: [respiratoryReflex],
          answer: 'Hering-Breuer反射',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '糖尿病ケトアシドーシスでは、CO₂の排出によりアシドーシスを補正しようとする生体反応の結果、ゆっくりとした深い規則的な呼吸を認めることがある。この呼吸を（　）という。',
          answerImg: [],
          answer: 'Kussmaul呼吸',
          commentary: 'クスマウル呼吸',
        },
        {
          detailInfo: 'B1',
          questionImg: [],
          questionSentence:
            '過剰に存在するK⁺イオンは集合管の（　）細胞から分泌される',
          answerImg: [collectingTubuleReabsorption],
          answer: '主細胞',
          commentary:
            'Na⁺/K⁺ ATPaseによりNa⁺再吸収とK⁺分泌を同時に行う。アルドステロンはこのポンプの合成やATP産生を促進する。この部位を阻害する利尿薬はK⁺保持性利尿薬と呼ばれる',
        },
        {
          detailInfo: 'B2',
          questionImg: [],
          questionSentence:
            '不揮発性酸を分泌するために、近位尿細管で（　）からα-ケトグルタル酸とNH₃が合成され、NH₃は細胞内から尿細管中に拡散し、H⁺と結合してNH₄⁺を形成する。',
          answerImg: [adjacentPHinKidney],
          answer: 'グルタミンGln',
          commentary:
            '体液が酸性に傾くと、近位尿細管においてグルタミン→NH₃産生が促進され、遠位尿細管などから分泌されたH⁺と反応してNH₄⁺となり、尿中に排出される。1日最大300mEqの酸負荷に対応する',
        },
        {
          detailInfo: 'B3',
          questionImg: [],
          questionSentence:
            '近位尿細管におけるリン酸の再吸収は（　）ホルモンにより調節される',
          answerImg: [controlP],
          answer: '副甲状腺ホルモンPTH',
          commentary:
            'PTHはCa²⁺再吸収も促進する。カルシトニンにはリン酸調節作用はない。',
        },
        {
          detailInfo: 'B4',
          questionImg: [],
          questionSentence:
            'アルドステロンは、アンジオテンシンⅡまたは、血漿中のK⁺イオン濃度の（　）によって副腎皮質より分泌される',
          answerImg: [],
          answer: '上昇',
          commentary:
            'アルドステロンは皮質集合管主細胞でNa⁺再吸収K⁺分泌を促進する',
        },
        {
          detailInfo: 'B5',
          questionImg: [],
          questionSentence:
            'アシドーシスのうち、HCO₃⁻が減少するのは（　）性アシドーシスである',
          answerImg: [H2CO3],
          answer: '代謝性',
          commentary:
            'H₂O + CO₂ <-> H₂CO₃ <-> H⁺ + HCO₃⁻参考。代謝性アシドーシスでは酸負荷に対しHCO₃⁻を消費する緩衝作用がはたらく。呼吸性アシドーシス（換気不良）ならCO₂↑のためHCO₃⁻はむしろ増える。',
        },
        {
          detailInfo: 'B6',
          questionImg: [],
          questionSentence:
            '下痢や脱水で体内の水分が不足したとき、血漿浸透圧は（　）する',
          answerImg: [dehydration],
          answer: '上昇',
          commentary:
            '水欠乏型脱水では、水分が減るので血漿Na⁺濃度は上昇する（塩は不足していない）。ただし一般的に下痢の場合はミネラル流失による塩欠乏性脱水となる事が多い',
        },
        {
          detailInfo: 'B7',
          questionImg: [],
          questionSentence:
            'アルカローシスのうち、腎でのHCO₃⁻の排泄により病態が改善するものは、（　）が原因で起こる。',
          answerImg: [H2CO3],
          answer: '呼吸',
          commentary:
            '呼吸性アルカローシスでは過換気症候群などによりCO₂濃度が低下しており、これはある程度腎でのHCO₃⁻排泄（→H⁺増加）により代償される。',
        },
        {
          detailInfo: 'B8',
          questionImg: [],
          questionSentence:
            'アルコールに利尿作用があるのは、ADHの（　）からの分泌が抑制されるためである。',
          answerImg: [],
          answer: '下垂体後葉',
          commentary:
            '経口摂取されたアルコールは、20%が胃、80%が小腸で吸収される。アルコールは中枢神経系に抑制的に作用する',
        },
      ],
    },
    {
      groupTag: '2018中間記述',
      groupContents: [
        {
          detailInfo: 'A41',
          questionImg: [],
          questionSentence:
            'スパイロメーターによる拘束性換気障害と閉塞性換気障害の診断基準を述べ、各障害をきたす代表的な疾患を一つずつ記載せよ',
          answerImg: [ventilationDisorder],
          answer:
            '拘束性換気障害:%VC < 80%、代表的疾患は肺線維症・間質性肺疾患など　/　閉塞性換気障害:1秒率 < 70%、代表的疾患は気管支喘息・慢性閉塞性肺疾患COPDなど',
          commentary:
            '1秒率/FEV₁%=努力肺活量に対する1秒量の割合。70%以上で正常。　%VC/%肺活量=肺活量の予測値に対する実測値の割合。80%以上で正常。',
        },
        {
          detailInfo: 'A42',
          questionImg: [],
          questionSentence: '栄養状態の不良により浮腫をきたすのはなぜか',
          answerImg: [],
          answer:
            '栄養失調によりアルブミンの生成が不足し、血漿膠質浸透圧が低下し間質液量が増加するから。',
          commentary: '',
        },
        {
          detailInfo: 'A43',
          questionImg: [],
          questionSentence:
            '黄疸の患者で、尿ウロビリノーゲンを検出できない時、どのような病態が考えられるか',
          answerImg: [bilirubin],
          answer: '膵頭部癌などによる胆道の閉鎖',
          commentary: '直接ビリルビン→ウロビリノーゲンには腸内細菌が必須',
        },
        {
          detailInfo: 'A44',
          questionImg: [],
          questionSentence: '筋肉ポンプとは何か、説明せよ',
          answerImg: [],
          answer:
            '筋肉が収縮すると血管を圧迫する。これが静脈やリンパ管の一方向性の弁と組み合わさることで、血液を押し上げる作用のこと',
          commentary: '→動脈には筋ポンプ作用はない',
        },
        {
          detailInfo: 'A45',
          questionImg: [],
          questionSentence:
            '心室筋の活動電位の形状を図示し、各相へ寄与するチャネル電流について説明せよ',
          answerImg: [actionPotential],
          answer:
            '0相)電位依存性Na⁺チャネルによる内向きNa⁺電流　1相)電位依存性K⁺チャネルによる外向きK⁺電流　2相)L型電位依存性Ca²⁺チャネルによる内向きCa²⁺電流　3相)電位依存性K⁺チャネルによる外向きK⁺電流　4相)内向き整流性K⁺チャネルによる内向きK⁺電流（外向きにも少し流れる）',
          commentary:
            '脱分極→早期再分極→プラトー→再分極→静止電位　正常構造p110',
        },
        {
          detailInfo: 'A46',
          questionImg: [],
          questionSentence: 'スターリングの心臓の法則について説明せよ',
          answerImg: [],
          answer:
            '一定の範囲内で、前負荷が大きいほど心臓の拍出量が増すという法則',
          commentary: '心筋の性質（伸展時の方が連絡橋が増え収縮力が増す）',
        },
        {
          detailInfo: 'A47',
          questionImg: [],
          questionSentence:
            '心臓の拡張期には、心臓から大動脈への拍出がゼロになるが、それにも関わらず、大動脈から末梢への血流は維持される。理由を説明せよ',
          answerImg: [vessel],
          answer:
            '大動脈は弾性繊維が豊富で、一定の血圧を維持しながら心臓収縮期に拡張することで貯えた血液を心臓拡張期に送り出すから。',
          commentary: '動脈硬化や加齢によりこの機能は失われる→高血圧',
        },
        {
          detailInfo: 'A48',
          questionImg: [],
          questionSentence:
            '門脈圧亢進症の患者が吐血した。どのような理由が考えられるか',
          answerImg: [portalHypertension],
          answer: '食道静脈瘤の破裂',
          commentary: 'その他痔核・臍傍静脈の怒張（メデューサの頭）など',
        },
        {
          detailInfo: 'A49',
          questionImg: [],
          questionSentence:
            '換気血流比の不均衡により肺胞でのガス交換の効率が低下すると、それを是正するために、肺の血管に特徴的な反応が生じる。どのような反応が生じるかを説明せよ。',
          answerImg: [ventilationPerfusionRatio],
          answer: '低酸素性肺血管収縮',
          commentary:
            '換気不良などにより交換効率が悪化している箇所の肺細動脈が収縮することによって血流が減少し、換気血流比の均等性が回復する反応',
        },
        {
          detailInfo: 'A50',
          questionImg: [A201850],
          questionSentence: '次の心電図の疾患名と、診断の根拠を記載せよ',
          answerImg: [RBundleBrunchBlock],
          answer: '右脚ブロック',
          commentary: 'Ⅲ,V₁の波形が特徴的',
        },
        {
          detailInfo: 'B9',
          questionImg: [],
          questionSentence:
            '糸球体で濾過された原尿が尿管にたどり着くまでに、どのようなルートを経由するか、以下の項目をそのルートの順に並べなさい',
          choices: [
            'ヘンレ系蹄太い上行脚',
            '遠位尿細管',
            '集合管',
            '腎盂',
            'ヘンレ系蹄下行脚',
            '腎杯',
            'ヘンレ系蹄細い上行脚',
          ],
          answerImg: [diuretic],
          answer:
            'ヘンレ系蹄下行脚→ヘンレ系蹄細い上行脚→ヘンレ系蹄太い上行脚→遠位尿細管→集合管→腎杯→腎盂',
          commentary: '',
        },
        {
          detailInfo: 'B10',
          questionImg: [],
          questionSentence:
            '糸球体に働く以下で示される4つの圧差により、血漿が毛細血管からボウマン腔へ濾過される。ここで、糸球体濾過係数をKfとすると、糸球体濾過量GFRはどのような式で表されるか',
          choices: [
            '糸球体毛細血管静水圧 Pgc',
            'ボウマン腔内に含まれる液体の膠原浸透圧 πt',
            '糸球体毛細血管内に含まれる液体の膠原浸透圧 πgc',
            'ボウマン腔内静水圧 Pt',
          ],
          answerImg: [],
          answer: 'GFR = Kf{Pgc - Pt - (πgc - πt)}',
          commentary:
            '毛細血管における浸透圧 P = 静水圧差ΔP - 膠原浸透圧差Δπ。浸透圧と濾過量は比例関係にある',
        },
        {
          detailInfo: 'B②-1',
          questionImg: [],
          questionSentence: 'イヌリンのクリアランスと同義なのは以下のどれか',
          choices: [
            '糸球体で濾過される単位時間当たりのイヌリンの量',
            '膀胱へ流入する単位時間当たりのイヌリンの量',
            'イヌリンが完全に除去されるために必要な単位時間当たりの血漿量',
            '糸球体を通過する単位時間当たりの血液量',
            '糸球体で濾過された後、尿細管で再吸収される単位時間当たりのイヌリンの量',
          ],
          answerImg: [],
          answer: '糸球体で濾過される単位時間当たりの【血液量】',
          commentary:
            'イヌリンクリアランスは、「イヌリンが1分あたりに何mLの血液から除去されたか」を示すもので、イヌリンの量ではない。イヌリンは濾過量を反映する物質で糸球体を通過する血液量とは直接関係しないし、「イヌリンが完全に除去されるために必要な単位時間当たりの血漿量」も意味不明（腎血漿流量RPFを指しているのならこの選択肢ではない）',
        },
        {
          detailInfo: 'B2-2',
          questionImg: [B20182],
          questionSentence:
            'イヌリンとPAHは輸入細動脈から糸球体に流入した後、それぞれどのような挙動をとり尿中に排泄されるか、解答例にならって図示しなさい',
          answerImg: [clearanceExample],
          answer:
            'イヌリン:糸球体濾過された分は全て除去される（再吸収も分泌もない）。　PAH（馬尿酸）:濾過・尿細管分泌を通して最終的に腎臓を通過したほとんどが除去される',
          commentary: '',
        },
        // {
        //   detailInfo: 'A4',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '心電図',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [ecg1],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [wenckebach],
          answer: 'Wenckebach型',
          commentary:
            '予定の所にQRS波が入らない。正常P波の規則的な出現。PQ間隔変動(徐々に大きくなる)',
        },
        {
          detailInfo: '',
          questionImg: [ecg2],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [avBlock1],
          answer: '第1度房室ブロック',
          commentary:
            'PQ間隔(P波のはじめ～Q波のはじめ)異常（5ミリより長い）リズムは一定',
        },
        {
          detailInfo: '',
          questionImg: [ecg3],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [avBlock3],
          answer: '完全房室ブロック',
          commentary: 'P波は正常でQRS波が徐脈。心拍数に問題あり',
        },
        {
          detailInfo: '',
          questionImg: [ecg4],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [mobitz],
          answer: 'MobitzⅡ型',
          commentary:
            '予定の所にQRS波が入らない。正常P波の規則的な出現。PQ間隔は一定',
        },
        {
          detailInfo: '',
          questionImg: [ecg5],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [atrialFibrillation],
          answer: '心房細動',
          commentary:
            'P波がない。f波がある（V₁だと見やすい）心房細動では心房の中で血栓ができやすい。血液凝固対策としてワーファリンを用いる。ビタミンK依存で肝臓で合成される血液凝固因子2,7,9,10に対して作用する。治療中は納豆などビタミンKを多く含む食物は厳禁',
        },
        {
          detailInfo: '',
          questionImg: [ecg6],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [ventricularFibrillation],
          answer: '心室細動',
          commentary:
            '心拍数に問題あり。頻脈。不規則。まず意識はないので、除細動が必要。',
        },
        {
          detailInfo: '',
          questionImg: [ecg7],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [prematureVcontraction],
          answer: '心室期外収縮',
          commentary:
            '予定より早くQRS波が入る。（上室期外収縮と比べて）QRS波の幅が広い←プルキンエ線維を介さないから伝導速度が遅い',
        },
        {
          detailInfo: '',
          questionImg: [ecg8],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [ventricularTachycardia],
          answer: '心室頻拍VT',
          commentary:
            '心拍数に問題あり。頻脈。規則的でQRS波の幅が広い。心室細動と違い意識がある場合がある。',
        },
        {
          detailInfo: '',
          questionImg: [ecg9],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [supraventricularTachycardia],
          answer: '発作性上室頻拍',
          commentary:
            '心拍数に問題あり（12.5目盛り=0.5秒間隔＝100オーバー）。頻脈。規則的でQRS波が狭い。P波がハッキリしない',
        },
        {
          detailInfo: '',
          questionImg: [ecg10],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [atrialFlutter],
          answer: '心房粗動',
          commentary: 'P波がない→F波がある　今回は4対1伝導',
        },
        {
          detailInfo: '',
          questionImg: [ecg11],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [RBundleBrunchBlock],
          answer: '完全右脚ブロック',
          commentary: 'QRS波幅が広い　rsR/rSR Tは陰性（V₁）',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [ecg12],
        //   questionSentence: 'この心電図が示す疾患を答えよ',
        //   answerImg: [],
        //   answer: '完全左脚ブロック',
        //   commentary: '',
        // },
        {
          detailInfo: '',
          questionImg: [ecg12],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [SVPrematureContraction],
          answer: '上室期外収縮',
          commentary: '予定より早くP＆QRS波が入る。通常のQRS幅',
        },
        {
          detailInfo: '',
          questionImg: [ecg13],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [WPW],
          answer: 'WPW症候群',
          commentary: 'PQ間隔が異常に短い',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [ecg15],
        //   questionSentence: 'この心電図が示す疾患を答えよ',
        //   answerImg: [],
        //   answer: '急性期心筋梗塞',
        //   commentary: '',
        // },
        {
          detailInfo: '',
          questionImg: [ecg14],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [wenckebach],
          answer: 'Wenckebach型',
          commentary:
            '予定の所にQRS波が入らない。正常P波の規則的な出現。PQ間隔変動',
        },
        {
          detailInfo: '',
          questionImg: [ecg15],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [mobitz],
          answer: 'MobitzⅡ型',
          commentary:
            '予定のところにQRS波が入らない。正常P波の規則的な出現。PQ間隔一定',
        },
        {
          detailInfo: '',
          questionImg: [ecg16],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [avBlock3],
          answer: '完全房室ブロック',
          commentary: '心拍数に問題あり。徐脈',
        },
        {
          detailInfo: '',
          questionImg: [ecg17],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [sickSinusSyndrome],
          answer: '洞不全症候群',
          commentary:
            '予定の所にPもQRS波も入らない。正常P波を認めないQRS波の脱落',
        },
        {
          detailInfo: '',
          questionImg: [ecg18],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [ventricularTachycardia],
          answer: '心室頻拍',
          commentary: '心拍数に問題あり。頻脈。規則的。QRS幅が広い。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [ecg19],
        //   questionSentence: 'この心電図が示す疾患を答えよ',
        //   answerImg: [],
        //   answer: '発作性上室頻拍',
        //   commentary: '',
        // },
        {
          detailInfo: '',
          questionImg: [ecg19],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [atrialFibrillation],
          answer: '心房細動',
          commentary: 'P波がない。f波がある（V₁みやすい）。',
        },
        {
          detailInfo: '',
          questionImg: [ecg20],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [angina],
          answer: '労作時狭心症',
          commentary:
            'ST下降 運動負荷をかけた後に症状が出る事がヒント ニトログリセリンを舌下投与（肝臓を通らない経路）することで治療する。',
        },
        {
          detailInfo: '',
          questionImg: [ecg21],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [LBundleBranchBlock],
          answer: '完全左脚ブロック',
          commentary:
            'QRS幅が広い（→心室の伝導に問題がある）　Sが深い Tが陽性で増高 (V₁)。規則的。',
        },
        {
          detailInfo: '',
          questionImg: [ecg22],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [prematureVcontraction],
          answer: '心室期外収縮',
          commentary: '予定より速くQRSが入る。QRS波の幅が広い。',
        },
        {
          detailInfo: '',
          questionImg: [ecg23],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [RBundleBrunchBlock],
          answer: '完全右脚ブロック',
          commentary: 'QRS幅が広い rsR or rSR Tは陰性 (V1)',
        },
        {
          detailInfo: '',
          questionImg: [ecg24],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [hyperkalemia],
          answer: '高カリウム血症',
          commentary: 'T波の増高　テント状T波',
        },
        {
          detailInfo: '',
          questionImg: [ecg25],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [WPW],
          answer: 'WPW症候群',
          commentary: 'PQ間隔が異常に短い。デルタ波。規則的。',
        },
        {
          detailInfo: '',
          questionImg: [ecg26],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [avBlock1],
          answer: '第1度房室ブロック',
          commentary: 'PQ間隔が異常に長いがQRSが消えるほどではない',
        },
        {
          detailInfo: '',
          questionImg: [ecg27],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [myocardialInfarction],
          answer: 'lateralの心筋梗塞',
          commentary:
            'STに異常→上昇→急性期心筋梗塞 Ⅰ aVL V₄~V₆あたりで上昇が見られる(Ⅱ Ⅲ aVF aVR)で下降(reciprocal change)→lateral（側壁）',
        },
        {
          detailInfo: '',
          questionImg: [ecg28],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [LBundleBranchBlock],
          answer: '完全左脚ブロック',
          commentary: 'QRS幅が広い　Sが深い　Tが陽性で増高',
        },
        {
          detailInfo: '',
          questionImg: [ecg29],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [atrialFlutter],
          answer: '心房粗動',
          commentary: 'P波がない　F波がある',
        },
        {
          detailInfo: '',
          questionImg: [ecg30],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [angina],
          answer: '労作性狭心症',
          commentary: 'ST下降　安静時・負荷後というヒント',
        },
        {
          detailInfo: '',
          questionImg: [ecg31],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [avBlock1],
          answer: '第1度房室ブロック',
          commentary: 'PQ間隔が異常な長さ。QS波',
        },
        {
          detailInfo: '',
          questionImg: [ecg32],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [myocardialInfarction],
          answer: '前壁中隔の心筋梗塞          ',
          commentary:
            'ST上昇が特に顕著なのはV₁～V₄で、前壁中隔の梗塞と考えられる',
        },
        {
          detailInfo: '',
          questionImg: [ecg33],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [sickSinusSyndrome],
          answer: '洞不全症候群',
          commentary: 'P波・QRS波全ての脱落',
        },
        {
          detailInfo: '',
          questionImg: [ecg34],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [prematureVcontraction],
          answer: '心室期外収縮',
          commentary: '予定より速くQRS波が入る。QRSの幅が広い。',
        },
        {
          detailInfo: '',
          questionImg: [ecg35],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [RBundleBrunchBlock],
          answer: '完全右脚ブロック',
          commentary:
            'QRS波が広く、後半はV₁方向で+（V₆で-）になっていることから右脚がブロックされている',
        },
        {
          detailInfo: '',
          questionImg: [ecg36],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [WPW],
          answer: 'WPW症候群',
          commentary: 'PQ間隔が異常に短い',
        },
        {
          detailInfo: '',
          questionImg: [ecg37],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [wenckebach],
          answer: 'Wenckebach型',
          commentary:
            'PQ間隔が異常に長く、変動している(長くなっていっている)。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [ecg41],
        //   questionSentence: 'この心電図が示す疾患を答えよ',
        //   answerImg: [],
        //   answer: 'Wenckebach型',
        //   commentary: '',
        // },
        {
          detailInfo: '',
          questionImg: [ecg38],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [ventricularTachycardia],
          answer: '心室頻拍',
          commentary: '規則的で特徴的な心室の波₂',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [ecg43],
        //   questionSentence: 'この心電図が示す疾患を答えよ',
        //   answerImg: [],
        //   answer: 'MobitzⅡ型',
        //   commentary: '',
        // },
        {
          detailInfo: '',
          questionImg: [ecg39],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [RBundleBrunchBlock],
          answer: '完全右脚ブロック',
          commentary: 'Ⅱ誘導やV₂の波形がわかりやすい',
        },
        {
          detailInfo: '',
          questionImg: [ecg40],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [atrialFibrillation],
          answer: '心房細動',
          commentary: 'f波が見られる',
        },
        {
          detailInfo: '',
          questionImg: [ecg41],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [wenckebach],
          answer: 'Wenckebach型',
          commentary:
            '予定のところにPやQRSが入らない 正常P波の規則的な出現 PQ間隔変動',
        },
        {
          detailInfo: '',
          questionImg: [ecg42],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [ventricularTachycardia],
          answer: '心室頻拍',
          commentary: '心拍数に問題あり 頻脈 規則的 QRS幅が広い          ',
        },
        {
          detailInfo: '',
          questionImg: [ecg43],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [ventricularFibrillation],
          answer: '心室細動',
          commentary: '頻脈　不規則',
        },
        {
          detailInfo: '',
          questionImg: [ecg44],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [RBundleBrunchBlock],
          answer: '完全右脚ブロック',
          commentary: 'QRS幅が広い rsR or rSR (Tは陰性 (V1))',
        },
        {
          detailInfo: '',
          questionImg: [ecg45],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [SVPrematureContraction],
          answer: '上室期外収縮',
          commentary: '予定より早くP、QRSが入る 通常のQRS幅',
        },
        {
          detailInfo: '',
          questionImg: [ecg46],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [LBundleBranchBlock],
          answer: '完全左脚ブロック',
          commentary: 'QRS幅が広い Sが深い Tが陽性で増高 (V1) ',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [ecg],
        //   questionSentence: 'この心電図が示す疾患を答えよ',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [ecg],
        //   questionSentence: 'この心電図が示す疾患を答えよ',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [ecg],
        //   questionSentence: 'この心電図が示す疾患を答えよ',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
  }
}
