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

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '出席確認など',
      groupContents: [
        {
          detailInfo: '(1)',
          questionImg: [],
          questionSentence: 'テストのサンプルMCHCから血液抗凝固剤までを翻訳',
          answerImg: [],
          answer: '血液抗凝固剤が作用するため高飽和性低色素性貧血を...',
          commentary: 'EDTAが必要',
          choices: ['36 L', '24 L', '12 L', 'O 9L', '3 L'],
        },
        {
          detailInfo: '(1)',
          questionImg: [],
          questionSentence: '下付き文字・上付き文字のテスト',
          answerImg: [],
          answer: 'H₂O,K⁺,Ca²⁺',
          commentary: '',
          choices: ['36 L', '24 L', '12 L', 'O 9L', '3 L'],
        },
        {
          detailInfo: '(2)',
          questionImg: [],
          questionSentence:
            ' (Eng-2) How much fluid would be associated with ISF in a 60-kg person?',
          answerImg: [],
          answer: '9L',
          commentary: '',
          choices: ['36 L', '24 L', '12 L', '9 L', '3L'],
        },
        {
          detailInfo: '(3)',
          questionImg: [],
          questionSentence:
            ' (Eng-3) How much fluid would be associated with ICF in a 60-kg person?',
          answerImg: [],
          answer: '24L',
          commentary: '',
          choices: ['36 L', '24 L', '12 L', '9 L', '3 L'],
        },
        {
          detailInfo: '(4)',
          questionImg: [],
          questionSentence:
            ' (Eng-6) The dominant cation in the intracellular fluid is:',
          answerImg: [],
          answer: 'Potassium',
          commentary: 'カリウムイオンのこと。ICFでおおい。',
          choices: ['Sodium', 'Potassium', 'Calcium', 'Magnesium'],
        },
        {
          detailInfo: '(5)',
          questionImg: [],
          questionSentence:
            ' (Eng-9) A decreased oncotic pressure will result in:',
          answerImg: [],
          answer: 'The movement of sodium from ICF to ECH',
          commentary: 'oncotic pressure膠質浸透圧が下がるということは',
          choices: [
            '',
            'The movement of water from ECF to ICF.',
            '',
            'The movement of sodium from ICF to ECH',
            '',
            'The movement of fluid out of capillaries into the interstitial space.',
            '',
            'The movement of proteins into capillaries',
            '',
          ],
        },
        {
          detailInfo: '(6)',
          questionImg: [],
          questionSentence:
            ' (Eng-11) Which of the following solutions, when infused intravenously, would result in an increase in extracellular fluid volume, a decrease in intracellular fluid volume, and an increase in total body water after osmotic equilibrium?',
          answerImg: [],
          answer: '1 Liter of 3% NaCl solution',
          commentary:
            'infused intravenously:静脈注射。osmotic equilibrium:膠原浸透圧。dextrose:ぶどう糖。5%だと血管内浸透圧と等しい。細胞内から細胞外へと水分が移動するのは生理的食塩水より浸透圧の高いNaCl溶液を注射した場合である。注射すると細胞がしぼむ。最も顕著なのは赤血球。',
          choices: [
            '',
            '1 Liter of 0.9% sodium chloride (NaCl) solution',
            '',
            '1 Liter of 0.45% NaCl solution',
            '',
            '1 Liter of 3% NaCl solution',
            '',
            '1 Liter of 5% dextrose solution',
            '',
            '1 Liter of pure water',
          ],
        },
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
            'CO2 + H20 <=> H2CO3 <=> H + HCO3　この平衡式がCO2濃度低下により左に遷移し、血液pH濃度が上昇する',
        },
        {
          detailInfo: 'レジュメ質問',
          questionImg: [],
          questionSentence:
            '過呼吸以外の理由で、血液のpHが変化する病態を挙げよ。',
          choices: [],
          answerImg: [],
          answer: '腎不全',
          commentary: '',
        },
        {
          detailInfo: 'レジュメ質問',
          questionImg: [],
          questionSentence: '血液のCO2やpHの変化は、どのように感知されるか？',
          choices: [],
          answerImg: [],
          answer: '延髄中枢などの化学受容器で',
          commentary: '',
        },
        {
          detailInfo: 'レジュメ質問7/11',
          questionImg: [],
          questionSentence: '高カリウム血症は、なぜ致死的な不整脈を招くのか？',
          choices: [],
          answerImg: [],
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
          answerImg: [],
          answer: 'クラッシュ症候群、塩化カリウム製剤投与',
          commentary: '',
        },
        {
          detailInfo: 'レジュメ質問7/11',
          questionImg: [],
          questionSentence:
            '心拡張期は大動脈弁が閉鎖しているのに、なぜ、血圧が維持されるのか？',
          choices: [],
          answerImg: [],
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
          answerImg: [],
          answer:
            '交感神経からのノルアドレナリン分泌によって皮膚の血管が収縮し、心拍出量が増え、熱放出量が減り、ほてりが生じる。',
          commentary:
            '皮膚の血管を収縮させるのはα受容体、心拍出量が増えるのはβ1受容体。',
        },
        {
          detailInfo: 'レジュメ質問7/14',
          questionImg: [],
          questionSentence:
            '立ち眩みの際に、目の前が暗くなり、しばらくすると胸がドキドキするのはなぜか？',
          choices: [],
          answerImg: [],
          answer:
            '心臓からの拍出量が減り、脳へ行く血液量が減った後、脳への血流量低下を感知して心機能亢進が起こるから。',
          commentary:
            '血圧低下は頚動脈洞などに存在する高圧受容器が感知して、舌咽神経→交感神経を介して心筋へ作用する',
        },
        // {
        //   detailInfo: 'レジュメ質問7/13',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: 'レジュメ質問7/13',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: 'レジュメ質問7/13',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: 'レジュメ質問7/13',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: 'レジュメ質問7/13',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: 'レジュメ質問7/13',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: 'レジュメ質問7/13',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: 'レジュメ質問7/11',
        //   questionImg: [],
        //   questionSentence: '心拡張期は大動脈弁が閉鎖しているのに、なぜ、血圧が維持されるのか？',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: 'レジュメ質問7/11',
        //   questionImg: [],
        //   questionSentence: '心拡張期は大動脈弁が閉鎖しているのに、なぜ、血圧が維持されるのか？',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: 'レジュメ質問7/11',
        //   questionImg: [],
        //   questionSentence: '高カリウム血症の原因として、どのようなものが考えられるか？',
        //   choices: [],
        //   answerImg: [],
        //   answer: 'クラッシュ症候群、塩化カリウム製剤投与',
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
          answerImg: [],
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
          answerImg: [],
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
            'IP3は筋小胞体のIP3受容体へ結合して、Caイオンの放出を促す',
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
          answerImg: [],
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
          commentary: '脂質→ぶどう糖',
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
          answerImg: [],
          answer:
            '採血時に抗凝固剤を加えて遠沈した上清を血清という/ヘパリンは、トロンビンに直接結合することにより、抗凝固作用を発揮する',
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
          answerImg: [],
          answer: '',
          commentary: '',
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
          answer: '',
          commentary: '',
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
          answer: '',
          commentary: '',
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
          answer: '',
          commentary: '',
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
          answer: '',
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
          answer: '',
          commentary: '',
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
          answer: '',
          commentary: '',
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
          answerImg: [],
          answer: '',
          commentary: '',
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
          answer: '',
          commentary: '',
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
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: 'A(36)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '肺でのガス交換において、二酸化炭素の拡散能は、酸素の拡散能よりも高い',
            'pHの低下は、酸素解離曲線を右方へ移動させる',
            '2,3-DPGの低下は、酸素解離曲線を右方へ移動させる',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
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
          answerImg: [],
          answer: '',
          commentary: '',
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
          answerImg: [],
          answer: '',
          commentary: '',
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
          answerImg: [],
          answer: '',
          commentary: '',
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
          answer: '',
          commentary: '',
        },
        {
          detailInfo: 'A(41)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '成人女性の方が成人男性より、体内水分量が多い',
            '細胞外液の主な陰イオンは、ClイオンとHPO4イオンである',
            '血漿浸透圧が上昇すると、体内の恒常性を維持するために高張尿が生成される',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: 'A(42)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'ネフロンは尿を生成する構造的な単位で、糸球体から遠位尿細管まで、枝分かれの内一本道である',
            '腎臓の皮質迷路には糸球体、近位尿細管曲部、遠位尿細管曲部および集合管の一部がふくまれる',
            '近位尿細管上皮細胞の内腔側には冊子縁が存在する',
          ],
          answerImg: [],
          answer: '',
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
          answer: '',
          commentary: '',
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
          answer: '',
          commentary: '',
        },
        {
          detailInfo: 'A(45)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            'アデノシンが輸入細動脈のA1受容体に結合すると、輸入細動脈は弛緩し、糸球体濾過量は上昇',
            'アンギオテンシン2の働きにより、輸入細動脈が収縮し糸球体濾過量は減少する',
            '糸球体濾過量が増加すると、輸入細動脈の顆粒細胞からのレニンの分泌は抑制される',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: 'A(46)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '健常人に2g/日の食塩制限を行うと、レニンの濃度は上昇する',
            '健常人に2g/日の食塩制限を行うと、アンギオテンシン2の濃度は上昇する',
            '健常人に2g/日の食塩制限を行うと、心房性ナトリウム利尿ペプチドの濃度は上昇する',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: 'A(47)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正しい・全て誤りの場合もある）',
          choices: [
            '低カリウム血症の際にアルカローシスが連動する',
            '体内でＫイオンが不足しているとき、皮質集合管のβ間在細胞で、Ｋイオンが再吸収される',
            'アルドステロンの分泌が不足すると、低カリウム血症が引き起こされる',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
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
          answer: '',
          commentary: '',
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
          answer: '',
          commentary: '',
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
          answer: '',
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
        // {
        //   detailInfo: 'A(1)',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ['','',''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: 'A(1)',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ['','',''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: 'A(1)',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ['','',''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: 'A(1)',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ['','',''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: 'A(1)',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ['','',''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
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
      groupTag: '心電図',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [ecg1],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [wenckebach],
          answer: 'Wenckebach型',
          commentary:
            '予定の所にP波やQRS波が入らない。正常P波の規則的な出現。PC間隔変動',
        },
        {
          detailInfo: '',
          questionImg: [ecg2],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [avBlock1],
          answer: '第1度房室ブロック',
          commentary: 'PQ間隔異常（長い）',
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
          commentary: 'P波がない。f波がある（V₁だと見やすい）',
        },
        {
          detailInfo: '',
          questionImg: [ecg6],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [ventricularFibrillation],
          answer: '心室細動',
          commentary: '心拍数に問題あり。頻脈。不規則',
        },
        {
          detailInfo: '',
          questionImg: [ecg7],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [prematureVcontraction],
          answer: '心室期外収縮',
          commentary: '予定より早くP波、QRS波が入る。QRS波の幅が広い',
        },
        {
          detailInfo: '',
          questionImg: [ecg8],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [ventricularTachycardia],
          answer: '心室頻拍',
          commentary: '心拍数に問題あり。頻脈。規則的でQRS波の幅が広い',
        },
        {
          detailInfo: '',
          questionImg: [ecg9],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [supraventricularTachycardia],
          answer: '発作性上室性頻拍',
          commentary: '心拍数に問題あり。頻脈。規則的。QRS波が狭い',
        },
        {
          detailInfo: '',
          questionImg: [ecg10],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [atrialFlutter],
          answer: '心房粗動',
          commentary: 'P波がない　F波がある　今回は4対1伝導',
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
          commentary: '予定より早くP、QRS波が入る。通常のQRS幅',
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
        //   answer: '発作性上室性頻拍',
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
          commentary: 'ST下降',
        },
        {
          detailInfo: '',
          questionImg: [ecg21],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [LBundleBranchBlock],
          answer: '完全左脚ブロック',
          commentary: 'QRS幅が広い　Sが深い Tが陽性で増高 (V₁)',
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
          commentary: 'PQ間隔が異常に短い。デルタ波',
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
            'STに異常→上昇→急性期心筋梗塞 1 aVL V4 V6で上昇が見られる(2 3 aVF aVR)で下降(reciprocal change)→lateral',
        },
        {
          detailInfo: '',
          questionImg: [ecg28],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: '完全左脚ブロック',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [ecg29],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: '心房粗動',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [ecg30],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: '労作時狭心症',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [ecg31],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: '第1度房室ブロック',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [ecg32],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: '前壁と心室中隔と側壁の梗塞          ',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [ecg33],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: '洞不全症候群',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [ecg34],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: '心室期外収縮',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [ecg35],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: '完全右脚ブロック',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [ecg36],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: 'WPW症候群',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [ecg37],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: 'Wenckebach型',
          commentary: '',
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
          answerImg: [],
          answer: '心室頻拍',
          commentary: '',
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
          answerImg: [],
          answer: '完全右脚ブロック',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [ecg40],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: '心房細動',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [ecg41],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: 'Wenckebach型',
          commentary:
            '予定のところにPやQRSが入らない 正常P波の規則的な出現 PQ間隔変動',
        },
        {
          detailInfo: '',
          questionImg: [ecg42],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: '心室頻拍',
          commentary: '心拍数に問題あり 頻脈 規則的 QRS幅が広い          ',
        },
        {
          detailInfo: '',
          questionImg: [ecg43],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: '心室細動',
          commentary: '頻脈　不規則',
        },
        {
          detailInfo: '',
          questionImg: [ecg44],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: '完全右脚ブロック',
          commentary: 'QRS幅が広い rsR or rSR (Tは陰性 (V1))',
        },
        {
          detailInfo: '',
          questionImg: [ecg45],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
          answer: '上室期外収縮',
          commentary: '予定より早くP、QRSが入る 通常のQRS幅',
        },
        {
          detailInfo: '',
          questionImg: [ecg46],
          questionSentence: 'この心電図が示す疾患を答えよ',
          answerImg: [],
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
    {
      groupTag: '過去問記述集',
      groupContents: [
        {
          detailInfo: '2020中間C(1)',
          questionImg: [C2020m],
          questionSentence: '心電図の診断名と判定根拠を記述せよ',
          choices: [],
          answerImg: [],
          answer:
            '赤血球が破壊されるとヘモグロビンが鉄とビリルビンに分解され、',
          commentary: '',
        },
        // {
        //   detailInfo: '6/24確認問題',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: [],
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
