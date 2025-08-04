import { z } from "zod";

export const OrderSchema = z
  .object({
    type: z
      .string()
      .refine(
        (val) => ["Stiker", "Gaci", "Banner", "Jasa Desain"].includes(val),
        { message: "Jenis harus dipilih (Stiker, Gaci, Banner, atau Jasa Desain)." }
      ),
    subtype: z.string().optional(),
    height: z.string().optional(),
    width: z.string().optional(),
    description: z
      .string()
      .min(1, { message: "Deskripsi harus diisi." }),
  })
  .superRefine((data, ctx) => {
    if (["Stiker", "Gaci"].includes(data.type) && !data.subtype) {
      ctx.addIssue({
        path: ["subtype"],
        message: `Tipe ${data.type} harus dipilih.`,
      });
    }

    if (["Stiker", "Banner"].includes(data.type)) {
      if (!data.height || Number(data.height) <= 0) {
        ctx.addIssue({
          path: ["height"],
          message: "Tinggi harus lebih dari 0 cm.",
        });
      }
      if (!data.width || Number(data.width) <= 0) {
        ctx.addIssue({
          path: ["width"],
          message: "Lebar harus lebih dari 0 cm.",
        });
      }
    }
  });
