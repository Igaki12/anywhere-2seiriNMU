import { useState } from 'react'

// import u from './img/question/スクリーンショット 2022-06-24 .png'

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
          questionSentence:
            ' (Eng-1) How much fluid would be associated with plasma volume (PV) in a 60-kg person?',
          answerImg: [],
          answer: '3L',
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
