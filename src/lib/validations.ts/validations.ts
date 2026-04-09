import { z } from "zod";

// Schéma pour l'inscription : on force un email valide et un mot de passe robuste
export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z.string().min(8, { message: "Le mot de passe doit faire 8 caractères minimum" }),
  fullName: z.string().min(2, { message: "Nom trop court" }),
});

// Schéma pour une dépense : on empêche les montants négatifs
export const ExpenseSchema = z.object({
  title: z.string().min(3),
  totalAmount: z.number().positive(),
  houseId: z.string().uuid(),
});
