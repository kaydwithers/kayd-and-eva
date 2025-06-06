import { sql } from "@vercel/postgres";
import { Heading } from "../Heading/Heading";

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  created_at: Date;
}

export const GuestbookEntries = async () => {
  const { rows } =
    await sql<GuestbookEntry>`SELECT * FROM guestbook ORDER BY created_at DESC`;

  return (
    <div className="">
      <Heading>Messages</Heading>

      {rows.map((entry) => (
        <div key={entry.id} className="flex flex-col gap-y-2">
          <p className="">{entry.message}</p>
          <p className="">
            - {entry.name} on {new Date(entry.created_at).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};
