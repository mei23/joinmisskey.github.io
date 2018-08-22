---
title: よくある質問
description: Misskeyに関するよくある疑問をまとめています。
layout: wiki
has_child: false
rank: 0
---
Misskeyに関するよくある質問をまとめています。  
[用語の解説はこちら](../first/)

## よくある質問
### 誰が管理しているの？
misskey.xyzは開発者であるしゅいろが管理しています。  
ちなみにConoHaで動いています。

インスタンスごとに管理者は違います。  
管理者のアカウントには赤いadminバッジが付いています。

### ホーム、ローカル、ソーシャル、グローバル 違いは？
**A. それぞれ、表示される対象のユーザーが違います。**

**ホーム:** 自分がフォローしたユーザー
**ローカル:** インスタンス内の全てのユーザー
**ソーシャル:** ホーム + ローカル
**グローバル:** リモートも含め、インスタンスに認識されている全てのユーザーの投稿が表示されます。

投稿に設定された[公開範囲](../usage/post/#公開範囲を設定する)も影響します。  
[→ 使い方: タイムライン](../usage/timelines/)

### MisskeyはMastodonのインスタンスですか？
[いいえ、違います！](../../blog/2018/08/17_1_misskeyisnotmastodon/)

### Mastodonと連携できるの？
連携とは少し違うかもしれません。MastodonとMisskeyで相互にフォローできます。

MisskeyからMastodonのユーザーをフォローできます。  
逆にMastodonからMisskeyユーザーもフォローできます。

サーバーを変えることなく、他のインスタンスのユーザーとも交流できるのです！

### 文字装飾、検索窓や揺れる文字はどうやるの？
Misskey独自の構文を使うことで表現できます。  
[→ 使い方: 文字装飾 (MFM)](../usage/mfm/)

### 猫耳生えてにゃって言ってるけどにゃに？ Catって？
**Cat**はMisskeyの謎機能のひとつです。  
アイコンに猫耳が生え、*な*が*にゃ*に変換されます。

Catは設定画面から設定できます。

### 検索機能はインスタンスの設定で無効になっています。
検索機能を動かすにはそこそこのサーバーのスペックが必要です。  
サーバーのスペックが足りない場合、管理者の設定で検索機能が無効になっています。

### 不具合を見つけた / こんな機能がほしい
@aqz@misskey.xyzか@syuilo@misskey.xyzにリプライを送ってください！

**GitHub**を使ったことがある方は*その内容のIssueが立っていないか確認してから*[Issue](https://github.com/syuilo/misskey/issues/new/choose)で報告お願いします。  
PullRequestももちろん歓迎しています。

### Misskeyに寄付したい


[詳細はこちらをご覧ください！](../../#section_5)

### サーバーのメモリが足りないみたいなんだけど？(xyz)
心配には及びません。ギリギリになったら@aiが再起動します。