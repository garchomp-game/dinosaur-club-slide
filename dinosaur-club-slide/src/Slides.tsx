import { Slide, Heading, Text, UnorderedList, ListItem, Grid, Box } from 'spectacle';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

// ヒーローアイコンをラップするコンポーネント
const Check = () => <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#2a9d8f', marginRight: '8px' }} />;

const Slides = [
  // スライド1: タイトルと提案者
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h1">恐竜クラブのための新ウェブサイト提案</Heading>
      <Heading fontSize="h3" margin="2rem 0 0">WordPressとロリポップサーバーを活用した<br />効果的なウェブサイト構築</Heading>
      <Text margin="2rem 0 0">提案者：おとか</Text>
      <Text>提案日：2025年3月15日</Text>
    </div>
  </Slide>,

  // スライド2: 目次
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2">目次</Heading>
      <UnorderedList>
        <ListItem>提案の背景と目的</ListItem>
        <ListItem>ウェブサイト作成のメリット</ListItem>
        <ListItem>提案するシステム概要</ListItem>
        <ListItem>費用とスケジュール</ListItem>
        <ListItem>運用計画</ListItem>
        <ListItem>まとめと次のステップ</ListItem>
      </UnorderedList>
    </div>
  </Slide>,

  // スライド3: 現状分析と課題
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2">現状分析と課題</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap={2}>
        <Box>
          <Heading fontSize="h3">恐竜クラブの現状</Heading>
          <UnorderedList>
            <ListItem>会員数：約500名</ListItem>
            <ListItem>活動頻度：月2回の定例会</ListItem>
            <ListItem>主な活動：恐竜に関する講演会、博物館見学など</ListItem>
            <ListItem>情報発信手段：紙のお便りが中心</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading fontSize="h3">主な課題</Heading>
          <div className="feature-list">
            <div className="feature-item"><Check />情報発信の遅れ</div>
            <div className="feature-item"><Check />新規会員獲得の機会損失</div>
            <div className="feature-item"><Check />活動記録の散逸</div>
            <div className="feature-item"><Check />連絡手段の非効率性</div>
            <div className="feature-item"><Check />デジタル化の遅れ</div>
          </div>
        </Box>
      </Grid>
    </div>
  </Slide>,

  // スライド4: 提案の目的
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2">提案の目的</Heading>
      <div className="feature-list">
        <div className="feature-item"><Check />恐竜クラブの活動を<span className="highlight">広くPR</span>する</div>
        <div className="feature-item"><Check />会員と<span className="highlight">情報共有を効率化</span>する</div>
        <div className="feature-item"><Check /><span className="highlight">新規会員の獲得</span>ルートを確立する</div>
        <div className="feature-item"><Check />クラブの歴史・活動を<span className="highlight">記録し価値を高める</span></div>
        <div className="feature-item"><Check />運営業務の<span className="highlight">効率化</span>を図る</div>
      </div>
    </div>
  </Slide>,

  // スライド5: 恐竜クラブにとってのメリット(1)
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2">恐竜クラブにとってのメリット(1)</Heading>
      <div className="feature-list">
        <div className="feature-item"><Check />24時間いつでも情報発信ができる</div>
        <div className="feature-item"><Check />広範囲に恐竜クラブの活動をPRできる</div>
        <div className="feature-item"><Check />Googleで検索すると表示される（認知度向上）</div>
        <div className="feature-item"><Check />スマートフォンからでもアクセス可能</div>
        <div className="feature-item"><Check />紙媒体よりも詳細な情報を提供できる</div>
      </div>
    </div>
  </Slide>,

  // スライド6: 恐竜クラブにとってのメリット(2)
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2">恐竜クラブにとってのメリット(2)</Heading>
      <div className="feature-list">
        <div className="feature-item"><Check />活動予定や変更をリアルタイムで共有</div>
        <div className="feature-item"><Check />恐竜に関する情報や研究成果の発信</div>
        <div className="feature-item"><Check />活動の写真やイベント記録を掲載</div>
        <div className="feature-item"><Check />会員募集の効率化（問い合わせフォームの活用）</div>
        <div className="feature-item"><Check />過去の活動アーカイブの作成</div>
      </div>
    </div>
  </Slide>,

  // スライド8: 提案するシステムの全体像
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2">提案するシステムの全体像</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap={2}>
        <Box>
          <Heading fontSize="h3">システム構成</Heading>
          <div className="feature-list">
            <div className="feature-item"><Check />WordPressを使用した簡単更新システム</div>
            <div className="feature-item"><Check />ロリポップサーバー（スタンダードプラン）</div>
            <div className="feature-item"><Check />スマートフォン対応デザイン</div>
            <div className="feature-item"><Check />問い合わせフォーム機能</div>
          </div>
        </Box>
        <Box>
          <Heading fontSize="h3">主要ページ構成</Heading>
          <div className="feature-list">
            <div className="feature-item"><Check />トップページ</div>
            <div className="feature-item"><Check />活動紹介</div>
            <div className="feature-item"><Check />イベント情報</div>
            <div className="feature-item"><Check />ギャラリー</div>
            <div className="feature-item"><Check />お問い合わせ</div>
          </div>
        </Box>
      </Grid>
    </div>
  </Slide>,

  // スライド9: WordPressを選ぶ理由
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2">WordPressを選ぶ理由</Heading>
      <div className="feature-list">
        <div className="feature-item"><Check />世界で最も使われているサイト作成ツール（43%のWebサイトで採用）</div>
        <div className="feature-item"><Check />専門知識がなくても更新可能</div>
        <div className="feature-item"><Check />豊富なデザインテンプレート</div>
        <div className="feature-item"><Check />機能拡張が簡単（59,000以上の無料プラグイン）</div>
        <div className="feature-item"><Check />長期的なサポート体制</div>
      </div>
      <Text fontSize="16px" margin="2rem 0 0" fontStyle="italic">※WordPress.orgは無料ソフトウェアで、サーバーとドメインのみ費用がかかります</Text>
    </div>
  </Slide>,

  // スライド10: ロリポップスタンダードプランを選ぶ理由
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2">ロリポップスタンダードプランを選ぶ理由</Heading>
      <div className="feature-list">
        <div className="feature-item"><Check />日本企業による安心のサポート</div>
        <div className="feature-item"><Check />コストパフォーマンスの高さ（月額495円〜）</div>
        <div className="feature-item"><Check />電話サポートあり（技術担当者以外でも相談可能）</div>
        <div className="feature-item"><Check />十分な性能と安定性</div>
        <div className="feature-item"><Check />WordPressとの相性の良さ</div>
      </div>
      <div className="text-left">
        <Text fontSize="16px" margin="1rem 0 0">
          <span className="highlight">2020年にハードウェアの大幅アップグレード：</span> CPUコア数2.6倍、処理能力2倍、メモリ最大12倍、ディスク性能35倍
        </Text>
      </div>
    </div>
  </Slide>,

  // スライド11: お問い合わせフォームの価値
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2">お問い合わせフォームの価値</Heading>
      <div className="feature-list">
        <div className="feature-item"><Check />問い合わせのハードル低下による機会増加</div>
        <div className="feature-item"><Check />24時間受付可能</div>
        <div className="feature-item"><Check />問い合わせ内容の記録と管理</div>
        <div className="feature-item"><Check />対応漏れの防止</div>
        <div className="feature-item"><Check />メール自動返信による初期対応の効率化</div>
      </div>
      <div className="text-left">
        <Text fontSize="18px" margin="1rem 0 0">
          <span className="highlight">Contact Form 7</span>（無料プラグイン）で簡単に実装可能
        </Text>
        <Text fontSize="16px" margin="0.5rem 0 0">
          ・1,000万以上のサイトで利用される信頼性の高いプラグイン<br/>
          ・日本人が開発した日本語対応プラグイン
        </Text>
      </div>
    </div>
  </Slide>,

  // スライド12: 初期費用と維持費
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2">初期費用と維持費</Heading>
      <table className="price-table">
        <thead>
          <tr>
            <th>項目</th>
            <th>初期費用</th>
            <th>年間維持費</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ドメイン取得</td>
            <td>約1,500円</td>
            <td>約1,500円/年</td>
          </tr>
          <tr>
            <td>ロリポップサーバー<br/>(スタンダードプラン)</td>
            <td>0円</td>
            <td>5,940円/年<br/>(495円/月)</td>
          </tr>
          <tr>
            <td>WordPress</td>
            <td>0円</td>
            <td>0円</td>
          </tr>
          <tr>
            <td>SSL証明書</td>
            <td>0円</td>
            <td>0円<br/>(無料SSL対応)</td>
          </tr>
          <tr>
            <td><strong>合計</strong></td>
            <td><strong>約1,500円</strong></td>
            <td><strong>約7,440円/年</strong><br/>(月額約620円)</td>
          </tr>
        </tbody>
      </table>
      <Text fontSize="16px" margin="1rem 0 0" fontStyle="italic">※技術チームで内製するため構築費用は不要</Text>
    </div>
  </Slide>,

  // スライド13: 投資対効果（ROI）
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2">投資対効果（ROI）</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap={2}>
        <Box>
          <Heading fontSize="h3">広告費との比較</Heading>
          <div className="feature-list">
            <div className="feature-item"><Check />チラシ作成・配布：約3万円/回</div>
            <div className="feature-item"><Check />地域広告掲載：約5万円/月</div>
            <div className="feature-item"><Check />Webサイト：約7,440円/年</div>
          </div>
          <Text fontSize="16px" margin="1rem 0 0">
            新規会員1名獲得コスト：<br/>
            約1,500円（年間5名の新規会員を想定）
          </Text>
        </Box>
        <Box>
          <Heading fontSize="h3">人件費削減効果</Heading>
          <div className="feature-list">
            <div className="feature-item"><Check />お便り作成・配布時間の削減</div>
            <div className="feature-item"><Check />問い合わせ対応の効率化</div>
            <div className="feature-item"><Check />資料のデジタル化による検索性向上</div>
            <div className="feature-item"><Check />重複作業の排除</div>
          </div>
        </Box>
      </Grid>
    </div>
  </Slide>,

  // スライド14: 開発スケジュール
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2" margin="0 0 0.3rem">開発スケジュール</Heading>
      <div className="timeline compact-timeline">
        <div className="timeline-item">
          <Heading fontSize="h3" margin="0 0 0.1rem">第1フェーズ：準備期間（2週間）</Heading>
          <div className="timeline-content">
            <div className="timeline-bullet-points">
              <Text margin="0.05rem 0">・ドメイン取得、サーバー契約</Text>
              <Text margin="0.05rem 0">・デザイン案の作成</Text>
              <Text margin="0.05rem 0">・コンテンツ収集計画の策定</Text>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <Heading fontSize="h3" margin="0 0 0.1rem">第2フェーズ：制作期間（1ヶ月）</Heading>
          <div className="timeline-content">
            <div className="timeline-bullet-points">
              <Text margin="0.05rem 0">・WordPress設置、テーマ設定</Text>
              <Text margin="0.05rem 0">・基本ページの作成</Text>
              <Text margin="0.05rem 0">・各種機能の実装</Text>
            </div>
          </div>
        </div>
      </div>
      <Text fontSize="16px" margin="0.7rem 0 0" fontStyle="italic" textAlign="center">
        全体で約2ヶ月程度の制作期間を想定しています
      </Text>
    </div>
  </Slide>,
  // 分割
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2" margin="0 0 0.3rem">開発スケジュール(続き)</Heading>
      <div className="timeline compact-timeline">
        <div className="timeline-item">
          <Heading fontSize="h3" margin="0 0 0.1rem">第3フェーズ：テスト・公開（2週間）</Heading>
          <div className="timeline-content">
            <div className="timeline-bullet-points">
              <Text margin="0.05rem 0">・動作確認、内容チェック</Text>
              <Text margin="0.05rem 0">・関係者レビュー</Text>
              <Text margin="0.05rem 0">・サイト公開、告知</Text>
            </div>
          </div>
        </div>
      </div>
      <Text fontSize="16px" margin="0.7rem 0 0" fontStyle="italic" textAlign="center">
        公開後も継続的な運用サポートを行います
      </Text>
    </div>
  </Slide>,

  // スライド15: サイト運用体制
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2">サイト運用体制</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap={2}>
        <Box>
          <Heading fontSize="h3">運用体制</Heading>
          <div className="feature-list">
            <div className="feature-item"><Check />更新担当：広報担当者（1〜2名）</div>
            <div className="feature-item"><Check />技術サポート：技術チーム</div>
            <div className="feature-item"><Check />更新頻度：月1回（イベント前は随時）</div>
          </div>
        </Box>
        <Box>
          <Heading fontSize="h3">運用保守</Heading>
          <div className="feature-list">
            <div className="feature-item"><Check />自動バックアップの設定</div>
            <div className="feature-item"><Check />定期的な更新とセキュリティ対策</div>
            <div className="feature-item"><Check />問い合わせ対応フロー構築</div>
            <div className="feature-item"><Check />マニュアル作成と講習会実施</div>
          </div>
        </Box>
      </Grid>
    </div>
  </Slide>,

  // スライド16: 更新作業の実際
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2">更新作業の実際</Heading>
      <div className="text-center">
        <Heading fontSize="h3">WordPressの管理画面は直感的で使いやすい</Heading>
        <div className="feature-list">
          <div className="feature-item"><Check />文章更新はWordと同じような操作感</div>
          <div className="feature-item"><Check />写真アップロードはドラッグ＆ドロップで簡単</div>
          <div className="feature-item"><Check />お問い合わせはメール受信と管理画面で確認</div>
          <div className="feature-item"><Check />スマホからも更新可能</div>
        </div>
        <Text fontSize="16px" margin="2rem 0 0" fontStyle="italic">※運用開始時に使い方講習会を実施します</Text>
      </div>
    </div>
  </Slide>,

  // スライド17: コンテンツ計画
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2">コンテンツ計画</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap={2}>
        <Box>
          <Heading fontSize="h3">コンテンツ例</Heading>
          <div className="feature-list">
            <div className="feature-item"><Check />活動予定カレンダー</div>
            <div className="feature-item"><Check />活動報告ブログ</div>
            <div className="feature-item"><Check />恐竜豆知識コーナー</div>
            <div className="feature-item"><Check />会員紹介・インタビュー</div>
            <div className="feature-item"><Check />写真ギャラリー</div>
          </div>
        </Box>
        <Box>
          <Heading fontSize="h3">コンテンツ収集方法</Heading>
          <div className="feature-list">
            <div className="feature-item"><Check />既存の活動記録の整理</div>
            <div className="feature-item"><Check />会員からの投稿募集</div>
            <div className="feature-item"><Check />定例会での写真撮影</div>
            <div className="feature-item"><Check />役員からの情報収集</div>
          </div>
        </Box>
      </Grid>
    </div>
  </Slide>,

  // スライド18: 提案のまとめ
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2">提案のまとめ</Heading>
      <div className="feature-list">
        <div className="feature-item"><Check />恐竜クラブの認知度とつながりを強化</div>
        <div className="feature-item"><Check />会員増加・活動活性化の基盤作り</div>
        <div className="feature-item"><Check />低コストで持続可能な運営（月額約620円）</div>
        <div className="feature-item"><Check />操作が簡単で専門知識不要</div>
        <div className="feature-item"><Check />段階的な拡張が可能</div>
      </div>
      <Text fontSize="18px" margin="2rem 0 0">
        <span className="highlight">恐竜クラブの価値をさらに高め、活動を広げるための重要なステップです</span>
      </Text>
    </div>
  </Slide>,

// スライド19: 次のステップ（前半）
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2" margin="0 0 0.2rem">次のステップ（前半）</Heading>
      <div className="timeline compact-timeline">
        <div className="timeline-item">
          <Heading fontSize="h3" margin="0 0 0">Step 1: 承認と初期準備</Heading>
          <div className="timeline-content">
            <div className="timeline-bullet-points">
              <Text margin="0.03rem 0">・提案内容のご承認</Text>
              <Text margin="0.03rem 0">・予算の確保</Text>
              <Text margin="0.03rem 0">・キーパーソンとの打ち合わせ</Text>
            </div>
          </div>
        </div>
        <div className="timeline-item" style={{ marginTop: "0.3rem" }}>
          <Heading fontSize="h3" margin="0 0 0">Step 2: コンテンツ準備</Heading>
          <div className="timeline-content">
            <div className="timeline-bullet-points">
              <Text margin="0.03rem 0">・掲載内容の確認</Text>
              <Text margin="0.03rem 0">・写真や資料の収集</Text>
              <Text margin="0.03rem 0">・ページ構成の詳細決定</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Slide>,

  // スライド19: 次のステップ（後半）
  <Slide>
    <div className="slide-content">
      <Heading fontSize="h2" margin="0 0 0.2rem">次のステップ（後半）</Heading>
      <div className="timeline compact-timeline">
        <div className="timeline-item">
          <Heading fontSize="h3" margin="0 0 0">Step 3: 開発開始</Heading>
          <div className="timeline-content">
            <div className="timeline-bullet-points">
              <Text margin="0.03rem 0">・開発スケジュールの確定</Text>
              <Text margin="0.03rem 0">・進捗報告の方法決定</Text>
              <Text margin="0.03rem 0">・定例ミーティングの設定</Text>
            </div>
          </div>
        </div>
      </div>
      <Text fontSize="18px" margin="0.7rem 0 0" fontStyle="italic" textAlign="center">
        <span className="highlight">本日のご承認をいただければ、すぐに準備を開始します</span>
      </Text>
    </div>
  </Slide>,

  // スライド20: ご質問・ご相談
  <Slide>
    <div className="slide-content text-center">
      <Heading fontSize="h1">ご質問・ご相談</Heading>
      <Text fontSize="24px" margin="2rem 0">ご不明点やご質問がございましたらお気軽にどうぞ</Text>
      <Grid gridTemplateColumns="1fr 1fr" gridGap={2}>
        <Box>
          <Text fontSize="20px" margin="1rem 0">
            担当：おとか<br />
            連絡先：otoka.japanesedrum@gmail.com
          </Text>
        </Box>
        <Box>
          <Text fontSize="20px" margin="1rem 0">
            担当：いむラプトル<br />
            連絡先：
          </Text>：megadragonaya1126@gmail.com
        </Box>
      </Grid>
    </div>
  </Slide>
// ...existing code...
];

export default Slides;
