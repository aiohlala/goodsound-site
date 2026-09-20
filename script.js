// Snoozy Official Website - i18n & Interactive Logic

const translations = {
  en: {
    brandSub: "Sleep Soundscape",
    navFeatures: "Features",
    navPresets: "Soundscapes",
    navPreview: "🎵 AI Sound Preview",
    navScreenshots: "Screenshots",
    navDownload: "Download",
    navPrivacy: "Privacy",
    navGetApp: "Get App",
    heroPill: "✨ Infinite Procedural Audio • 100% Offline DSP",
    heroTitle: "Sleep Deeply. <br><span class=\"gradient-text\">Relax Naturally.</span>",
    heroDesc: "Snoozy crafts tailored acoustic environments using real-time algorithmic sound synthesis. Combine pure white, pink, and brown noise with gentle rain, warm fires, ocean waves, and cozy lofi backgrounds for uninterrupted sleep and laser focus.",
    heroDownloadBtn: "Download APK (v1.0.6)",
    heroLearnMore: "Explore Features",
    heroExploreBtn: "Explore Features",
    badgeSolana: "Offline Procedural DSP",
    badgePrivacy: "100% Privacy & Zero Tracking",
    badgeBattery: "Ultra Low Battery Drain",
    floatDpsTitle: "Procedural DSP",
    floatDpsSub: "Zero Audio Loops",
    floatTimerTitle: "Gentle Fadeout",
    floatTimerSub: "30s Smooth Transition",
    floatZenTitle: "Zen Bedside Clock",
    floatZenSub: "5s Smart Auto-Dim",
    featTag: "Acoustic Engineering",
    featTitle: "Designed for Pure Tranquility & Unbroken Rest",
    featSubtitle: "Every frequency is calculated in real-time on your device's audio processor to eliminate repetitive loops and mental fatigue.",
    feat1Title: "Algorithmic Noise Synthesis",
    feat1Desc: "Procedural generation of White, Pink, and Brown noise. Never suffers from audio looping or jarring cuts, providing seamless organic masking for tinnitus and outside noise.",
    feat2Title: "Multi-Layer Sound Mixer",
    feat2Desc: "Blend multiple natural elements simultaneously. Adjust rain intensity, distant thunder, gentle stream, forest birds, wind chimes, and crackling campfire with independent sliders.",
    feat3Title: "Smart Fadeout Sleep Timer",
    feat3Desc: "Preset timers from 15 minutes to 8 hours. The final 30 seconds feature an exponential audio curve fadeout, so sudden silence never jolts you awake.",
    feat4Title: "Zen Bedside Night Clock",
    feat4Desc: "Turn your phone into a soothing nightstand display with cozy lofi scenes, live starry animations, and a 5-second automatic dimming mechanism to protect your eyes.",
    feat5Title: "Anti-Disturbance Ad Design",
    feat5Desc: "AdMob integration is strictly enforced with zero audio playback and non-intrusive placement. Your calm environment is never interrupted by loud advertising.",
    feat6Title: "Native 9-Language Support",
    feat6Desc: "Full internationalization supporting English, Traditional Chinese, Simplified Chinese, Japanese, Korean, Spanish, Vietnamese, Indonesian, and Thai.",
    presetsTag: "One-Tap Curations",
    presetsTitle: "Expertly Calibrated Soundscapes",
    presetsSubtitle: "Specially engineered frequency balances designed for specific mental states.",
    preset1Name: "Deep Sleep",
    preset1Tag: "Delta Waves • Brown Noise",
    preset1Desc: "Optimized low-frequency acoustic mask that calms racing thoughts and guides the brain into restorative deep delta sleep.",
    preset2Name: "Rainy Forest",
    preset2Tag: "Rain • Thunder • Foliage",
    preset2Desc: "Immerse yourself in gentle rainfall tapping on dense canopy leaves with rolling distant thunder and fresh forest atmosphere.",
    preset3Name: "Summer Night",
    preset3Tag: "Crickets • Wind • Pond",
    preset3Desc: "Nostalgic countryside evening with chirping cicadas, rustling reeds, and a cooling midnight breeze under the stars.",
    preset4Name: "Cozy Cafe",
    preset4Tag: "Pink Noise • Warmth",
    preset4Desc: "Balanced spectrum noise ideal for reading, coding, and deep focus without the fatigue of pure synthetic sound.",
    screenTag: "Visual Showcase",
    screenTitle: "A Sanctuary for Your Senses",
    screenSubtitle: "Designed with dark-mode OLED aesthetics, glassmorphism, and smooth micro-interactions.",
    cap1Title: "Calibrated Presets",
    cap1Desc: "One-tap deep delta sleep, rainy cabin & summer night combinations",
    cap2Title: "Zen Bedside Clock",
    cap2Desc: "Cozy animated bedroom ambiance with live clock & screen dimming",
    cap3Title: "Lofi Study & Focus",
    cap3Desc: "Rainy study room atmosphere tailored for reading, working & relaxation",
    cap4Title: "Sound Library & Custom Mixer",
    cap4Desc: "12+ procedural white noise & acoustic layers with granular multi-track volume tuning",
    dlTitle: "Ready for Peaceful Sleep Tonight?",
    dlDesc: "Download Snoozy for Android. 100% offline, lightweight, and battery-friendly.",
    dlBtnApkSmall: "Android APK Direct Download",
    dlBtnApkLarge: "Download APK (v1.0.6)",
    privTag: "Compliance & Transparency",
    privTitle: "Privacy Policy",
    privSubtitle: "Last Updated: September 16, 2026 • Effective Immediately",
    privHighTitle: "🔒 Core Commitment:",
    privHighDesc: "Snoozy is built with a privacy-by-design architecture. All sound synthesis, timers, and volume preferences run 100% locally on your device. We do not track, collect, or transmit any personally identifiable information (PII).",
    p1Head: "1. Information Collection & Processing",
    p1Desc: "Snoozy does NOT require user registration, login credentials, contact lists, location tracking, or microphone access. Specifically:",
    p1L1Title: "Zero Personal Data:",
    p1L1Desc: "We do not collect names, email addresses, phone numbers, or hardware identifiers.",
    p1L2Title: "Local Sound Processing:",
    p1L2Desc: "All white noise, procedural audio algorithms, and nature sound layers are synthesized locally on the device's CPU/DSP. No audio data is ever transmitted to remote servers.",
    p1L3Title: "Local Storage:",
    p1L3Desc: "Sound mixing presets, volume levels, timer settings, and language preferences are stored exclusively on your device using Android encrypted SharedPreferences.",
    p2Head: "2. Android Permissions Justification",
    p2Desc: "Snoozy requests only the minimum necessary permissions required for reliable background sleep playback:",
    p2L1: "Required by Android to continue playing audio and processing the sleep timer when the screen is turned off or while using other apps.",
    p2L2: "Ensures smooth audio buffer streaming and guarantees the 30-second exponential timer fadeout executes reliably without system freeze.",
    p2L3: "Used solely by Google AdMob SDK for serving banner advertisements.",
    p2L4: "Allows the app to display playback status and timer remaining countdown in the Android system notification shade.",
    p3Head: "3. Advertising & Anti-Disturbance Rules",
    p3Desc: "Snoozy utilizes Google AdMob to offer free access. To maintain a tranquil sleep environment, our advertising implementation adheres to strict anti-disturbance principles:",
    p3L1: "All banner ads are strictly configured with forced audio mute.",
    p3L2: "Ad placements do not cover playback controls or trigger accidental clicks.",
    p3L3: "Users who upgrade to PRO enjoy a 100% ad-free experience.",
    p4Head: "4. Solana Mobile / Device Ecosystem",
    p4Desc: "The Solana Edition of Snoozy is distributed via the Solana dApp Store. Please note that Snoozy does NOT connect to cryptocurrency wallets, does not request private keys, and does not conduct blockchain transactions. It is a standalone audio application optimized for the Solana Seeker device ecosystem.",
    p5Head: "5. Children's Privacy (COPPA Compliance)",
    p5Desc: "Snoozy does not target children under the age of 13 and does not collect any personal data from children or adults alike.",
    p6Head: "6. Contact & Inquiries",
    p6Desc: "If you have any questions regarding this Privacy Policy or app security, please contact the developer via email at aiohlala69@gmail.com or via our official GitHub repository.",
    footerDesc: "Procedural audio soundscapes for deep sleep, meditation, and high-performance focus."
  },
  zh: {
    brandSub: "舒眠聲",
    navFeatures: "核心功能",
    navPresets: "情境推薦",
    navPreview: "🎵 AI 舒眠音效試聽",
    navScreenshots: "介面展示",
    navDownload: "下載應用",
    navPrivacy: "隱私政策",
    navGetApp: "立即體驗",
    heroPill: "✨ 無限程序化即時音訊合成 • 100% 本地 DSP",
    heroTitle: "深層好眠。 <br><span class=\"gradient-text\">自然放鬆。</span>",
    heroDesc: "Snoozy 透過即時演算法合成專屬聲音環境。自由融合純淨白噪音、粉紅噪音、棕色噪音與雨聲、柴火、海浪及溫馨 Lofi 背景，打造極致沉浸的助眠與專注體驗。",
    heroDownloadBtn: "APK 下載 (v1.0.6)",
    heroLearnMore: "探索功能",
    heroExploreBtn: "探索功能",
    badgeSolana: "100% 本地即時演算",
    badgePrivacy: "100% 本地運算 • 零追蹤",
    badgeBattery: "超低耗電背景播放",
    floatDpsTitle: "程序化 DSP",
    floatDpsSub: "完全無音軌循環感",
    floatTimerTitle: "平滑淡出定時器",
    floatTimerSub: "最後 30 秒溫柔淡出",
    floatZenTitle: "沈浸式床頭鐘",
    floatZenSub: "5 秒智慧自動暗屏",
    featTag: "聲音聲學工程",
    featTitle: "為極致寧靜與不中斷的睡眠而生",
    featSubtitle: "所有頻率皆直接在您手機的音訊處理器上即時演算生成，徹底告別傳統錄音檔重複循環所帶來的聽覺疲勞。",
    feat1Title: "演算法噪音即時合成",
    feat1Desc: "原生演算法生成白噪音、粉紅噪音與棕色噪音。沒有錄音循環接縫與突兀爆音，為耳鳴困擾與外界雜音提供最自然的遮蔽層。",
    feat2Title: "多音軌自由混音器",
    feat2Desc: "支援多種自然環境音同時混音。獨立滑桿即時調節雨聲強度、遠雷、溪流、森林鳥鳴、風鈴與柴火劈啪聲。",
    feat3Title: "智慧平滑淡出定時器",
    feat3Desc: "預設 15 分鐘至 8 小時定時。最後 30 秒自動以指數曲線平滑淡出音量，絕不在聲音突然停止時驚醒您。",
    feat4Title: "沈浸式 Lofi 床頭鐘",
    feat4Desc: "讓手機化身溫馨的床頭夜鐘。支援多款動態星空與 Lofi 窗景插畫，並具備 5 秒自動降暗機制保護雙眼。",
    feat5Title: "防干擾廣告友善設計",
    feat5Desc: "AdMob 橫幅廣告強制靜音並遠離操作邊界，杜絕誤觸與突發聲響，守護平靜無擾的助眠環境。",
    feat6Title: "原生 9 國語言深度適配",
    feat6Desc: "完整支援繁體中文、簡體中文、英文、日文、韓文、西班牙文、越南文、印尼文與泰文，全語系介面一致無裁切。",
    presetsTag: "一鍵直達好眠",
    presetsTitle: "精心校準的情境聲音庫",
    presetsSubtitle: "針對特定身心放鬆狀態精準調配的頻率比例。",
    preset1Name: "深度睡眠",
    preset1Tag: "Delta 波 • 棕色噪音",
    preset1Desc: "最佳化低頻聲學遮蔽層，安撫紛亂思緒，溫和引導大腦進入深層 Delta 修復睡眠。",
    preset2Name: "雨夜森林",
    preset2Tag: "雨滴 • 遠雷 • 樹葉沙沙",
    preset2Desc: "彷彿置身於林間樹屋，細雨輕拍樹冠，伴隨遠方沈穩低鳴的雷聲與清新森林氣息。",
    preset3Name: "夏夜蟲鳴",
    preset3Tag: "蟋蟀 • 微風 • 池畔",
    preset3Desc: "令人懷念的鄉村夏夜，微風吹拂蘆葦，伴隨規律的蟲鳴聲進入甜美夢鄉。",
    preset4Name: "溫馨咖啡廳",
    preset4Tag: "粉紅噪音 • 溫暖氛圍",
    preset4Desc: "平衡頻譜噪音，非常適合閱讀、寫程式與深度思考，長時間聆聽不疲累。",
    screenTag: "精緻視覺展示",
    screenTitle: "為感官打造的靜謐綠洲",
    screenSubtitle: "專為 OLED 螢幕打造的深色極簡風格，結合毛玻璃質感與靈動微動效。",
    cap1Title: "精心調配聲音預設",
    cap1Desc: "一鍵聆聽深眠 Delta 波、雨夜木屋與夏夜微風多軌組合",
    cap2Title: "禪意極簡床頭鐘",
    cap2Desc: "溫馨貓咪臥室動畫，沉浸式時間顯示與微光護眼模式",
    cap3Title: "Lofi 專注與放鬆模式",
    cap3Desc: "雨夜窗景書房氛圍，適合閱讀、工作專注與舒緩放鬆",
    cap4Title: "聲音庫多軌混音",
    cap4Desc: "12+ 種程序化白噪音與自然原聲，獨立音量推桿隨心調配個人專屬聲景",
    dlTitle: "今晚就享受一場純淨深層好眠",
    dlDesc: "立即下載 Snoozy for Android。100% 本地運算、極致省電、純淨助眠。",
    dlBtnApkSmall: "Android APK 直接下載",
    dlBtnApkLarge: "APK 下載 (v1.0.6)",
    privTag: "合規與透明承諾",
    privTitle: "隱私權政策 (Privacy Policy)",
    privSubtitle: "最後更新：2026 年 9 月 16 日 • 即刻生效",
    privHighTitle: "🔒 核心承諾：",
    privHighDesc: "Snoozy 秉持「隱私第一」設計原則。所有音訊合成、定時倒數與個人偏好設定均 100% 僅在您的手機本地運行。我們絕不追蹤、收集或傳輸任何個人身分資料 (PII)。",
    p1Head: "1. 資料收集與處理原則",
    p1Desc: "Snoozy 不需要使用者註冊、登入帳號、通訊錄權限、位置資訊或麥克風權限。具體說明如下：",
    p1L1Title: "零個人個資：",
    p1L1Desc: "我們不收集姓名、電子郵件、電話號碼或硬體唯一識別碼。",
    p1L2Title: "本機音訊運算：",
    p1L2Desc: "所有白噪音與自然音效均由手機本地 CPU/DSP 即時演算，絕不向遠端伺服器傳輸任何音訊資料。",
    p1L3Title: "本地設定儲存：",
    p1L3Desc: "混音喜好、音量、定時器與語系設定均僅儲存在手機本地安全加密的 SharedPreferences 中。",
    p2Head: "2. Android 系統權限使用說明",
    p2Desc: "Snoozy 僅申請維持背景助眠播放所需的最少必要權限：",
    p2L1: "在螢幕關閉或切換至其他應用時，確保音訊持續播放與定時器正常倒數。",
    p2L2: "確保音訊串流緩衝穩定，並保障最後 30 秒的指數平滑淡出不被系統休眠中斷。",
    p2L3: "僅用於 Google AdMob SDK 載入橫幅廣告。",
    p2L4: "於系統通知列顯示播放狀態與定時器剩餘倒數。",
    p3Head: "3. 廣告與防干擾原則",
    p3Desc: "Snoozy 透過 Google AdMob 提供免費使用。為維護寧靜的助眠品質，廣告實施嚴格規範：",
    p3L1: "所有橫幅廣告均強制靜音，絕不發出突發聲音。",
    p3L2: "廣告位置遠離主要操作區域，避免睡眠前誤觸。",
    p3L3: "升級 PRO 專業版使用者享有無廣告純淨體驗。",
    p4Head: "4. Solana 版本生態說明",
    p4Desc: "Snoozy Solana 版本透過 Solana dApp Store 發行。本應用不連接加密貨幣錢包、不索取私鑰、不進行任何區塊鏈金流交易，為專為 Solana Seeker 裝置優化的獨立助眠應用。",
    p5Head: "5. 兒童隱私保護 (COPPA 合規)",
    p5Desc: "Snoozy 不針對 13 歲以下兒童收集任何資料，全年齡層皆可安心使用。",
    p6Head: "6. 聯絡與支援管道",
    p6Desc: "若您對本隱私政策有任何疑問，歡迎隨時透過電子郵件 aiohlala69@gmail.com 或前往 GitHub 官方專案與開發者聯繫。",
    footerDesc: "專為深層睡眠、冥想與高效專注打造的程序化聲學環境。"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('goodsound_lang', lang);
  
  const dict = translations[lang] || translations.en;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = (lang === 'en') ? '繁中' : 'English';
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem('goodsound_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('goodsound_theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.textContent = (theme === 'dark') ? '☀️' : '🌙';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Init Theme
  initTheme();
  
  // Init Language
  const savedLang = localStorage.getItem('goodsound_lang') || 'en';
  setLanguage(savedLang);

  // Bind Buttons
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = (currentLang === 'en') ? 'zh' : 'en';
      setLanguage(nextLang);
    });
  }

  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
});
