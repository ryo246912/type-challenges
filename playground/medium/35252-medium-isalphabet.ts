/*
  35252 - IsAlphabet
  -------
  by Kanon (@ysknsid25) #中級

  ### 質問

  Determine if the given letter is an alphabet.

  > GitHubで確認する：https://tsch.js.org/35252/ja
*/

/* _____________ ここにコードを記入 _____________ */

type IsAlphabet<S extends string> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<IsAlphabet<'A'>, true>>,
  Expect<Equal<IsAlphabet<'z'>, true>>,
  Expect<Equal<IsAlphabet<'9'>, false>>,
  Expect<Equal<IsAlphabet<'!'>, false>>,
  Expect<Equal<IsAlphabet<'😂'>, false>>,
  Expect<Equal<IsAlphabet<''>, false>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/35252/answer/ja
  > 解答を見る：https://tsch.js.org/35252/solutions
  > その他の課題：https://tsch.js.org/ja
*/
