import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TeamMember = {
  name: string;
  email: string;
  role: string;
};

type TeamMembersProps = {
  TeamMember: TeamMember[];
};

export function MyTeamMemberList({ TeamMember }: TeamMembersProps) {
  return (
    <Table className="font-OpenSans">
      <TableCaption>A list of your team members.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Member Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Remove Member</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TeamMember.map((member, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{member.name}</TableCell>
            <TableCell>{member.email}</TableCell>
            <TableCell>{member.role}</TableCell>
            {member.role !== "Admin" ? (
              <TableCell className="text-right">
                <button className="text-red-500 hover:underline">Remove</button>
              </TableCell>
            ) : null}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total Members: {TeamMember.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
