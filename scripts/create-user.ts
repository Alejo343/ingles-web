import { config as loadEnv } from "dotenv";

loadEnv({ path: ".env.local" });
loadEnv({ path: ".env" });

async function main() {
  const { db } = await import("../src/lib/db");
  const { hashPassword } = await import("../src/lib/auth/password");

  const [, , email, password, displayName] = process.argv;

  if (!email || !password) {
    console.error(
      "Uso: npx tsx scripts/create-user.ts <email> <password> [nombre]",
    );
    process.exit(1);
  }

  const passwordHash = await hashPassword(password);

  const user = await db.user.upsert({
    where: { email: email.toLowerCase() },
    update: { passwordHash, displayName },
    create: { email: email.toLowerCase(), passwordHash, displayName },
  });

  console.log(`Usuario listo: ${user.email} (id: ${user.id})`);
  await db.$disconnect();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
