import { Cpu } from "lucide-react";
import { 
  SiDocker, SiKubernetes, 
  SiJenkins, SiLinux, SiTerraform,
  SiApachespark, SiDatabricks, SiApacheairflow, SiApachehadoop, SiSnowflake, SiApachekafka,
  SiPython, SiPostgresql, SiFastapi,
  SiHuggingface,
  SiGooglecloud, SiDataiku, SiN8N, SiMlflow, SiLangchain, SiWeightsandbiases
} from "react-icons/si";
import { FaAws, FaChartBar, FaChartPie, FaDatabase, FaRobot, FaMicrosoft, FaUsersCog, FaProjectDiagram, FaBookOpen, FaWater } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const domainBands = [
  {
    title: "DevOps & Cloud",
    description: "Architecting scalable infrastructure and automated CI/CD pipelines.",
    accentColor: "#2496ED",
    technologies: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Azure", icon: VscAzure, color: "#0078D4" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Terraform", icon: SiTerraform, color: "#844FBA" },
    ]
  },
  {
    title: "Data Engineering",
    description: "Building robust data pipelines, ETL processes, and highly available data lakes.",
    accentColor: "#E25A1C",
    technologies: [
      { name: "PySpark", icon: SiApachespark, color: "#E25A1C" },
      { name: "Databricks", icon: SiDatabricks, color: "#FF3621" },
      { name: "Airflow", icon: SiApacheairflow, color: "#017CEE" },
      { name: "Hadoop", icon: SiApachehadoop, color: "#66CC15" },
      { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
      { name: "Kafka", icon: SiApachekafka, color: "#AAAAAA" },
    ]
  },
  {
    title: "Data Analytics",
    description: "Transforming complex datasets into actionable business intelligence & insights.",
    accentColor: "#3776AB",
    technologies: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
      { name: "Tableau", icon: FaChartPie, color: "#E97627" },
      { name: "Microsoft Fabric", icon: FaMicrosoft, color: "#0078D4" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "SQL Server", icon: FaDatabase, color: "#CC292B" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    ]
  },
  {
    title: "Artificial Intelligence",
    description: "Building intelligent applications, AI agents, and RAG architectures.",
    accentColor: "#FFD21E",
    technologies: [
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
      { name: "n8n", icon: SiN8N, color: "#EA4B71" },
      { name: "CrewAI", icon: FaUsersCog, color: "#FF6F00" },
      { name: "LangGraph", icon: FaProjectDiagram, color: "#8B5CF6" },
      { name: "LangChain", icon: SiLangchain, color: "#14B8A6" },
      { name: "LlamaIndex", icon: FaBookOpen, color: "#F59E0B" },
      { name: "OpenAI", icon: FaRobot, color: "#A3A3A3" },
    ]
  },
  {
    title: "Machine Learning",
    description: "Developing scalable ML models, MLOps, and predictive analytics.",
    accentColor: "#4285F4",
    technologies: [
      { name: "Vertex AI", icon: SiGooglecloud, color: "#4285F4" },
      { name: "SageMaker", icon: FaAws, color: "#FF9900" },
      { name: "Azure ML", icon: VscAzure, color: "#0078D4" },
      { name: "MLflow", icon: SiMlflow, color: "#0194E2" },
      { name: "Weights & Biases", icon: SiWeightsandbiases, color: "#FFBE00" },
      { name: "Dataiku", icon: SiDataiku, color: "#29B5E8" },
      { name: "H2O.ai", icon: FaWater, color: "#F7B731" },
    ]
  }
];

export default function TechnologiesSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-12 sm:px-6 md:px-10 md:py-16">
      {/* Section header */}
      <div className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-semibold text-cyan">
          <Cpu size={14} /> Technologies Known
        </div>
        <h2 className="mt-4 font-display text-2xl font-normal tracking-[-0.01em] text-foreground sm:text-4xl">
          Core Domains &amp; Technical Arsenal
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base max-w-2xl mx-auto leading-relaxed">
          Delivering end-to-end solutions spanning infrastructure automation, robust data pipelines, and advanced analytics.
        </p>
      </div>

      {/* Carousel band */}
      <div className="relative w-full overflow-hidden rounded-3xl border border-[var(--card-border)] py-10 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] mt-12"
        style={{ background: "linear-gradient(135deg, rgba(14,23,42,0.65) 0%, rgba(8,12,20,0.95) 100%)" }}
      >
        {/* Subtle grid dot inside the band */}
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />

        <div className="flex w-max animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused] gap-8 px-4">
          {[...domainBands, ...domainBands, ...domainBands, ...domainBands].map((domain, domainIdx) => (
            <div 
              key={domainIdx} 
              className="flex-none w-[380px] sm:w-[400px] md:w-[420px] p-7 md:p-9 rounded-3xl border border-white/[0.07] flex flex-col items-center transition-all hover:border-indigo/25 group"
              style={{ background: "rgba(14,23,42,0.55)", backdropFilter: "blur(8px)" }}
            >
              {/* Domain title accent bar */}
              <div
                className="w-8 h-1 rounded-full mb-4 opacity-80"
                style={{ background: domain.accentColor }}
              />
              <h3 className="font-display text-lg md:text-xl text-foreground font-medium mb-2 text-center">{domain.title}</h3>
              <p className="text-xs text-muted-foreground text-center mb-8">{domain.description}</p>
              
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-7 w-full">
                {domain.technologies.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center gap-3 group/icon">
                      <div 
                        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 shadow-lg transition-all duration-300 group-hover/icon:-translate-y-1.5 group-hover/icon:shadow-xl"
                        style={{
                          background: "rgba(9,13,22,0.7)",
                          color: tech.color,
                        }}
                        // eslint-disable-next-line react/forbid-dom-props
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 24px -4px ${tech.color}55, 0 0 0 1px ${tech.color}22`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.boxShadow = '';
                        }}
                      >
                        <Icon size={32} aria-label={tech.name} />
                      </div>
                      <span className="font-medium text-foreground/80 text-[11px] tracking-wide whitespace-nowrap">{tech.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
