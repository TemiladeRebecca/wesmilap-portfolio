import { directors, staffs } from "../data";
import { TeamMemberCard } from "./TeamMemberCard/TeamMemberCard";

export function PeopleBehindTheCompany() {
  return (
    <section
      id="people"
      className="scroll-mt-24 bg-[#f7f8f5] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7927]">
            The People Behind Wesmilap
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#123c2d] sm:text-4xl lg:text-5xl">
            Driven by people. Built on commitment.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Behind Wesmilap&apos;s commitment to civil engineering and building
            is a team of people whose leadership, knowledge, and dedication
            support our business objectives. We believe that successful projects
            begin with responsible leadership and are strengthened by the people
            who bring plans, skills, and ideas together to deliver quality
            results.
          </p>
        </div>

        <div className="mt-14 sm:mt-16">
          <div className="flex flex-col gap-4 border-b border-[#dce4da] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7927]">
                Leadership
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#123c2d] sm:text-3xl">
                Our Directors
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Our directors provide the leadership and strategic direction
                that guide the company. Their oversight helps shape our
                priorities, reinforce our commitment to professional standards,
                and support the responsible delivery of our business objectives.
              </p>
            </div>

            <span className="shrink-0 text-sm font-semibold text-[#9b7927]">
              {String(directors.length).padStart(2, "0")} Directors
            </span>
          </div>

          <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-5">
            {directors.map((director) => (
              <TeamMemberCard key={director.name} member={director} />
            ))}
          </div>
        </div>

        {staffs.length > 0 && (
          <div className="mt-16 border-t border-[#dce4da] pt-12 sm:mt-20 sm:pt-16">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7927]">
                Our People
              </p>

              <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-[#123c2d] sm:text-3xl lg:text-4xl">
                The team that brings our work to life.
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Our staff play an important role in supporting the day-to-day
                activities of Wesmilap and contributing to the work we
                undertake. Through collaboration, practical skills, and a shared
                commitment to quality, they help turn plans into coordinated
                action and support the standards we strive to maintain across
                our business.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                We value the contribution of every team member and recognise
                that dependable service, effective teamwork, and attention to
                detail are essential to building lasting relationships with our
                clients and partners.
              </p>
            </div>

            <div className="mt-10 flex items-center justify-between border-b border-[#dce4da] pb-5">
              <h4 className="text-xl font-bold text-[#173e30]">
                Meet Our Key Staffs
              </h4>

              <span className="text-sm font-semibold text-[#9b7927]">
                {String(staffs.length).padStart(2, "0")} Team Members
              </span>
            </div>

            <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-5">
              {staffs.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
