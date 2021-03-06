# Object Pool パターン
通常オブジェクトを生成するときは、必要になっときにインスタンス化し、不要になった時に破棄する。
だが、Object Poolパターンでは、オブジェクトをすぐに使用できるよう状態にするためにプール（貯める）しておくデザインパターン

クライアントはプールから用意しておいたオブジェクトを要求し、渡されたオブジェクトに対して操作を行う

不要になった時にそのオブジェクトを破棄するのではなく、プールに返却する

Objectを作成することと削除することは、つまりメモリを割り当てること（allocate memory）とメモリを割り当て取り消すこと（deallocate memory）

---
## メリット
毎回インスタンス化する訳ではないため、以下の状況でパフォーマンスが改善される
- クラスインスタンスの初期化のコストが高い
- クラスをインスタンス化する割合が高い
- 一度に使用されるインスタンスの数が少ない


クライアントが、オブジェクトの管理を関知しなくてよくなる。ここで重要なのは、クライアントからオブジェクトの管理を切り離したことで、ある種の作業を後に遅らせることができる
- オブジェクトの管理
- そのオブジェクトに関する、ロジック・エラーの扱いなど

クライアント側は、より一層クライアント側の実装に集中できる。もちろん変更があっても影響を受けないで済む

## デメリット
- 単純なオブジェクトプーリング（外部リソースを保持せず、メモリを占有するだけ）は効率的でなく、パフォーマンスが低下する可能性がある
- 未使用のメモリが使われないままになってしまう可能性がある
- オブジェクトの生成可能な最大数が決まってしまう

## 注意
- インスタンス変数に前回使用した時の値が残っていたりする
- 不要なところで使ってしまうと、ただただメモリを無駄に消費してしまう

## ロジック
- プールに新しいオブジェクトの要求があった場合に、以前に生成されたオブジェクトがプールにあれば、 そのオブジェクトを返却
- 要求されたオブジェクトがプールにない場合は新たにオブジェクトを生成し、返却
- クライアント側でオブジェクトが不要になったタイミングでプールに返却
- 一部のObject Poolではプールの上限が設定されており、それ以上の要求がされると例外をスローするかスレッドがブロックされる
- 最初からたくさんのオブジェクトを使用することがわかっている場合は オブジェクトを使用するタイミングではなく、それより前のタイミングで必要な数のオブジェクトを生成し、 プールに返却しておくことも有効

## メモ
- 同じようなオブジェクトを何回も使用することがわかっている場合は、このObject Poolパターンを使うといいかも
- ゲーム開発でよく使われるパターン
