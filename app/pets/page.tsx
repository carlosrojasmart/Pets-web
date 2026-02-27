"use client";

import { useEffect, useState } from "react";

type Pet = {
  id: string;
  name: string;
  species: string;
  age: number | null;
  createdAt: string;
};

export default function PetsPage() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  async function loadPets() {
    const res = await fetch("/api/pets");
    const data = (await res.json()) as Pet[];
    setPets(data);
  }

  useEffect(() => {
    loadPets();
  }, []);

  async function createPet() {
    setStatus("Guardando...");

    const res = await fetch("/api/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        species,
        age: age === "" ? undefined : Number(age),
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(`${data?.error ?? "Error"}`);
      return;
    }

    setStatus("Guardado");
    setName("");
    setSpecies("");
    setAge("");
    await loadPets();
  }

  return (
    <main className="min-h-screen p-8 flex justify-center">
      <div className="w-full max-w-2xl space-y-6">
        <header className="space-y-1">
          <h1 className="text-3xl font-semibold">Pets</h1>
          <p className="text-sm text-black/60">
            Crear y listar mascotas (Next.js + Prisma).
          </p>
        </header>

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-lg font-medium">Nueva mascota</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              className="rounded-xl border p-3"
              placeholder="Nombre (ej: Luna)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="rounded-xl border p-3"
              placeholder="Especie (ej: cat)"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
            />
            <input
              className="rounded-xl border p-3"
              placeholder="Edad (opcional)"
              inputMode="numeric"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <button
            className="rounded-xl border px-4 py-3 hover:bg-black/5"
            onClick={createPet}
            type="button"
          >
            Guardar
          </button>

          {status && <p className="text-sm">{status}</p>}
        </section>

        <section className="rounded-2xl border p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Lista</h2>
            <button className="text-sm underline" onClick={loadPets} type="button">
              Recargar
            </button>
          </div>

          {pets.length === 0 ? (
            <p className="text-sm text-black/60">No hay mascotas aún.</p>
          ) : (
            <ul className="divide-y">
              {pets.map((p) => (
                <li key={p.id} className="py-3 flex justify-between gap-4">
                  <div>
                    <p className="font-medium">
                      {p.name} <span className="text-black/60">({p.species})</span>
                    </p>
                    <p className="text-sm text-black/60">
                      Edad: {p.age ?? "—"}
                    </p>
                  </div>
                  <p className="text-xs text-black/50">
                    {new Date(p.createdAt).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}