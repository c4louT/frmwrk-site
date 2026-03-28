'use client'

import { useMemo, useState } from "react"

type Lang = "ru" | "en"
type View = "home" | "portfolio" | "films" | "music" | "campaigns"

type PortfolioItem = {
  title: string
  meta: string
  description: string
  image: string
  url?: string
}

type CategoryCard = {
  key: Exclude<View, "home" | "portfolio">
  title: string
  lead: string
  cta: string
  image: string
}

export default function VideoProductionWebsite() {
  const [lang, setLang] = useState<Lang>("ru")
  const [view, setView] = useState<View>("home")

  const t = useMemo(() => {
    const copy = {
      ru: {
        navPortfolio: "Портфолио",
        navPipeline: "Процесс",
        navTeam: "Команда",
        navContact: "Контакты",
        topCta: "Связаться",
        badge: "Moscow Creative Agency",
        hero1: "КОНТЕНТ",
hero2: "О КОТОРОМ",
hero3: "ХОЧЕТСЯ",
hero4: "КРИЧАТЬ",
        heroText:
          "Мы создаём фильмы о брендах, рекламные кампании, музыкальные видео и имиджевый контент, которые работают на результат. Нас привлекают проекты с характером и визуальным весом, где каждый элемент кадра имеет значение.",
        heroPrimary: "Открыть портфолио",
        heroSecondary: "Как мы работаем",
        heroCardKicker: "Фокус",
        heroCardTitle: "Образ, движение, настроение",
        portfolioKicker: "Портфолио",
        portfolioTitle: "Три основные линии нашей работы",
        portfolioText:
          "Фильмы, музыкальные видео и кампейны. Где-то важнее драматургия, где-то — энергия трека, где-то — точность образа и атмосферы бренда. Нам нравится переключаться между этими режимами, не теряя характера изображения.",
        aboutKicker: "О FRMWRK",
        aboutTitle: "Нам важно, как кадр чувствуется",
        aboutP1:
        "Нас собирает общий вкус к изображению и внимательность к деталям. Нам интересно, как работает ритм, как двигается тело в кадре, как свет садится на ткань, как пространство начинает звучать вместе с человеком. Поэтому нам особенно близки fashion-съёмки, music x fashion-проекты, кампейны и короткая форма, где стиль не приклеивают сверху, а находят внутри самого материала.",
        aboutP2:
          "Поэтому нам особенно близки fashion-съёмки, music x fashion-проекты, кампейны и короткая форма, где стиль не приклеивают сверху, а находят внутри самого материала.",
        pipelineKicker: "Процесс",
        pipelineTitle: "От первого ощущения до финального кадра",
        pipelineText:
          "Обычно всё начинается с разговора: что это за проект, какое у него настроение, как он должен ощущаться. Дальше мы собираем решение по изображению, команде, локации и посту так, чтобы идея не потерялась по дороге.",
        teamKicker: "Команда",
        teamTitle: "Наша команда",
        contactKicker: "Контакты",
        contactTitle: "Обсудим проект",
        contactText:
          "Если у вас есть бренд, артист, коллекция, трек или просто смутное ощущение будущей съёмки — напишите нам. Поможем превратить это в понятную и живую визуальную форму.",
        contactNote:
          "Можно прийти с готовым брифом, а можно — с набором референсов и интонацией. Дальше уже разберёмся вместе.",
        footer: "FRMWRK — Moscow Creative Agency",
        openSection: "Открыть проект",
        backToPortfolio: "Назад к портфолио",
        teamNames: [
          "Артемий Степанов",
          "Никита Сошников",
          "Владимир Крестьянинов",
          "Егор Чураков",
          "Арсений Ермаков",
        ],
        categories: {
          films: {
            title: "Фильмы",
            lead: "Игровые, документальные и телевизионные проекты — от камерных историй до большого формата.",
            cta: "Смотреть фильмы",
          },
          music: {
            title: "Музыкальные видео",
            lead: "Клипы, тизеры и музыкальные формы, где изображение работает на образ артиста и атмосферу трека.",
            cta: "Смотреть клипы",
          },
          campaigns: {
            title: "Кампейны",
            lead: "Брендовые съёмки и рекламные проекты, где важно не только сообщение, но и визуальный вес кадра.",
            cta: "Смотреть кампейны",
          },
        },
        listingLabel: "Проекты",
        pipe1: "Разработка",
        pipe1Text:
          "Собираем treatment, референсы, ритм, цветовую среду и визуальную логику проекта.",
        pipe2: "Съёмка",
        pipe2Text:
          "Работаем с кадром через свет, оптику, движение, пластику тела и внутренний темп сцены.",
        pipe3: "Пост",
        pipe3Text:
          "Монтаж, цвет и звук собирают материал заново и задают ему окончательный темперамент.",
      },
      en: {
        navPortfolio: "Portfolio",
        navPipeline: "Process",
        navTeam: "Team",
        navContact: "Contact",
        topCta: "Contact us",
        badge: "Moscow Creative Agency",
        hero1: "CONTENT",
        hero2: "YOU WANT",
        hero3: "TO",
        hero4: "SHOUT ABOUT",
        heroText:
          "We create brand films, advertising campaigns, music videos, and image content that work for results. We are drawn to projects with character and visual weight, where every element inside the frame matters.",
        heroPrimary: "Open portfolio",
        heroSecondary: "How we work",
        heroCardKicker: "Focus",
        heroCardTitle: "Image, movement, mood",
        portfolioKicker: "Portfolio",
        portfolioTitle: "Three main lines of our work",
        portfolioText:
          "Films, music videos, and campaigns. Each one asks for a different rhythm, a different visual logic, and a different way of holding attention.",
        aboutKicker: "About FRMWRK",
        aboutTitle: "We care about how an image feels",
        aboutP1:
          "What brings us together is a shared feel for image and attention to detail. We care about rhythm, physical presence, casting, light, texture, and the way a frame begins to hold attention.",
        aboutP2:
          "That is why we feel especially close to fashion shoots, music x fashion projects, campaign videos, and short-form work where style is not pasted on top, but found inside the material itself.",
        pipelineKicker: "Process",
        pipelineTitle: "From the first sensation to the final frame",
        pipelineText:
          "Most projects start with a conversation: what this piece is, what it should feel like, and how it should move. From there we build the image, the team, the location logic, and the post-production path.",
        teamKicker: "Team",
        teamTitle: "Our team",
        contactKicker: "Contact",
        contactTitle: "Let’s discuss the project",
        contactText:
          "If you have a brand, an artist, a collection, a track, or even just a vague feeling for a future shoot, write to us. We can help turn it into a clear visual form.",
        contactNote:
          "You can come with a full brief, or just with references and a mood. We will figure out the rest together.",
        footer: "FRMWRK — Moscow Creative Agency",
        openSection: "Open project",
        backToPortfolio: "Back to portfolio",
        teamNames: [
          "Artemy Stepanov",
          "Nikita Soshnikov",
          "Vladimir Krestyaninov",
          "Egor Churakov",
          "Arseny Ermakov",
        ],
        categories: {
          films: {
            title: "Films",
            lead: "Feature, documentary, and TV projects — from intimate stories to larger-scale productions.",
            cta: "View films",
          },
          music: {
            title: "Music videos",
            lead: "Clips, teasers, and music-driven formats where the image works for the artist’s presence and the atmosphere of the track.",
            cta: "Watch videos",
          },
          campaigns: {
            title: "Campaigns",
            lead: "Brand and commercial productions where not only the message matters, but the visual weight of the frame.",
            cta: "See campaigns",
          },
        },
        listingLabel: "Projects",
        pipe1: "Development",
        pipe1Text:
          "We shape the treatment, references, rhythm, color world, and visual logic of the project.",
        pipe2: "Shoot",
        pipe2Text:
          "We work through light, optics, movement, physical presence, and the inner tempo of the scene.",
        pipe3: "Post",
        pipe3Text:
          "Editing, color, and sound rebuild the material and give it its final temperament.",
      },
    }
    return copy[lang]
  }, [lang])

  const categoryCards: CategoryCard[] = [
    {
      key: "films",
      title: t.categories.films.title,
      lead: t.categories.films.lead,
      cta: t.categories.films.cta,
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753833848116-c4p1qnhfncj.webp",
    },
    {
      key: "music",
      title: t.categories.music.title,
      lead: t.categories.music.lead,
      cta: t.categories.music.cta,
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753655883021-n5dy6h1wnuq.png",
    },
    {
      key: "campaigns",
      title: t.categories.campaigns.title,
      lead: t.categories.campaigns.lead,
      cta: t.categories.campaigns.cta,
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753657658419-hq8fyhbny3s.jpg",
    },
  ]

  const portfolioData: Record<Exclude<View, "home" | "portfolio">, PortfolioItem[]> = {
    films: [
      {
        title: "Two Hills",
        meta: lang === "ru" ? "Сериал, 2022–..." : "TV Series, 2022–...",
        description:
          lang === "ru"
            ? "Что будет, если после биологической войны почти всё мужское население исчезнет? Женщины строят новый мир с экогородами, наукой и новой социальной моделью."
            : "What happens if, after a biological war, almost all the male population disappears? Women build a new world with eco-towns, science, and a new social model.",
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753833848116-c4p1qnhfncj.webp",
        url: "https://www.kinopoisk.ru/series/4476445/",
      },
      {
        title: "VK под шубой",
        meta: lang === "ru" ? "Шоу, 2024" : "Show, 2024",
        description: lang === "ru" ? "Новогоднее шоу от VK." : "New Year show by VK.",
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753655327794-0xlt0p6g4lr.jpg",
        url: "https://vk.com/video-1_456250334",
      },
      {
        title: "Tiny Bunny",
        meta: lang === "ru" ? "Полный метр, 2025" : "Feature Film, 2025",
        description:
          lang === "ru"
            ? "В тихой таёжной деревне начинают исчезать дети, и страх постепенно получает знакомое лицо."
            : "In a quiet taiga village, children start disappearing, and fear gradually takes on a familiar face.",
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753655573849-rsnbthe0raf.jpg",
        url: "https://youtu.be/QJ7k9q7mEsI",
      },
    ],
    music: [
      {
        title: "DFYSAGA x TVETH — С окраин",
        meta: lang === "ru" ? "Клип, 2024" : "Music video, 2024",
        description:
          lang === "ru"
            ? "Клип с тёмной, собранной визуальной средой, где движение, свет и пространство работают на внутреннее напряжение трека."
            : "A music video built around a dark, concentrated visual space where movement, light, and environment support the inner tension of the track.",
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753655883021-n5dy6h1wnuq.png",
        url: "https://vimeo.com/",
      },
      {
        title: "reverse",
        meta: lang === "ru" ? "Клип, 2024" : "Music video, 2024",
        description:
          lang === "ru"
            ? "Пластика тел, холодный свет и густая атмосфера собирают клип как почти хореографическую форму."
            : "Physical movement, cold light, and dense atmosphere shape the piece into an almost choreographic form.",
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753655891140-wyhaeu5657.png",
        url: "https://vimeo.com/",
      },
      {
        title: "4n Way — Мигалки",
        meta: lang === "ru" ? "Клип, 2024" : "Music video, 2024",
        description:
          lang === "ru"
            ? "Более уличная и живая энергия кадра, где импульс, среда и персонаж работают как единый образ."
            : "A more street-driven and lively image system where energy, environment, and performer work as one.",
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753655896537-ozmkjjiox1.jpg",
        url: "https://youtu.be/",
      },
      {
        title: "Веснушка — Обнимай",
        meta: lang === "ru" ? "Клип" : "Music video",
        description:
          lang === "ru"
            ? "Музыкальное видео на песню «Обнимай»."
            : "Music video for the track “Obnimay”.",
        image: "/media/obnimay-poster.jpg",
        url: "https://www.youtube.com/watch?v=dg9EAXsNC4A",
      },
      {
        title: "На простор",
        meta: lang === "ru" ? "Клип" : "Music video",
        description:
          lang === "ru"
            ? "Музыкальное видео на песню «На простор»."
            : "Music video for the track “Na Prostor”.",
        image: "/media/na-prostor-poster.jpg",
        url: "https://youtu.be/UmynU8e1gEc",
      },
    ],
    campaigns: [
      {
        title: "Аттракцион «Храм огня»",
        meta: lang === "ru" ? "Skazka Park, 2025" : "Skazka Park, 2025",
        description:
          lang === "ru"
            ? "Кампейн с аттракционной энергией и ярким персонажным присутствием внутри кадра."
            : "A campaign built around attraction energy and vivid on-screen presence.",
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753657651236-untw3bgbetl.jpg",
      },
      {
        title: "VK Marusya",
        meta: lang === "ru" ? "Social Technologies, 2025" : "Social Technologies, 2025",
        description:
          lang === "ru"
            ? "Рекламная история, где технология входит в бытовое пространство легко и визуально убедительно."
            : "A branded story where technology enters everyday space in a light and visually persuasive way.",
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753657652649-qkjse8ws43n.jpg",
      },
      {
        title: "Eternal Elegance",
        meta: lang === "ru" ? "Fashion House, 2025" : "Fashion House, 2025",
        description:
          lang === "ru"
            ? "Модный кампейн, построенный на классической атмосфере, постановочном свете и чувстве пространства."
            : "A fashion campaign built on classical atmosphere, staged light, and a strong sense of space.",
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753657658419-hq8fyhbny3s.jpg",
      },
    ],
  }

  const teamImages = [
    "https://frmwrk.vercel.app/_next/image?q=75&url=https%3A%2F%2Fslelguoygbfzlpylpxfs.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fdocument-uploads%2F1753570314645-23b8jnph56s.jpg&w=3840",
    "https://frmwrk.vercel.app/_next/image?q=75&url=https%3A%2F%2Fslelguoygbfzlpylpxfs.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fdocument-uploads%2F1753569894588-ye5jbylq09q.jpg&w=3840",
    "https://frmwrk.vercel.app/_next/image?q=75&url=https%3A%2F%2Fslelguoygbfzlpylpxfs.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fdocument-uploads%2F1753570327512-owfj9u2n69.jpg&w=3840",
    "https://frmwrk.vercel.app/_next/image?q=75&url=https%3A%2F%2Fslelguoygbfzlpylpxfs.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fdocument-uploads%2F1753832716860-srsz977csi.jpg&w=3840",
    "https://frmwrk.vercel.app/_next/image?q=75&url=https%3A%2F%2Fslelguoygbfzlpylpxfs.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fdocument-uploads%2F1753832718281-mkfoxflnsbj.jpg&w=3840",
  ]

  const team = t.teamNames.map((name, index) => ({ name, image: teamImages[index] }))

  const renderPortfolioHub = () => (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.35em] text-[#9c9c9d]">{t.portfolioKicker}</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#f1f1f1] md:text-5xl">
            {t.portfolioTitle}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-[#aaaaab] md:text-base">{t.portfolioText}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {categoryCards.map((card) => (
          <button
            key={card.key}
            type="button"
            onClick={() => setView(card.key)}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] text-left transition duration-300 hover:-translate-y-1 hover:border-[#c31432]/50"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              </div>
            </div>
            <div className="space-y-5 p-6">
              <p className="text-sm leading-6 text-[#b8b8b9]">{card.lead}</p>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-sm text-[#9f9fa1]">
                <span>{t.openSection}</span>
                <span className="text-[#e6e6e6] transition group-hover:translate-x-1">{card.cta} ↗</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  )

  const renderCategoryPage = (key: Exclude<View, "home" | "portfolio">) => {
    const card = categoryCards.find((item) => item.key === key)!
    const items = portfolioData[key]

    return (
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <button
          type="button"
          onClick={() => setView("portfolio")}
          className="mb-8 rounded-full border border-white/15 px-4 py-2 text-sm text-[#f1f1f1] transition hover:border-[#c31432] hover:bg-[#c31432]"
        >
          ← {t.backToPortfolio}
        </button>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-5">
            <div className="text-sm uppercase tracking-[0.35em] text-[#9c9c9d]">{t.listingLabel}</div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[#f1f1f1] md:text-6xl">{card.title}</h1>
            <p className="max-w-2xl text-lg leading-8 text-[#b8b8b9]">{card.lead}</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/50">
            <img src={card.image} alt={card.title} className="h-[420px] w-full object-cover" />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => {
            const isClickable = Boolean(item.url)

            return (
              <article
                key={item.title}
                onClick={() => {
                  if (item.url) {
                    window.open(item.url, "_blank", "noopener,noreferrer")
                  }
                }}
                className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] text-left transition hover:-translate-y-1 hover:border-[#c31432]/50 ${
                  isClickable ? "cursor-pointer" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="space-y-4 p-6">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#8a8a90]">{item.meta}</div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-6 text-[#b8b8b9]">{item.description}</p>
                  {item.url && (
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation()
                          window.open(item.url, "_blank", "noopener,noreferrer")
                        }}
                        className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-[#c31432] hover:bg-[#c31432]"
                      >
                        {t.openSection} ↗
                      </button>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </section>
    )
  }

  const renderHome = () => (
    <>
      <section id="top" className="mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-center px-6 py-8 lg:px-8">
        <div className="grid w-full gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#a9a9aa]">
              {t.badge}
            </div>

            <div className="space-y-1">
  <div className="text-5xl font-black leading-none tracking-[-0.04em] text-[#f3f3f3] md:text-7xl lg:text-[6rem]">
    {t.hero1}
  </div>
  <div className="text-5xl font-black leading-none tracking-[-0.04em] text-[#cececf] md:text-7xl lg:text-[6rem]">
    {t.hero2}
  </div>
  <div className="text-5xl font-black leading-none tracking-[-0.04em] text-[#cececf] md:text-7xl lg:text-[6rem]">
    {t.hero3}
  </div>
  <div className="text-5xl font-black leading-none tracking-[-0.04em] text-[#c31432] md:text-7xl lg:text-[6rem]">
    {t.hero4}
  </div>
</div>

            <p className="max-w-2xl text-base leading-7 text-[#b8b8b9] md:text-[1.05rem]">{t.heroText}</p>

            <div className="flex flex-wrap gap-4">
  <a
    href="#contact"
    className="rounded-full bg-[#c31432] px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-[#d91a3b]"
  >
    Связаться
  </a>
  <button
    type="button"
    onClick={() => setView("portfolio")}
    className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-[#ededed] transition hover:border-white hover:bg-white hover:text-black"
  >
    Открыть портфолио
  </button>
</div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/50">
  <video
    src="/media/stairs.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="h-[68vh] min-h-[420px] w-full object-cover object-center lg:h-[72vh]"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
  <div className="absolute bottom-0 left-0 right-0 p-6">
    <div className="text-xs uppercase tracking-[0.35em] text-[#d0d0d0]/80">{t.heroCardKicker}</div>
    <div className="mt-2 text-2xl font-semibold text-white">{t.heroCardTitle}</div>
  </div>
</div>
        </div>
      </section>

      {renderPortfolioHub()}

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
          <img
  src="/media/drummer.jpg"
  alt="FRMWRK atmosphere"
  className="h-full min-h-[360px] w-full object-cover"
/>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 lg:p-10">
            <div className="text-sm uppercase tracking-[0.35em] text-[#9c9c9d]">{t.aboutKicker}</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#f1f1f1] md:text-4xl">
              {t.aboutTitle}
            </h2>
            <p className="mt-6 text-base leading-7 text-[#b8b8b9]">{t.aboutP1}</p>
            <p className="mt-4 text-base leading-7 text-[#b8b8b9]">{t.aboutP2}</p>
          </div>
        </div>
      </section>

      <section id="pipeline" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
  <div className="mb-12">
    <div className="text-sm uppercase tracking-[0.35em] text-[#9c9c9d]">{t.pipelineKicker}</div>

    <div className="mt-3 grid gap-6 lg:grid-cols-3 lg:items-start">
      <div className="lg:col-span-2">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#f1f1f1] md:text-5xl">
          {t.pipelineTitle}
        </h2>
      </div>

      <p className="text-sm leading-6 text-[#aaaaab] md:text-base">
        {t.pipelineText}
      </p>
    </div>
  </div>

        <div className="grid gap-6 lg:grid-cols-3">
        {[
  { title: t.pipe1, text: t.pipe1Text, image: "/media/drummer.jpg" },
  { title: t.pipe2, text: t.pipe2Text, image: categoryCards[1].image },
  { title: t.pipe3, text: t.pipe3Text, image: categoryCards[2].image },
].map((item, index) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:border-[#c31432]/40"
            >
              <div className="relative">
  {index === 0 ? (
    <video
      src="/media/olovo.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="aspect-[5/4] w-full object-cover"
    />
  ) : (
    <img src={item.image} alt={item.title} className="aspect-[5/4] w-full object-cover" />
  )}
  <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-[#c31432] text-sm font-semibold text-white">
    0{index + 1}
  </div>
</div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#b8b8b9]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="team" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mb-12">
          <div className="text-sm uppercase tracking-[0.35em] text-[#9c9c9d]">{t.teamKicker}</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#f1f1f1] md:text-5xl">
            {t.teamTitle}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-[#c31432]/50"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-lg font-medium text-white">{member.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(195,20,50,0.16),rgba(255,255,255,0.03))] p-8 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-[#b5b5b6]">{t.contactKicker}</div>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                {t.contactTitle}
              </h2>
            </div>

            <div className="space-y-6">
              <p className="max-w-xl text-base leading-7 text-[#d4d4d4]">{t.contactText}</p>
              <p className="max-w-xl text-sm leading-6 text-[#b8b8b9]">{t.contactNote}</p>

              <div className="grid gap-4 sm:grid-cols-3 items-stretch">
  <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/20 p-4">
    <div className="text-[11px] uppercase tracking-[0.28em] text-[#9c9c9d]">Email</div>
    <a
      href="mailto:FRMWRK@yandex.com"
      className="mt-2 break-all text-sm text-white transition hover:text-[#ff6b81]"
    >
      FRMWRK@yandex.com
    </a>
  </div>

  <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/20 p-4">
    <div className="text-[11px] uppercase tracking-[0.28em] text-[#9c9c9d]">Phone</div>
    <a
      href="tel:+79620744777"
      className="mt-2 text-sm text-white transition hover:text-[#ff6b81]"
    >
      +7 962 074 4777
    </a>
  </div>

  <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/20 p-4">
    <div className="text-[11px] uppercase tracking-[0.28em] text-[#9c9c9d]">Telegram</div>
    <a
      href="https://t.me/churakoveg"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 text-sm text-white transition hover:text-[#ff6b81]"
    >
      @churakoveg
    </a>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )

  return (
    <div className="min-h-screen bg-[#0f1013] text-[#d4d4d4] selection:bg-[#c31432] selection:text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(195,20,50,0.18),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.10),transparent_18%),linear-gradient(to_bottom,#16171b,#101115_38%,#0b0c0f)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101115]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button type="button" onClick={() => setView("home")} className="flex items-center gap-3 text-left">
            <img
              src="/frmwrk-logo.png"
              alt="FRMWRK"
              className="h-10 w-auto md:h-14"
            />
          </button>

          <nav className="hidden items-center gap-8 text-sm text-[#b5b5b6] md:flex">
            <button type="button" onClick={() => setView("portfolio")} className="transition hover:text-white">
              {t.navPortfolio}
            </button>
            <a href="#pipeline" className="transition hover:text-white">
              {t.navPipeline}
            </a>
            <a href="#team" className="transition hover:text-white">
              {t.navTeam}
            </a>
            <a href="#contact" className="transition hover:text-white">
              {t.navContact}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/[0.03] p-1">
              <button
                type="button"
                onClick={() => setLang("ru")}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  lang === "ru" ? "bg-[#c31432] text-white" : "text-[#b5b5b6] hover:text-white"
                }`}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  lang === "en" ? "bg-[#1b1b1f] text-white" : "text-[#b5b5b6] hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-[#f1f1f1] transition hover:border-[#c31432] hover:bg-[#c31432] md:inline-flex"
            >
              {t.topCta}
            </a>
          </div>
        </div>
      </header>

      {view === "home" && renderHome()}
      {view === "portfolio" && renderPortfolioHub()}
      {view === "films" && renderCategoryPage("films")}
      {view === "music" && renderCategoryPage("music")}
      {view === "campaigns" && renderCategoryPage("campaigns")}

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-[#8c8c8d] lg:px-8">
        {t.footer}
      </footer>
    </div>
  )
}