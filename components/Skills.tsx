import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

function Tag({ label, daily }: { label: string; daily: boolean }) {
  return daily ? (
    <span
      className="flex items-center gap-[7px] px-3 py-[7px] rounded-[7px] border text-[13.5px] font-medium"
      style={{ background: "var(--chip)", borderColor: "var(--line)" }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: "var(--cyan)" }}
      />
      {label}
    </span>
  ) : (
    <span
      className="px-3 py-[7px] rounded-[7px] border border-dashed text-[13.5px]"
      style={{ borderColor: "var(--line-strong)", color: "var(--dim)" }}
    >
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-[clamp(60px,7vw,88px)]">
      <Reveal className="flex flex-wrap items-baseline justify-between gap-5 mb-11">
        <div className="flex flex-col gap-4">
          <span
            className="font-[family-name:var(--font-jetbrains-mono)] text-[11.5px] tracking-[0.1em] uppercase"
            style={{ color: "var(--a2)" }}
          >
            02 / Skills
          </span>
          <h2 className="m-0 font-[family-name:var(--font-archivo)] font-bold text-[clamp(30px,3.6vw,46px)] leading-none tracking-[-0.035em]">
            What I work in
          </h2>
        </div>
        <div
          className="flex flex-wrap gap-x-[22px] gap-y-3 font-[family-name:var(--font-jetbrains-mono)] text-[11.5px]"
          style={{ color: "var(--dim)" }}
        >
          <span className="flex items-center gap-2">
            <span
              className="w-[7px] h-[7px] rounded-full"
              style={{ background: "var(--cyan)" }}
            />
            Daily driver
          </span>
          <span className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full border border-dashed"
              style={{ borderColor: "var(--faint)" }}
            />
            Familiar with / growing into
          </span>
        </div>
      </Reveal>

      <div
        className="grid gap-px rounded-[14px] border overflow-hidden [grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr))]"
        style={{ background: "var(--line)", borderColor: "var(--line)" }}
      >
        {skillGroups.map((group) => (
          <Reveal
            key={group.title}
            className="flex flex-col gap-[18px] px-[clamp(18px,4.5vw,24px)] pt-[clamp(20px,5vw,26px)] pb-[clamp(22px,5vw,28px)]"
            style={{
              background: group.highlight ? "var(--cyan-tint)" : "var(--bg2)",
            }}
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="m-0 font-[family-name:var(--font-archivo)] font-semibold text-[16px] tracking-[-0.01em]">
                {group.title}
                {group.highlight && (
                  <span
                    className="font-medium"
                    style={{ color: "var(--cyan)" }}
                  >
                    {" "}
                    (growing)
                  </span>
                )}
              </h3>
              <span
                className="font-[family-name:var(--font-jetbrains-mono)] text-[11px]"
                style={{ color: "var(--faint)" }}
              >
                {group.index}
              </span>
            </div>
            {group.note && group.notePosition === "before" && (
              <p
                className="m-0 text-[14px] leading-[1.55]"
                style={{ color: "var(--dim)", textWrap: "pretty" }}
              >
                {group.note}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {group.daily.map((item) => (
                <Tag key={item} label={item} daily />
              ))}
              {group.familiar.map((item) => (
                <Tag key={item} label={item} daily={false} />
              ))}
            </div>
            {group.note && group.notePosition !== "before" && (
              <p
                className="m-0 text-[13.5px] leading-[1.5]"
                style={{ color: "var(--dim)", textWrap: "pretty" }}
              >
                {group.note}
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
