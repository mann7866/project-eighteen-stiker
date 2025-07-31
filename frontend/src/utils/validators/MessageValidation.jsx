import { z } from "zod";

export const SchemaMessage = z.object({
  nama: z.string().min(1, { message: "Nama wajib diisi." }),
  pesan: z.string().min(1, { message: "Pesan tidak boleh kosong." }),
});
