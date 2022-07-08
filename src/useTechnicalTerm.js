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
