window.SITE_DATA = {
  site: {
    name: "스페이스 산국",
    description: "읽고, 이야기하고, 사유하는 시간이 머무는 인문·문화 공간입니다.",
    address: "주소 준비 중",
    contact: "02) 577-5562",
    hours: "이용 시간 준비 중",
    naverBookingUrl: null,
    images: {
      home: {
        hero: "assets/images/home/hero-bench.jpg",
        heroAlt: "푸른 나무 아래 놓인 빈 벤치"
      },
      space: {
        gallery: [null, null, null]
      }
    }
  },
  programs: [
    {
      id: "reading-philosophy",
      title: "서양철학사 읽기",
      category: "강의",
      status: "진행중",
      summary: "러셀의 서양철학사를 읽는 5회 과정입니다.",
      schedule: "2026. 6. 2 — 10. 13 · 5회",
      host: "석기용",
      fee: "무료",
      color: "#d8c5b4",
      images: { main: "assets/images/programs/western-philosophy-history/main.webp", gallery: [], fit: "contain" },
      description: ["러셀의 서양철학사를 읽는 5회 과정입니다.", "이 프로그램은 서초구 서리풀 커뮤니티 활성화 사업 지원으로 진행합니다."]
    },
    {
      id: "expanding-thought-world",
      title: "생각을 넓히면 넓어지는 세계",
      category: "강의",
      status: "모집중",
      summary: "",
      schedule: "2026. 8. 10 — 10. 27",
      host: "김석수, 박영신",
      cardSummary: "사유의 확장을 통해 나의 세계를 넓혀보는 시간",
      cardSchedule: "2026. 8. 10 — 10. 27 · 4회",
      cardInfo: "주관: 함께 배우는 우리",
      fee: "무료",
      color: "#c8d1bc",
      images: { main: "assets/images/programs/expanding-thought-world/main.webp", gallery: [] },
      application: {
        type: "sessions",
        sessions: [
          { id: "session-1", number: "1강", title: "사유 넓히기를 통해 아픈 마음 치유하기", schedule: "2026년 8월 10일 월요일 PM 7시", host: "김석수 경북대 명예교수", description: "사유의 폭이 좁으면 세상의 다양한 삶의 결을 만나지 못한다. 이는 사유와 세상 사이의 부조화를 낳고 우리에게 고통을 안겨준다. 이를 넘어서려면 다양한 삶의 결을 통해 사유를 확장하고 심화할 필요가 있다. 이 강의에서는 철학 이론을 바탕으로 한 철학상담과 철학적 사유 하기를 통해 우리의 아픔을 치유하는 길을 논의해 보고자 한다." },
          { id: "session-2", number: "2강", title: "사유하기와 악의 극복", schedule: "2026년 9월 15일 화요일 PM 7시", host: "김석수 경북대 명예교수", description: "많은 악은 무사유(thoughtlessness)에서 비롯된다. 무사유는 세상을 자기 생각대로 처리하거나 자기 생각을 포기하고 세상 흐름에 자신을 내맡김에서 발생한다. 이런 무사유는 삶에 비극을 낳기 마련이다. 이를 극복하려면 사유와 세상을 잇는 ‘판단’ 활동에 대해 깊이 고찰해 보아야 한다. 이 강의는 ‘판단’이 사유 활동에 왜 중요하며, 이것이 사유 확장과 세상과의 소통에 어떤 기여를 하는지를 살펴보고자 한다." },
          { id: "session-3", number: "3강", title: "내 안의 자동화된 사고-편견과 차별", schedule: "2026년 9월 29일 화요일 PM 7시", host: "박영신 동국대 교수", description: "고정관념, 편견과 차별 등 내 안에 내재화 되어 있는 자동화 사고는 어떤 것이 있는지 간단한 검사를 통해 확인해 본다. 이 자동화 사고가 초래하는 과정을 점검하고 이를 저지하기 위해 우리가 할 수 있는 방법에 대해 알아본다." },
          { id: "session-4", number: "4강", title: "자동화 사고에서 명상으로 탈출하기", schedule: "2026년 10월 27일 화요일 PM 7시", host: "박영신 동국대 교수", description: "이미 내재화 되어 있는 심리적 자동화 사고 극복은 알아차림에서 시작된다. 이 알아차림의 작동 원리를 명상을 통해 알아본다." }
        ]
      },
      description: ["우리 자신의 생각을 다시 돌아보며 사유의 확장을 통해 나의 세계를 넓혀보는 시간을 마련합니다.", "이 프로그램은 서초구 서리풀 커뮤니티 활성화 사업 지원으로 진행합니다.", "주관: 함께 배우는 우리"]
    },
    {
      id: "night-bookclub",
      title: "다양한 시선 그리고 책",
      category: "북클럽",
      status: "진행중",
      summary: "일과를 마친 저녁, 마음에 남는 문장을 나누며 이야기 합니다.",
      schedule: "2024. 12. 22 — · 매월 1회",
      host: "산국지기",
      fee: "참가비 준비 중",
      color: "#b9c9bd",
      images: { main: null, gallery: [] },
      description: ["각자 읽어 온 책에서 마음에 남은 한 문장을 골라 함께 이야기합니다.", "책을 완독하지 않아도 참여할 수 있다는 설정의 sample 프로그램이며 실제 모집 정보가 아닙니다."]
    },
    {
      id: "classic-reading",
      title: "고전을 읽는 저녁",
      category: "북클럽",
      status: "종료",
      summary: "고전의 문장을 오늘의 언어로 다시 읽어 본 지난 북클럽입니다.",
      schedule: "2026. 4. 3 — 5. 8",
      host: "진행자 이름 (sample)",
      fee: "종료된 프로그램",
      color: "#c7b9a9",
      images: { main: null, gallery: [] },
      description: ["여섯 번의 저녁 동안 한 권의 고전을 나누어 읽었다는 설정의 기록입니다.", "실제 후기와 사진이 준비되면 이 자리에 프로그램의 과정과 참여자 기록을 담습니다. 현재는 sample archive입니다."]
    },
    {
      id: "art-dialogue",
      title: "그림 앞의 대화",
      category: "세미나·모임",
      status: "종료",
      summary: "한 작품을 오래 바라보며 서로 다른 감상을 나눈 지난 모임입니다.",
      schedule: "2026. 3. 14",
      host: "진행자 이름 (sample)",
      fee: "종료된 프로그램",
      color: "#d9c2ba",
      images: { main: null, gallery: [] },
      description: ["작품에 대한 지식보다 자신의 관찰과 질문에서 출발한 대화 모임입니다.", "실제 운영 기록이 없는 sample data로, 이후 대표 사진과 모임 기록으로 교체합니다."]
    },
    {
      id: "writing-workshop",
      title: "나를 기록하는 문장",
      category: "강의",
      status: "종료",
      summary: "일상의 장면을 짧은 글로 남기는 방법을 익힌 지난 워크숍입니다.",
      schedule: "2026. 1. 17 — 2. 7",
      host: "진행자 이름 (sample)",
      fee: "종료된 프로그램",
      color: "#c6d0c4",
      images: { main: null, gallery: [] },
      description: ["평범한 하루에서 글감을 발견하고 한 편의 짧은 글을 완성했다는 설정입니다.", "현재는 아카이브 상세 화면 확인을 위한 sample data입니다."]
    }
  ]
};
