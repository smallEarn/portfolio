<?php ob_start(); ?>
<?php
require_once __DIR__ . '/vendor/autoload.php';

ini_set('display_errors', 0);

use \APP\Form;
use \APP\CsrfValidator;
use \Dotenv\Dotenv;

// 他サイトでiframe引用を禁止
header('X-FRAME-OPTIONS: SAMEORIGIN');

// セッションの開始
session_cache_expire(0);
session_cache_limiter('private_no_expire');
session_start();

// 環境で振り分けできるように.envの読み込み
$dotenv = new Dotenv(__DIR__);
$dotenv->load();

// フォームクラスの作成
$formTool = new Form();

// .envを読み込んでメールアドレスをセット
$thisEnv = getenv('THIS_ENV');
$formTool->setAdminToEmail(getenv($thisEnv . '_ADMIN_TO_EMAIL'));
$formTool->setAdminFromEmail(getenv($thisEnv . '_ADMIN_FORM_EMAIL'));
$formTool->setAdminFromName(getenv($thisEnv . '_ADMIN_FORM_NAME'));
$formTool->setAdminReturnPath(getenv($thisEnv . '_ADMIN_RETURN_PATH'));

$formTool->setUserFormEmail(getenv($thisEnv . '_USER_FORM_EMAIL'));
$formTool->setUserFormName(getenv($thisEnv . '_USER_FORM_NAME'));
$formTool->setUserReturnPath(getenv($thisEnv . '_USER_RETURN_PATH'));

$formTool->setSmtpUserName(getenv($thisEnv . '_SMTP_USER'));
$formTool->setSmtpPassword(getenv($thisEnv . '_SMTP_PASSWORD'));
$formTool->setSmtpHost(getenv($thisEnv . '_SMTP_HOST'));
$server = getenv('MAIN_SERVER');

// フォームとバリデーションルールを設定
$formTool->setForms([
    'inputPropertyInfo' => [
        'name'    => '物件情報',
        'type'    => 'text',
        'require' => false,
        'rule'    => [],
    ],

    'inputCheck' => [
        'name'    => 'お問い合わせ種別',
        'type'    => 'checkbox',
        'require' => true,
        'rule'    => [],
    ],

    'inputLname' => [
        'name'    => '氏名（姓）',
        'type'    => 'text',
        'require' => true,
        'rule'    => [
            'min' => 1,
            'max' => 50,
        ],
    ],

    'inputFname' => [
        'name'    => '氏名（名）',
        'type'    => 'text',
        'require' => true,
        'rule'    => [
            'min' => 1,
            'max' => 50,
        ],
    ],

    'inputTel' => [
        'name'    => '電話番号',
        'type'    => 'text',
        'require' => true,
        'rule'    => [],
    ],

    'inputZip' => [
        'name'    => '郵便番号',
        'type'    => 'text',
        'require' => true,
        'rule'    => [],
    ],

    'inputMail' => [
        'name'    => 'メールアドレス',
        'type'    => 'text',
        'require' => true,
        'rule'    => [
            'mail' => true,
        ],
    ],

    'inputAddress' => [
        'name'    => '住所 ',
        'type'    => 'text',
        'require' => true,
        'rule'    => [
            'min' => 2,
            'max' => 50,
        ],
    ],

    'inputContent' => [
        'name'    => 'その他（ご質問・ご要望）',
        'type'    => 'text',
        'require' => true,
        'rule'    => [
            'min' => 0,
            'max' => 1000,
        ],
    ],
]);

// メッセージバッグの初期化
if ($formTool->getMessages() === false) {
    $formTool->setMessages([]);
    $messages = $formTool->getMessages();
}

// バリデーション
$isComplete = false;
if (!empty($_POST)) {
    // POST値のバリデーション
    $formTool->validate();
    // バリデーションエラーが格納される。
    $messages   = $formTool->getMessages();
    $isComplete = $formTool->isComplete($messages);
}

$isEmptyPost         = empty($_POST);
$hasValidayteError   = (!empty($_POST) && !empty($messages)) || (isset($_POST['send']) && $_POST['send'] == 'false');
$hasNotValidateError = (!isset($_POST['send']) || $_POST['send'] != 'false') && (empty($messages) || !empty($_POST['send']));
$alreadySendMail     = isset($_SESSION['sendMail']) && $_SESSION['sendMail'] == 1 ? true : false;

$isIndex    = (($isEmptyPost || $hasValidayteError) && !$isComplete) || $alreadySendMail;
$isConfirm  = !$isEmptyPost && $hasNotValidateError && !$isComplete && !$alreadySendMail;
$isComplete = !$isEmptyPost && $isComplete && !$alreadySendMail;

$protocol  = empty($_SERVER['HTTPS']) ? 'http://' : 'https://';
$canonical = $protocol . $_SERVER['HTTP_HOST'];

if ($isIndex) {
    unset($_POST['send']);
}

if (isset($_SESSION['sendMail'])) {
    unset($_SESSION['sendMail']);
    $_POST = [];
}

$root        = './';
$title       = 'pj_portfolio';
$description = 'ページディスクリプション';

