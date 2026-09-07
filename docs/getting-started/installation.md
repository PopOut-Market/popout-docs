---
sidebar_position: 1
title: 설치
---

# 문서 사이트 로컬에서 실행하기

## 사전 준비

- **Node.js 20 이상** (`node -v`). Docusaurus 3은 그 아래 버전에서 빌드되지 않습니다.
- **npm 10 이상** — Node 20 이상에 함께 들어 있습니다.

## 설치

저장소를 클론하고 의존성을 설치합니다.

```bash
git clone https://github.com/PopOut-Market/popout-docs.git
cd popout-docs
npm install
```

## 개발 서버 실행

```bash
npm start
```

[http://localhost:3000](http://localhost:3000)에서 사이트를 띄우고, 저장할 때마다 즉시
반영합니다. 대부분의 수정은 새로고침 없이 반영되지만, `docusaurus.config.ts`를 고치면
서버를 다시 시작해야 합니다.

## 프로덕션 빌드

```bash
npm run build
npm run serve
```

`npm run build`는 정적 파일을 `build/`에 쓰며, 모든 풀 리퀘스트에서 CI가 실행하는 것도
이 명령입니다. 내부 링크가 깨져 있으면 빌드가 실패하므로(`onBrokenLinks: 'throw'`),
빌드가 통과했다는 것은 문서 사이의 이동 경로가 온전하다는 뜻입니다. `npm run serve`는 그
빌드 결과를 로컬에서 미리 봅니다.

:::warning[빌드 캐시가 오래된 내용을 낼 수 있습니다]

이 저장소에서 `npm run build`가 방금 저장한 수정을 반영하지 않고 이전 결과를 그대로
내놓는 경우가 관찰되었습니다. 없던 링크 오류를 보고하거나, 새로 추가한 문단이 결과물에
빠지는 식입니다.

빌드 결과가 소스와 어긋나 보이면 캐시를 지우고 다시 빌드하세요.

```bash
npx docusaurus clear && npm run build
```

`npx docusaurus clear`는 `build/`, `.docusaurus/`, `node_modules/.cache/`를 지웁니다.

:::

## 타입 검사

```bash
npm run typecheck
```

`docusaurus.config.ts`, `sidebars.ts`, 그리고 `src/` 아래의 TypeScript를 검증합니다.

## 영어 번역 작업하기

**한국어가 기본 언어입니다.** Docusaurus는 기본 언어를 `i18n/`이 아니라 `docs/`에서
읽으므로, 한국어 원문이 `docs/`에 있고 영어 번역이
`i18n/en/docusaurus-plugin-content-docs/current/` 아래에 같은 구조로 들어 있습니다.
한국어는 사이트 루트에서, 영어는 `/en/` 아래에서 제공됩니다.

```bash
npm start                     # 개발 서버, 한국어(기본)
npm start -- --locale en      # 개발 서버, 영어
npm run build                 # 두 로케일 모두 빌드
```

내비게이션 바와 푸터 문구는 마크다운이 아닙니다. 한국어 문구는 기본 언어이므로
`docusaurus.config.ts`에 직접 적혀 있고, 영어 대응문은
`i18n/en/docusaurus-theme-classic/`에, 사이드바 분류 이름은
`i18n/en/docusaurus-plugin-content-docs/current.json`에 있습니다. 한국어 쪽에 항목을
추가한 뒤에는 다음 명령으로 번역 파일의 뼈대를 다시 만들 수 있습니다.

```bash
npm run write-translations -- --locale en
```

이 명령은 새 키만 추가하고 이미 번역된 문구는 덮어쓰지 않습니다.

:::caution[설정의 문구를 바꾸면 번역 키가 바뀝니다]

내비게이션·푸터 번역 키는 설정에 적힌 **한국어 문구에서 파생**됩니다
(`item.label.문서`처럼). 그래서 `docusaurus.config.ts`의 라벨을 고치면 기존 영어 번역이
고아가 됩니다. 라벨을 바꿨다면 `write-translations`를 다시 돌리고, `i18n/en/`에 남은
옛 키를 지우세요.

:::

:::note[상대 링크는 로케일 안에서 해결됩니다]

`./foo.md` 형태의 상대 링크는 **같은 로케일 트리 안에** 대상 파일이 있어야 해결됩니다.
한국어 페이지 하나를 새로 추가하고 영어 대응 파일을 만들지 않으면, 그 페이지를 가리키는
링크 때문에 영어 빌드가 실패합니다. 페이지는 두 언어에 함께 추가하세요.

:::
