const { site, programs } = window.SITE_DATA;

const routes = {
  home: "index.html", space: "space.html", programs: "programs.html",
  archive: "archive.html", about: "about.html"
};

const page = document.body.dataset.page;
const navItems = [["home", "홈"], ["about", "소개"], ["space", "공간"], ["programs", "프로그램"], ["archive", "아카이브"]];

document.body.insertAdjacentHTML("afterbegin", `
  <a class="skip-link" href="#main">본문으로 바로가기</a>
  <header class="site-header">
    <div class="container header-inner">
      <button class="menu-button" type="button" aria-label="메뉴 열기" aria-expanded="false" aria-controls="site-nav">☰</button>
      <nav class="nav-wrap" id="site-nav" aria-label="주 메뉴">
        <ul class="nav-list">${navItems.map(([key, label]) => `<li><a href="${routes[key]}" ${page === key || (page === "program-detail" && key === "programs") || (page === "archive-detail" && key === "archive") ? 'aria-current="page"' : ""}>${label}</a></li>`).join("")}</ul>
        <a class="button header-cta" href="space.html#rental">대관 예약</a>
      </nav>
    </div>
  </header>`);

document.body.insertAdjacentHTML("beforeend", `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div><p class="eyebrow">A PLACE FOR THOUGHT</p><h2>${site.name}</h2></div>
      <div class="footer-info">
        <div class="footer-info-group"><p><strong>연락처</strong></p><p>전화번호<br>${site.contact}</p><p>이메일<br>이메일 준비 중</p></div>
        <div class="footer-info-group"><p><strong>위치</strong></p><p>주소<br>${site.address}</p><a class="button button--outline footer-map-button" href="https://naver.me/xJcjYfT4" target="_blank" rel="noopener noreferrer">네이버 지도에서 보기</a></div>
        <div class="footer-info-group"><p><strong>예약 안내</strong><br>예약제로 운영됩니다.</p></div>
      </div>
    </div>
    <div class="container copyright footer-bottom"><span class="footer-policy-link" aria-disabled="true">개인정보처리방침</span><span>© 2026 SPACE SAANGOOK</span></div>
  </footer>`);

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav-wrap");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  menuButton.textContent = open ? "×" : "☰";
  document.body.classList.toggle("menu-open", open);
});

const imagePlaceholderLabel = "추후 실제 사진으로 교체할 placeholder 이미지";
function media(path, className = "", alt = "", style = "") {
  const styleAttribute = style ? ` style="${style}"` : "";
  if (!path) return `<div class="placeholder ${className}"${styleAttribute} role="img" aria-label="${imagePlaceholderLabel}"></div>`;
  return `<div class="${className}"${styleAttribute}><img data-managed-image src="${path}" alt="${alt}"></div>`;
}
function spaceGallery(paths = []) {
  return Array.from({ length: 3 }, (_, index) => media(paths[index], "gallery-image", `공간 사진 ${index + 1}`)).join("");
}
function card(item, archive = false) {
  const href = archive ? `archive-detail.html?id=${item.id}` : `program.html?id=${item.id}`;
  return `<article class="card" data-category="${item.category}">
    <a href="${href}">${media(item.images?.main, "card-image", `${item.title} 대표 이미지`, `--card-color:${item.color};--image-fit:${item.images?.fit || "cover"}`)}<div class="card-meta"><span>${item.category}</span><span class="status">${item.status}</span></div><h3>${item.title}</h3></a>
    <p class="card-desc">${item.summary}</p><p class="card-info">${item.schedule}<br>${item.host}</p>
  </article>`;
}
function bookingButtons() {
  return `<div class="button-row"><span class="button" aria-disabled="true" title="실제 네이버 예약 URL 준비 중">2시간 대관 예약하기</span><span class="button button--outline" aria-disabled="true" title="문의 방법 준비 중">3시간 이상 대관 문의</span></div><p class="notice">※ 실제 예약 URL과 문의 방법이 준비되면 연결됩니다.</p>`;
}
function pageHero(eyebrow, title, lead, className = "") { return `<section class="page-hero${className ? ` ${className}` : ""}"><div class="container"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="lead">${lead}</p></div></section>`; }

const main = document.querySelector("#main");
const active = programs.filter(p => p.status !== "종료");
const ended = programs.filter(p => p.status === "종료");

