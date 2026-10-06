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
      "what.wifi.v": "The password is copied. Paste it when macOS asks.",
      "what.text.k": "Plain text",
      "what.text.v": "Copied to the clipboard.",
      "what.blocked.k": "and unknown apps",
      "what.blocked.v": "Copied, never opened. Look at it before you trust it.",
      "what.note1": "While the overlay is up it keeps reading the screen. When the presenter moves to the next slide, the frame follows the code.",
      "what.note2": "You can still scroll and click the app underneath. Click into it and the keyboard is back with that app; esc and Enter still close or open from anywhere.",
      "what.note3": "More than one code? Each gets a number. Press it.",
      "privacy.title": "It has no network access. None.",
      "privacy.body": "QRedirect asks for Screen Recording so it can look for codes. It looks only after you press the shortcut, reads the picture in memory with Apple's Vision framework, and throws it away. Nothing is saved, and since the app isn't allowed on the network, there's nowhere for it to go.",
      "privacy.link": "Read the privacy policy",
      "faq.title": "Questions",
      "faq.restart.q": "I allowed Screen Recording and nothing happens.",
      "faq.restart.a": "macOS applies it only after the app restarts. Use “Restart QRedirect” in the welcome window, or quit from the menu bar and open it again.",
      "faq.shortcut.q": "Can I use a different shortcut?",
      "faq.shortcut.a_html": "Yes, in Settings. The default is <kbd>⌥</kbd><kbd>Q</kbd>. If a shortcut doesn't respond, something else is probably using it.",
      "faq.close.q": "How do I get rid of the overlay?",
      "faq.close.a_html": "<kbd>esc</kbd>, or the shortcut again. Both work from any app.",
      "faq.history.q": "Does it remember what I scanned?",
      "faq.history.a": "Recent codes stay in the menu bar menu so you can find them again. They're kept on your Mac only, and you can turn this off or clear it in Settings.",
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
      "policy.title": "Privacy Policy",
      "policy.updated": "Last updated: October 6, 2026",
      "policy.intro": "QRedirect is a macOS app that finds and opens QR codes on your screen. It is built to work without collecting any information about you.",
      "policy.collect.title": "Information we collect",
      "policy.collect.body": "None. QRedirect has no accounts, no analytics, no advertising and no crash reporting. The app does not have network access, so it cannot send anything anywhere.",
      "policy.screen.title": "Screen contents",
      "policy.screen.body": "With your permission, QRedirect captures the screen when you press its shortcut and keeps capturing while the overlay is shown, so the highlights can follow the screen. Each capture is analyzed in memory on your Mac with Apple's Vision framework and then discarded. Captures are never written to disk or shared.",
      "policy.local.title": "Data stored on your Mac",
      "policy.local.item1_html": "<strong>Settings</strong> such as your shortcut and preferences, stored in the app's sandbox.",
      "policy.local.item2_html": "<strong>Scan history</strong>: the contents of codes you opened or copied, so you can find them again from the menu bar. You can turn it off or clear it at any time in Settings.",
      "policy.local.body": "This data stays on your Mac and is removed when you delete the app.",
      "policy.clipboard.title": "Clipboard",
      "policy.clipboard.body": "When you choose a code that isn't a link (for example Wi-Fi or text), its contents are copied to the clipboard. Wi-Fi passwords are marked as concealed so clipboard managers that respect the convention don't keep them.",
      "policy.links.title": "Links you open",
      "policy.links.body": "Links open in your default browser or the app registered for them. What happens next is governed by that website's or app's own privacy policy.",
      "policy.children.title": "Children",
      "policy.children.body": "QRedirect does not collect information from anyone, including children.",
      "policy.changes.title": "Changes",
      "policy.changes.body": "If this policy changes, the updated version will be posted on this page with a new date."
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
      "what.wifi.v": "비밀번호를 복사해 둬요. macOS가 물어보면 붙여넣으면 돼요.",
      "what.text.k": "일반 텍스트",
      "what.text.v": "클립보드에 복사해요.",
      "what.blocked.k": "알 수 없는 앱 링크",
      "what.blocked.v": "열지 않고 복사만 해요. 믿어도 되는지 먼저 확인하세요.",
      "what.note1": "오버레이가 떠 있는 동안에도 계속 화면을 읽어요. 발표자가 다음 슬라이드로 넘기면 조준점도 코드를 따라가요.",
      "what.note2": "아래 앱은 그대로 스크롤하고 클릭할 수 있어요. 그 앱을 한 번 클릭하면 키보드도 돌아가고, esc와 Enter는 어디서든 그대로 동작해요.",
      "what.note3": "코드가 여러 개면 번호가 붙어요. 그 번호를 누르면 돼요.",
      "privacy.title": "네트워크에 아예 접근하지 않아요.",
      "privacy.body": "QRedirect는 코드를 찾으려고 화면 기록 권한을 요청해요. 화면은 단축키를 누른 뒤에만 보고, Apple Vision 프레임워크로 메모리 안에서 읽은 다음 바로 버려요. 아무것도 저장하지 않고, 앱이 네트워크를 쓸 수 없으니 밖으로 나갈 길도 없어요.",
      "privacy.link": "개인정보 처리방침 읽기",
      "faq.title": "자주 묻는 질문",
      "faq.restart.q": "화면 기록을 허용했는데 아무 반응이 없어요.",
      "faq.restart.a": "macOS는 앱을 다시 시작해야 권한을 적용해요. 환영 창의 ‘QRedirect 다시 시작’을 누르거나, 메뉴 막대에서 종료한 뒤 다시 열어 주세요.",
      "faq.shortcut.q": "단축키를 바꿀 수 있나요?",
      "faq.shortcut.a_html": "네, 설정에서 바꿀 수 있어요. 기본값은 <kbd>⌥</kbd><kbd>Q</kbd>예요. 반응이 없는 단축키는 다른 앱이 이미 쓰고 있을 가능성이 커요.",
      "faq.close.q": "오버레이는 어떻게 닫나요?",
      "faq.close.a_html": "<kbd>esc</kbd>나 단축키를 한 번 더 누르세요. 어느 앱에 있든 둘 다 돼요.",
      "faq.history.q": "스캔한 기록이 남나요?",
      "faq.history.a": "최근 코드는 메뉴 막대 메뉴에 남아서 다시 찾을 수 있어요. 이 Mac에만 저장되고, 설정에서 끄거나 지울 수 있어요.",
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
      "policy.title": "개인정보 처리방침",
      "policy.updated": "최종 업데이트: 2026년 10월 6일",
      "policy.intro": "QRedirect는 화면 속 QR 코드를 찾아서 열어 주는 macOS 앱이에요. 사용자에 관한 정보를 전혀 수집하지 않고 동작하도록 만들었어요.",
      "policy.collect.title": "수집하는 정보",
      "policy.collect.body": "없어요. 계정, 분석, 광고, 크래시 리포트가 없어요. 앱에 네트워크 접근 권한이 없어서 어떤 정보도 외부로 보낼 수 없어요.",
      "policy.screen.title": "화면 내용",
      "policy.screen.body": "사용자가 허용하면, 단축키를 눌렀을 때 화면을 캡처하고 오버레이가 떠 있는 동안 강조 표시가 화면을 따라가도록 계속 캡처해요. 각 캡처는 Mac 메모리 안에서 Apple Vision 프레임워크로 분석한 뒤 바로 버려요. 디스크에 저장하거나 공유하지 않아요.",
      "policy.local.title": "Mac에 저장되는 데이터",
      "policy.local.item1_html": "<strong>설정</strong>: 단축키와 환경설정. 앱의 샌드박스 안에 저장돼요.",
      "policy.local.item2_html": "<strong>스캔 기록</strong>: 열거나 복사한 코드의 내용. 메뉴 막대에서 다시 찾을 수 있게 저장하며, 설정에서 언제든 끄거나 지울 수 있어요.",
      "policy.local.body": "이 데이터는 Mac 안에만 있고, 앱을 삭제하면 함께 지워져요.",
      "policy.clipboard.title": "클립보드",
      "policy.clipboard.body": "링크가 아닌 코드(예: Wi-Fi, 텍스트)를 고르면 내용이 클립보드에 복사돼요. Wi-Fi 비밀번호는 숨김 표시를 붙여서, 이 규칙을 따르는 클립보드 관리 앱이 보관하지 않도록 해요.",
      "policy.links.title": "여는 링크",
      "policy.links.body": "링크는 기본 브라우저나 해당 링크를 처리하는 앱에서 열려요. 그 이후는 해당 웹사이트나 앱의 개인정보 처리방침을 따라요.",
      "policy.children.title": "아동",
      "policy.children.body": "QRedirect는 아동을 포함한 누구의 정보도 수집하지 않아요.",
      "policy.changes.title": "변경 사항",
      "policy.changes.body": "이 방침이 바뀌면 새 날짜와 함께 이 페이지에 게시할게요."
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
      "what.wifi.v": "パスワードをコピーします。macOS に聞かれたら貼り付けるだけです。",
      "what.text.k": "テキスト",
      "what.text.v": "クリップボードにコピーします。",
      "what.blocked.k": "不明なアプリのリンク",
      "what.blocked.v": "開かずにコピーだけします。信用していいか、先に確かめてください。",
      "what.note1": "オーバーレイの表示中も画面を読み続けます。発表者が次のスライドに進めば、枠もコードについていきます。",
      "what.note2": "下のアプリはそのままスクロールもクリックもできます。そのアプリをクリックすればキーボードも戻り、esc と Enter はどこからでも使えます。",
      "what.note3": "コードが複数あれば番号が付きます。その数字を押すだけです。",
      "privacy.title": "ネットワークには一切つながりません。",
      "privacy.body": "QRedirect がコードを探すには「画面収録」の許可が必要です。画面を見るのはショートカットを押したあとだけ。Apple の Vision フレームワークでメモリ上で読み取り、すぐに破棄します。何も保存せず、アプリはネットワークを使えないので、外に出ていく道もありません。",
      "privacy.link": "プライバシーポリシーを読む",
      "faq.title": "よくある質問",
      "faq.restart.q": "画面収録を許可したのに反応しません。",
      "faq.restart.a": "macOS はアプリを再起動したときに許可を反映します。ウェルカムウインドウの「QRedirect を再起動」を押すか、メニューバーから終了して開き直してください。",
      "faq.shortcut.q": "ショートカットは変えられますか？",
      "faq.shortcut.a_html": "はい、設定で変えられます。デフォルトは <kbd>⌥</kbd><kbd>Q</kbd> です。反応しない場合は、ほかのアプリがすでに使っている可能性があります。",
      "faq.close.q": "オーバーレイを閉じるには？",
      "faq.close.a_html": "<kbd>esc</kbd> か、ショートカットをもう一度。どのアプリにいても使えます。",
      "faq.history.q": "スキャンした履歴は残りますか？",
      "faq.history.a": "最近のコードはメニューバーのメニューに残るので、あとから探せます。保存先はこの Mac だけで、設定からオフにしたり消去したりできます。",
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
      "policy.title": "プライバシーポリシー",
      "policy.updated": "最終更新日：2026 年 10 月 6 日",
      "policy.intro": "QRedirect は、画面上の QR コードを見つけて開く macOS アプリです。ユーザーに関する情報を一切収集せずに動作するよう作られています。",
      "policy.collect.title": "収集する情報",
      "policy.collect.body": "ありません。アカウント、解析、広告、クラッシュレポートはありません。アプリにはネットワークへのアクセス権がないため、どこにも情報を送信できません。",
      "policy.screen.title": "画面の内容",
      "policy.screen.body": "ユーザーの許可のもと、ショートカットを押したときに画面をキャプチャし、オーバーレイの表示中はハイライトが画面に追従できるようキャプチャを続けます。各キャプチャは Mac のメモリ上で Apple の Vision フレームワークにより解析され、その後破棄されます。ディスクへの保存や共有は行いません。",
      "policy.local.title": "Mac に保存されるデータ",
      "policy.local.item1_html": "<strong>設定</strong>：ショートカットや環境設定。アプリのサンドボックス内に保存されます。",
      "policy.local.item2_html": "<strong>スキャン履歴</strong>：開いた、またはコピーしたコードの内容。メニューバーから再び見つけられるよう保存され、設定からいつでもオフにしたり消去したりできます。",
      "policy.local.body": "これらのデータは Mac の中にとどまり、アプリを削除すると一緒に削除されます。",
      "policy.clipboard.title": "クリップボード",
      "policy.clipboard.body": "リンク以外のコード（Wi-Fi やテキストなど）を選ぶと、その内容がクリップボードにコピーされます。Wi-Fi のパスワードには非表示の印を付け、この慣例に対応したクリップボード管理アプリが保持しないようにしています。",
      "policy.links.title": "開くリンク",
      "policy.links.body": "リンクはデフォルトのブラウザ、またはそのリンクに対応するアプリで開きます。その後の扱いは、各ウェブサイトやアプリのプライバシーポリシーに従います。",
      "policy.children.title": "お子様について",
      "policy.children.body": "QRedirect は、お子様を含め、誰の情報も収集しません。",
      "policy.changes.title": "変更について",
      "policy.changes.body": "このポリシーを変更した場合は、新しい日付とともにこのページに掲載します。"
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
    if (description && strings[lang]["meta.description"]) description.content = lookup("meta.description");

    document.querySelectorAll(".lang button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
    // Keep the language when moving between pages.
    document.querySelectorAll("a[data-keep-lang]").forEach((link) => {
      const url = new URL(link.getAttribute("href"), location.href);
      url.searchParams.set("lang", lang);
      link.href = url.pathname.split("/").pop() + url.search + url.hash;
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
