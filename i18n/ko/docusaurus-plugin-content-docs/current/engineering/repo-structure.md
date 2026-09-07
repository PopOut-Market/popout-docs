---
sidebar_position: 2
title: 저장소 구조
description: 디렉터리 구성, 계층 간 의존성 흐름, 그리고 기능 모듈 계약.
---

# 저장소 구조

## 구성

```
app/                    Expo Router 라우트 (얇은 re-export만)
src/
  shell/                커스텀 헤더, 커스텀 탭바
  ui/                   디자인 시스템 프리미티브 (iOS/Android 분기가 여기에)
  shared/               기능 간 공용 헬퍼, 훅, 스토어, 쿼리, 테마
  features/<name>/      기능 모듈 (screens/components/hooks/queries)
  lib/                  서드파티 래퍼 (Supabase, Sentry, PostHog)
  i18n/                 번역 파일
  types/                타입이 없는 패키지용 앰비언트 타입 선언
supabase/
  migrations/           전진 전용 SQL 마이그레이션
  functions/            Deno 엣지 함수
  corrections/          일회성 데이터 수정, 환경별로 한 번만 실행 (재실행 없음)
docs/                   프로젝트 규칙과 결정
scripts/                로컬 스크립트
```

`app/`은 앱의 화면 이동 구조를 그대로 반영합니다. 라우트 파일은 **얇은 re-export**로,
기능 모듈에서 화면을 가져와 렌더링할 뿐 자체 로직을 갖지 않습니다.

## 의존성 흐름

```
shared  →  ui  →  features  →  app
```

`supabase/`는 모바일 코드와 완전히 독립적입니다.

| 계층 | import 가능한 곳 |
| --- | --- |
| `shared/` | `src/` 안의 다른 어떤 것도 안 됨 |
| `ui/` | `shared/`만 |
| `features/` | `shared/`, `ui/`, 그리고 아래 티어 규칙에 따른 다른 기능 |
| `app/` | `src/` 안의 어디든 |

**순환 금지.** 기능 간 의존성 순환은 금지이며, 이 규칙은 리뷰가 아니라 커밋 전
`madge --circular src/`로 기계적으로 강제됩니다.

## 기능 티어

모든 기능이 동등하지는 않습니다. 두 개의 티어가 있습니다.

**플랫폼 기능** — 다른 기능이 동작하기 위해 필요한 기반 기능으로 `auth`와
`notifications`입니다. 어떤 기능이든 import할 수 있습니다.

**리프 기능** — 그 외 전부입니다. 리프 기능은 자기 `screens/` 디렉터리 밖에서 다른
리프 기능을 import할 수 **없습니다**.

어떤 리프 기능의 헬퍼가 다른 리프 기능에서도 필요해졌다면, 그것은 옆으로 손을 뻗을
신호가 아니라 **`shared/`로 승격할** 신호입니다.

## 공개 API 규칙

모든 기능은 기능 간에 노출할 표면을 `src/features/<name>/index.ts`를 통해
내보냅니다. 훅, 컨텍스트, 시트, 타입, 쿼리 키 상수가 여기에 해당합니다.

기능 간 import는 그 인덱스를 거칩니다.

```ts
// 올바름
import { useAuthState } from '@/features/auth';

// 잘못됨 — 공개 API를 건너뛰고 내부로 들어감
import { useAuthState } from '@/features/auth/queries/useAuthState';
```

### 의도된 두 가지 예외

**1. 화면은 re-export하지 않습니다.** `app/`의 라우트 파일이 직접 경로로 가져옵니다
(`@/features/<name>/screens/<Screen>`). 화면을 인덱스에서 빼 두면 인덱스가 가벼워지고,
네이티브 모듈이 Jest 평가 체인으로 끌려 들어오는 것을 막습니다.

**2. `src/features/<X>/screens/` 안의 파일은 다른 기능의 내부 경로를 import할 수
있습니다.** 화면은 조합을 담당하는 계층이므로, 다른 기능에서 더 풍부한 표면을 가져오게
허용하는 편이 그 기능에게 모든 내부를 공개 인덱스로 내보내라고 강요하는 것보다 낫습니다.

## 무엇을 어디에 둘 것인가

| 만들고 있는 것 | 들어갈 곳 |
| --- | --- |
| 버튼, 카드, 시트 등 재사용 가능한 시각 프리미티브 | `src/ui/` |
| 앱 헤더나 탭바 | `src/shell/` |
| 둘 이상의 기능이 쓰는 헬퍼·훅·스토어 | `src/shared/` |
| 정확히 하나의 기능에만 속하는 것 | `src/features/<name>/` |
| 서드파티 SDK 래퍼 | `src/lib/` |
| 라우트 | `app/` — 얇은 re-export로 |

## 백엔드 구성

`supabase/migrations/`는 **전진 전용**입니다. 되돌리는 마이그레이션은 없고, 이미 적용된
마이그레이션은 절대 수정하지 않습니다. 실수는 그 위에 새 마이그레이션을 얹어
바로잡습니다.

`supabase/corrections/`에는 환경마다 한 번씩만 실행하고 다시는 실행하지 않는 일회성
데이터 수정이 들어갑니다. 마이그레이션과 분리해 둔 이유가 바로 아무것도 이것들을
재실행하지 않게 하기 위해서입니다.

`supabase/functions/`에는 Deno 엣지 함수가 하나씩 디렉터리로 들어가고, 공용 코드는
`_shared/` 아래에 있습니다. 크게 네 갈래로 나뉩니다.

| 갈래 | 예 |
| --- | --- |
| 인증과 계정 | `send-otp`, `send-sms-hook`, `complete-signup`, `delete-account` |
| AI | `analyze-photos`, `group-photos`, `classify-post-category`, `classify-community-post` |
| 번역 | `translate-post`, `translate-chat-message`, `translate-community` |
| 검색·위치·신고 | `search-posts`, `meili-sync`, `places-search`, `reverify-location`, `report-community-content`, `community-photo-sweeper` |

시크릿을 들고 있어야 하거나, 클라이언트에 맡길 수 없는 신뢰 판단을 내려야 하는 것은
앱이 아니라 여기에 속합니다.
