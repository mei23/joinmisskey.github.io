---
title: タイムライン
description: 4種類あるタイムラインについて解説します。
layout: wiki
has_child: true
rank: 1
prev: /wiki/usage/first/
next: /wiki/usage/follow/
---
MisskeyはActivityPubのサーバー間通信機能によって他のインスタンスのユーザーをフォローすることができます。  
より多くの人と繋がりながら投稿を見逃さないために、Misskeyはタイムラインを4種類持っています。

## ホーム
自分がフォローした人の投稿が表示されます。

## ローカル
インスタンス内のユーザー全員の公開投稿が表示されます。

[公開設定](../post/#公開範囲を設定する)が「ホーム」に設定された投稿は表示されません。

## ソーシャル
ホームとローカルを合わせたタイムラインです。  
自分がフォローした人とインスタンス内のユーザー全員の公開投稿が表示されます。

## グローバル
インスタンスが受信するすべての公開投稿を表示します。

公開設定が「ホーム」に設定された投稿は表示されません。

## その他
### リスト
[リスト](../list/)に登録しているユーザーの投稿が表示されます。

リストタイムラインはホームで閲覧したりデッキで表示できたりします。

### タグ
特定のハッシュタグが付けられた投稿が表示されます。  
ハッシュタグページ(URL:`/tags/#hashtag`)で見ることができます。  
手動で更新する必要があります。

### ユーザー
特定のユーザーの投稿が表示されます。
ユーザーページ(URL:`/@username`)で見ることができます。  
手動で更新する必要があります。