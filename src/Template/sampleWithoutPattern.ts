/**
 * メールを送信するクラスを定義したい
 * 「件名」と「本文」と「フッター」から構成されます
 */

/**
 * メールの雛形
 */
class MailWithoutPattern {
  title: string = "";
  body: string = "";
  footer: string = "";
}

/**
 * template patternを使用しない場合。
 * クラスの数は少ないが、caseの条件が増えると冗長になる
 */
class MaileSenderWithoutPattern {
  send = (langKind: string) => {
    let mail = new MailWithoutPattern();
    console.log("最初", mail);
    switch (langKind) {
      case "jp":
        mail.title = "件名";
        mail.body = "内容";
        mail.footer = "フッター";
        break;
      case "en":
        mail.title = "title";
        mail.body = "body";
        mail.footer = "footer";
        break;
    }

    console.log("後", mail);
  };
}

const mail = new MaileSenderWithoutPattern();
mail.send("jp");
mail.send("en");
mail.send("");

