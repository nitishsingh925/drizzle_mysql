import { db } from "./config/db.js";
import { usersTable } from "./drizzle/schema.js";

const main = async () => {
  const insert = await db.insert(usersTable).values({
    name: "Nitish Singh",
    age: 25,
    email: "nitishsingh@gmail.com",
  });
};

main().catch((error) => {
  console.log(error);
});
