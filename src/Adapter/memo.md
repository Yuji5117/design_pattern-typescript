# Adapter パターン
すでに存在するもの（クラスなど）を必要なものとのズレをうめて使えるようにするためのもの

別名：Wrapperパターン

推察：電圧などの変換機のようなものに思える


Adapterパターンには、`委譲`と`継承`の2つの構文がある


---

## 役割
Client：アプリケーションのロジックを含んでいるクラス（ターゲットのクラスを呼び出す側）

Adaptee：ターゲットとなるクラスと互換性のないクラス（使用したいクラス）

Adapter：ClientにAdapteeを使用できる様にするためのクラス

## メリット
- Adapterパターンは、既存のクラスに一皮かぶせて必要とするクラスを作ります。このパターンによって、必要とするメソッド群を素早く作ることができます。もしバグが検出されたとしても、既存のクラスが十分にテストされているのであれば、Adapter役のクラスを重点的に調べればよいことになるので、プログラムのチェックが楽になる
- Adapterパターンでは既存のクラスには手を加えずに機能を実現できるので、既存のクラスをもう一度テストする手間を減らすことができる

## デメリット

## 注意

## ロジック

## メモ

## 参考資料
- [Adapter Design Pattern Implementation in Typescript](https://levelup.gitconnected.com/adapter-design-pattern-implementation-in-typescript-a33f481b9aff)