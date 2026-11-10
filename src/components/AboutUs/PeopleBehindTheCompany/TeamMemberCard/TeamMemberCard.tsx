import Image from "next/image";
import { ITeamMemberCardProps } from "../../interface";

export function TeamMemberCard({ member }: ITeamMemberCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#e1e7df] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#c6a34a] hover:shadow-[0_18px_45px_rgba(15,45,32,0.07)]">
      <div className="relative aspect-4/4 w-full overflow-hidden bg-[#eef2eb]">
        {member.image ? (
          <Image
            src={member.image}
            alt={`Portrait of ${member.name}`}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#f1f5f0] to-[#e2e9df]"
            aria-label={`Photo of ${member.name} not yet available`}
          >
            <span className="flex h-24 w-24 items-center justify-center rounded-full border border-[#d7dfd5] bg-white text-2xl font-bold tracking-wide text-[#173e30]">
              {member.initials}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b7927]">
            {member.role}
          </span>

          <span className="h-px w-8 shrink-0 bg-[#d7dfd5] transition-all duration-300 group-hover:w-12 group-hover:bg-[#b99a43]" />
        </div>

        <h4 className="mt-4 text-lg font-bold leading-snug text-[#173e30]">
          {member.name}
        </h4>

        {member.bio && (
          <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
            {member.bio}
          </p>
        )}

        <div className="mt-5 border-t border-[#e8ece6] pt-4">
          <span className="text-xs font-medium tracking-wide text-[#315744]">
            Wesmilap
          </span>
        </div>
      </div>
    </article>
  );
}
