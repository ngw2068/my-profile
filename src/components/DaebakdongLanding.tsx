'use client';

import { useRef, useState } from 'react';

// ─── 링크 설정 ───────────────────────────────────────────────────────────────
// 카카오톡 채널 생성 후 KAKAO_CHAT_URL 값만 교체하세요.
const KAKAO_CHAT_URL =
  'https://map.naver.com/p/entry/place/1167895700?lng=126.895627&lat=37.5784122';
const NAVER_MAP_URL =
  'https://map.naver.com/p/entry/place/1167895700?lng=126.895627&lat=37.5784122';

// ─── 메뉴 타입 ────────────────────────────────────────────────────────────────
interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
}

// ─── 대표 메뉴 ────────────────────────────────────────────────────────────────
const featuredMenus: MenuItem[] = [
  { name: '돈부리 대박동',   price: '11,000원', description: '든든한 한 끼 메뉴. 재료 소진이 빠를 수 있습니다.',                               image: '/images/돈부리대박동.jpg' },
  { name: '홍돈',            price: '12,000원', description: '직접 만든 라유를 사용하여 고소함과 부드러움을 더한 프리미엄 제육덮밥입니다.',       image: '/images/홍돈.jpg' },
  { name: '신오동',          price: '13,000원', description: '드시기 편하게 잘라 올린 오징어가 듬뿍, 숙성시킨 소스맛이 일품입니다.',             image: '/images/신오동.jpg' },
  { name: '연어회덮밥',      price: '14,000원', description: '숙성 연어 사시미를 밥과 함께 즐기는 메뉴',                                       image: '/images/연어회덮밥.jpg' },
  { name: '말고기 육사시미', price: '35,000원', description: '신선한 말고기를 얇게 썰어 즐기는 대표 사시미 메뉴입니다.',                        image: '/images/말고기육사시미.jpg' },
];

// ─── 전체 메뉴 (카테고리별) ───────────────────────────────────────────────────
// 항목 추가/삭제 시 카드가 자동 반영됩니다.
const menuCategories: { icon: string; label: string; items: MenuItem[] }[] = [
  {
    icon: '🍚',
    label: '식사',
    items: [
      { name: '돈부리 대박동',    price: '11,000원', description: '든든한 한 끼 메뉴. 재료 소진이 빠를 수 있습니다.',                         image: '/images/돈부리대박동.jpg' },
      { name: '홍돈',             price: '12,000원', description: '직접 만든 라유를 사용하여 고소함과 부드러움을 더한 프리미엄 제육덮밥입니다.', image: '/images/홍돈.jpg' },
      { name: '신오동',           price: '13,000원', description: '드시기 편하게 잘라 올린 오징어가 듬뿍, 숙성시킨 소스맛이 일품입니다.',      image: '/images/신오동.jpg' },
      { name: '연어회덮밥',       price: '14,000원', description: '숙성 연어 사시미를 밥과 함께 즐기는 메뉴',                                 image: '/images/연어회덮밥.jpg' },
      { name: '말고기육회비빔밥', price: '15,000원', description: '신선한 말고기 육회를 듬뿍 올린 비빔밥',                                    image: '/images/말고기육회비빔밥.jpg' },
    ],
  },
  {
    icon: '🍜',
    label: '면류',
    items: [
      { name: '새우튀김냉모밀', price: '10,000원', description: '새우튀김과 단호박튀김이 올라간 냉모밀', image: '/images/새우튀김냉모밀.jpg' },
      { name: '차슈 냉모밀',    price: '12,000원', description: '쫄깃한 차슈가 올라간 냉모밀',          image: '/images/차슈냉모밀.jpg' },
    ],
  },
  {
    icon: '🥩',
    label: '사시미·육회',
    items: [
      { name: '말고기 육사시미', price: '35,000원', description: '신선한 말고기를 얇게 썰어 즐기는 대표 사시미 메뉴입니다.', image: '/images/말고기육사시미.jpg' },
      { name: '연어사시미',      price: '28,000원', description: '직접 손질 후 숙성한 연어 사시미',                         image: '/images/연어사시미.jpg' },
    ],
  },
  {
    icon: '🍺',
    label: '안주',
    items: [
      { name: '말고기샐러드',  price: '32,000원', description: '신선한 말고기와 채소를 곁들인 샐러드',              image: '/images/말고기샐러드.jpg' },
      { name: '말고기타다끼',  price: '30,000원', description: '살짝 구워 풍미를 살린 말고기 타다끼',               image: '/images/말고기타다끼.jpg' },
      { name: '소고기타다끼',  price: '26,000원', description: '대박동 요리 메뉴',                                  image: '/images/소고기타다끼.jpg' },
      { name: '칠리새우',      price: '23,000원', description: '매콤달콤한 칠리소스의 새우 요리',                   image: '/images/칠리새우.jpg' },
      { name: '도리스',        price: '19,000원', description: '중화식 유린기를 대박동 스타일로 만든 시그니처 요리', image: '/images/도리스.jpg' },
      { name: '굴튀김',        price: '16,000원', description: '바삭하게 튀긴 굴튀김',                             image: '/images/굴튀김.jpg' },
      { name: '치킨가라아게',  price: '16,000원', description: '바삭하고 촉촉한 일본식 닭튀김',                    image: '/images/치킨가라아게.jpg' },
      { name: '고로케',        price: '8,000원',  description: '바삭한 수제 고로케',                               image: '/images/고로케.jpg' },
    ],
  },
];

