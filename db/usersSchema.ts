import {
  boolean,
  pgTable,
  serial,
  text,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

export const usersSchema = pgTable("users", {
  id: serial("id").primaryKey(), // serial create a new id for the user, "id" is the posgress column name and maps to the id key we state in the object
  email: text("email").unique(),
  password: text("password"),
  createdAt: timestamp("created_at").defaultNow(),
  twoFactorAuthSecret: text("2fa_secret"),
  twoFactorAuthActive: boolean().default(false),
  // eventsCreated: integer("events_created"),
  // eventsAttended: integer("events_attended"),
});
