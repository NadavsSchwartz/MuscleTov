import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Adriana Schwartz",
    email: "Adriana@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Nadav Schwartz",
    email: "Nadav@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