// ─── 이미지 플레이스홀더 ──────────────────────────────────────────────────────
function ImgPlaceholder({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 gap-1">
      <span className={size === 'lg' ? 'text-4xl' : 'text-2xl'}>🍽</span>
      {size === 'lg' && <span className="text-xs text-gray-400">사진 준비 중</span>}
    </div>
  );
}

// ─── 대표 메뉴 카드 (이미지 상단, 크게) ──────────────────────────────────────
function FeaturedMenuCard({ name, price, description, image }: MenuItem) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      <div className="h-48 bg-gray-100 overflow-hidden">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={name} onError={() => setImgError(true)} className="w-full h-full object-cover" />
        ) : (
          <ImgPlaceholder size="lg" />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-black text-gray-900 text-lg leading-snug mb-1">{name}</h3>
        <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
        <p className="text-right font-extrabold text-base text-[#8B6914] mt-3">{price}</p>
      </div>
    </div>
  );
}

// ─── 일반 메뉴 카드 (이미지 우측 120px) ──────────────────────────────────────
function MenuCard({ name, price, description, image }: MenuItem) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex items-stretch">
      {/* 텍스트 */}
      <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
        <div>
          <h3 className="font-bold text-gray-900 text-[15px] leading-snug mb-1">{name}</h3>
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{description}</p>
        </div>
        <p className="text-right font-extrabold text-base text-[#8B6914] mt-2">{price}</p>
      </div>
      {/* 이미지 우측 120px */}
      <div className="w-[120px] shrink-0 bg-gray-100 overflow-hidden">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={name} onError={() => setImgError(true)} className="w-full h-full object-cover" />
        ) : (
          <ImgPlaceholder size="sm" />
        )}
      </div>
    </div>
  );
}

// ─── 아이콘 ──────────────────────────────────────────────────────────────────
function KakaoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      className="w-5 h-5 inline-block mr-1.5 shrink-0">
      <path d="M12 3C6.477 3 2 6.58 2 11c0 2.8 1.676 5.27 4.233 6.787L5.06 21l4.13-2.16C9.727 18.94 10.854 19 12 19c5.523 0 10-3.58 10-8s-4.477-8-10-8z" />
    </svg>
  );
}
function MapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5 inline-block mr-1.5 shrink-0">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function MenuListIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5 inline-block mr-1.5 shrink-0">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5 inline-block mr-1.5 shrink-0">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

// ─── 섹션 헤더 ────────────────────────────────────────────────────────────────
function SectionHeading({ children, badge }: { children: React.ReactNode; badge?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span className="w-1 h-6 bg-[#FEE500] rounded-full block shrink-0" />
      <h2 className="text-lg font-black text-gray-900">{children}</h2>
      {badge}
    </div>
  );
}

