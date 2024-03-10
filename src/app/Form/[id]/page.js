import { sql } from "@vercel/postgres";

const [post] = await sql`
  SELECT * FROM posts WHERE id = ${params.id};
`;

export default function id({ params }) {
    console.log(params);
    return (
        <div>
            <h1>Id{params.id}</h1>

        </div>
    );
}
