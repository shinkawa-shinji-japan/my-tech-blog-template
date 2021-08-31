# Next.js と microCMS で作る Jamstack な技術ブログ

microCMS と Next.js を使い Jamstack なブログを作成するためのフロントエンドのソースコードになります。  
バックエンドは microCMS でご自身で構築さい。 [構築参考 URL](https://paths-are.com/archives/1961)
Algolia の設定も必要になります。

## 実装内容

ページ

- Top ページ
- 一番読まれている記事が大きく表示
- 人気記事がその下に２つ表示
- 全ての記事一覧を表示
- 詳細ページ
- 記事のタイトルと本文を表示

機能一覧

- カテゴリーでのフィルタリング機能

  - カテゴリリンククリック時にカテゴリーに紐づく記事を表示

- 検索機能

  - algolia を使い検索
  - 検索フォームにカーソルが当たったら、記事一覧を表示

- シンタックスハイライター

  - コピーボタンの設置
  - ダークモード ON・OFF 機能

- 記事のシェアボタンの設置
- プレビュー画面の設置

## 完成サイト

[サンプル - Sample](https://works.paths-are.com/paths-are-tech-blog-template/)

## 完成イメージ

![image](https://user-images.githubusercontent.com/70325458/131208090-2aff9b74-32f2-4669-9a74-52bd2d727448.png)

## 技術スタック

フロント：Next.js  
UI ライブラリー：Material-UI v5  
バックエンド：microCMS
CI：Github Actions

## インストール

```shell
git clone https://github.com/WSE-Developer3/jamstack-blog-with-nextjs-muiv5-microCMS.git
cd jamstack-blog-with-nextjs-muiv5-microCMS
cp .env.sample .env
```

.env ファイルに次の環境変数を設定してください。

```.env
MICROCMS_API_KEY=<microCMSのAPIキー>
MICROCMS_SERVICE_ID=<microCMSのサービスID>
ALGOLIA_ADMIN_API_KEY=<ALGOLIAの管理キー>
```

```ローカル環境構築
npm install
npm run dev
```

## microCMS の構築

下記記事をご参考ください。
[構築参考 URL](https://paths-are.com/archives/1961)

## 本番環境へのデプロイ手順

```
npm run export
```

作成された out フォルダ配下のファイルをご自身のサーバーへアップロードしてください。

github actions にて
`.github/workflows/deploy.yml` を使うことで、デプロイの自動化をすることができます。
リポジトリに push した際に、自動で自分のサーバーへデプロイされます。
利用するには **github repogitory > settings > secrets** より環境変数を設定してからご利用ください。

```yml:デプロイ自動化に必要な環境変数
    MICROCMS_API_KEY: ${{ secrets.MICROCMS_API_KEY }}
    MICROCMS_SERVICE_ID: ${{ secrets.MICROCMS_SERVICE_ID }}
    ALGOLIA_ADMIN_API_KEY: ${{ secrets.ALGOLIA_ADMIN_API_KEY }}
    FTP_SERVER: ${{ secrets.XSERVER_HOST_NAME }}
    FTP_USERNAME: ${{ secrets.XSERVER_USER_NAME }}
    FTP_PASSWORD: ${{ secrets.XSERVER_PASSWORD }}
    REMOTE_DIR: directory
```

<!-- ・静的ファイル配信ホスティングサービスをご利用の場合は
out ディレクトリのファイルを本番環境にアップロード
・node.js が入っているサーバーを契約している場合は
各公式サイトを基にデプロイ -->
