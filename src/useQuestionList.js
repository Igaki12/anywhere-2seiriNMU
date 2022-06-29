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
