import {
  pgTable,
  serial,
  text,
  integer,
  time,
  timestamp,
} from "drizzle-orm/pg-core";

export const eventsSchema = pgTable("event", {
  id: serial("id").primaryKey(), // Serial creates a new unique id for the events
  name: text("event_name").unique(),
  location: text("location").notNull(),
  date: timestamp("date", {
    mode: "date",
  }).notNull(),
  time: time("time", { withTimezone: true }).notNull(),
  createdBy: integer("created_by").notNull(), // User ID
});

//TODO: add relation between eventSchema and created by
// Will be many to 1 as many events can be created by one person
// Users to events will also be one to many, as one  user can create many events
