import { db } from "./config/db.js";
import { usersTable } from "./drizzle/schema.js";



const main = async () => {
  // Insert User
  const insert = await db.insert(usersTable).values({
    name: "Nitish Singh",
    age: 25,
    email: "nitishsingh@gmail.com",
  });
  console.log(insert);

  // show user
  // const user = await db.select().from(usersTable);
  // console.log(user);
  // user find with email id
  // const userWithEmail = await db
  //   .select()
  //   .from(usersTable)
  //   .where({ email: "nitishsingh@gmail.com" });
  // user update with email id
  // const userUpdateWithEmail = await db
  //   .update(usersTable)
  //   .set({ name: "Nitish" })
  //   .where({ email: "nitish@gmail.com" });
  // delete user with email id
  // const userDeleteWithEmail = await db
  //   .delete(usersTable)
  //   .where({ email: "nitish@gmail.com" });
  // console.log(userDeleteWithEmail);
};

main().catch((error) => {
  console.log(error);
});
