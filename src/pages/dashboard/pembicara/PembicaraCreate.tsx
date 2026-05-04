import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  job: z.string().min(3, "Role minimal 3 karakter"),
  email: z.string().email("Email tidak valid"),
  photo: z.string().optional(),
  bio: z.string().min(5, "Bio minimal 5 karakter"),
});

type FormData = z.infer<typeof schema>;

export default function PembicaraCreate() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Pemateri:", data);
    alert("Pemateri berhasil ditambahkan!");
    navigate("/dashboard/pembicara"); // Otomatis balik ke tabel setelah simpan
  };

  // Helper untuk merender input agar kode di bawah lebih ringkas
  const renderField = (name: keyof FormData, placeholder: string, type = "text") => (
    <div className="w-full">
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl bg-gray-50 border outline-none transition-all focus:ring-2 focus:ring-[#7B1D3F] ${
          errors[name] ? "border-red-400" : "border-transparent"
        }`}
      />
      {errors[name] && (
        <p className="text-[10px] text-red-500 mt-1 ml-2 font-bold uppercase italic">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8">
        
        {/* HEADER */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-2xl font-black text-[#7B1D3F] tracking-tight uppercase">
            Tambah Pembicara
          </h1>
          <p className="text-sm text-gray-400 font-medium">
            Lengkapi data pemateri untuk event mendatang
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderField("name", "Nama Lengkap")}
            {renderField("job", "Jabatan / Role (e.g. CEO)")}
          </div>

          {renderField("email", "Alamat Email", "email")}
          {renderField("photo", "URL Foto (Opsional)")}

          <div>
            <textarea
              rows={4}
              {...register("bio")}
              placeholder="Tulis bio singkat atau pengalaman pembicara..."
              className={`w-full px-4 py-3 rounded-xl bg-gray-50 border outline-none transition-all focus:ring-2 focus:ring-[#7B1D3F] ${
                errors.bio ? "border-red-400" : "border-transparent"
              }`}
            />
            {errors.bio && (
              <p className="text-[10px] text-red-500 mt-1 ml-2 font-bold uppercase italic">
                {errors.bio.message}
              </p>
            )}
          </div>

          {/* BUTTON GROUP */}
          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={() => navigate("/dashboard/pembicara")}
              className="flex-1 bg-gray-100 text-gray-500 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all active:scale-95"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-[2] bg-[#7B1D3F] text-white py-4 rounded-2xl font-bold shadow-lg shadow-[#7B1D3F]/20 hover:bg-[#5a152e] transition-all active:scale-95"
            >
              Simpan Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}