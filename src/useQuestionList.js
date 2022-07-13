import { useState } from 'react'

// import u from './img/question/スクリーンショット 2022-06-24 .png'
import cardiacNerves from './img/answer/cardiacNerves.png'
import synthesizeCatecholamine from './img/answer/synthesizeCatecholamine.png'

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
          answer: 'H_d2O,K_d+,Ca_d2_d+,C_d6H_d1_d8O',
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
      groupTag: '2020中間(一問一答)',
      groupContents: [
        {
          detailInfo: 'A(1)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正解・全て誤りの場合もある）',
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
            '正しい選択肢を選べ（複数選択可/全て正解・全て誤りの場合もある）',
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
            '正しい選択肢を選べ（複数選択可/全て正解・全て誤りの場合もある）',
          choices: [
            '最低血圧が高くなると、前負荷が増大する',
            '心室の拡張終期容量は、後負荷の指標になる',
            'Frank-Starlingの法則によると、前負荷が増加すれば、一回拍出量も増加する',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: 'A(4)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正解・全て誤りの場合もある）',
          choices: [
            '1音は、房室弁が開放する際に聴取される',
            '2音は、動脈弁の閉鎖時に聴取される',
            '下半身のリンパ管は胸管に合流して、右静脈角で静脈に合流する',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: 'A(5)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正解・全て誤りの場合もある）',
          choices: [
            'α1アドレナリン受容体の刺激は、末梢血管平滑筋を収縮させ、その結果拡張期血圧を上昇させる',
            'β1アドレナリン受容体の刺激は、心拍出量を増加させる',
            'β2アドレナリン受容体の刺激は、気管支平滑筋を収縮させる',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: 'A(6)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正解・全て誤りの場合もある）',
          choices: [
            'Na-Kイオンポンプは、3個のNaイオンを排出して2個のKイオンを取り込む',
            'Na-Kイオンポンプは、強心配糖体により活性化される',
            'Na-Caイオン交換系では、3個のNaイオンと1個のCaイオンが交換される',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: 'A(7)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正解・全て誤りの場合もある）',
          choices: [
            'P波は洞房結節の脱分極を反映する',
            'QRS波は心室の脱分極を反映する',
            '洞房結節の自動能が低下すると、PQ間隔が延長する',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: 'A(8)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正解・全て誤りの場合もある）',
          choices: [
            '心筋梗塞では、発症後30分から2時間程度経過した時点で、ST上昇を認める',
            '心筋梗塞では、胸痛が消失した後も、異常Q波が残る',
            'V1,V2,V3,V4で異常Q波を認めた際は、前壁中隔梗塞が疑われる',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: 'A(9)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正解・全て誤りの場合もある）',
          choices: [
            'Ⅱ誘導では、左手と左足の電位差を計測する',
            'aVR誘導では、右手と左脚の電位差を計測する',
            'V1の電極は、第5肋間胸骨右縁に装着する',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: 'A(10)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正解・全て誤りの場合もある）',
          choices: [
            '胎児では、右心室の血液は卵円孔を通過して左心室へ流入する',
            '胎児では、肺動脈の血液が動脈管を通過して大動脈へ流入する',
            '卵円孔は、生後六ヶ月程度で閉鎖して卵円窩となる',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: 'A(1)',
          questionImg: [],
          questionSentence:
            '正しい選択肢を選べ（複数選択可/全て正解・全て誤りの場合もある）',
          choices: ['', '', ''],
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
      groupTag: '過去問記述集',
      groupContents: [
        {
          detailInfo: '2020追試験G(3)',
          questionImg: [],
          questionSentence:
            '溶血性黄疸および閉塞性黄疸において、血中間接ビリルビン値、血中直接ビリルビン値、尿中ビリルビン値、尿中ウロビリノーゲン値がどのように変化するか、理由とともに説明せよ（ただし、変化が見られない検査項目については、「変化なし」と記載し、その理由についても述べよ。',
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
