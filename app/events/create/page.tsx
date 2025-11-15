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

import { useRouter } from "next/navigation";
import { DatePicker } from "@/components/DatePicker/DatePicker";

const formSchema = z.object({
  name: z.string(),
  description: z.string(),
  location: z.string(),
  date: z.date(),
  time: z.string(),
  image: z.string(),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      location: "",
      date: new Date(),
      time: "",
      image: "",
    },
  });

  const router = useRouter();
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // const response = await LoginUser({
    //   email: data.email,
    //   password: data.password,
    // });
    // if (response?.error) {
    //   form.setError("root", {
    //     message: "Email and password combination do not exist",
    //   });
    // } else {
    //   router.push("/");
    // }
  };

  return (
    <div className={styles.page}>
      <h1>Create An Event</h1>
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <fieldset
                disabled={form.formState.isSubmitting}
                className={styles.form}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Event Name"
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
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image Upload</FormLabel>
                      <FormControl>
                        <Input {...field} type="file" required aria-required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Interesting New Event....."
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
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="123 Queer Street, LGB TQX"
                          required
                          aria-required
                          autoComplete="street-address"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <DatePicker
                          aria-required
                          label="Date of Event"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time of Event</FormLabel>
                      <FormControl>
                        <Input {...field} type="time" required aria-required />
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
                  Create Event
                </Button>
              </fieldset>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
