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
