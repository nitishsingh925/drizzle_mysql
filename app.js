import { db } from "./config/db.js";
import { usersTable } from "./drizzle/schema.js";

const main = async () => {
  // Insert User
  // const insert = await db.insert(usersTable).values({
  //   name: "Nitish Singh",
  //   age: 25,
  //   email: "nitishsingh@gmail.com",
  // });
  // show user
  const user = await db.select().from(usersTable);
  console.log(user);
};

main().catch((error) => {
  console.log(error);
});