const renderers = {
  home() {
    main.innerHTML = `<section class="hero"><div class="container hero-grid"><div class="hero-copy"><div class="hero-content"><h1><span class="hero-title-line">생각이 머물고,</span><span class="hero-title-line accent">대화가 시작되는 곳</span><span class="hero-title-line hero-name">스페이스 산국</span></h1><div class="button-row"><a class="button" href="programs.html">프로그램 보기</a><a class="button button--outline" href="space.html">공간 둘러보기</a></div></div></div>${media(site.images.home.hero, "hero-art", site.images.home.heroAlt)}</div></section>
    <section class="section section--paper"><div class="container intro-grid"><div><p class="eyebrow">ABOUT THE SPACE</p><h2>다양한 모임을 위한<br>편안한 공간</h2></div><div class="intro-copy"><p class="lead">비즈니스 미팅, 친목 모임, 강의, 북 클럽, 세미나 등 다양한 만남을 위해 열려 있으며, 스페이스 산국이 주관하는 프로그램들도 있습니다.</p><a class="text-link" href="about.html">공간의 이야기</a></div></div></section>
    <section class="section"><div class="container"><div class="section-head"><div><p class="eyebrow">CURRENT PROGRAMS</p><h2>현재 프로그램</h2></div><a class="text-link" href="programs.html">전체 프로그램</a></div><div class="card-grid">${active.map(p => card(p)).join("")}</div></div></section>
    <section class="section section--paper"><div class="container rental-panel"><p class="eyebrow">SPACE RENTAL</p><h2>모임과 배움에 필요한<br>차분한 공간</h2><p class="lead">2시간 기본 대관과 3시간 이상 장시간 대관을 구분해 안내합니다. 가격과 운영 정보는 준비 중입니다.</p>${bookingButtons()}</div></section>
    <section class="section"><div class="container"><div class="section-head"><div><p class="eyebrow">PAST PROGRAMS</p><h2>지나간 시간의 기록</h2></div><a class="text-link" href="archive.html">아카이브 보기</a></div><div class="card-grid">${ended.slice(0,3).map(p => card(p, true)).join("")}</div></div></section>
    <section class="section section--paper"><div class="container contact-grid"><div><p class="eyebrow">VISIT</p><h2>찾아오는 길</h2></div><ul class="info-list"><li><strong>주소</strong><span>${site.address}</span></li><li><strong>연락처</strong><span>${site.contact}</span></li><li><strong>이용 시간</strong><span>${site.hours}</span></li></ul></div></section>`;
  },
  space() {
    main.innerHTML = `${pageHero("SPACE", "공간", "배움과 대화를 위해 잠시 머물 수 있는 공간입니다. 실제 소개와 사진은 추후 교체됩니다.")}<section class="section"><div class="container gallery">${spaceGallery(site.images.space.gallery)}</div></section><section class="section section--paper"><div class="container detail-grid"><div><p class="eyebrow">SPACE INFORMATION</p><h2>공간 이용 안내</h2><p class="lead">현재 항목과 배치를 확인하기 위한 placeholder 정보입니다.</p></div><ul class="info-list"><li><strong>수용 인원</strong><span>인원 정보 준비 중</span></li><li><strong>시설·비품</strong><span>테이블, 의자 등 세부 정보 준비 중</span></li><li><strong>이용 시간</strong><span>${site.hours}</span></li><li><strong>대관 요금</strong><span>가격 정보 준비 중</span></li><li><strong>위치</strong><span>${site.address}</span></li></ul></div></section><section class="section" id="rental"><div class="container rental-grid"><div class="rental-panel"><p class="eyebrow">2 HOURS</p><h2>2시간 기본 대관</h2><p class="lead">향후 네이버 예약과 Npay 결제로 연결합니다. 현재는 실제 URL이 없어 버튼이 비활성 상태입니다.</p>${bookingButtons()}</div><div><p class="eyebrow">LONG SESSION</p><h2>3시간 이상 대관</h2><p class="lead">희망 일정과 이용 목적을 확인한 뒤 운영자가 가능 시간을 협의하는 방식입니다.</p><ul class="info-list"><li><strong>01</strong><span>희망 일정과 이용 목적 문의</span></li><li><strong>02</strong><span>운영자 일정 확인 및 시간 협의</span></li><li><strong>03</strong><span>승인 후 개별 결제 안내</span></li></ul></div></div></section><section class="section section--paper"><div class="container"><div class="section-head"><div><p class="eyebrow">GUIDE</p><h2>이용 안내와 주의사항</h2></div></div><div class="prose"><p>구체적인 이용 규칙, 취소·환불 기준, 정리 방법은 실제 운영 정책이 확정된 뒤 제공됩니다.</p><p class="notice">현재 문구는 placeholder이며 실제 예약 전 운영자의 최종 안내가 필요합니다.</p></div></div></section>`;
  },
  programs() {
    main.innerHTML = `${pageHero("PROGRAMS", "프로그램", "현재 모집하거나 진행 중인 강의, 북클럽, 세미나·모임을 소개합니다.")}<section class="section"><div class="container"><div class="filters" aria-label="프로그램 카테고리 필터"><button class="filter active" data-filter="전체">전체</button>${[...new Set(active.map(p => p.category))].map(c => `<button class="filter" data-filter="${c}">${c}</button>`).join("")}</div><div class="card-grid" id="program-grid">${active.map(p => card(p)).join("")}</div></div></section>`;
    document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach(b => b.classList.remove("active")); button.classList.add("active");
      document.querySelectorAll("#program-grid .card").forEach(item => item.hidden = button.dataset.filter !== "전체" && item.dataset.category !== button.dataset.filter);
    }));
  },
  archive() {
    main.innerHTML = `${pageHero("ARCHIVE · PAST PROGRAMS", "지난 프로그램", "끝난 프로그램의 시간과 대화를 기록합니다. 현재는 sample archive입니다.")}<section class="section"><div class="container"><div class="card-grid">${ended.map(p => card(p, true)).join("")}</div></div></section>`;
  },
  about() {
    main.innerHTML = `${pageHero("ABOUT", "공간의 이야기", "사람과 생각이 만나 오래 이어지는 인문·문화 공간을 지향합니다.")}<section class="section section--paper"><div class="container intro-grid"><div><p class="eyebrow">WHY WE ARE HERE</p><h2>서두르지 않는 대화가 필요한 이유</h2></div><div class="prose"><p class="lead">책을 읽고 질문을 나누며 서로 다른 관점을 환대하는 장소를 만들고자 합니다.</p><p>공간의 취지와 운영 방향, 운영 주체에 관한 최종 원고는 아직 준비되지 않았습니다. 현재 내용은 사이트의 분위기와 정보 배치를 확인하기 위한 placeholder입니다.</p></div></div></section><section class="section"><div class="container values"><article class="value"><span>01</span><h3>천천히 읽기</h3><p>빠른 결론보다 충분히 읽고 생각하는 시간을 존중합니다.</p></article><article class="value"><span>02</span><h3>서로의 질문</h3><p>정답을 찾기보다 각자의 질문이 이어지는 대화를 지향합니다.</p></article><article class="value"><span>03</span><h3>쌓이는 기록</h3><p>한 번의 행사를 넘어 활동의 과정과 이야기를 차곡차곡 남깁니다.</p></article></div></section><section class="section section--paper"><div class="container contact-grid"><div><p class="eyebrow">CONTACT</p><h2>연락하기</h2></div><ul class="info-list"><li><strong>운영 주체</strong><span>소개 준비 중</span></li><li><strong>연락처</strong><span>${site.contact}</span></li><li><strong>주소</strong><span>${site.address}</span></li></ul></div></section>`;
  },
  detail(archive = false) {
    const id = new URLSearchParams(location.search).get("id");
    const item = programs.find(p => p.id === id);
    if (!item || (archive && item.status !== "종료")) {
      main.innerHTML = `${pageHero("PROGRAM", "해당 프로그램을 찾을 수 없습니다.", "주소가 올바른지 확인하거나 목록에서 프로그램을 다시 선택해 주세요.", "page-hero--notice")}<section class="section"><div class="container"><div class="button-row"><a class="button" href="programs.html">프로그램 목록</a><a class="button button--outline" href="archive.html">아카이브</a></div></div></section>`;
      return;
    }
    if (!archive && item.status === "종료") {
      location.replace(`archive-detail.html?id=${encodeURIComponent(item.id)}`);
      return;
    }
    document.title = `${item.title} | ${site.name}`;
    main.innerHTML = `${pageHero(`${archive ? "ARCHIVE" : "PROGRAM"} · ${item.category}`, item.title, item.summary)}<section class="section"><div class="container detail-grid">${media(item.images?.main, "detail-image", `${item.title} 대표 이미지`, `--image-fit:${item.images?.fit || "cover"}`)}<div class="detail-copy"><div class="card-meta"><span>${item.category}</span><span class="status">${item.status}</span></div><ul class="info-list"><li><strong>일정</strong><span>${item.schedule}</span></li><li><strong>장소</strong><span>${site.name}</span></li><li><strong>진행자</strong><span>${item.host}</span></li><li><strong>참가비</strong><span>${item.fee}</span></li></ul>${archive ? `<a class="button button--outline" href="archive.html">지난 프로그램 목록</a>` : item.status === "모집중" ? `<span class="button" aria-disabled="true">신청 준비 중</span><p class="notice">실제 신청 시스템은 1단계 범위에 포함되지 않습니다.</p>` : ""}</div></div></section><section class="section section--paper"><div class="container prose"><p class="eyebrow">DETAIL</p><h2>${archive ? "프로그램 기록" : "프로그램 소개"}</h2>${item.description.map(p => `<p>${p}</p>`).join("")}</div></section>`;
  }
};

if (page === "program-detail") renderers.detail(false);
else if (page === "archive-detail") renderers.detail(true);
else (renderers[page] || renderers.home)();

document.querySelectorAll("img[data-managed-image]").forEach(image => {
  const showPlaceholder = () => {
    const frame = image.parentElement;
    frame.classList.add("placeholder");
    frame.setAttribute("role", "img");
    frame.setAttribute("aria-label", imagePlaceholderLabel);
    image.remove();
  };
  image.addEventListener("error", showPlaceholder, { once: true });
  if (image.complete && image.naturalWidth === 0) showPlaceholder();
});

function restartHeroNameAnimation() {
  const heroName = document.querySelector(".hero-name");
  if (!heroName) return;
  heroName.classList.remove("is-entering");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => heroName.classList.add("is-entering"));
  });
}

restartHeroNameAnimation();
window.addEventListener("pageshow", event => {
  if (event.persisted) restartHeroNameAnimation();
});
