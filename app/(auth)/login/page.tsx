"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import styles from "./page.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { LoginUser } from "./actions";
import { SpillTheTeaSVG } from "@/components/Icons/SpillTheTea";
import { passwordValidationSchema } from "@/validation/passwordSchema";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.email(),
  password: passwordValidationSchema,
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const response = await LoginUser({
      email: data.email,
      password: data.password,
    });

    if (response?.error) {
      form.setError("root", {
        message: "Email and password combination do not exist",
      });
    } else {
      router.push("/events");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.svg}>
        <SpillTheTeaSVG
          width="500px"
          height="500px"
          viewBox="0 0 300.000000 450.000000"
        />
      </div>
      <Card className={styles.card}>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardAction>
            <Button variant="link" asChild>
              <Link href="/register">Register</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className={styles.cardContent}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <fieldset
                disabled={form.formState.isSubmitting}
                className={styles.form}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="name@example.com"
                          type="email"
                          autoComplete="email"
                          required
                          aria-required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="*****"
                          type="password"
                          required
                          aria-required
                          autoComplete="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {form.formState.errors.root && (
                  <FormMessage>
                    <>{form.formState.errors.root.message}</>
                  </FormMessage>
                )}
                <Button type="submit" variant="outline">
                  Login
                </Button>
              </fieldset>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
