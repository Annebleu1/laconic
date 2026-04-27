import { z } from "zod";

/**
 * Schéma d'inscription (Register)
 * On s'assure que toutes les données envoyées par le front
 * sont présentes et valides avant de toucher à la BDD.
 */
export const RegisterSchema = z.object({
  fullName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50),
  email: z
    .string()
    .email("Format d'email invalide"),
  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    // Optionnel : on peut forcer une complexité ici
    .regex(/[A-Z]/, "Il faut au moins une majuscule")
    .regex(/[0-9]/, "Il faut au moins un chiffre"),
});

/**
 * Schéma pour la création d'une dépense
 */
export const ExpenseSchema = z.object({
  title: z.string().min(3, "Le titre est trop court"),
  totalAmount: z.number().positive("Le montant doit être supérieur à 0"),
  houseId: z.string().uuid("ID de maison invalide"),
});

// Type TypeScript généré automatiquement à partir du schéma
export type RegisterInput = z.infer<typeof RegisterSchema>;