import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, X, Check, Plus, Minus } from 'lucide-react';
import aboutPalmSpringsImage from './assets/images/about_palm_springs_villa_1791362780533.jpg';
import beachVillaImage from './assets/images/beach_villa_resort_rome_1791362838639.jpg';
import blueskyVillaImage from './assets/images/bluesky_villa_santorini_1791362819775.jpg';
import claxioVillaImage from './assets/images/claxio_villa_austin_1791362801030.jpg';
import cubeSkyVillaImage from './assets/images/cube_sky_villa_hero_1791361898248.jpg';
import diagonTowerImage from './assets/images/diagon_tower_madrid_1791362790909.jpg';
import processOneImage from './assets/images/process_01_white_canopy_1791363563245.jpg';
import processTwoImage from './assets/images/process_02_red_facade_1791363574989.jpg';
import processThreeImage from './assets/images/process_03_curved_ribbons_1791363585327.jpg';
import quoteArchShellImage from './assets/images/quote_arch_shell_1791363538251.jpg';
import quoteSteppedConcreteImage from './assets/images/quote_stepped_concrete_1791363550186.jpg';
import serviceArchitectureImage from './assets/images/service_architecture_concrete_1791362829300.jpg';
import testimonialAlexImage from './assets/images/testimonial_alex_hedge_1791363605435.jpg';
import testimonialJonthaanImage from './assets/images/testimonial_jonthaan_k_1791363616436.jpg';
import testimonialMariaImage from './assets/images/testimonial_maria_elia_1791363595582.jpg';
import voxiMuseumImage from './assets/images/voxi_museum_berlin_1791362811304.jpg';
import ctaGabledRoofsImage from './assets/images/cta_gabled_roofs_1791363628682.jpg';

interface ShowcaseProject {
  id: string;
  slug: string;
  title: string;
  location: string;
  category: string;
  sqft: string;
  year: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
}

const HERO_PROJECT = {
  id: 'cube-sky-villa',
  titleLine1: 'CUBE SKY',
  titleLine2: 'VILLA',
  location: 'California, USA',
  category: 'INTERIOR',
  sqft: '2730 SQFT',
  year: '2025',
  image: cubeSkyVillaImage,
  description:
    'Elevated slightly above the rugged Mojave terrain, Cube Sky Villa is a precision-engineered modular sanctuary featuring seamless curved steel framing, solar-control panoramic glazing, and warm recessed linear illumination.',
  specs: [
    { label: 'Total Area', value: '2,730 SQFT' },
    { label: 'Structure', value: 'Cantilevered Steel Monocoque' },
    { label: 'Glazing', value: 'Triple-Pane Low-E Acoustic Glass' },
    { label: 'Energy System', value: 'Net-Zero Integrated Solar Roof' },
  ],
};

const FEATURED_RESORT_PROJECT = {
  id: 'beach-villa-resort',
  titleLine1: 'BEACH VILLA',
  titleLine2: 'RESORT',
  location: 'Rome, Italy',
  category: 'RESORT',
  sqft: '3260 SQFT',
  year: '2025',
  image: beachVillaImage,
  description:
    'Nestled amidst coastal dune grass and weathered volcanic boulders along the Tyrrhenian shore, Beach Villa Resort pairs a pitched charred-timber roofline with floor-to-ceiling marine-grade glazing.',
  specs: [
    { label: 'Total Area', value: '3,260 SQFT' },
    { label: 'Structure', value: 'Glulam Timber & Marine Steel' },
    { label: 'Glazing', value: 'Hurricane-Rated Coastal Glass' },
    { label: 'Completion', value: '2025 Featured Project' },
  ],
};

const PROJECTS_LIST: ShowcaseProject[] = [
  {
    id: 'diagon-tower',
    slug: 'diagon-tower',
    title: 'DIAGON TOWER',
    location: 'Madrid, Italy',
    category: 'ARCHITECTURE',
    sqft: '18,400 SQFT',
    year: '2025',
    image: diagonTowerImage,
    description:
      'Sculpted high-rise commercial towers wrapped in vertical terracotta-copper solar fins that dynamically filter Mediterranean daylight while framing planted sky-terraces.',
    specs: [
      { label: 'Total Area', value: '18,400 SQFT' },
      { label: 'Facade', value: 'Anodized Terracotta Louvers' },
      { label: 'Category', value: 'Architecture' },
      { label: 'Location', value: 'Madrid, Italy' },
    ],
  },
  {
    id: 'claxio-villa',
    slug: 'claxio-villa',
    title: 'CLAXIO VILLA',
    location: 'Austin, USA',
    category: 'EXTERIOR',
    sqft: '4,680 SQFT',
    year: '2025',
    image: claxioVillaImage,
    description:
      'A cantilevered white architectural concrete pavilion suspended beside a mirror-still infinity basin, illuminated from within by warm recessed amber hearth lighting.',
    specs: [
      { label: 'Total Area', value: '4,680 SQFT' },
      { label: 'Structure', value: 'Cast-in-Place White Concrete' },
      { label: 'Category', value: 'Exterior' },
      { label: 'Location', value: 'Austin, USA' },
    ],
  },
  {
    id: 'voxi-museum',
    slug: 'voxi-museum',
    title: 'VOXI MUSEUM',
    location: 'Berlin, Germany',
    category: 'ARCHITECTURE',
    sqft: '24,900 SQFT',
    year: '2024',
    image: voxiMuseumImage,
    description:
      'Soaring parabolic concrete vaults and a ribbon-like copper-clad helical staircase guide visitors from the sunlit botanical courtyard into the main exhibition galleries.',
    specs: [
      { label: 'Total Area', value: '24,900 SQFT' },
      { label: 'Atrium Span', value: '38m Parabolic Shell' },
      { label: 'Category', value: 'Architecture' },
      { label: 'Location', value: 'Berlin, Germany' },
    ],
  },
  {
    id: 'blue-sky-villa',
    slug: 'blue-sky-villa',
    title: 'BLUE SKY VILLA',
    location: 'Santorini, Greece',
    category: 'RESIDENTIAL',
    sqft: '3,190 SQFT',
    year: '2025',
    image: blueskyVillaImage,
    description:
      'Minimalist whitewashed cubic volumes punctured by deep-recessed steel window frames, engineered for passive Aegean cross-ventilation and stark solar contrast.',
    specs: [
      { label: 'Total Area', value: '3,190 SQFT' },
      { label: 'Envelope', value: 'High-Albedo Thermal Lime Plaster' },
      { label: 'Category', value: 'Residential' },
      { label: 'Location', value: 'Santorini, Greece' },
    ],
  },
];

const STATS = [
  {
    value: '08',
    line1: 'Achievements',
    line2: 'and Honors',
    index: '(01)',
    detail: 'International Architecture & Modular Innovation Awards across North America and Europe.',
  },
  {
    value: '97%',
    line1: 'Customer',
    line2: 'Success Driven',
    index: '(02)',
    detail: 'Client satisfaction rate across turnkey architectural design, permitting, and precision fabrication.',
  },
  {
    value: '12',
    line1: 'Experience',
    line2: 'and Skills',
    index: '(03)',
    detail: 'Years pioneering elevated modular living, structural engineering, and bespoke interior curation.',
  },
  {
    value: '160+',
    line1: 'Executed',
    line2: 'Project Works',
    index: '(04)',
    detail: 'Completed residential villas, private pavilions, and hospitality sanctuaries worldwide.',
  },
];

const SERVICES_LIST = [
  {
    num: '01',
    title: 'ARCHITECTURE',
    description:
      'Expert architecture services focused on modern, sustainable, and innovative design solutions.',
    image: serviceArchitectureImage,
  },
  {
    num: '02',
    title: 'RESIDENTIAL',
    description:
      'Custom residential sanctuaries crafted with seamless indoor-outdoor flow, natural materials, and enduring structural clarity.',
    image: aboutPalmSpringsImage,
  },
  {
    num: '03',
    title: 'INTERIOR',
    description:
      'Refined interior curation combining bespoke architectural millwork, warm ambient illumination, and tactile stone surfaces.',
    image: cubeSkyVillaImage,
  },
  {
    num: '04',
    title: 'FLOORS LAYOUT',
    description:
      'Precision spatial planning and modular floor layouts engineered to optimize daylight, sightlines, and daily living.',
    image: claxioVillaImage,
  },
];

const PROCESS_STEPS = [
  {
    num: '/01',
    text: 'We analyze site potential to build a solid foundation.',
    tag: 'DISCOVERY & ANALYSIS',
    image: processOneImage,
  },
  {
    num: '/02',
    text: 'Turning concepts into precise, structured, and functional design blueprints',
    tag: 'CONCEPT & DESIGN',
    image: processTwoImage,
  },
  {
    num: '/03',
    text: 'Building projects to perfection via technical documents.',
    tag: 'EXPERT OVERSIGHT',
    image: processThreeImage,
  },
];

