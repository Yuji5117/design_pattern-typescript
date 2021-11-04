/**
 * メールを送信するクラスを定義したい
 * 「件名」と「本文」と「フッター」から構成されます
 *
 */

/**
 * メールの雛形
 */
class Mail {
  title: string = "";
  body: string = "";
  footer: string = "";
}

/**
 * メール送信クラス
 * ここでは、sendという処理の枠組みのみ定義している
 * メールの送信内容はここでは生成せず、サブクラスで行う
 */
abstract class MailSender {
  abstract writeTitle(mail: Mail): void;
  abstract writeBody(mail: Mail): void;
  abstract writeFooter(mail: Mail): void;

  // 送信処理
  send = () => {
    let mail = new Mail();
    this.writeTitle(mail);
    this.writeBody(mail);
    this.writeFooter(mail);
    console.log(mail);
  };
}

class JapaneseMailSender extends MailSender {
  writeTitle = (mail: Mail) => (mail.title = "件名");
  writeBody = (mail: Mail) => (mail.body = "本文");
  writeFooter = (mail: Mail) => (mail.footer = "フッター");
}

class EnglishMailSender extends MailSender {
  writeTitle = (mail: Mail) => (mail.title = "title");
  writeBody = (mail: Mail) => (mail.body = "body");
  writeFooter = (mail: Mail) => (mail.footer = "footer");
}

const jp: JapaneseMailSender = new JapaneseMailSender();
jp.send();
const en: EnglishMailSender = new EnglishMailSender();
en.send();
