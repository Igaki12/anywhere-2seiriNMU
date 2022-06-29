import { useState } from 'react'

// import u from './img/question/スクリーンショット 2022-06-24 .png'

import heartLoop from './img/answer/heartLoop.png'

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '出席確認など',
      groupContents: [
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence: '子宮で、受精卵の受精が起きる場所は？',
          choices: [],
          answerImg: [],
          answer: '卵管膨大部',
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