const TESTIMONIALS_LIST = [
  {
    name: 'Maria Elia',
    country: 'USA',
    quote: '“Professional and creative experts who truly understand modern and functional design”',
    index: '(01)',
    image: testimonialMariaImage,
  },
  {
    name: 'Alex Hedge',
    country: 'Italy',
    quote: '“They listen, they design, and they build pure inspiration”',
    index: '(02)',
    image: testimonialAlexImage,
  },
  {
    name: 'Jonthaan K',
    country: 'Spain',
    quote: '“They designed a stunning modern space that perfectly complements our unique lifestyle.”',
    index: '(03)',
    image: testimonialJonthaanImage,
  },
];

const FAQS_LIST = [
  {
    question: 'How does the free trial work?',
    answer:
      'We begin with a complimentary 45-minute architectural discovery consultation and initial site feasibility review so you can evaluate our spatial direction before committing to a full blueprint phase.',
  },
  {
    question: 'How do you weigh different criteria in your process?',
    answer:
      'Every project balances four core pillars: topographic solar orientation, structural longevity, sustainable material thermal mass, and effortless daily human circulation.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Click Let’s Talk to share your parcel location, approximate square footage goals, and timeline. Our principal architect will schedule a site assessment within 48 hours.',
  },
  {
    question: 'Can I customize the packages you offer?',
    answer:
      'Yes. Whether you require full turnkey architectural and interior execution or a standalone modular structural shell, each phase is tailored to your site and scope.',
  },
  {
    question: 'How can I get custom pricing?',
    answer:
      'Following our initial site and zoning evaluation, we prepare a transparent, itemized architectural fee proposal and construction cost schedule aligned with your specifications.',
  },
];

// 6 columns x 4 rows grid coordinates for the signature Framer tile reveal in frame 00:01 of Video 1
const GRID_COLS = 6;
const GRID_ROWS = 4;
const TILES = Array.from({ length: GRID_COLS * GRID_ROWS }, (_, idx) => {
  const row = Math.floor(idx / GRID_COLS);
  const col = idx % GRID_COLS;
  const delayMs = col * 115 + row * 45;
  return { id: idx, row, col, delayMs };
});

interface ProjectCardProps {
  project: ShowcaseProject;
  onSelect: (project: ShowcaseProject) => void;
}

