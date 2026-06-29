# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # 개발 서버 시작 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 시작
npm run lint     # ESLint 검사
```

테스트 프레임워크는 설정되어 있지 않습니다.

## Architecture

단일 페이지 포트폴리오 사이트입니다. Next.js 16 + TypeScript + Tailwind CSS로 구성되어 있으며, 별도의 라우트 없이 `src/app/page.tsx` 한 파일이 모든 섹션을 순서대로 렌더링합니다.

**섹션 순서 (스크롤 기반 내비게이션):**
`Hero` → `About` → `Expertise` → `Projects` → `Timeline` → `Contact`, 그리고 `Footer`

각 섹션은 `src/components/` 아래 독립적인 파일로 분리되어 있으며, 섹션별 `id` 속성(`#hero`, `#about` 등)을 앵커 링크 타겟으로 사용합니다.

**`page.tsx`는 `'use client'`로 선언되어 있습니다.** 서버 컴포넌트 기능(데이터 페칭, DB 접근 등)이 필요하면 별도 컴포넌트를 만들고 `'use client'` 제거를 고려해야 합니다.

## Styling

- **Tailwind CSS**를 사용하며, `tailwind.config.ts`에 커스텀 색상(`navy-*`)과 커스텀 애니메이션(`fade-up`, `fade-in`, `delay-*`)이 정의되어 있습니다.
- 폰트는 Google Fonts의 **Inter**를 `globals.css`에서 import하여 전역 적용합니다.
- 다크 모드는 구현되어 있지 않습니다. 전체 색상 체계는 흰색/슬레이트/네이비/블루 계열입니다.

## Deployment

Vercel에 연결되어 있습니다 (`.vercel/project.json` 참고). `main` 브랜치에 push하면 자동 배포됩니다.
