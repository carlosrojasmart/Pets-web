const featuredVets = [
  {
    name: "Clínica Huellitas",
    distance: "1.2 km",
    rating: "4.9",
    specialty: "Urgencias 24h y medicina felina",
    contact: "https://wa.me/5491112345678",
  },
  {
    name: "Vet Centro Norte",
    distance: "2.8 km",
    rating: "4.8",
    specialty: "Cardiología y control preventivo",
    contact: "tel:+5491122334455",
  },
  {
    name: "AnimalCare Barrio Sur",
    distance: "3.4 km",
    rating: "4.7",
    specialty: "Vacunación, cirugía y laboratorio",
    contact: "mailto:turnos@animalcare.com",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Tu mascota primero
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Contactá veterinarios cercanos y de confianza
          </h1>
          <p className="mt-4 max-w-3xl text-base text-slate-600">
            Encontrá atención rápida para controles, emergencias y consultas.
            Revisá distancia, reputación y especialidades para elegir la mejor
            opción para tu compañero.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              href="#veterinarios"
            >
              Ver veterinarios cercanos
            </a>
            <a
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:bg-slate-100"
              href="#contacto"
            >
              Pedir recomendación
            </a>
          </div>
        </section>

        <section id="veterinarios" className="space-y-4">
          <h2 className="text-2xl font-semibold">Veterinarios destacados</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredVets.map((vet) => (
              <article
                key={vet.name}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-sm text-slate-500">A {vet.distance} de vos</p>
                <h3 className="mt-1 text-lg font-semibold">{vet.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{vet.specialty}</p>
                <p className="mt-3 text-sm font-medium text-amber-600">
                  ⭐ {vet.rating} / 5 reseñas verificadas
                </p>
                <a
                  href={vet.contact}
                  className="mt-4 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  Contactar
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contacto"
          className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
        >
          <h2 className="text-2xl font-semibold">Contanos qué necesitás</h2>
          <p className="mt-2 text-sm text-slate-600">
            Dejanos tus datos y te sugerimos opciones cercanas según tu zona y
            el tipo de atención que buscás.
          </p>

          <form className="mt-6 grid gap-3 md:grid-cols-2">
            <input
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-emerald-500 focus:ring"
              placeholder="Tu nombre"
              name="nombre"
            />
            <input
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-emerald-500 focus:ring"
              placeholder="Barrio o ciudad"
              name="zona"
            />
            <input
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-emerald-500 focus:ring md:col-span-2"
              placeholder="Teléfono o email"
              name="contacto"
            />
            <textarea
              className="min-h-28 rounded-xl border border-slate-300 px-4 py-3 outline-none ring-emerald-500 focus:ring md:col-span-2"
              placeholder="Ej: Mi perro está decaído y necesito una consulta hoy."
              name="mensaje"
            />
            <button
              type="button"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 md:col-span-2"
            >
              Enviar solicitud
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
