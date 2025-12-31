"use server";
import { eventsSchema } from "@/db/eventsSchema";
import db from "@/db/drizzle";
import { EventType } from "@/lib/types";
import { auth } from "@/auth";
import { z } from "zod";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const createEvent = async ({
  name,
  description,
  location,
  date,
  time,
}: EventType) => {
  try {
    const session = await auth();
    const user = session?.user?.email;

    if (!user)
      return {
        error: "User Not Defined",
        message: "You must be signed in to create an event",
      };

    const createEventSchema = z.object({
      name: z.string(),
      description: z.string(),
      location: z.string(),
      date: z.date(),
      time: z.string(),
      createdBy: z.string(),
    });

    createEventSchema.parse({
      name,
      description,
      location,
      date,
      time,
      createdBy: user,
    });

    await db.insert(eventsSchema).values({
      name: name,
      description: description,
      location: location,
      date: date,
      time: time,
      createdBy: user,
    });

    return {
      error: false,
      message: "Event Created Successfully",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("ZOD Error, Form Validation Mismatch");
      return {
        error: true,
        message: "ZOD Error, Form Validation Mismatch",
      };
    } else {
      console.log("db Error");
      return {
        error: true,
        message: "db Error",
      };
    }
  }
};
