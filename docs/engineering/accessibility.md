---
sidebar_position: 10
title: 접근성
description: 스크린 리더 라벨, 역할과 상태, 의미 단위 묶기, 폰트 확대, 대비 기준.
---

# 접근성

## 먼저: 네이티브 컨트롤에는 손대지 마세요

`@expo/ui/swift-ui`와 `@expo/ui/jetpack-compose`에서 오는 컨트롤(`Button`,
`Toggle`, `TextField` 등)은 **OS가 역할·상태·라벨을 네이티브 prop(`label`, `value`,
`disabled`)에서 직접 만들어 냅니다.** Host 브리지가 네이티브 접근성 트리를 그대로
VoiceOver와 TalkBack에 넘깁니다.

**여기에 RN 접근성 prop을 덧붙이지 마세요.** 중복이며, 오히려 읽는 내용을 어지럽힙니다.

아래 규칙은 **`Pressable` 기반의 커스텀 인터랙티브 표면**과 커스텀 복합 뷰에만
적용됩니다.

## 1. 라벨

| 대상 | 규칙 |
| --- | --- |
| **아이콘만 있는 `Pressable`** | `accessibilityLabel`이 **반드시** 필요합니다 (예: "시트 닫기"). 없으면 스크린 리더가 아무 의미도 읽지 못합니다 |
| **글자가 있는 `Pressable`** | 보이는 글자가 이미 동작을 설명한다면 `accessibilityLabel`을 **넣지 마세요**. 스크린 리더가 그 글자를 읽습니다. 중복 라벨은 소음입니다 |

## 2. 역할과 상태

`accessibilityRole`보다 **`role`을 쓰세요.** RN 문서 기준으로 둘 다 설정되면 `role`이
우선합니다. `accessibilityRole`은 ARIA `role` 목록에 없는 RN 전용 값이 필요할 때만
씁니다.

쓸 수 있는 `role` 값입니다.

```
adjustable · alert · button · checkbox · combobox · grid · header · image
imagebutton · keyboardkey · link · menu · menubar · menuitem · none
progressbar · radio · radiogroup · scrollbar · search · spinbutton · summary
switch · tab · tablist · text · timer · togglebutton · toolbar
```

`accessibilityState`에 들어가는 키는 다섯 개입니다.

| 키 | 타입 |
| --- | --- |
| `disabled` | `boolean` |
| `selected` | `boolean` |
| `checked` | `boolean` 또는 `'mixed'` |
| `busy` | `boolean` |
| `expanded` | `boolean` |

:::warning[비활성 상태는 시각적으로도 비활성이어야 합니다]

`accessibilityState={{ disabled: true }}`만 걸고 흐리게 처리하지 않으면, 눈으로 보는
사용자를 속이게 됩니다. 상태와 겉모습은 함께 갑니다.

:::

## 3. 의미 단위로 묶기

여러 시각 요소가 하나의 논리적 단위를 이룰 때 — 별 아이콘 + 평점 숫자, 아바타 + 이름,
아이콘 + 가격 — `View`로 감싸고 `accessible={true}`와 통합 `accessibilityLabel`을
주세요. 스크린 리더가 그 단위를 한 번에 읽습니다.

그렇게 하지 않으면 조각마다 따로 읽혀서, 듣는 쪽에서는 무엇이 무엇에 붙은 값인지 알 수
없습니다.

## 4. 장식 요소 숨기기 — 양쪽 다 걸어야 합니다

장식용 이미지나 모달 배경을 스크린 리더에서 숨기려면 **두 prop을 모두** 설정해야
합니다. 각각 한 플랫폼에서만 동작하기 때문입니다.

| prop | 플랫폼 |
| --- | --- |
| `accessibilityElementsHidden={true}` | **iOS 전용** |
| `importantForAccessibility="no-hide-descendants"` | **Android 전용** |

하나만 걸면 반대편 플랫폼에서는 그대로 읽힙니다. Android 쪽 값은 `auto`, `yes`, `no`,
`no-hide-descendants` 네 가지입니다.

## 5. 폰트 확대

:::danger[`allowFontScaling={false}`를 쓰지 마세요]

시각 장애가 있는 사용자에게 앱을 못 쓰게 만듭니다. 유일한 예외는 시스템 탭바 아이콘으로,
라벨이 커지면 레이아웃이 무너집니다.

:::

대신 **상한을 두세요.** 카드·버튼·칩처럼 높이가 고정된 컨테이너 안의 텍스트와
`TextInput`에는 `maxFontSizeMultiplier={1.5}`를 겁니다. 상한이 없으면 OS 글자 크기를
최대로 둔 사용자에게 내용이 잘립니다.

기본값은 `allowFontScaling`이 `true`, `maxFontSizeMultiplier`가 `undefined`(부모나
전역값 상속)입니다.

## 6. 대비

| 대상 | 최소 대비 |
| --- | --- |
| 본문 텍스트 대 배경 | **4.5:1** (WCAG 2.1 AA) |
| 큰 텍스트 (18pt Regular 이상, 또는 14pt Bold 이상) | **3:1** |
| 인터랙티브 요소의 테두리·포커스 표시 | 인접 색 대비 **3:1** |

[컨벤션](./conventions.md#디자인-토큰)의 의미론적 토큰이 기준입니다. 새 토큰을 추가하기
전에 이 기준을 넘는지 확인하세요. 특히 `textMuted`, `textTertiary`처럼 불투명도가 낮은
토큰을 브랜드 색 배경 위에 올릴 때 조심해야 합니다.

## 여기에 없는 것

- **프리미티브별 접근성** — "`Button`이 이미 `role=button`을 설정하는가?" 같은 질문은
  각 프리미티브 옆에 문서화되어 있습니다.
- **터치 타깃 최소 크기** (iOS 44pt / Android 48dp)는
  [디자인 규칙](./design-rules.md#아이콘과-터치-타깃)에 있습니다.