// ─── 메인 컴포넌트 ────────────────────────────────────────────────────────────
export default function DaebakdongLanding() {
  const menuRef = useRef<HTMLDivElement>(null);
  const reservationRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans antialiased">

      {/* ── Sticky Header ── */}
      <header className="bg-[#FEE500] sticky top-0 z-50 shadow-md">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-center">
          <h1 className="text-xl font-black text-black tracking-tight">🍽 대박동</h1>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="bg-[#FEE500] pt-8 pb-10 px-4 text-center">
        <p className="text-black/80 text-sm leading-loose mb-8">
          메뉴 확인부터 예약 문의까지
          <br />
          <span className="font-semibold">카카오톡으로 간편하게 연결하세요.</span>
        </p>
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          <button
            onClick={() => scrollTo(menuRef)}
            className="flex items-center justify-center bg-black text-[#FEE500] font-bold py-4 px-3 rounded-2xl text-sm shadow-lg active:scale-95 transition-transform"
          >
            <MenuListIcon />메뉴 보기
          </button>
          <button
            onClick={() => scrollTo(reservationRef)}
            className="flex items-center justify-center bg-black text-[#FEE500] font-bold py-4 px-3 rounded-2xl text-sm shadow-lg active:scale-95 transition-transform"
          >
            <CalendarIcon />예약 문의
          </button>
          <a href={KAKAO_CHAT_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center bg-black text-[#FEE500] font-bold py-4 px-3 rounded-2xl text-sm shadow-lg active:scale-95 transition-transform">
            <KakaoIcon />카카오톡 문의
          </a>
          <a href={NAVER_MAP_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center bg-black text-[#FEE500] font-bold py-4 px-3 rounded-2xl text-sm shadow-lg active:scale-95 transition-transform">
            <MapIcon />위치 보기
          </a>
        </div>
      </section>

      {/* ── 대표 메뉴 ── */}
      <section ref={menuRef} className="py-10 px-4 bg-white">
        <div className="max-w-lg mx-auto">
          <SectionHeading badge={
            <span className="text-xs bg-[#FEE500] text-black font-bold px-2 py-0.5 rounded-full">BEST</span>
          }>
            대표 메뉴
          </SectionHeading>
          <div className="flex flex-col gap-4">
            {featuredMenus.map((menu) => (
              <FeaturedMenuCard key={menu.name} {...menu} />
            ))}
          </div>
        </div>
      </section>

      <div className="h-2 bg-[#F5F5F5]" />

      {/* ── 전체 메뉴 (카테고리별) ── */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-lg mx-auto">
          <SectionHeading>전체 메뉴</SectionHeading>

          <div className="flex flex-col gap-10">
            {menuCategories.map(({ icon, label, items }) => (
              <div key={label}>
                {/* 카테고리 헤더 */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base">{icon}</span>
                  <span className="font-extrabold text-gray-800 text-base">{label}</span>
                  <span className="h-px flex-1 bg-gray-100" />
                </div>
                <div className="flex flex-col gap-3">
                  {items.map((menu) => (
                    <MenuCard key={menu.name} {...menu} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <a href={KAKAO_CHAT_URL} target="_blank" rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-1 w-full bg-[#FEE500] text-black font-bold py-4 rounded-2xl text-sm shadow active:scale-95 transition-transform">
            <KakaoIcon />메뉴 문의 · 카카오톡으로 연결
          </a>
        </div>
      </section>

      <div className="h-2 bg-[#F5F5F5]" />

      {/* ── 예약 안내 ── */}
      <section ref={reservationRef} className="py-10 px-4 bg-white">
        <div className="max-w-lg mx-auto">
          <SectionHeading>예약 안내</SectionHeading>
          <div className="flex flex-wrap gap-2 mb-6">
            {['✅ 예약 가능', '👥 단체 문의 가능', '💬 카카오톡 예약'].map((label) => (
              <span key={label} className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                {label}
              </span>
            ))}
          </div>
          <div className="bg-gray-50 rounded-2xl p-5 flex flex-col gap-4 mb-6">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">카카오톡 예약 방법</p>
            {[
              { step: '01', title: '카카오톡 문의 채널 추가', desc: '아래 버튼을 눌러 채널에 연결하세요.' },
              { step: '02', title: '날짜 · 시간 · 인원 전송', desc: '예) "12월 5일 저녁 7시, 4명 예약하고 싶어요"' },
              { step: '03', title: '예약 확정 안내 수신', desc: '담당자 확인 후 빠르게 답변드립니다.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-3 items-start">
                <span className="shrink-0 w-7 h-7 bg-[#FEE500] text-black text-xs font-black rounded-full flex items-center justify-center">
                  {step}
                </span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{title}</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href={KAKAO_CHAT_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 w-full bg-[#FEE500] text-black font-bold py-4 rounded-2xl text-sm shadow active:scale-95 transition-transform">
            <KakaoIcon />카카오톡으로 예약 문의하기
          </a>
        </div>
      </section>

      <div className="h-2 bg-[#F5F5F5]" />

      {/* ── 위치 안내 ── */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-lg mx-auto">
          <SectionHeading>위치 안내</SectionHeading>
          <div className="bg-gray-50 rounded-2xl p-5 mb-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-bold text-gray-900 text-sm">대박동</p>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                  주소를 입력하세요<br />
                  <span className="text-gray-400">영업시간을 입력하세요</span>
                </p>
              </div>
            </div>
          </div>
          <a href={NAVER_MAP_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#03C75A] text-white font-bold py-4 rounded-2xl text-sm shadow active:scale-95 transition-transform mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            네이버 지도에서 위치 보기
          </a>
          <a href={KAKAO_CHAT_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 w-full border-2 border-[#FEE500] bg-white text-black font-bold py-4 rounded-2xl text-sm active:scale-95 transition-transform">
            <KakaoIcon />오시는 길 카카오톡으로 문의
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-black text-white py-8 px-4 text-center">
        <p className="text-[#FEE500] font-black text-base mb-1">🍽 대박동</p>
        <p className="text-gray-500 text-xs mb-4">카카오톡으로 언제든지 편하게 문의하세요.</p>
        <a href={KAKAO_CHAT_URL} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1 bg-[#FEE500] text-black font-bold px-5 py-2.5 rounded-full text-sm active:scale-95 transition-transform">
          <KakaoIcon />카카오톡 문의
        </a>
      </footer>
    </div>
  );
}
