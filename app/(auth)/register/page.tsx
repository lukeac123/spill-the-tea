"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
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
import { passwordMatchValidationSchema } from "@/validation/passwordMatchSchema";
import { registerUser } from "./actions";
import { SpillTheTeaSVG } from "@/components/Icons/SpillTheTea";

const formSchema = z
  .object({
    email: z.email(),
  })
  .and(passwordMatchValidationSchema); // Custom Validation

export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const response = await registerUser({
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
    });
    // If no errors set in here, then isSubmitSuccessful is true
    if (response?.error) {
      form.setError("email", { message: response?.message }); // attach error to email field
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
      {form.formState.isSubmitSuccessful ? (
        <Card className={styles.card}>
          <CardHeader>
            <CardTitle>Account created successfully</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className={styles.card}>
          <CardHeader>
            <CardTitle>Create an Account</CardTitle>
            <CardDescription>
              Please enter the details below to register
            </CardDescription>
            <CardAction>
              <Button variant="link" asChild>
                <Link href="/login">Login</Link>
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
                  <FormField
                    control={form.control}
                    name="passwordConfirm"
                    render={({ field }) => (
                      <FormItem className={styles.input}>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="*****"
                            type="password"
                            required
                            aria-required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" variant="outline">
                    Register
                  </Button>
                </fieldset>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
