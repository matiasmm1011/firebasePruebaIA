const features = [
  {
    title: "Next.js",
    description: "Construida con el App Router y exportada como sitio estático.",
  },
  {
    title: "Firebase Hosting",
    description: "Servida desde la CDN global de Firebase con HTTPS incluido.",
  },
  {
    title: "Deploy automático",
    description: "Cada push a main se compila y publica con GitHub Actions.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-lg font-semibold tracking-tight">PruebaIA</span>
        <a
          href="#features"
          className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          Características
        </a>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6">
        <section className="flex flex-col items-center gap-6 py-24 text-center">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Una landing simple, publicada en segundos
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Haz un cambio, haz push y mira cómo aparece en vivo en Firebase.
          </p>
          <a
            href="#features"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Ver cómo funciona
          </a>
        </section>

        <section id="features" className="grid gap-6 pb-24 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h2 className="text-lg font-semibold">{feature.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © {new Date().getFullYear()} PruebaIA
      </footer>
    </div>
  );
}
