export interface ITeamMember {
  name: string;
  role: string;
  image: string | null;
  initials: string;
  bio?: string;
}

export interface ITeamMemberCardProps {
  member: ITeamMember;
}
