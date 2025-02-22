/*
  112 - Capitalize Words
  -------
  by Anthony Fu (@antfu) #上級 #template-literal

  ### 質問

  **文字列の各単語**の最初の文字を大文字に変換し、残りをそのままにする `CapitalizeWords <T>` を実装します。

  例えば

  ```ts
  type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'
  ```

  > GitHubで確認する：https://tsch.js.org/112/ja
*/

/* _____________ ここにコードを記入 _____________ */

type CapitalizeWords<S extends string> = any

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '../../utils'

type cases = [
  Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
  Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
  Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
  Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
  Expect<Equal<CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>, 'Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq'>>,
  Expect<Equal<CapitalizeWords<''>, ''>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/112/answer/ja
  > 解答を見る：https://tsch.js.org/112/solutions
  > その他の課題：https://tsch.js.org/ja
*/
