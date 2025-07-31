import { z } from "zod";

export const OrderSchema = z.object({
  type: z
  .string()
  .refine((val) => val === "Stiker" || val === "Gaci", {
    message: "Jenis harus dipilih (Stiker atau Gaci).",
  }),
  subtype: z.string().min(1, { message: "Tipe harus dipilih." }),
  height: z
    .string()
    .refine((val) => Number(val) > 0, {
      message: "Tinggi harus lebih dari 0 cm.",
    })
    .or(z.literal("")),
  width: z
    .string()
    .refine((val) => Number(val) > 0, {
      message: "Lebar harus lebih dari 0 cm.",
    })
    .or(z.literal("")),
  description: z.string(),
});