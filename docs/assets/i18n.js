// Language switcher. Text lives here, keyed by data-i18n (plain text) or
// data-i18n-html (trusted markup such as <kbd>); data-i18n-src swaps {lang} in an
// image path. Choice order: ?lang=, the last choice, the browser's languages, English.
(function () {
  "use strict";

  const strings = {
    "en": {
      "meta.title": "QRedirect for Mac",
      "meta.description": "QRedirect finds QR codes on your Mac's screen and opens them with a keyboard shortcut.",
      "nav.what": "What it does",
      "nav.privacy": "Privacy",
      "nav.faq": "FAQ",
      "intro.kicker": "A menu bar app for macOS 14 and later",
      "intro.title": "Your phone can stay in your pocket.",
      "intro.lead": "QRedirect finds the QR codes on your Mac's screen and opens them with a keyboard shortcut. Slides, PDFs, a screen someone is sharing in a call.",
      "intro.store": "Coming soon to the Mac App Store.",
      "demo.prompt_html": "Try it here. Press <kbd>⌥</kbd><kbd>Q</kbd>",
      "demo.button": "or click to scan",
      "demo.slideTitle": "Thanks for coming.",
      "demo.slideBody": "More at the link.",
      "demo.wifiLabel": "Guest Wi-Fi",
      "demo.guide": "2 QR codes",
      "demo.enter": "Enter to open",
      "demo.opened": "In the app, this would open in your browser.",
      "demo.copied": "In the app, the Wi-Fi password would be copied.",
      "what.title": "What happens to what it finds",
      "what.link.k": "Web links",
      "what.link.v": "Open in your default browser.",
      "what.email.k": "Email addresses",
      "what.email.v": "Start a new message in your mail app.",
      "what.wifi.k": "Wi-Fi codes",
      "what.wifi.v": "Copy the password or network name. QRedirect does not automatically connect to Wi-Fi.",
      "what.text.k": "Plain text",
      "what.text.v": "Copied to the clipboard.",
      "what.blocked.k": "and unknown apps",
      "what.blocked.v": "Copied, never opened. Look at it before you trust it.",
      "what.note1": "A scan starts only from the shortcut or menu. While its overlay is visible, repeated full-screen captures update QR positions and contents.",
      "what.note2": "You can still scroll and click the app underneath. Click into it and the keyboard is back with that app; esc and Enter still close or open from anywhere.",
      "what.note3": "More than one code? Each gets a number. Opening a single web link immediately is an optional setting.",
      "privacy.title": "Screen images stay temporary. Recent codes stay local.",
      "privacy.body": "Start a scan with the shortcut or menu to capture connected displays. ScreenCaptureKit still images are analyzed on your Mac with Apple Vision and held temporarily in memory for analysis and overlay display, without saving image files or uploading them. Recent history is on by default: up to 30 opened or copied codes are stored locally, excluding Wi-Fi QR codes. Opening links passes URLs to your browser or mail app, and copying uses the system clipboard.",
      "privacy.link": "Read the privacy policy",
      "faq.title": "Questions",
      "faq.restart.q": "I allowed Screen Recording and nothing happens.",
      "faq.restart.a": "After allowing screen access, quit QRedirect from its menu bar menu and reopen it if the permission has not taken effect. You can also use Restart QRedirect in the welcome window.",
      "faq.shortcut.q": "Can I use a different shortcut?",
      "faq.shortcut.a_html": "Yes, in Settings. The default is <kbd>⌥</kbd><kbd>Q</kbd>. If a shortcut doesn't respond, something else is probably using it.",
      "faq.close.q": "How do I get rid of the overlay?",
      "faq.close.a_html": "Press <kbd>Esc</kbd>, press the scan shortcut again, or select a code to end scanning and close the overlay.",
      "faq.history.q": "Does it remember what I scanned?",
      "faq.history.a": "Recent history is on by default and stores up to 30 codes you open or copy, excluding all Wi-Fi QR codes. Turning history off leaves existing entries; use Clear History in Settings to delete them.",
      "faq.language.q": "Can I change the language?",
      "faq.language.a": "It follows your Mac. You can also pick English, Korean or Japanese in Settings.",
      "gallery.call": "Someone else's shared screen in a call.",
      "gallery.wifi": "A Wi-Fi code copies the password.",
      "gallery.safe": "A javascript: link is copied, not run.",
      "gallery.numbers": "Four codes, four numbers.",
      "footer.maker": "QRedirect is a small independent app by Woohyeok Kim.",
      "footer.privacy": "Privacy policy",
      "footer.home": "QRedirect",
      "meta.privacyTitle": "Privacy Policy — QRedirect",
      "nav.support": "Support",
      "meta.supportTitle": "Support — QRedirect",
      "meta.privacyDescription": "How QRedirect processes screen images, stores recent QR codes, and handles links and the clipboard.",
      "meta.supportDescription": "Contact QRedirect support and find help with permissions, shortcuts, scanning, and history.",
      "policy.title": "Privacy Policy",
      "policy.updated": "Last updated: October 20, 2026",
      "policy.intro": "QRedirect is a macOS app that recognizes QR codes on your screen. This policy distinguishes temporary screen-image processing from locally stored QR history.",
      "policy.access.title": "Data accessed and screen-image processing",
      "policy.access.body": "When you start a scan using the keyboard shortcut or menu, QRedirect captures full-screen images of connected displays. If a QR code is found and the scan overlay appears, it repeatedly captures the screen to update code positions and contents. Scanning ends when you press Esc, press the shortcut again, or select a code. Simply launching the app does not start continuous capture.",
      "policy.access.images": "QRedirect uses ScreenCaptureKit still images and Apple Vision to recognize QR codes on your device. It does not record video files or audio. Screen images and images around QR codes are temporarily processed in memory for analysis and overlay display; they are not saved as files or uploaded. Images may remain in memory while needed for this processing and display; they are not necessarily discarded immediately after each analysis.",
      "policy.use.title": "Purposes of use",
      "policy.use.body": "Recognized QR contents are used to preview destinations, open web or email links, copy Wi-Fi passwords or network names, and copy text. Immediately opening a single web link is an optional setting. QRedirect does not automatically connect to Wi-Fi networks.",
      "policy.history.title": "Recent history",
      "policy.history.body": "Recent history is enabled by default. QRedirect stores up to 30 entries in UserDefaults inside the app sandbox, including the original contents of codes you open or copy and the time of use. It does not record every code it merely detects. Duplicate codes are updated, and the oldest entries are removed when the limit is exceeded. There is no separate expiration period.",
      "policy.history.wifi": "Wi-Fi QR codes are excluded from recent history whether or not they contain a password. Wi-Fi entries left by earlier versions are removed from the app history when the new version launches. Other QR contents may contain personal information.",
      "policy.sharing.title": "Third-party transfers",
      "policy.sharing.app": "The app itself has no accounts, advertising, analytics SDKs, its own crash reporting, data uploads, or cloud sync. QRedirect does not send screen images or recent history to the developer.",
      "policy.sharing.links": "When you open a link, its URL is passed to your default browser or mail app. Subsequent handling is governed by the policies of that app and the destination service. Content you copy goes to the system clipboard. Wi-Fi passwords are marked as concealed for clipboard managers, but this does not guarantee that other apps will not retain them.",
      "policy.retention.title": "Retention and deletion",
      "policy.retention.body": "Turning off recent history stops new entries from being saved but leaves existing entries in place. Delete them using Clear History in Settings. Shortcut and other preferences are also stored locally in the app sandbox. Deleting the app does not guarantee that all local data is removed; clear history in the app before uninstalling if you want to remove those entries.",
      "policy.permission.title": "Withdrawing screen-recording permission",
      "policy.permission.body": "You can revoke access in macOS System Settings → Privacy & Security → Screen Recording (or Screen & System Audio Recording, depending on your macOS version) by turning QRedirect off. Screen scanning requires this permission. Quit and reopen QRedirect if macOS asks you to restart it after changing permission.",
      "policy.contact.title": "Contact and updates",
      "policy.contact.body": "For privacy questions, use the support page or email woosyume@gmail.com. Changes to this policy will be posted here with an updated date.",
      "support.title": "QRedirect Support",
      "support.contact.title": "Contact support",
      "support.intro": "For help with QRedirect or privacy questions, email the developer:",
      "support.details": "Please include your app version, macOS version, and steps to reproduce the issue. You do not need to send original QR contents, Wi-Fi passwords, or other sensitive information.",
      "support.permission.q": "How do I allow screen access?",
      "support.permission.a": "Open macOS System Settings → Privacy & Security → Screen Recording (or Screen & System Audio Recording) and enable QRedirect. This permission is used for still-image QR recognition, not video or audio recording. You can turn it off in the same place.",
      "support.history.q": "How do I delete recent history?"
    },
    "ko": {
      "meta.title": "QRedirect for Mac",
      "meta.description": "Mac 화면에 있는 QR 코드를 찾아서 단축키 하나로 여는 앱.",
      "nav.what": "하는 일",
      "nav.privacy": "개인정보",
      "nav.faq": "FAQ",
      "intro.kicker": "macOS 14 이상용 메뉴 막대 앱",
      "intro.title": "휴대폰은 주머니에 그대로 두세요.",
      "intro.lead": "QRedirect는 Mac 화면에 떠 있는 QR 코드를 찾아서 단축키 하나로 열어 줘요. 슬라이드든, PDF든, 회의에서 누가 공유한 화면이든요.",
      "intro.store": "Mac App Store에 곧 나와요.",
      "demo.prompt_html": "여기서 해 보세요. <kbd>⌥</kbd><kbd>Q</kbd>",
      "demo.button": "또는 눌러서 스캔",
      "demo.slideTitle": "와 주셔서 고마워요.",
      "demo.slideBody": "자세한 내용은 링크에서 확인하세요.",
      "demo.wifiLabel": "게스트 Wi-Fi",
      "demo.guide": "QR 코드 2개",
      "demo.enter": "Enter 키로 열기",
      "demo.opened": "앱에서는 여기서 브라우저가 열려요.",
      "demo.copied": "앱에서는 여기서 Wi-Fi 비밀번호가 복사돼요.",
      "what.title": "찾은 코드는 이렇게 처리해요",
      "what.link.k": "웹 링크",
      "what.link.v": "기본 브라우저에서 열어요.",
      "what.email.k": "이메일 주소",
      "what.email.v": "메일 앱에서 새 메일을 써요.",
      "what.wifi.k": "Wi-Fi 코드",
      "what.wifi.v": "암호나 네트워크 이름을 복사해요. Wi-Fi에 자동으로 연결하지는 않아요.",
      "what.text.k": "일반 텍스트",
      "what.text.v": "클립보드에 복사해요.",
      "what.blocked.k": "알 수 없는 앱 링크",
      "what.blocked.v": "열지 않고 복사만 해요. 믿어도 되는지 먼저 확인하세요.",
      "what.note1": "단축키나 메뉴로 스캔을 시작해요. 오버레이가 표시된 동안 전체 화면을 반복 캡처하여 QR 위치와 내용을 갱신해요.",
      "what.note2": "아래 앱은 그대로 스크롤하고 클릭할 수 있어요. 그 앱을 한 번 클릭하면 키보드도 돌아가고, esc와 Enter는 어디서든 그대로 동작해요.",
      "what.note3": "코드가 여러 개면 번호가 붙어요. 단일 웹 링크 즉시 열기는 선택 설정이에요.",
      "privacy.title": "화면 이미지는 임시로, 최근 기록은 기기에.",
      "privacy.body": "단축키나 메뉴로 스캔을 시작하면 연결된 디스플레이를 캡처합니다. ScreenCaptureKit 정지 이미지를 Apple Vision으로 Mac 안에서 분석하며, 분석과 오버레이 표시를 위해 메모리에서 임시 처리하고 이미지 파일로 저장하거나 업로드하지 않습니다. 최근 기록은 기본으로 켜져 있고, 열거나 복사한 코드를 최대 30개 기기에 보관하며 Wi-Fi QR은 제외합니다. 링크를 열면 URL이 브라우저나 메일 앱으로 전달되고, 복사 시 시스템 클립보드를 사용합니다.",
      "privacy.link": "개인정보 처리방침 읽기",
      "faq.title": "자주 묻는 질문",
      "faq.restart.q": "화면 기록을 허용했는데 아무 반응이 없어요.",
      "faq.restart.a": "화면 기록을 허용한 뒤 권한이 적용되지 않으면 메뉴 막대에서 QRedirect를 종료하고 다시 여세요. 환영 창의 ‘QRedirect 다시 시작’을 사용할 수도 있습니다.",
      "faq.shortcut.q": "단축키를 바꿀 수 있나요?",
      "faq.shortcut.a_html": "네, 설정에서 바꿀 수 있어요. 기본값은 <kbd>⌥</kbd><kbd>Q</kbd>예요. 반응이 없는 단축키는 다른 앱이 이미 쓰고 있을 가능성이 커요.",
      "faq.close.q": "오버레이는 어떻게 닫나요?",
      "faq.close.a_html": "<kbd>Esc</kbd>, 스캔 단축키 재입력 또는 코드 선택으로 스캔을 종료하고 오버레이를 닫을 수 있습니다.",
      "faq.history.q": "스캔한 기록이 남나요?",
      "faq.history.a": "최근 기록은 기본으로 켜져 있으며 열거나 복사한 코드를 최대 30개 저장합니다. 모든 Wi-Fi QR은 제외합니다. 기록을 꺼도 기존 항목은 남으며, 설정의 ‘기록 삭제’로 지울 수 있습니다.",
      "faq.language.q": "언어를 바꿀 수 있나요?",
      "faq.language.a": "기본은 Mac의 언어를 따라요. 설정에서 영어, 한국어, 일본어 중에 고를 수도 있어요.",
      "gallery.call": "회의에서 다른 사람이 공유한 화면.",
      "gallery.wifi": "Wi-Fi 코드는 비밀번호를 복사해요.",
      "gallery.safe": "javascript: 링크는 실행하지 않고 복사만.",
      "gallery.numbers": "코드 네 개, 번호 네 개.",
      "footer.maker": "QRedirect는 Woohyeok Kim이 만든 작은 독립 앱이에요.",
      "footer.privacy": "개인정보 처리방침",
      "footer.home": "QRedirect",
      "meta.privacyTitle": "개인정보 처리방침 — QRedirect",
      "nav.support": "지원",
      "meta.supportTitle": "지원 — QRedirect",
      "meta.privacyDescription": "QRedirect의 화면 이미지 처리, 최근 QR 기록 보관, 링크와 클립보드 이용에 관한 안내.",
      "meta.supportDescription": "QRedirect 지원 문의 및 권한, 단축키, 스캔, 기록 도움말.",
      "policy.title": "개인정보처리방침",
      "policy.updated": "최종 수정일: 2026년 10월 20일",
      "policy.intro": "QRedirect는 화면의 QR 코드를 인식하는 macOS 앱입니다. 이 방침은 화면 이미지의 임시 처리와 기기에 저장하는 QR 기록을 구분하여 설명합니다.",
      "policy.access.title": "접근 데이터와 화면 이미지 처리",
      "policy.access.body": "단축키 또는 메뉴로 스캔을 시작하면 연결된 디스플레이의 전체 화면 이미지를 캡처합니다. QR 코드가 발견되어 스캔 오버레이가 표시되면 반복 캡처하여 코드 위치와 내용을 갱신합니다. Esc, 단축키 재입력 또는 코드 선택으로 스캔을 종료합니다. 앱 실행만으로 상시 캡처하지 않습니다.",
      "policy.access.images": "ScreenCaptureKit의 정지 이미지와 Apple Vision으로 기기 안에서 QR을 인식합니다. 동영상 파일이나 오디오는 기록하지 않습니다. 화면 이미지와 QR 주변 이미지는 분석과 오버레이 표시를 위해 메모리에서 임시 처리하며 파일로 저장하거나 업로드하지 않습니다. 처리와 표시에 필요한 동안 메모리에 남을 수 있으며, 모든 이미지가 매 분석 직후 즉시 폐기되는 것은 아닙니다.",
      "policy.use.title": "이용 목적",
      "policy.use.body": "인식한 QR 내용은 목적지 미리보기, 웹·메일 링크 열기, Wi-Fi 암호나 네트워크 이름 복사, 텍스트 복사에 사용합니다. 단일 웹 링크 즉시 열기는 선택 설정입니다. Wi-Fi에 자동으로 연결하는 기능은 없습니다.",
      "policy.history.title": "최근 기록",
      "policy.history.body": "최근 기록은 기본으로 켜져 있습니다. 열거나 복사한 코드의 원문과 사용 시각 등을 앱 샌드박스의 UserDefaults에 최대 30개 보관합니다. 발견만 한 모든 코드를 기록하지는 않습니다. 중복 코드는 갱신하고 한도를 넘으면 오래된 항목부터 제거합니다. 별도의 만료 기간은 없습니다.",
      "policy.history.wifi": "Wi-Fi QR은 암호 유무와 관계없이 최근 기록에 저장하지 않습니다. 이전 버전에 남은 Wi-Fi 기록은 새 버전 실행 시 앱 기록에서 제거합니다. 다른 QR 원문에는 개인정보가 포함될 수 있습니다.",
      "policy.sharing.title": "제3자 전달",
      "policy.sharing.app": "앱 자체에 계정, 광고, 분석 SDK, 자체 크래시 리포팅, 데이터 업로드, 클라우드 동기화 기능은 없습니다. 개발자에게 화면 이미지나 최근 기록을 전송하지 않습니다.",
      "policy.sharing.links": "링크를 실행하면 URL은 기본 브라우저나 메일 앱으로 전달되며, 이후에는 해당 앱과 목적지 서비스의 방침이 적용됩니다. 복사한 내용은 시스템 클립보드에 들어갑니다. Wi-Fi 암호에는 클립보드 관리자용 숨김 표시를 붙이지만 다른 앱의 보관 방지를 보장하지 않습니다.",
      "policy.retention.title": "보관 및 삭제",
      "policy.retention.body": "최근 기록을 끄면 새로운 항목의 저장은 중단되지만 기존 기록은 남습니다. 설정의 ‘기록 삭제’로 삭제할 수 있습니다. 단축키 등 환경설정도 앱 샌드박스에 로컬로 저장됩니다. 앱 삭제 시 모든 로컬 데이터가 함께 지워진다고 보장하지 않으므로, 기록을 제거하려면 앱 삭제 전에 앱에서 기록을 삭제하세요.",
      "policy.permission.title": "화면 기록 권한 철회",
      "policy.permission.body": "macOS 시스템 설정 → 개인정보 보호 및 보안 → 화면 기록(버전에 따라 ‘화면 및 시스템 오디오 녹음’)에서 QRedirect를 끄면 권한을 철회할 수 있습니다. 화면 스캔에는 이 권한이 필요합니다. 권한 변경 후 macOS에서 재시작을 요청하면 QRedirect를 종료한 뒤 다시 여세요.",
      "policy.contact.title": "문의 및 변경 사항",
      "policy.contact.body": "개인정보 관련 문의는 지원 페이지 또는 woosyume@gmail.com으로 보내 주세요. 방침이 변경되면 수정일과 함께 이 페이지에 게시합니다.",
      "support.title": "QRedirect 지원",
      "support.contact.title": "지원 문의",
      "support.intro": "QRedirect 사용 및 개인정보 관련 문의는 개발자에게 이메일로 보내 주세요.",
      "support.details": "문의 시 앱 버전, macOS 버전, 문제 재현 절차를 알려 주세요. QR 원문, Wi-Fi 암호 등 민감한 정보는 보내지 않아도 됩니다.",
      "support.permission.q": "화면 기록 권한은 어떻게 허용하나요?",
      "support.permission.a": "macOS 시스템 설정 → 개인정보 보호 및 보안 → 화면 기록(또는 ‘화면 및 시스템 오디오 녹음’)에서 QRedirect를 켜세요. 이 권한은 정지 이미지의 QR 인식에 사용하며 동영상이나 오디오를 기록하지 않습니다. 같은 위치에서 권한을 끌 수 있습니다.",
      "support.history.q": "최근 기록은 어떻게 삭제하나요?"
    },
    "ja": {
      "meta.title": "QRedirect for Mac",
      "meta.description": "Mac の画面上の QR コードを見つけて、ショートカットひとつで開くアプリ。",
      "nav.what": "できること",
      "nav.privacy": "プライバシー",
      "nav.faq": "FAQ",
      "intro.kicker": "macOS 14 以降のメニューバーアプリ",
      "intro.title": "スマホは、ポケットに入れたままで。",
      "intro.lead": "QRedirect は Mac の画面に映っている QR コードを見つけて、ショートカットひとつで開きます。スライドでも、PDF でも、会議で誰かが共有している画面でも。",
      "intro.store": "Mac App Store で近日公開。",
      "demo.prompt_html": "ここで試せます。<kbd>⌥</kbd><kbd>Q</kbd>",
      "demo.button": "またはクリックしてスキャン",
      "demo.slideTitle": "ご参加ありがとうございました。",
      "demo.slideBody": "詳しくはリンクから。",
      "demo.wifiLabel": "ゲスト Wi-Fi",
      "demo.guide": "QR コード 2 個",
      "demo.enter": "Enter キーで開く",
      "demo.opened": "アプリなら、ここでブラウザが開きます。",
      "demo.copied": "アプリなら、ここで Wi-Fi のパスワードがコピーされます。",
      "what.title": "見つけたコードの扱い",
      "what.link.k": "ウェブリンク",
      "what.link.v": "デフォルトのブラウザで開きます。",
      "what.email.k": "メールアドレス",
      "what.email.v": "メールアプリで新規メッセージを作成します。",
      "what.wifi.k": "Wi-Fi のコード",
      "what.wifi.v": "パスワードやネットワーク名をコピーします。Wi-Fi に自動接続はしません。",
      "what.text.k": "テキスト",
      "what.text.v": "クリップボードにコピーします。",
      "what.blocked.k": "不明なアプリのリンク",
      "what.blocked.v": "開かずにコピーだけします。信用していいか、先に確かめてください。",
      "what.note1": "ショートカットやメニューでスキャンを開始します。オーバーレイの表示中は全画面のキャプチャを繰り返し、QR の位置と内容を更新します。",
      "what.note2": "下のアプリはそのままスクロールもクリックもできます。そのアプリをクリックすればキーボードも戻り、esc と Enter はどこからでも使えます。",
      "what.note3": "コードが複数あれば番号が付きます。単一のウェブリンクをすぐに開く機能は任意の設定です。",
      "privacy.title": "画面画像は一時処理。履歴は端末内に。",
      "privacy.body": "ショートカットやメニューでスキャンを開始すると、接続されたディスプレイをキャプチャします。ScreenCaptureKit の静止画像を Apple Vision で Mac 内で解析し、解析とオーバーレイ表示のためメモリ上で一時処理します。画像ファイルの保存やアップロードはしません。履歴はデフォルトで有効で、開いた、またはコピーしたコードを最大 30 件端末に保存し、Wi-Fi QR は除外します。リンクを開くと URL がブラウザやメールアプリに渡され、コピーにはシステムのクリップボードを使います。",
      "privacy.link": "プライバシーポリシーを読む",
      "faq.title": "よくある質問",
      "faq.restart.q": "画面収録を許可したのに反応しません。",
      "faq.restart.a": "画面収録を許可しても反映されない場合は、メニューバーから QRedirect を終了して開き直してください。ウェルカムウインドウの「QRedirect を再起動」も使えます。",
      "faq.shortcut.q": "ショートカットは変えられますか？",
      "faq.shortcut.a_html": "はい、設定で変えられます。デフォルトは <kbd>⌥</kbd><kbd>Q</kbd> です。反応しない場合は、ほかのアプリがすでに使っている可能性があります。",
      "faq.close.q": "オーバーレイを閉じるには？",
      "faq.close.a_html": "<kbd>Esc</kbd>、スキャンのショートカットの再入力、またはコードの選択でスキャンを終了し、オーバーレイを閉じます。",
      "faq.history.q": "スキャンした履歴は残りますか？",
      "faq.history.a": "履歴はデフォルトで有効で、開いた、またはコピーしたコードを最大 30 件保存します。すべての Wi-Fi QR は除外します。オフにしても既存の履歴は残るため、設定の「履歴を消去」で削除してください。",
      "faq.language.q": "言語は変えられますか？",
      "faq.language.a": "基本は Mac の言語に合わせます。設定で英語、韓国語、日本語から選ぶこともできます。",
      "gallery.call": "会議で誰かが共有している画面。",
      "gallery.wifi": "Wi-Fi のコードはパスワードをコピー。",
      "gallery.safe": "javascript: のリンクは実行せずコピーだけ。",
      "gallery.numbers": "コードが 4 つなら、番号も 4 つ。",
      "footer.maker": "QRedirect は Woohyeok Kim が作った小さな独立系アプリです。",
      "footer.privacy": "プライバシーポリシー",
      "footer.home": "QRedirect",
      "meta.privacyTitle": "プライバシーポリシー — QRedirect",
      "nav.support": "サポート",
      "meta.supportTitle": "サポート — QRedirect",
      "meta.privacyDescription": "QRedirect の画面画像の処理、最近の QR 履歴の保存、リンクとクリップボードの取り扱いについて。",
      "meta.supportDescription": "QRedirect へのお問い合わせと、権限、ショートカット、スキャン、履歴のヘルプ。",
      "policy.title": "プライバシーポリシー",
      "policy.updated": "最終更新日：2026 年 10 月 20 日",
      "policy.intro": "QRedirect は画面上の QR コードを認識する macOS アプリです。このポリシーでは、画面画像の一時的な処理と、端末に保存する QR 履歴を区別して説明します。",
      "policy.access.title": "アクセスするデータと画面画像の処理",
      "policy.access.body": "ショートカットまたはメニューでスキャンを開始すると、接続されたディスプレイの全画面画像をキャプチャします。QR コードが見つかりスキャンオーバーレイが表示されると、キャプチャを繰り返してコードの位置と内容を更新します。Esc、ショートカットの再入力、またはコードの選択で終了します。アプリを起動しただけで常時キャプチャすることはありません。",
      "policy.access.images": "ScreenCaptureKit の静止画像と Apple Vision を使い、端末内で QR コードを認識します。動画ファイルや音声は記録しません。画面画像と QR コード周辺の画像は、解析とオーバーレイ表示のためメモリ上で一時的に処理し、ファイルへの保存やアップロードは行いません。処理や表示に必要な間はメモリに残る場合があり、すべての画像が解析直後に破棄されるとは限りません。",
      "policy.use.title": "利用目的",
      "policy.use.body": "認識した QR の内容は、リンク先のプレビュー、ウェブ・メールリンクを開く操作、Wi-Fi パスワードやネットワーク名のコピー、テキストのコピーに使用します。単一のウェブリンクをすぐに開く機能は任意の設定です。Wi-Fi への自動接続機能はありません。",
      "policy.history.title": "最近の履歴",
      "policy.history.body": "最近の履歴はデフォルトで有効です。開いた、またはコピーしたコードの原文や使用時刻などを、アプリのサンドボックス内の UserDefaults に最大 30 件保存します。検出しただけのすべてのコードを記録するわけではありません。重複するコードは更新し、上限を超えると古い項目から削除します。別途の有効期限はありません。",
      "policy.history.wifi": "Wi-Fi QR コードはパスワードの有無にかかわらず履歴に保存しません。以前のバージョンで残った Wi-Fi 履歴は、新しいバージョンの起動時にアプリの履歴から削除します。その他の QR の原文には個人情報が含まれる場合があります。",
      "policy.sharing.title": "第三者への受け渡し",
      "policy.sharing.app": "アプリ自体にアカウント、広告、解析 SDK、独自のクラッシュレポート、データのアップロード、クラウド同期の機能はありません。画面画像や最近の履歴を開発者に送信しません。",
      "policy.sharing.links": "リンクを開くと URL はデフォルトのブラウザやメールアプリに渡され、その後はそのアプリとリンク先サービスのポリシーが適用されます。コピーした内容はシステムのクリップボードに入ります。Wi-Fi パスワードにはクリップボード管理アプリ向けの非表示マークを付けますが、他のアプリによる保存を防ぐ保証はありません。",
      "policy.retention.title": "保存と削除",
      "policy.retention.body": "最近の履歴をオフにすると新しい項目の保存は停止しますが、既存の履歴は残ります。設定の「履歴を消去」で削除できます。ショートカットなどの設定もアプリのサンドボックス内にローカル保存されます。アプリの削除だけですべてのローカルデータが削除される保証はないため、履歴を削除したい場合はアンインストール前にアプリ内で消去してください。",
      "policy.permission.title": "画面収録の権限を取り消す",
      "policy.permission.body": "macOS のシステム設定 → プライバシーとセキュリティ → 画面収録（バージョンによっては「画面とシステムオーディオ録音」）で QRedirect をオフにすると権限を取り消せます。画面のスキャンにはこの権限が必要です。権限変更後に macOS が再起動を求めた場合は、QRedirect を終了して開き直してください。",
      "policy.contact.title": "お問い合わせと更新",
      "policy.contact.body": "プライバシーに関するお問い合わせは、サポートページまたは woosyume@gmail.com へお送りください。ポリシーを変更した場合は、更新日とともにこのページに掲載します。",
      "support.title": "QRedirect サポート",
      "support.contact.title": "お問い合わせ",
      "support.intro": "QRedirect の使い方やプライバシーに関するご質問は、開発者へメールでお問い合わせください。",
      "support.details": "お問い合わせには、アプリのバージョン、macOS のバージョン、問題の再現手順をお知らせください。QR の原文や Wi-Fi パスワードなどの機密情報を送る必要はありません。",
      "support.permission.q": "画面収録を許可するには？",
      "support.permission.a": "macOS のシステム設定 → プライバシーとセキュリティ → 画面収録（または「画面とシステムオーディオ録音」）で QRedirect をオンにしてください。この権限は静止画像の QR 認識に使用し、動画や音声は記録しません。同じ場所で権限をオフにできます。",
      "support.history.q": "最近の履歴を削除するには？"
    }
  };

  const supported = Object.keys(strings);
  const storageKey = "qredirect.lang";
  let current = "en";

  const lookup = (key) => strings[current][key] ?? strings.en[key] ?? key;
  // For other scripts on the page (the demo).
  window.QRedirectI18n = { t: lookup };

  function initialLanguage() {
    const fromQuery = new URLSearchParams(location.search).get("lang");
    if (supported.includes(fromQuery)) return fromQuery;
    try {
      const saved = localStorage.getItem(storageKey);
      if (supported.includes(saved)) return saved;
    } catch (_) {}
    for (const tag of navigator.languages || [navigator.language]) {
      const base = (tag || "").toLowerCase().split("-")[0];
      if (supported.includes(base)) return base;
    }
    return "en";
  }

  function apply(lang) {
    current = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = lookup(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = lookup(el.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-src]").forEach((el) => {
      el.src = el.dataset.i18nSrc.replace("{lang}", lang);
    });
    const title = document.querySelector("title[data-i18n-title]");
    if (title) document.title = lookup(title.dataset.i18nTitle);
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = lookup(description.dataset.i18nDescription || "meta.description");

    document.querySelectorAll(".lang button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
    // Keep the language when moving between pages.
    document.querySelectorAll("a[data-keep-lang]").forEach((link) => {
      const url = new URL(link.getAttribute("href"), location.href);
      url.searchParams.set("lang", lang);
      link.href = url.pathname + url.search + url.hash;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang button").forEach((button) => {
      button.addEventListener("click", () => {
        const lang = button.dataset.lang;
        try {
          localStorage.setItem(storageKey, lang);
        } catch (_) {}
        const url = new URL(location.href);
        url.searchParams.set("lang", lang);
        history.replaceState(null, "", url);
        apply(lang);
      });
    });
    apply(initialLanguage());
  });
})();
