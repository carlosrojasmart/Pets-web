import { prisma } from "@/lib/prisma";
import { z } from "zod";

const CreatePetSchema = z.object({
  name: z.string().min(1, "Nombre requerido"),
  species: z.string().min(1, "Especie requerida"),
  age: z.number().int().min(0).optional(),
});

export async function GET() {
  const pets = await prisma.pet.findMany({
    orderBy: { createdAt: "desc" },
  });

  return Response.json(pets, { status: 200 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Si age viene como string desde un form, lo convertimos
    const normalized = {
      ...body,
      age:
        body?.age === "" || body?.age === undefined || body?.age === null
          ? undefined
          : Number(body.age),
    };

    const data = CreatePetSchema.parse(normalized);

    const pet = await prisma.pet.create({ data });

    return Response.json(pet, { status: 201 });
  } catch {
    // No exponemos detalles internos
    return Response.json(
      { error: "Datos inválidos" },
      { status: 400 }
    );
  }
}