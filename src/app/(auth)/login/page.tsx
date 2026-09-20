import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "./login-form";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;

  return (
    <div className="flex min-h-svh items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Ingles</CardTitle>
          <CardDescription>
            Inicia sesión para continuar con tu estudio de inglés.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm next={next ?? "/dashboard"} />
        </CardContent>
      </Card>
    </div>
  );
}