function ProjectShowcaseCard({ project, onSelect }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCursorPos(null);
      }}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[500px] sm:h-[560px] md:h-[630px] overflow-hidden cursor-pointer select-none group"
    >
      {/* Outer Heavily Blurred Atmospheric Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={project.image}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-125 blur-[32px] brightness-95"
        />
        <div className="absolute inset-0 bg-black/8" />
      </div>

      {/* Center Framed Sharp Project Card */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
        <div className="w-full max-w-[600px] bg-white p-[3px] shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <div className="relative aspect-[16/10.6] w-full overflow-hidden bg-neutral-100">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <div className="bg-white pt-5 pb-6 px-4 text-center">
            <h3 className="text-[18px] md:text-[19px] font-medium uppercase tracking-[-0.01em] text-[#111111]">
              {project.title}
            </h3>
            <p className="text-[13px] font-normal text-[#111111]/65 mt-1">
              {project.location}
            </p>
          </div>
        </div>
      </div>

      {/* Cursor-Following Yellow "VIEW" Badge */}
      {isHovered && cursorPos && (
        <div
          className="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        >
          <span className="bg-[#E5E82E] text-[#111111] text-[11px] font-bold uppercase tracking-[0.04em] px-4 py-2 shadow-md inline-block">
            VIEW
          </span>
        </div>
      )}

      {/* Bottom-Left Category Pill */}
      <div className="absolute bottom-7 left-7 md:left-8 z-20">
        <span className="inline-block border border-white/85 rounded-full px-5 py-[7px] text-[11px] font-semibold uppercase tracking-[0.04em] text-white bg-black/10 backdrop-blur-[2px] group-hover:bg-white group-hover:text-[#111111] transition-colors duration-200">
          {project.category}
        </span>
      </div>

      {/* Bottom-Right Circular Arrow Button */}
      <div className="absolute bottom-7 right-7 md:right-8 z-20">
        <span className="w-[38px] h-[38px] rounded-full border border-white/85 flex items-center justify-center text-white bg-black/10 backdrop-blur-[2px] group-hover:bg-white group-hover:text-[#111111] transition-colors duration-200">
          <ArrowUpRight size={16} strokeWidth={1.75} />
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(800);
  const [tileRevealActive, setTileRevealActive] = useState(false);

  // Active expanded tab in 03 — SERVICES (Default: 0 = 01 ARCHITECTURE)
  const [activeServiceIdx, setActiveServiceIdx] = useState<number>(0);

  // Active expanded FAQ index (null = all collapsed as shown in 00:25-00:27)
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Interactive modals & drawers
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [selectedModalData, setSelectedModalData] = useState<{
    title: string;
    location: string;
    category: string;
    sqft: string;
    image: string;
    description: string;
    specs: { label: string; value: string }[];
  } | null>(null);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    projectType: 'Cube Sky Villa (2,730 SQFT)',
    budget: '$1.5M – $3M',
    message: '',
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const projectsSectionRef = useRef<HTMLElement | null>(null);
  const servicesSectionRef = useRef<HTMLElement | null>(null);
  const resortSectionRef = useRef<HTMLElement | null>(null);
  const processSectionRef = useRef<HTMLElement | null>(null);
  const testimonialsSectionRef = useRef<HTMLElement | null>(null);
  const faqSectionRef = useRef<HTMLElement | null>(null);

  // Trigger the signature 6x4 black tile grid reveal on mount
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setTileRevealActive(true);
    }, 120);
    return () => window.clearTimeout(timer);
  }, []);

  // Track scroll position for navbar transition & parallax
  useEffect(() => {
    const updateScroll = () => {
      setScrollY(window.scrollY);
      setViewportHeight(window.innerHeight);
    };
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  const triggerHeroReveal = () => {
    setTileRevealActive(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.setTimeout(() => {
      setTileRevealActive(true);
    }, 260);
  };

  // Navbar transitions from transparent/white-text over the hero to solid white/black-text after scrolling ~66% of the hero
  const isNavbarLight = scrollY > viewportHeight * 0.66;

  // Parallax for Hero Section (Video 1: 00:00 -> 00:08)
  const clampedHeroScroll = Math.min(scrollY, viewportHeight * 1.2);
  const heroImageTranslateY = clampedHeroScroll * 0.34;
  const heroTitleTranslateY = -clampedHeroScroll * 0.16;

  // Parallax for Beach Villa Resort Section (Video 2: 00:21 -> 00:27)
  let resortTitleOffsetY = 0;
  if (resortSectionRef.current) {
    const rect = resortSectionRef.current.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (rect.top - 88) / (viewportHeight * 0.65)));
    resortTitleOffsetY = progress * 110;
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim()) return;
    setContactSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] relative selection:bg-[#E5E82E] selection:text-[#111111]">
      {/* =====================================================================
          TOP NAVIGATION BAR
         ===================================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[88px] px-7 md:px-10 flex items-center justify-between transition-colors duration-300 ${
          isNavbarLight ? 'bg-white text-[#111111]' : 'bg-transparent text-white'
        }`}
      >
        {/* Left: Custom 3-line architectural hamburger icon */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          className="w-10 h-10 -ml-2 flex flex-col items-center justify-center gap-[5px] cursor-pointer group focus:outline-none"
        >
          <span
            className={`block h-[2px] w-[16px] transition-all duration-300 group-hover:w-[24px] ${
              isNavbarLight ? 'bg-[#111111]' : 'bg-white'
            }`}
          />
          <span
            className={`block h-[2px] w-[24px] transition-all duration-300 ${
              isNavbarLight ? 'bg-[#111111]' : 'bg-white'
            }`}
          />
          <span
            className={`block h-[2px] w-[16px] transition-all duration-300 group-hover:w-[24px] ${
              isNavbarLight ? 'bg-[#111111]' : 'bg-white'
            }`}
          />
        </button>

        {/* Center: STUX Wordmark */}
        <button
          type="button"
          onClick={triggerHeroReveal}
          className={`absolute left-1/2 -translate-x-1/2 text-[21px] md:text-[22px] font-extrabold tracking-[-0.02em] uppercase transition-colors duration-300 cursor-pointer focus:outline-none ${
            isNavbarLight ? 'text-[#111111]' : 'text-white'
          }`}
        >
          STUX
        </button>

        {/* Right: LET'S TALK + Yellow Arrow Box */}
        <button
          type="button"
          onClick={() => {
            setContactSubmitted(false);
            setContactOpen(true);
          }}
          className="flex items-center gap-[2px] cursor-pointer group focus:outline-none"
        >
          <span className="bg-[#141414] text-white text-[11px] font-bold uppercase tracking-[0.05em] px-5 h-[42px] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#262626] whitespace-nowrap">
            LET&apos;S TALK
          </span>
          <span className="bg-[#E5E82E] text-[#111111] w-[42px] h-[42px] flex items-center justify-center transition-transform duration-200">
            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            />
          </span>
        </button>
      </header>

      {/* =====================================================================
          HERO SECTION: CUBE SKY VILLA (Video 1: 00:00 - 00:08)
         ===================================================================== */}
      <section className="relative w-full h-screen min-h-[700px] bg-black overflow-hidden">
        <div
          className="absolute inset-0 z-0 will-change-transform"
          style={{
            transform: `translate3d(0, ${heroImageTranslateY}px, 0)`,
          }}
        >
          <img
            src={HERO_PROJECT.image}
            alt="CUBE SKY VILLA"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/45" />
        </div>

        {/* 6x4 Black Tile Grid Reveal Overlay (Video 1: Frame 00:01) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 grid grid-cols-6 grid-rows-4 pointer-events-none"
        >
          {TILES.map((tile) => (
            <div
              key={tile.id}
              className="bg-black will-change-opacity"
              style={{
                opacity: tileRevealActive ? 0 : 1,
                transition: tileRevealActive
                  ? `opacity 620ms cubic-bezier(0.22, 1, 0.36, 1) ${tile.delayMs}ms`
                  : 'none',
              }}
            />
          ))}
        </div>

        {/* Center Hero Typography: CUBE SKY VILLA + California, USA */}
        <div
          className="absolute inset-x-0 top-[53%] md:top-[54%] z-20 flex flex-col items-center text-center px-4 pointer-events-none will-change-transform"
          style={{
            transform: `translate3d(0, ${heroTitleTranslateY}px, 0)`,
          }}
        >
          <h1 className="text-[56px] sm:text-[80px] md:text-[100px] lg:text-[108px] font-bold uppercase text-white leading-[0.92] tracking-[-0.03em] select-none">
            <span className="block">{HERO_PROJECT.titleLine1}</span>
            <span className="block">{HERO_PROJECT.titleLine2}</span>
          </h1>
          <p className="mt-4 md:mt-5 text-[15px] md:text-[16px] font-normal text-white/95 tracking-[-0.01em]">
            {HERO_PROJECT.location}
          </p>
        </div>

        {/* Bottom-Left Pill: INTERIOR */}
        <div className="absolute bottom-8 left-7 md:left-10 z-20">
          <button
            type="button"
            onClick={() =>
              setSelectedModalData({
                title: 'CUBE SKY VILLA',
                location: HERO_PROJECT.location,
                category: HERO_PROJECT.category,
                sqft: HERO_PROJECT.sqft,
                image: HERO_PROJECT.image,
                description: HERO_PROJECT.description,
                specs: HERO_PROJECT.specs,
              })
            }
            className="border border-white/70 rounded-full px-5 py-[7px] text-[11px] font-semibold tracking-[0.04em] text-white uppercase bg-black/20 backdrop-blur-[2px] hover:bg-white hover:text-[#111111] transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            {HERO_PROJECT.category}
          </button>
        </div>

        {/* Bottom-Right Pill: 2730 SQFT */}
        <div className="absolute bottom-8 right-7 md:right-10 z-20">
          <button
            type="button"
            onClick={() =>
              setSelectedModalData({
                title: 'CUBE SKY VILLA',
                location: HERO_PROJECT.location,
                category: HERO_PROJECT.category,
                sqft: HERO_PROJECT.sqft,
                image: HERO_PROJECT.image,
                description: HERO_PROJECT.description,
                specs: HERO_PROJECT.specs,
              })
            }
            className="border border-white/70 rounded-full px-5 py-[7px] text-[11px] font-semibold tracking-[0.04em] text-white uppercase bg-black/20 backdrop-blur-[2px] hover:bg-white hover:text-[#111111] transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            {HERO_PROJECT.sqft}
          </button>
        </div>
      </section>

      {/* =====================================================================
          SECTION 01: ABOUT US + ELEVATED DESIGN HEADLINE (Video 1: 00:06 - 00:13)
         ===================================================================== */}
      <section
        ref={aboutSectionRef}
        id="about"
        className="bg-white pt-[116px] md:pt-[132px] px-7 md:px-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 items-start">
          <div className="md:col-span-4 flex items-center pt-2">
            <span className="text-[12px] font-medium text-[#111111] tabular-nums">
              01
            </span>
            <span
              aria-hidden="true"
              className="inline-block w-[36px] h-[1px] bg-[#111111]/35 mx-3"
            />
            <span className="text-[12px] font-medium tracking-[0.04em] text-[#111111] uppercase">
              ABOUT US
            </span>
          </div>

          <div className="md:col-span-8">
            <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-normal uppercase text-[#111111] leading-[1.12] tracking-[-0.02em]">
              <span className="block">ELEVATED DESIGN TO</span>
              <span className="block">TRANSFORM YOUR</span>
              <span className="block">DAILY LIVING</span>
            </h2>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setAboutModalOpen(true)}
                className="inline-flex items-center gap-[2px] cursor-pointer group focus:outline-none"
              >
                <span className="bg-[#141414] text-white text-[11px] font-bold uppercase tracking-[0.05em] px-6 h-[46px] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#262626] whitespace-nowrap">
                  MORE ABOUT US
                </span>
                <span className="bg-[#E5E82E] text-[#111111] w-[46px] h-[46px] flex items-center justify-center">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={2}
                    className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          STAGGERED SCROLL-LINKED 4-COLUMN STATS GRID (Video 1: 00:09 - 00:24)
         ===================================================================== */}
      <section className="bg-white mt-[68px] px-7 md:px-10">
        <div
          className="hidden md:grid md:grid-cols-4 items-start"
          style={{ minHeight: '2160px' }}
        >
          {STATS.map((stat, idx) => {
            const topSpacerPx = idx * 530;
            return (
              <div
                key={stat.index}
                className={`h-full ${idx > 0 ? '-ml-[1px]' : ''}`}
                style={{ paddingTop: `${topSpacerPx}px` }}
              >
                <div className="sticky top-[112px] h-[530px] bg-white border border-[#EBEBEB] p-8 flex flex-col justify-between">
                  <div className="text-[64px] lg:text-[74px] font-normal text-[#111111] leading-none tracking-[-0.03em] tabular-nums">
                    {stat.value}
                  </div>

                  <div>
                    <div className="text-[18px] lg:text-[19px] font-normal text-[#111111] leading-[1.3] tracking-[-0.01em] mb-6">
                      <span className="block">{stat.line1}</span>
                      <span className="block">{stat.line2}</span>
                    </div>
                    <div className="text-[12px] font-medium text-[#111111]/80 tabular-nums">
                      {stat.index}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet Responsive Fallback Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {STATS.map((stat) => (
            <div
              key={stat.index}
              className="h-[360px] bg-white border border-[#EBEBEB] p-7 flex flex-col justify-between"
            >
              <div className="text-[56px] font-normal text-[#111111] leading-none tracking-[-0.03em] tabular-nums">
                {stat.value}
              </div>
              <div>
                <div className="text-[18px] font-normal text-[#111111] leading-[1.3] mb-5">
                  <span className="block">{stat.line1}</span>
                  <span className="block">{stat.line2}</span>
                </div>
                <div className="text-[12px] font-medium text-[#111111]/80 tabular-nums">
                  {stat.index}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SKILLED ARCHITECTS + 120K HAPPY CLIENTS + PALM SPRINGS VILLA
          (Video 2: 00:00 - 00:04)
         ===================================================================== */}
      <section className="bg-white pt-[96px] md:pt-[110px] pb-[110px] md:pb-[130px] px-7 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-end">
          <div className="flex flex-col justify-end md:pr-12">
            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold uppercase text-[#111111] leading-[1.28] tracking-[-0.02em] max-w-[430px]">
              SKILLED ARCHITECTS AND
              <br />
              INTERIOR DESIGNERS CRAFTING
              <br />
              ACCESSIBLE, HIGH-QUALITY
              <br />
              SPACES FOR ALL.
            </h3>

            <div className="mt-9 flex items-center gap-5">
              <div className="flex items-center -space-x-2.5">
                <img
                  src={testimonialAlexImage}
                  alt="Client 1"
                  referrerPolicy="no-referrer"
                  className="w-[42px] h-[42px] rounded-full border-2 border-white object-cover shrink-0"
                />
                <img
                  src={testimonialMariaImage}
                  alt="Client 2"
                  referrerPolicy="no-referrer"
                  className="w-[42px] h-[42px] rounded-full border-2 border-white object-cover shrink-0"
                />
                <img
                  src={testimonialJonthaanImage}
                  alt="Client 3"
                  referrerPolicy="no-referrer"
                  className="w-[42px] h-[42px] rounded-full border-2 border-white object-cover shrink-0"
                />
              </div>

              <div>
                <div className="text-[21px] md:text-[22px] font-normal text-[#111111] leading-none tracking-[-0.02em] tabular-nums">
                  120K
                </div>
                <div className="text-[13px] font-normal text-[#111111]/65 mt-1">
                  Happy clients
                </div>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <img
              src={aboutPalmSpringsImage}
              alt="Modern architectural residence with vertical louvers and desert landscaping"
              referrerPolicy="no-referrer"
              className="w-full h-[380px] sm:h-[460px] lg:h-[510px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 02: PROJECTS — INNOVATIVE CONCEPTS IN BUILT FORMS
          (Video 2: 00:04 - 00:17)
         ===================================================================== */}
      <section
        ref={projectsSectionRef}
        id="projects"
        className="bg-[#F5F5F5] pt-[110px] md:pt-[128px] pb-[110px] md:pb-[128px] px-7 md:px-10"
      >
        <div className="flex items-center">
          <span className="text-[12px] font-medium text-[#111111] tabular-nums">
            02
          </span>
          <span
            aria-hidden="true"
            className="inline-block w-[36px] h-[1px] bg-[#111111]/35 mx-3"
          />
          <span className="text-[12px] font-medium tracking-[0.04em] text-[#111111] uppercase">
            PROJECTS
          </span>
        </div>

        <div className="mt-7 mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-normal uppercase text-[#111111] leading-[1.12] tracking-[-0.02em]">
            <span className="block">INNOVATIVE CONCEPTS</span>
            <span className="block">IN BUILT FORMS</span>
          </h2>

          <button
            type="button"
            onClick={() =>
              setSelectedModalData({
                title: PROJECTS_LIST[0].title,
                location: PROJECTS_LIST[0].location,
                category: PROJECTS_LIST[0].category,
                sqft: PROJECTS_LIST[0].sqft,
                image: PROJECTS_LIST[0].image,
                description: PROJECTS_LIST[0].description,
                specs: PROJECTS_LIST[0].specs,
              })
            }
            className="inline-flex items-center gap-[2px] cursor-pointer group self-start md:self-auto focus:outline-none"
          >
            <span className="bg-[#141414] text-white text-[11px] font-bold uppercase tracking-[0.05em] px-6 h-[46px] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#262626] whitespace-nowrap">
              ALL PROJECTS
            </span>
            <span className="bg-[#E5E82E] text-[#111111] w-[46px] h-[46px] flex items-center justify-center">
              <ArrowUpRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </span>
          </button>
        </div>

        <div className="space-y-6">
          {PROJECTS_LIST.map((project) => (
            <ProjectShowcaseCard
              key={project.id}
              project={project}
              onSelect={(proj) =>
                setSelectedModalData({
                  title: proj.title,
                  location: proj.location,
                  category: proj.category,
                  sqft: proj.sqft,
                  image: proj.image,
                  description: proj.description,
                  specs: proj.specs,
                })
              }
            />
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 03: SERVICES — WE OFFER WIDE RANGE OF SERVICES
          (Video 2: 00:17 - 00:22)
         ===================================================================== */}
      <section
        ref={servicesSectionRef}
        id="services"
        className="bg-white pt-[110px] md:pt-[130px] pb-[110px] md:pb-[130px] px-7 md:px-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 items-start mb-20">
          <div className="md:col-span-4 flex items-center pt-2">
            <span className="text-[12px] font-medium text-[#111111] tabular-nums">
              03
            </span>
            <span
              aria-hidden="true"
              className="inline-block w-[36px] h-[1px] bg-[#111111]/35 mx-3"
            />
            <span className="text-[12px] font-medium tracking-[0.04em] text-[#111111] uppercase">
              SERVICES
            </span>
          </div>

          <div className="md:col-span-8">
            <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-normal uppercase text-[#111111] leading-[1.12] tracking-[-0.02em]">
              <span className="block">WE OFFER WIDE RANGE</span>
              <span className="block">OF SERVICES</span>
            </h2>
          </div>
        </div>

        <div className="hidden md:flex w-full h-[640px] border-r border-[#EBEBEB]">
          {SERVICES_LIST.map((service, idx) => {
            const isExpanded = activeServiceIdx === idx;
            return (
              <div
                key={service.num}
                onClick={() => setActiveServiceIdx(idx)}
                className={`h-full border-l border-[#EBEBEB] first:border-l-0 transition-all duration-500 ease-out flex overflow-hidden cursor-pointer ${
                  isExpanded ? 'flex-[3.8]' : 'flex-1 hover:bg-neutral-50/60'
                }`}
              >
                <div
                  className={`h-full flex flex-col justify-between py-2 shrink-0 select-none ${
                    isExpanded ? 'w-[88px] items-start pl-4' : 'w-full items-center'
                  }`}
                >
                  <span className="-rotate-90 origin-center text-[18px] lg:text-[19px] font-semibold text-[#111111] tracking-tight tabular-nums inline-block mt-2">
                    {service.num}
                  </span>

                  <span className="[writing-mode:vertical-rl] text-[18px] lg:text-[19px] font-normal uppercase tracking-[0.02em] text-[#111111] whitespace-nowrap mb-1">
                    {service.title}
                  </span>
                </div>

                {isExpanded && (
                  <div className="flex-1 h-full flex flex-col justify-end pr-8 lg:pr-10 pl-2">
                    <p className="text-[15px] font-normal text-[#111111]/85 leading-[1.45] max-w-[285px] mb-8">
                      {service.description}
                    </p>
                    <div className="w-full h-[320px] lg:h-[340px] overflow-hidden bg-neutral-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="md:hidden divide-y divide-[#EBEBEB] border-t border-b border-[#EBEBEB]">
          {SERVICES_LIST.map((service, idx) => {
            const isExpanded = activeServiceIdx === idx;
            return (
              <div key={service.num} className="py-6">
                <button
                  type="button"
                  onClick={() => setActiveServiceIdx(idx)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-[18px] font-medium uppercase text-[#111111]">
                    {service.num} — {service.title}
                  </span>
                  <ArrowUpRight size={16} />
                </button>
                {isExpanded && (
                  <div className="mt-4">
                    <p className="text-[14px] text-[#111111]/80 mb-4">
                      {service.description}
                    </p>
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-56 object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          FEATURED FULL-SCREEN BANNER: BEACH VILLA RESORT
          (Video 2: 00:21 - 00:27 & Video 3: 00:00)
         ===================================================================== */}
      <section
        ref={resortSectionRef}
        className="relative w-full h-screen min-h-[700px] bg-black overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={FEATURED_RESORT_PROJECT.image}
            alt="BEACH VILLA RESORT"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/45" />
        </div>

        <div className="absolute top-8 left-7 md:left-10 z-20">
          <span className="text-[13px] md:text-[14px] font-semibold uppercase tracking-[0.02em] text-white">
            FEATURED
          </span>
        </div>

        <div className="absolute top-8 right-7 md:right-10 z-20">
          <span className="text-[13px] md:text-[14px] font-semibold uppercase tracking-[0.02em] text-white tabular-nums">
            {FEATURED_RESORT_PROJECT.year}
          </span>
        </div>

        <div
          className="absolute inset-x-0 top-[46%] md:top-[47%] z-20 flex flex-col items-center text-center px-4 pointer-events-none will-change-transform"
          style={{
            transform: `translate3d(0, ${resortTitleOffsetY}px, 0)`,
          }}
        >
          <h2 className="text-[56px] sm:text-[80px] md:text-[100px] lg:text-[108px] font-bold uppercase text-white leading-[0.92] tracking-[-0.03em] select-none">
            <span className="block">{FEATURED_RESORT_PROJECT.titleLine1}</span>
            <span className="block">{FEATURED_RESORT_PROJECT.titleLine2}</span>
          </h2>
          <p className="mt-4 md:mt-5 text-[15px] md:text-[16px] font-normal text-white/95 tracking-[-0.01em]">
            {FEATURED_RESORT_PROJECT.location}
          </p>
        </div>

        <div className="absolute bottom-8 left-7 md:left-10 z-20">
          <button
            type="button"
            onClick={() =>
              setSelectedModalData({
                title: 'BEACH VILLA RESORT',
                location: FEATURED_RESORT_PROJECT.location,
                category: FEATURED_RESORT_PROJECT.category,
                sqft: FEATURED_RESORT_PROJECT.sqft,
                image: FEATURED_RESORT_PROJECT.image,
                description: FEATURED_RESORT_PROJECT.description,
                specs: FEATURED_RESORT_PROJECT.specs,
              })
            }
            className="border border-white/75 rounded-full px-5 py-[7px] text-[11px] font-semibold tracking-[0.04em] text-white uppercase bg-black/20 backdrop-blur-[2px] hover:bg-white hover:text-[#111111] transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            {FEATURED_RESORT_PROJECT.category}
          </button>
        </div>

        <div className="absolute bottom-8 right-7 md:right-10 z-20">
          <button
            type="button"
            onClick={() =>
              setSelectedModalData({
                title: 'BEACH VILLA RESORT',
                location: FEATURED_RESORT_PROJECT.location,
                category: FEATURED_RESORT_PROJECT.category,
                sqft: FEATURED_RESORT_PROJECT.sqft,
                image: FEATURED_RESORT_PROJECT.image,
                description: FEATURED_RESORT_PROJECT.description,
                specs: FEATURED_RESORT_PROJECT.specs,
              })
            }
            className="border border-white/75 rounded-full px-5 py-[7px] text-[11px] font-semibold tracking-[0.04em] text-white uppercase bg-black/20 backdrop-blur-[2px] hover:bg-white hover:text-[#111111] transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            {FEATURED_RESORT_PROJECT.sqft}
          </button>
        </div>
      </section>

      {/* =====================================================================
          STICKY CEO QUOTE WITH FLOATING SCROLL-PASSING ARCHITECTURE IMAGES
          (Video 3: 00:00 - 00:10)
         ===================================================================== */}
      <section className="relative bg-white px-7 md:px-10">
        {/* Sticky Center Quote Layer (Stays pinned in center while 6 images scroll past underneath) */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-20 pointer-events-none px-4">
          {/* Black Circle Quote Mark */}
          <div className="w-[52px] h-[52px] rounded-full bg-[#141414] flex items-center justify-center mb-6 shadow-xs">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4.6 15.5C2.1 15.5 0.5 13.7 0.5 10.9C0.5 6.8 3.5 2.7 8.1 0.5L9.3 2.3C6.1 4.1 4.4 6.4 4.2 8.5C4.6 8.3 5.2 8.2 5.8 8.2C7.8 8.2 9.2 9.6 9.2 11.7C9.2 13.9 7.3 15.5 4.6 15.5ZM14.9 15.5C12.4 15.5 10.8 13.7 10.8 10.9C10.8 6.8 13.8 2.7 18.4 0.5L19.6 2.3C16.4 4.1 14.7 6.4 14.5 8.5C14.9 8.3 15.5 8.2 16.1 8.2C18.1 8.2 19.5 9.6 19.5 11.7C19.5 13.9 17.6 15.5 14.9 15.5Z"
                fill="white"
              />
            </svg>
          </div>

          <h2 className="text-[22px] sm:text-[28px] md:text-[34px] font-bold uppercase text-[#111111] leading-[1.2] tracking-[-0.02em] text-center max-w-[780px]">
            <span className="block">WHERE PRECISION ENGINEERING MEETS</span>
            <span className="block">THE ARTISTIC BEAUTY OF MODERN</span>
            <span className="block">ARCHITECTURAL DESIGN.</span>
          </h2>

          <p className="mt-6 text-[14px] md:text-[15px] font-normal text-[#111111]/65 text-center">
            Jonathan Alex, CEO Stux
          </p>
        </div>

        {/* Scrolling Architecture Images Layer (z-10, passes behind the sticky quote text) */}
        <div className="relative z-10 -mt-[30vh] pb-[28vh] space-y-24 md:space-y-32 pointer-events-none">
          {/* Image 1: Far Right (00:02) — White Lattice Arch Pavilion */}
          <div className="flex justify-end">
            <div className="w-[280px] sm:w-[360px] md:w-[400px] aspect-[1.36/1] overflow-hidden">
              <img
                src={quoteArchShellImage}
                alt="Parametric shell structure"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 2: Far Left (00:03) — Stepped Concrete Brutalist Volumes */}
          <div className="flex justify-start">
            <div className="w-[280px] sm:w-[360px] md:w-[400px] aspect-[1.36/1] overflow-hidden">
              <img
                src={quoteSteppedConcreteImage}
                alt="Minimalist stepped concrete architecture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 3: Mid-Right (00:04) — Smaller Square-ish Facade */}
          <div className="flex justify-end pr-[8%] md:pr-[13%]">
            <div className="w-[170px] sm:w-[200px] aspect-[1.12/1] overflow-hidden">
              <img
                src={diagonTowerImage}
                alt="Architectural tower corner"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 4: Mid-Left (00:05 - 00:06) — Angular White/Grey Facade */}
          <div className="flex justify-start pl-[8%] md:pl-[12%]">
            <div className="w-[190px] sm:w-[235px] aspect-[1.15/1] overflow-hidden">
              <img
                src={blueskyVillaImage}
                alt="Angular white modern geometry"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 5: Far Right (00:06 - 00:07) — Warm Sunlit Pavilion */}
          <div className="flex justify-end">
            <div className="w-[280px] sm:w-[360px] md:w-[400px] aspect-[1.36/1] overflow-hidden">
              <img
                src={claxioVillaImage}
                alt="Warm cantilevered pavilion"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 6: Far Left (00:07 - 00:08) — Red Terracotta Tower on Blue Sky */}
          <div className="flex justify-start">
            <div className="w-[280px] sm:w-[360px] md:w-[400px] aspect-[1.36/1] overflow-hidden">
              <img
                src={processTwoImage}
                alt="Red architectural tower"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 04: PROCESS — CRAFTING YOUR DREAM, STEP BY STEP
          (Video 3: 00:10 - 00:17)
         ===================================================================== */}
      <section
        ref={processSectionRef}
        id="process"
        className="bg-[#F5F5F5] pt-[110px] md:pt-[128px] pb-[110px] md:pb-[128px] px-7 md:px-10"
      >
        {/* Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 items-start mb-16">
          <div className="md:col-span-4 flex items-center pt-2">
            <span className="text-[12px] font-medium text-[#111111] tabular-nums">
              04
            </span>
            <span
              aria-hidden="true"
              className="inline-block w-[36px] h-[1px] bg-[#111111]/35 mx-3"
            />
            <span className="text-[12px] font-medium tracking-[0.04em] text-[#111111] uppercase">
              PROCESS
            </span>
          </div>

          <div className="md:col-span-8">
            <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-normal uppercase text-[#111111] leading-[1.12] tracking-[-0.02em]">
              <span className="block">CRAFTING YOUR DREAM,</span>
              <span className="block">STEP BY STEP</span>
            </h2>
          </div>
        </div>

        {/* 3 Sticky Stacking Dark Process Cards (/01, /02, /03) */}
        <div className="space-y-8">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.num}
              className="sticky top-[104px] w-full h-[500px] sm:h-[540px] md:h-[580px] bg-[#0B0B0B] text-white grid grid-cols-1 md:grid-cols-12 overflow-hidden shadow-[0_-8px_30px_rgba(0,0,0,0.25)]"
              style={{ zIndex: 10 + idx }}
            >
              {/* Left Column: Yellow /01 + Description + Bottom Tag */}
              <div className="md:col-span-5 p-7 md:p-9 flex flex-col justify-between">
                <div className="text-[44px] md:text-[54px] font-normal text-[#E5E82E] leading-none tracking-[-0.03em] tabular-nums">
                  {step.num}
                </div>

                <div>
                  <p className="text-[18px] md:text-[20px] font-normal text-white leading-[1.32] tracking-[-0.01em] max-w-[280px] mb-6">
                    {step.text}
                  </p>
                  <div className="text-[10px] font-medium uppercase tracking-[0.06em] text-white/50">
                    {step.tag}
                  </div>
                </div>
              </div>

              {/* Right Column: Framed Architectural Image */}
              <div className="md:col-span-7 p-3 md:p-4 h-full overflow-hidden">
                <div className="w-full h-full overflow-hidden bg-[#161616]">
                  <img
                    src={step.image}
                    alt={step.tag}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 05: TESTIMONIALS — FIND WHAT OUR CLIENTS SAY ABOUT US
          (Video 3: 00:17 - 00:22)
         ===================================================================== */}
      <section
        ref={testimonialsSectionRef}
        id="testimonials"
        className="bg-white pt-[110px] md:pt-[130px] pb-[90px] px-7 md:px-10"
      >
        {/* Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 items-start mb-16">
          <div className="md:col-span-4 flex items-center pt-2">
            <span className="text-[12px] font-medium text-[#111111] tabular-nums">
              05
            </span>
            <span
              aria-hidden="true"
              className="inline-block w-[36px] h-[1px] bg-[#111111]/35 mx-3"
            />
            <span className="text-[12px] font-medium tracking-[0.04em] text-[#111111] uppercase">
              TESTIMONIALS
            </span>
          </div>

          <div className="md:col-span-8">
            <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-normal uppercase text-[#111111] leading-[1.12] tracking-[-0.02em]">
              <span className="block">FIND WHAT OUR CLIENTS</span>
              <span className="block">SAY ABOUT US</span>
            </h2>
          </div>
        </div>

        {/* 3 Testimonial Rows */}
        <div className="border-b border-[#EBEBEB]">
          {TESTIMONIALS_LIST.map((item) => (
            <div
              key={item.index}
              className="border-t border-[#EBEBEB] py-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
            >
              {/* Col 1: Portrait Photo */}
              <div className="md:col-span-4 lg:col-span-4">
                <div className="w-full max-w-[360px] aspect-[1/1.05] overflow-hidden bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Col 2: Client Name & Country */}
              <div className="md:col-span-2 pt-1">
                <div className="text-[15px] font-medium text-[#111111]">
                  {item.name}
                </div>
                <div className="text-[12px] text-[#111111]/55 mt-0.5">
                  {item.country}
                </div>
              </div>

              {/* Col 3: Quote Text + Bottom Index Number */}
              <div className="md:col-span-5 flex flex-col justify-between pt-1">
                <p className="text-[21px] sm:text-[24px] lg:text-[26px] font-normal text-[#111111] leading-[1.28] tracking-[-0.02em] max-w-[430px]">
                  {item.quote}
                </p>

                <div className="text-[12px] font-semibold text-[#111111] tabular-nums mt-10 md:mt-0">
                  {item.index}
                </div>
              </div>

              {/* Col 4: Top-Right Yellow Square Quote Icon */}
              <div className="md:col-span-1 flex md:justify-end items-start pt-1">
                <div className="w-[48px] h-[48px] bg-[#E5E82E] flex items-center justify-center shrink-0">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M4.6 15.5C2.1 15.5 0.5 13.7 0.5 10.9C0.5 6.8 3.5 2.7 8.1 0.5L9.3 2.3C6.1 4.1 4.4 6.4 4.2 8.5C4.6 8.3 5.2 8.2 5.8 8.2C7.8 8.2 9.2 9.6 9.2 11.7C9.2 13.9 7.3 15.5 4.6 15.5ZM14.9 15.5C12.4 15.5 10.8 13.7 10.8 10.9C10.8 6.8 13.8 2.7 18.4 0.5L19.6 2.3C16.4 4.1 14.7 6.4 14.5 8.5C14.9 8.3 15.5 8.2 16.1 8.2C18.1 8.2 19.5 9.6 19.5 11.7C19.5 13.9 17.6 15.5 14.9 15.5Z"
                      fill="#111111"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          150+ ASSOCIATED CLIENTS LOGO GRID (Video 3: 00:22 - 00:24)
         ===================================================================== */}
      <section className="bg-white pt-10 pb-20 px-7 md:px-10">
        <h3 className="text-[13px] font-bold uppercase tracking-[0.02em] text-[#111111] text-center mb-10">
          150+ ASSOCIATED CLIENTS
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {/* Logo 1: Geometric LOGO */}
          <div className="bg-[#F5F5F5] h-[140px] md:h-[156px] flex items-center justify-center p-6">
            <svg width="110" height="32" viewBox="0 0 110 32" fill="none">
              <text
                x="55"
                y="22"
                textAnchor="middle"
                fill="#222222"
                fontSize="20"
                fontWeight="800"
                letterSpacing="3"
              >
                LOGO
              </text>
            </svg>
          </div>

          {/* Logo 2: Triple Interlocking Chain Mark */}
          <div className="bg-[#F5F5F5] h-[140px] md:h-[156px] flex items-center justify-center p-6">
            <svg width="96" height="36" viewBox="0 0 96 36" fill="none">
              <path
                d="M22 26C16.5 26 12 21.5 12 16C12 10.5 16.5 6 22 6H30C35.5 6 40 10.5 40 16M38 26C32.5 26 28 21.5 28 16C28 10.5 32.5 6 38 6H46C51.5 6 56 10.5 56 16C56 21.5 51.5 26 46 26M54 16C54 10.5 58.5 6 64 6H72C77.5 6 82 10.5 82 16C82 21.5 77.5 26 72 26H64"
                stroke="#222222"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Logo 3: Shapes + logoipsum° */}
          <div className="bg-[#F5F5F5] h-[140px] md:h-[156px] flex flex-col items-center justify-center p-6 gap-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 bg-[#222222] inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#222222] inline-block" />
              <span className="w-3.5 h-3.5 rotate-45 bg-[#222222] inline-block" />
            </div>
            <span className="text-[15px] font-bold tracking-tight text-[#222222]">
              logoipsum°
            </span>
          </div>

          {/* Logo 4: Bold Angled Monogram */}
          <div className="bg-[#F5F5F5] h-[140px] md:h-[156px] flex items-center justify-center p-6">
            <svg width="86" height="40" viewBox="0 0 86 40" fill="none">
              <path
                d="M18 8H50L44 32H12L18 8Z"
                stroke="#222222"
                strokeWidth="4"
              />
              <path
                d="M46 12H72L66 36H40L46 12Z"
                fill="#222222"
              />
            </svg>
          </div>

          {/* Logo 5: Slanted Speed Striped LOGO */}
          <div className="bg-[#F5F5F5] h-[140px] md:h-[156px] flex items-center justify-center p-6">
            <span className="text-[22px] font-black italic tracking-widest text-[#222222] uppercase">
              LOGO
            </span>
          </div>

          {/* Logo 6: IPSUM with Lightning Bolt */}
          <div className="bg-[#F5F5F5] h-[140px] md:h-[156px] flex items-center justify-center p-6">
            <div className="flex items-center font-extrabold text-[19px] tracking-wider text-[#222222]">
              <span>IP</span>
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="mx-0.5">
                <path d="M10 0L0 14H7L5 24L16 10H9L10 0Z" fill="#222222" />
              </svg>
              <span>UM</span>
              <sup className="text-[9px] ml-0.5">®</sup>
            </div>
          </div>

          {/* Logo 7: Concentric Rounded Maze Emblem */}
          <div className="bg-[#F5F5F5] h-[140px] md:h-[156px] flex items-center justify-center p-6">
            <svg width="68" height="44" viewBox="0 0 68 44" fill="none">
              <rect
                x="4"
                y="4"
                width="60"
                height="36"
                rx="18"
                stroke="#222222"
                strokeWidth="2.5"
              />
              <rect
                x="10"
                y="10"
                width="48"
                height="24"
                rx="12"
                stroke="#222222"
                strokeWidth="2.5"
              />
              <rect
                x="16"
                y="16"
                width="36"
                height="12"
                rx="6"
                stroke="#222222"
                strokeWidth="2.5"
              />
            </svg>
          </div>

          {/* Logo 8: Split Pill [LOGO][   ] */}
          <div className="bg-[#F5F5F5] h-[140px] md:h-[156px] flex items-center justify-center p-6">
            <div className="inline-flex items-center border-2 border-[#222222] rounded-sm overflow-hidden">
              <span className="bg-[#222222] text-white text-[11px] font-extrabold px-2.5 py-1 tracking-wider">
                LOGO
              </span>
              <span className="w-8 h-5 bg-transparent inline-block" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 06: FAQ'S — CURIOUS? WE HAVE ALL THE ANSWERS
          (Video 3: 00:23 - 00:27)
         ===================================================================== */}
      <section
        ref={faqSectionRef}
        id="faqs"
        className="bg-white pt-[90px] md:pt-[110px] pb-[120px] md:pb-[140px] px-7 md:px-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 items-start">
          {/* Left Column: 06 —— FAQ'S */}
          <div className="md:col-span-4 flex items-center pt-2">
            <span className="text-[12px] font-medium text-[#111111] tabular-nums">
              06
            </span>
            <span
              aria-hidden="true"
              className="inline-block w-[36px] h-[1px] bg-[#111111]/35 mx-3"
            />
            <span className="text-[12px] font-medium tracking-[0.04em] text-[#111111] uppercase">
              FAQ&apos;S
            </span>
          </div>

          {/* Right Column: Headline + 5 Accordion Cards */}
          <div className="md:col-span-8">
            <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-normal uppercase text-[#111111] leading-[1.12] tracking-[-0.02em] mb-14">
              <span className="block">CURIOUS? WE HAVE ALL</span>
              <span className="block">THE ANSWERS</span>
            </h2>

            <div className="space-y-4">
              {FAQS_LIST.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={faq.question}
                    className="border border-[#EBEBEB] bg-white transition-colors hover:border-[#111111]/30"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full px-6 md:px-7 py-6 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                    >
                      <span className="text-[17px] md:text-[19px] font-normal text-[#111111] tracking-[-0.01em] pr-4">
                        {faq.question}
                      </span>
                      <span className="w-7 h-7 rounded-full bg-[#F2F2F2] flex items-center justify-center text-[#111111] shrink-0">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 md:px-7 pb-6 pt-1 text-[15px] text-[#111111]/70 leading-relaxed border-t border-[#EBEBEB]/60">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          PRE-FOOTER CTA BANNER: ANYTHING IN MIND / LET'S TALK
          (Video 3: 00:27 - 00:29)
         ===================================================================== */}
      <section className="relative w-full h-[520px] sm:h-[580px] md:h-[630px] overflow-hidden bg-[#5F9EA0]">
        <img
          src={ctaGabledRoofsImage}
          alt="Modern architectural gabled roofs against teal sky"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />

        <div className="relative z-10 pt-20 sm:pt-24 md:pt-28 px-4 flex flex-col items-center text-center">
          <h2 className="text-[44px] sm:text-[68px] md:text-[88px] lg:text-[96px] font-bold uppercase text-white leading-[0.94] tracking-[-0.03em]">
            <span className="block">ANYTHING IN MIND</span>
            <span className="block">LET&apos;S TALK</span>
          </h2>

          <div className="mt-8">
            <button
              type="button"
              onClick={() => {
                setContactSubmitted(false);
                setContactOpen(true);
              }}
              className="inline-flex items-center gap-[2px] p-[2px] bg-white/20 backdrop-blur-xs cursor-pointer group focus:outline-none"
            >
              <span className="bg-[#141414] text-white text-[11px] font-bold uppercase tracking-[0.05em] px-6 h-[44px] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#262626] whitespace-nowrap">
                LET&apos;S TALK
              </span>
              <span className="bg-[#E5E82E] text-[#111111] w-[44px] h-[44px] flex items-center justify-center">
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          BLACK STUX FOOTER WITH GIANT FULL-BLEED WORDMARK
          (Video 3: 00:28 - 00:34)
         ===================================================================== */}
      <footer className="bg-[#050505] text-white pt-8 px-7 md:px-10 overflow-hidden">
        {/* Top Row: STUX on left, FB / LI / IN on right */}
        <div className="flex items-center justify-between text-[12px] font-bold uppercase tracking-wider">
          <button
            type="button"
            onClick={triggerHeroReveal}
            className="text-[14px] font-extrabold tracking-[-0.02em] text-white cursor-pointer"
          >
            STUX
          </button>

          <div className="flex items-center gap-3 text-[11px] font-semibold text-white">
            <a
              href="#facebook"
              onClick={(e) => {
                e.preventDefault();
                setContactOpen(true);
              }}
              className="hover:text-[#E5E82E] transition-colors"
            >
              FB
            </a>
            <span className="text-white/40">/</span>
            <a
              href="#linkedin"
              onClick={(e) => {
                e.preventDefault();
                setContactOpen(true);
              }}
              className="hover:text-[#E5E82E] transition-colors"
            >
              LI
            </a>
            <span className="text-white/40">/</span>
            <a
              href="#instagram"
              onClick={(e) => {
                e.preventDefault();
                setContactOpen(true);
              }}
              className="hover:text-[#E5E82E] transition-colors"
            >
              IN
            </a>
          </div>
        </div>

        {/* Center Email & Large Yellow Phone Number */}
        <div className="py-20 md:py-24 text-center">
          <a
            href="mailto:hello@stux.com"
            className="text-[18px] md:text-[20px] font-normal text-white hover:text-[#E5E82E] transition-colors inline-block mb-3"
          >
            hello@stux.com
          </a>
          <div className="text-[32px] sm:text-[46px] md:text-[56px] font-normal text-[#E5E82E] leading-none tracking-[-0.02em] tabular-nums">
            +62 018-734-377
          </div>
        </div>

        {/* 3-Column Metadata Row above thin divider line */}
        <div className="pb-9 border-b border-white/15 grid grid-cols-1 md:grid-cols-3 gap-6 items-end text-[13px] text-white/85 leading-[1.45]">
          <div>
            <div>©2025 Stux inc. All</div>
            <div>Right Reserved</div>
          </div>

          <div className="md:text-center">
            <div>210 Wallet Street, California,</div>
            <div>Main HQ, USA</div>
          </div>

          <div className="md:text-right">
            <div>
              <button
                type="button"
                onClick={triggerHeroReveal}
                className="hover:text-[#E5E82E] transition-colors cursor-pointer"
              >
                Home
              </button>
              <span className="mx-2 text-white/50">/</span>
              <a href="#about" className="hover:text-[#E5E82E] transition-colors">
                About us
              </a>
              <span className="mx-2 text-white/50">/</span>
            </div>
            <div>
              <a href="#projects" className="hover:text-[#E5E82E] transition-colors">
                Projects
              </a>
              <span className="mx-2 text-white/50">/</span>
              <a href="#faqs" className="hover:text-[#E5E82E] transition-colors">
                Error
              </a>
            </div>
          </div>
        </div>

        {/* Colossal Edge-to-Edge Cropped STUX Wordmark at the very bottom */}
        <div className="pt-6 -mx-7 md:-mx-10 overflow-hidden select-none pointer-events-none">
          <div className="text-[24.5vw] font-bold uppercase text-white leading-[0.74] tracking-[-0.04em] text-center -mb-[3.8vw]">
            STUX
          </div>
        </div>
      </footer>

      {/* =====================================================================
          FULL-SCREEN NAVIGATION OVERLAY (Hamburger Menu)
         ===================================================================== */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#111111] text-white flex flex-col justify-between p-7 md:p-10">
          <div className="flex items-center justify-between h-[42px]">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-white hover:text-[#E5E82E] transition-colors cursor-pointer"
            >
              <X size={22} />
              <span>CLOSE</span>
            </button>

            <span className="text-[22px] font-extrabold tracking-[-0.02em] uppercase">
              STUX
            </span>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setContactSubmitted(false);
                setContactOpen(true);
              }}
              className="flex items-center gap-[2px] cursor-pointer"
            >
              <span className="bg-white text-[#111111] text-[11px] font-bold uppercase tracking-[0.05em] px-5 h-[42px] flex items-center justify-center">
                LET&apos;S TALK
              </span>
              <span className="bg-[#E5E82E] text-[#111111] w-[42px] h-[42px] flex items-center justify-center">
                <ArrowUpRight size={16} strokeWidth={2} />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-auto py-8">
            <nav className="lg:col-span-7 flex flex-col gap-3">
              {[
                {
                  num: '01',
                  label: 'ABOUT US',
                  action: () => {
                    setMenuOpen(false);
                    aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                  },
                },
                {
                  num: '02',
                  label: 'PROJECTS',
                  action: () => {
                    setMenuOpen(false);
                    projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                  },
                },
                {
                  num: '03',
                  label: 'SERVICES',
                  action: () => {
                    setMenuOpen(false);
                    servicesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                  },
                },
                {
                  num: '04',
                  label: 'PROCESS',
                  action: () => {
                    setMenuOpen(false);
                    processSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                  },
                },
                {
                  num: '05',
                  label: 'TESTIMONIALS',
                  action: () => {
                    setMenuOpen(false);
                    testimonialsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                  },
                },
                {
                  num: '06',
                  label: 'FAQ’S',
                  action: () => {
                    setMenuOpen(false);
                    faqSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                  },
                },
              ].map((item) => (
                <button
                  key={item.num}
                  type="button"
                  onClick={item.action}
                  className="group flex items-baseline gap-5 text-left py-1.5 border-b border-white/10 hover:border-[#E5E82E] transition-colors cursor-pointer"
                >
                  <span className="text-[13px] font-medium text-[#E5E82E] tabular-nums">
                    ({item.num})
                  </span>
                  <span className="text-[28px] sm:text-[38px] font-bold uppercase tracking-[-0.02em] text-white group-hover:text-[#E5E82E] transition-colors">
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>

            <div className="lg:col-span-5 flex flex-col justify-end gap-6 border-t lg:border-t-0 lg:border-l border-white/15 pt-8 lg:pt-0 lg:pl-10">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-2">
                  MAIN HQ
                </div>
                <p className="text-[15px] text-white/90 leading-relaxed">
                  210 Wallet Street, California,
                  <br />
                  Main HQ, USA
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-2">
                  DIRECT CONTACT
                </div>
                <p className="text-[15px] text-white/90">
                  hello@stux.com · +62 018-734-377
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[12px] text-white/50">
            <span>©2025 STUX INC.</span>
            <span>CALIFORNIA · MADRID · BERLIN · ROME</span>
          </div>
        </div>
      )}

      {/* =====================================================================
          PROJECT SPECIFICATION MODAL
         ===================================================================== */}
      {selectedModalData && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 md:p-8">
          <div className="bg-white text-[#111111] w-full max-w-3xl border border-[#EBEBEB] overflow-hidden shadow-2xl">
            <div className="relative h-64 sm:h-80 bg-black">
              <img
                src={selectedModalData.image}
                alt={selectedModalData.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedModalData(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-[#141414] text-white hover:bg-[#E5E82E] hover:text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#E5E82E] mb-1">
                    {selectedModalData.category} · {selectedModalData.location}
                  </div>
                  <h3 className="text-[28px] sm:text-[36px] font-bold uppercase leading-none tracking-[-0.02em]">
                    {selectedModalData.title}
                  </h3>
                </div>
                <span className="border border-white/70 rounded-full px-4 py-1 text-[11px] font-semibold uppercase">
                  {selectedModalData.sqft}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-[15px] text-[#111111]/80 leading-relaxed mb-6">
                {selectedModalData.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-b border-[#EBEBEB] py-5 mb-6">
                {selectedModalData.specs.map((spec) => (
                  <div key={spec.label}>
                    <div className="text-[11px] font-medium uppercase text-[#111111]/50 mb-1">
                      {spec.label}
                    </div>
                    <div className="text-[13px] font-semibold text-[#111111]">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedModalData(null);
                    setContactSubmitted(false);
                    setContactOpen(true);
                  }}
                  className="inline-flex items-center gap-[2px] cursor-pointer"
                >
                  <span className="bg-[#141414] text-white text-[11px] font-bold uppercase tracking-wider px-5 h-[42px] flex items-center justify-center">
                    INQUIRE ABOUT PROJECT
                  </span>
                  <span className="bg-[#E5E82E] text-[#111111] w-[42px] h-[42px] flex items-center justify-center">
                    <ArrowUpRight size={16} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MORE ABOUT US MODAL
         ===================================================================== */}
      {aboutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 md:p-8">
          <div className="bg-white text-[#111111] w-full max-w-2xl border border-[#EBEBEB] p-7 sm:p-10 shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-[#EBEBEB]">
              <div className="flex items-center">
                <span className="text-[12px] font-medium tabular-nums">01</span>
                <span className="inline-block w-[30px] h-[1px] bg-[#111111]/40 mx-3" />
                <span className="text-[12px] font-medium uppercase tracking-wider">
                  ABOUT STUX STUDIO
                </span>
              </div>
              <button
                type="button"
                onClick={() => setAboutModalOpen(false)}
                className="w-9 h-9 bg-[#141414] text-white flex items-center justify-center hover:bg-[#E5E82E] hover:text-[#111111] transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <h3 className="mt-6 text-[28px] sm:text-[36px] font-normal uppercase leading-[1.12] tracking-[-0.02em]">
              ELEVATED DESIGN TO TRANSFORM YOUR DAILY LIVING
            </h3>

            <p className="mt-4 text-[15px] text-[#111111]/75 leading-relaxed">
              Skilled architects and interior designers crafting accessible, high-quality spaces for all. With over 120K happy clients and 160+ executed project works globally, STUX merges modern structural precision with warm residential comfort.
            </p>

            <div className="grid grid-cols-2 gap-4 my-7">
              {STATS.map((s) => (
                <div key={s.index} className="border border-[#EBEBEB] p-4">
                  <div className="text-[32px] font-normal tracking-[-0.03em] tabular-nums">
                    {s.value}
                  </div>
                  <div className="text-[13px] font-medium text-[#111111] mt-1">
                    {s.line1} {s.line2}
                  </div>
                  <p className="text-[12px] text-[#111111]/60 mt-1">{s.detail}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setAboutModalOpen(false);
                  projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-[2px] cursor-pointer"
              >
                <span className="bg-[#141414] text-white text-[11px] font-bold uppercase tracking-wider px-6 h-[44px] flex items-center justify-center">
                  EXPLORE PROJECTS
                </span>
                <span className="bg-[#E5E82E] text-[#111111] w-[44px] h-[44px] flex items-center justify-center">
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          LET'S TALK CONSULTATION MODAL
         ===================================================================== */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 md:p-8">
          <div className="bg-white text-[#111111] w-full max-w-xl border border-[#EBEBEB] p-7 sm:p-10 shadow-2xl">
            <div className="flex items-center justify-between pb-5 border-b border-[#EBEBEB]">
              <span className="text-[12px] font-bold uppercase tracking-wider">
                STUX — PROJECT COMMISSION INQUIRY
              </span>
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                className="w-9 h-9 bg-[#141414] text-white flex items-center justify-center hover:bg-[#E5E82E] hover:text-[#111111] transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {contactSubmitted ? (
              <div className="py-10 text-center">
                <div className="w-12 h-12 bg-[#E5E82E] text-[#111111] mx-auto flex items-center justify-center mb-4">
                  <Check size={22} strokeWidth={2.5} />
                </div>
                <h3 className="text-[26px] font-bold uppercase tracking-[-0.02em]">
                  INQUIRY RECEIVED
                </h3>
                <p className="mt-2 text-[14px] text-[#111111]/70 max-w-md mx-auto">
                  Thank you, {contactForm.name}. Our Principal Architect will review your brief for {contactForm.projectType} and respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setContactOpen(false)}
                  className="mt-7 px-6 py-3 bg-[#141414] text-white text-[11px] font-bold uppercase tracking-wider cursor-pointer"
                >
                  RETURN TO STUX
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111]/70 mb-1.5">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="e.g. Marcus Vance"
                    className="w-full border border-[#CCCCCC] px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111]/70 mb-1.5">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="marcus@domain.com"
                    className="w-full border border-[#CCCCCC] px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111]/70 mb-1.5">
                      PROJECT INTEREST
                    </label>
                    <select
                      value={contactForm.projectType}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, projectType: e.target.value })
                      }
                      className="w-full border border-[#CCCCCC] px-3.5 py-2.5 text-[14px] bg-white focus:outline-none focus:border-[#111111]"
                    >
                      <option value="Cube Sky Villa (2,730 SQFT)">Cube Sky Villa (2,730 SQFT)</option>
                      <option value="Diagon Tower">Diagon Tower</option>
                      <option value="Claxio Villa">Claxio Villa</option>
                      <option value="Voxi Museum">Voxi Museum</option>
                      <option value="Blue Sky Villa">Blue Sky Villa</option>
                      <option value="Beach Villa Resort (3,260 SQFT)">Beach Villa Resort (3,260 SQFT)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111]/70 mb-1.5">
                      ESTIMATED BUDGET
                    </label>
                    <select
                      value={contactForm.budget}
                      onChange={(e) => setContactForm({ ...contactForm, budget: e.target.value })}
                      className="w-full border border-[#CCCCCC] px-3.5 py-2.5 text-[14px] bg-white focus:outline-none focus:border-[#111111]"
                    >
                      <option value="$750K – $1.5M">$750K – $1.5M</option>
                      <option value="$1.5M – $3M">$1.5M – $3M</option>
                      <option value="$3M – $6M+">$3M – $6M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111]/70 mb-1.5">
                    PROJECT NOTES
                  </label>
                  <textarea
                    rows={3}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tell us about your architectural vision..."
                    className="w-full border border-[#CCCCCC] px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-[2px] cursor-pointer group"
                  >
                    <span className="bg-[#141414] text-white text-[11px] font-bold uppercase tracking-[0.05em] px-6 h-[44px] flex items-center justify-center group-hover:bg-[#262626]">
                      SUBMIT INQUIRY
                    </span>
                    <span className="bg-[#E5E82E] text-[#111111] w-[44px] h-[44px] flex items-center justify-center">
                      <ArrowUpRight size={16} strokeWidth={2} />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
