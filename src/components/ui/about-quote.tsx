import DotPattern from "@/components/ui/dot-pattern"

export function AboutQuote() {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
      <div className="relative flex flex-col items-center border-2 border-white/20 rounded-lg backdrop-blur-sm bg-white/5">
        <DotPattern width={5} height={5} />

        {/* Corner decorations */}
        <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-white/80" />

        <div className="relative z-20 mx-auto max-w-5xl rounded-[40px] py-6 md:p-10 xl:py-20">

          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-xl lg:text-2xl xl:text-3xl text-white/90 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom leading-relaxed">
              FindAd — небольшая команда специалистов, которая помогает бизнесу расти осознанно. Нас немного, но каждый проект мы ведём лично — без потока клиентов и формальных отчётов ради отчётов.
            </p>
            <p className="text-base md:text-xl lg:text-2xl xl:text-3xl text-white/90 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom leading-relaxed">
              Работаем на стыке аналитики, стратегии и цифровых технологий. Неважно, стартап вы или устоявшийся бизнес — глубоко погружаемся в вашу задачу и доводим до результата.
            </p>
            <div className="pt-4 border-t border-white/20">
              <p className="text-sm md:text-base text-white/60 font-open-sans-custom">Основатель и CEO</p>
              <p className="text-lg md:text-xl text-white/90 font-open-sans-custom font-semibold [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">Арутюнян Арутюн</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}