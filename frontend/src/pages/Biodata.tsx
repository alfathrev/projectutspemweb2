import {
    User,
    GraduationCap,
    School,
    Mail,
    Quote,
} from "lucide-react";

import fotoGua from "../assets/fotogua.jpeg";

const Biodata = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            {/* Title */}
            <div className="text-center mb-10">
                <User className="mx-auto text-pink-700 mb-3" size={40} />

                <h1 className="text-5xl font-bold">
                    <span className="text-slate-900">Biodata </span>
                    <span className="text-pink-700">Mahasiswa</span>
                </h1>

                <p className="text-gray-500 mt-3">
                    Informasi Biodata Mahasiswa Pembuat Website
                </p>
            </div>

            {/* Card */}
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
                {/* Left */}
                <div className="bg-gradient-to-br from-pink-800 via-pink-700 to-slate-900 text-white p-10 flex flex-col items-center justify-center">
                    <img
                        src={fotoGua}
                        alt="foto"
                        className="w-52 h-52 rounded-full border-4 border-white object-cover shadow-lg"
                    />

                    <h2 className="text-3xl font-bold mt-6">
                        Pranada Al Fath Refandra
                    </h2>

                    <span className="mt-3 px-5 py-2 bg-pink-600 rounded-full text-sm">
                        Mahasiswa
                    </span>

                    <div className="mt-10 bg-white/10 rounded-2xl p-5 italic text-center">
                        <Quote className="mx-auto mb-2" />
                        Terus belajar, terus berkembang, dan jangan berhenti berkarya.
                    </div>
                </div>

                {/* Right */}
                <div className="p-10">
                    <div className="bg-pink-100 text-pink-800 px-4 py-2 rounded-xl inline-flex items-center gap-2 font-semibold mb-8">
                        <User size={20} />
                        Informasi Pribadi
                    </div>

                    <div className="space-y-6">
                        {/* Nama */}
                        <div className="flex items-center justify-between border-b pb-4">
                            <div className="flex items-center gap-3">
                                <User className="text-pink-700" />
                                <span className="font-semibold">Nama Lengkap</span>
                            </div>

                            <span>Pranada Al Fath Refandra</span>
                        </div>

                        {/* NIM */}
                        <div className="flex items-center justify-between border-b pb-4">
                            <div className="flex items-center gap-3">
                                <GraduationCap className="text-pink-700" />
                                <span className="font-semibold">NIM</span>
                            </div>

                            <span>24090027</span>
                        </div>

                        {/* Kelas */}
                        <div className="flex items-center justify-between border-b pb-4">
                            <div className="flex items-center gap-3">
                                <School className="text-pink-700" />
                                <span className="font-semibold">Kelas</span>
                            </div>

                            <span>4A</span>
                        </div>

                        {/* Prodi */}
                        <div className="flex items-center justify-between border-b pb-4">
                            <div className="flex items-center gap-3">
                                <School className="text-pink-700" />
                                <span className="font-semibold">Program Studi</span>
                            </div>

                            <span>D4 Teknik Informatika</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center justify-between border-b pb-4">
                            <div className="flex items-center gap-3">
                                <Mail className="text-pink-700" />
                                <span className="font-semibold">Email</span>
                            </div>

                            <span>pranadaalfath@gmail.com</span>
                        </div>
                    </div>

                    {/* About */}
                    <div className="mt-10 bg-slate-50 rounded-2xl p-6">
                        <h3 className="text-2xl font-bold text-pink-700 mb-3">
                            Tentang Saya
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Saya adalah mahasiswa yang sedang mengerjakan
                            Project UTS PemWeb2.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Biodata;