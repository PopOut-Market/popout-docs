---
slug: /
sidebar_position: 1
title: 소개
description: 멜버른 동네를 위한 중고 직거래 앱, PopOut Market 문서입니다.
---

# PopOut 문서

PopOut Market은 iOS와 Android용 **하이퍼로컬 C2C 중고 거래 마켓**입니다. 이웃이
더 이상 쓰지 않는 물건을 올리면, 다른 이웃이 가까운 순·최신 순으로 정렬된 피드에서
그 물건을 찾고, 채팅으로 가격과 만날 장소를 정한 뒤, 직접 만나 건네줍니다. 2026년
6월부터 멜버른에서 정식 서비스 중입니다.

이 사이트는 그 두 측면을 모두 다룹니다. **앱이 무엇을 하는지**, 그리고 **어떻게
만들어졌는지**입니다.

## 제품

앱의 동작을 사용자 입장에서 설명합니다. 어떤 기능이 내부적으로 어떻게 구현됐는지
보기 전에, 그 기능이 무엇을 하는지 알고 싶다면 여기서 시작하세요.

- **[개요](./product/overview.md)** — PopOut이 무엇이고, 누구를 위한 것이며, 앱이
  어떤 구조인지.
- **[마켓플레이스](./product/marketplace.md)** — 둘러보기 → 채팅 → 만남 → 판매 완료로
  이어지는 흐름, 그리고 검색·창고 세일·게시글 관리.
- **[커뮤니티와 리워드](./product/community-and-rewards.md)** — 동네 피드, 프로필
  레벨, 코인, 그리고 기프트카드 상품권.

## 엔지니어링

앱이 어떻게 만들어지고, 배포되고, 정상 동작을 유지하는지 설명합니다.

- **[아키텍처](./engineering/architecture.md)** — 기술 스택과 각 선택의 이유.
- **[저장소 구조](./engineering/repo-structure.md)** — 디렉터리 구성, 의존성 규칙,
  기능 모듈 계약.
- **[인증](./engineering/authentication.md)** — 휴대폰 번호 + SMS 인증번호, 세션,
  그리고 실제 보안 경계가 어디에 있는지.
- **[환경과 릴리스](./engineering/environments-and-releases.md)** — 스테이징과
  프로덕션, 빌드 프로필, 무선 업데이트(OTA).
- **[테스트와 CI](./engineering/testing-and-ci.md)** — 테스트 계층, 머지를 막는 것,
  커버리지 하한선.
- **[컨벤션](./engineering/conventions.md)** — 커밋, 번역, 디자인 토큰, 화면 유형.
- **[디자인 규칙](./engineering/design-rules.md)** — 8pt 그리드, 타이포 스케일, 터치
  타깃, 카드 레이아웃, 반응형.
- **[데이터베이스](./engineering/database.md)** — 도메인별 테이블, 위치 처리, 큐 테이블.
- **[플랫폼 분기](./engineering/platform.md)** — iOS와 Android를 어디까지, 어떻게
  가를 것인가.
- **[접근성](./engineering/accessibility.md)** — 스크린 리더 라벨, 역할과 상태, 폰트 확대,
  대비 기준.

## 사업

PopOut이 왜 존재하는지, 어떤 시장을 겨냥하는지.

- **[사업 배경](./business/background.md)** — 호주 중고거래 시장의 구조적 문제와
  그에 대한 해결 방안.

## 이 문서에 기여하기

[시작하기](./getting-started/installation.md)는 이 사이트를 로컬에서 실행하는 방법을,
[문서 작성](./getting-started/writing-docs.md)은 파일 구성·프런트매터·사이드바에
페이지가 올라가는 방식을 다룹니다.

모든 페이지는
[popout-docs 저장소](https://github.com/PopOut-Market/popout-docs)의 `docs/` 아래에
있는 마크다운 파일입니다. 파일을 수정하고 풀 리퀘스트를 열면, `main`에 머지될 때
사이트가 다시 배포됩니다.

:::note[무엇이 원본인가]

이 사이트의 제품·엔지니어링 페이지는 앱 저장소에 있는 명세를 요약한 것입니다.
정확한 임계값, 프로젝트 참조값, 시크릿 이름처럼 운영에 직접 쓰이는 세부 사항은 앱
저장소가 원본이며, 이 사이트에는 의도적으로 싣지 않습니다.

:::
