import { eventsSchema } from "@/db/eventsSchema";
import db from "@/db/drizzle";
import { EventType } from "@/lib/tyes";

export const createEvent = async ({
  name,
  description,
  location,
  date,
  time,
  imageSrc,
}: EventType) => {
  try {
    await db.insert(eventsSchema).values({
      name: name,
      // description: description,
      location: location,
      date: date,
      time: time,
      // image: imageSrc,
      createdBy: 1,
    });
  } catch (error) {
    console.log(error);
  }

  return {
    error: false,
  };
};
