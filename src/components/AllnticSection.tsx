import { Target, Eye, Zap, MapPin, Cpu, ShieldCheck, Wifi, Code2, Server, Camera } from "lucide-react";
import TechBackground from "@/components/TechBackground";

const ZONES = [
  "Cocody", "Plateau", "Marcory", "Treichville",
  "Yopougon", "Koumassi", "Abobo", "Riviera",
  "Bingerville", "Toute la Côte d'Ivoire",
];

const TECHNOLOGIES = [
  { name: "Cisco", icon: Server },
  { name: "MikroTik", icon: Wifi },
  { name: "Hikvision", icon: Camera },
  { name: "Ubiquiti", icon: Wifi },
  { name: "React", icon: Code2 },
  { name: "Supabase", icon: Server },
  { name: "Yeastar", icon: Cpu },
  { name: "Linux", icon: Cpu },
];

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: "Expertise certifiée",
    desc: "Maîtrise des standards IT, cybersécurité et sécurité électronique professionnelle.",
  },
  {
    icon: Zap,
    title: "Réactivité 24h",
    desc: "Diagnostic rapide, intervention sur site ou à distance, support continu.",
  },
  {
    icon: Cpu,
    title: "Solutions sur mesure",
    desc: "Architecture pensée pour vos besoins réels et l'environnement africain.",
  },
  {
    icon: Server,
    title: "Vision long terme",
    desc: "Maintenance préventive, évolutivité et accompagnement dans la durée.",
  },
];

const AllnticSection = () => {
  return (
    <section
      id="allntic"
      className="relative py-20 lg:py-28 overflow-hidden"
      aria-labelledby="allntic-title"
    >
      <TechBackground variant="dark" />

      <div className="container mx-auto px-6 relative z-10 text-white">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-electric/10 border border-cyan-electric/30 text-cyan-glow text-sm font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric animate-glow-pulse" />
            La marque
          </div>
          <h2
            id="allntic-title"
            className="font-serif text-4xl lg:text-5xl font-bold mb-5"
          >
            <span className="bg-gradient-to-r from-cyan-glow to-white bg-clip-text text-transparent">
              ALLNTIC GROUP
            </span>{" "}
            — Solutions IT & Sécurité Électronique
          </h2>
          <p className="text-lg text-white/75 leading-relaxed">
            Marque technologique fondée par Agnidom Pygnali Aboubakar, dédiée à la transformation numérique des
            entreprises et particuliers en Côte d'Ivoire.
          </p>
        </div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {[
            {
              icon: Target,
              title: "Mission",
              text: "Garantir la performance, la sécurité et la durabilité des systèmes numériques grâce à des solutions intégrées et innovantes.",
            },
            {
              icon: Eye,
              title: "Vision",
              text: "Devenir une référence en ingénierie numérique et sécurité électronique en Afrique de l'Ouest.",
            },
          ].map((b, i) => (
            <div
              key={b.title}
              className="group p-6 lg:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-electric/40 transition-all animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-electric/30 to-royal-blue-glow/30 border border-cyan-electric/40 items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-cyan-glow" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif">{b.title}</h3>
              <p className="text-white/75 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="mb-16">
          <h3 className="text-center font-serif text-2xl lg:text-3xl font-bold mb-10">
            Pourquoi choisir <span className="text-cyan-glow">ALLNTIC GROUP</span> ?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ADVANTAGES.map((a, i) => (
              <div
                key={a.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-gold/40 transition-all animate-fade-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <a.icon className="w-8 h-8 text-accent-gold mb-3" />
                <h4 className="font-bold mb-2">{a.title}</h4>
                <p className="text-sm text-white/70 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies marquee */}
        <div className="mb-16">
          <h3 className="text-center text-sm font-medium text-white/50 uppercase tracking-widest mb-6">
            Technologies & partenaires
          </h3>
          <div className="overflow-hidden relative max-w-5xl mx-auto">
            <div className="flex gap-10 animate-marquee" style={{ width: "max-content" }}>
              {[...TECHNOLOGIES, ...TECHNOLOGIES].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-white/70 hover:text-cyan-glow transition-colors flex-shrink-0"
                >
                  <t.icon className="w-5 h-5" />
                  <span className="font-mono text-sm">{t.name}</span>
                </div>
              ))}
            </div>
            {/* Edge fade */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[hsl(217_100%_8%)] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[hsl(217_100%_8%)] to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Zones */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-cyan-glow mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-sm uppercase tracking-widest font-medium">
              Zones d'intervention
            </span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {ZONES.map((z) => (
              <span
                key={z}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/85 hover:border-cyan-electric/40 hover:bg-cyan-electric/10 transition-all"
              >
                {z}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllnticSection;
