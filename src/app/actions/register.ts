"use server";

import bcrypt from "bcrypt"; 
import { prisma } from "@/lib/prisma";
import { RegisterSchema } from "@/lib/validations";
import { z } from "zod";

type RegisterResponse = 
  | { success: string; userId: string }
  | { error: string };

export async function registerUser(values: z.infer<typeof RegisterSchema>): Promise<RegisterResponse> {
  // 1. Validation de sécurité avec Zod
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Champs invalides !" };
  }

  const { email, password, fullName } = validatedFields.data;
  const normalizedEmail = email.toLowerCase().trim();

  // 2. Hachage du mot de passe (Sécurité ++)
  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    // 3. Vérifier si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      return { error: "Cet email est déjà utilisé." };
    }

    // 4. Création de l'utilisateur
    const user = await prisma.user.create({
      data: {
        email: normalizedEmail,
        fullName: fullName.trim(),
        password: hashedPassword,
        role: "user", // Changé de "admin" à "user" par défaut
      },
    });

    return { success: "Compte créé avec succès !", userId: user.id };
  } catch (error) {
    console.error("Erreur inscription:", error);
    return { error: "Une erreur est survenue lors de l'inscription." };
  }
}