// start content
?>
<section class="page">
    <section class="shell">
        <section class="sidebar">
            <div class="inner">
                <div class="profile">
                    <div class="avatarWrap">
                        <div class="avatar">🙂</div>
                    </div>
                    <h1>Precious Genodeala</h1>
                    <p class="role">Software Engineer</p>
                </div>

                <div class="divider"></div>

                <div class="contactList">
                    <div class="contactItem">
                        <div class="iconBox">✉</div>
                        <div class="contactMeta">
                            <span class="label">EMAIL</span>
                            <span class="value">aakashrajbanshi58@...</span>
                        </div>
                    </div>

                    <div class="contactItem">
                        <div class="iconBox">📱</div>
                        <div class="contactMeta">
                            <span class="label">PHONE</span>
                            <span class="value">+977 9812345678</span>
                        </div>
                    </div>

                    <div class="contactItem">
                        <div class="iconBox">📍</div>
                        <div class="contactMeta">
                            <span class="label">LOCATION</span>
                            <span class="value">Kathmandu, Nepal</span>
                        </div>
                    </div>
                </div>

                <div class="social">
                    <a href="#" aria-label="LinkedIn">in</a>
                    <a href="#" aria-label="GitHub">⌂</a>
                    <a href="#" aria-label="Google">G</a>
                    <a href="#" aria-label="Twitter">𝕏</a>
                </div>
            </div>
        </section>

        <section class="main">
  <div class="main__inner">

    <!-- Tabs -->
    <div class="main__topbar">
      <div class="main__tabs">
        <a class="main__tab main__tab--active" href="#" data-tab="about">About</a>
        <a class="main__tab" href="#" data-tab="resume">Resume</a>
        <a class="main__tab" href="#" data-tab="portfolio">Portfolio</a>
        <a class="main__tab" href="#" data-tab="blog">Blog</a>
        <a class="main__tab" href="#" data-tab="contact">Contact</a>
      </div>
    </div>

    <!-- Tab Contents -->
    <div class="main__content">

      <!-- ABOUT -->
      <div class="tab-content active" id="about">
        <div class="main__header">
          <h1 class="main__title">About Me</h1>
          <div class="main__underline"></div>
        </div>

        <div class="main__about">
          <p class="main__text">
            A passionate Flutter developer with strong expertise in cross-platform apps, REST APIs,
            UI/UX, widgets, and state management solutions. Proven track record in delivering
            cutting-edge solutions, including API integration, third-party libraries, and
            performance optimization.
          </p>

          <br class="main__break" />

          <p class="main__text">
            If you're seeking a skilled Flutter developer to breathe life into your project and
            exceed your expectations, I am here to collaborate and create magic together.
          </p>
        </div>

        <div class="main__doing">
          <h3 class="main__sectionTitle">What I'm Doing</h3>

          <div class="main__grid">
            <article class="main__card">
              <div class="main__badge"><img src="./assets/img/icon-app.svg" alt=""></div>
              <div class="main__cardBody">
                <h3 class="main__cardTitle">Mobile Apps</h3>
                <p class="main__cardText">
                  Professional development of applications for Android and iOS.
                </p>
              </div>
            </article>

            <article class="main__card">
              <div class="main__badge">⌘</div>
              <div class="main__cardBody">
                <h3 class="main__cardTitle">Web Development</h3>
                <p class="main__cardText">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </article>

            <article class="main__card">
              <div class="main__badge">✎</div>
              <div class="main__cardBody">
                <h3 class="main__cardTitle">UI/UX Design</h3>
                <p class="main__cardText">
                  The most modern and high-quality design made at a professional level.
                </p>
              </div>
            </article>

            <article class="main__card">
              <div class="main__badge">🗄</div>
              <div class="main__cardBody">
                <h3 class="main__cardTitle">Backend Development</h3>
                <p class="main__cardText">
                  High-performance backend services designed for scalability and seamless UX.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div class="main__skills">
  <h3 class="main__sectionTitle">Skills</h3>

  <div class="main__skillRow">
    <article class="main__skill main__skill--s1">DART</article>
    <article class="main__skill main__skill--s2">FLUTTER</article>
    <article class="main__skill main__skill--s3">FIREBASE</article>
    <article class="main__skill main__skill--s4">API</article>

    <!-- you can add more -->
    <article class="main__skill main__skill--s1">DART</article>
    <article class="main__skill main__skill--s2">FLUTTER</article>
    <article class="main__skill main__skill--s3">FIREBASE</article>
    <article class="main__skill main__skill--s4">API</article>
  </div>

  <div class="main__progressLine">
    <div class="main__progressFill"></div>
  </div>
</div>
      </div>

      <!-- RESUME -->
      <div class="tab-content" id="resume">
        <div class="main__header">
          <h1 class="main__title">Resume</h1>
          <div class="main__underline"></div>
        </div>
        <p class="main__text">Resume Section</p>
      </div>

      <!-- PORTFOLIO -->
      <div class="tab-content" id="portfolio">
        <div class="main__header">
          <h1 class="main__title">Portfolio</h1>
          <div class="main__underline"></div>
        </div>
        <p class="main__text">Portfolio Section</p>
      </div>

      <!-- BLOG -->
      <div class="tab-content" id="blog">
        <div class="main__header">
          <h1 class="main__title">Blog</h1>
          <div class="main__underline"></div>
        </div>
        <p class="main__text">Blog Section</p>
      </div>

      <!-- CONTACT -->
      <div class="tab-content" id="contact">
        <div class="main__header">
          <h1 class="main__title">Contact</h1>
          <div class="main__underline"></div>
        </div>
        <p class="main__text">Contact Section</p>
      </div>

    </div>
  </div>
</section>  
    </section>
</section>


<?php
// end content
?>
<?php $content = ob_get_contents(); ?>
<?php ob_end_clean(); ?>
<?php
include($root . '_layout.php');
?>
