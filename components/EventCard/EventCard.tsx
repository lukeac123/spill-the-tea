import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import clsx from "clsx";
import Image from "next/image";
import styles from "./EventCard.module.css";
import Link from "next/link";

interface EventCardType {
  className?: string;
  event: EventType;
  loggedIn?: boolean;
}

interface EventType {
  id: number;
  title: string;
  caption: string;
  date: string;
  imgSrc: string;
  imgDescription: string;
  location: string;
  link: string;
}

export const EventCard = ({
  className,
  event,
  loggedIn = false,
}: EventCardType) => {
  const handleSignUp = (eventId: number) => {
    fetch("/api/event", {
      method: "PUT",
      body: eventId.toString(),
    });
  };

  return (
    <Card className={clsx(className, styles.eventCard)}>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
      </CardHeader>
      <CardContent className={styles.eventCardContent}>
        <Image
          className={styles.eventCardImg}
          alt={event.imgDescription}
          src={event.imgSrc}
          width="500"
          height="600"
        />
        <CardDescription>
          {event.caption}
          {loggedIn && (
            <ul>
              <li>Location: {event.location}</li>
              <li>Date: {event.date}</li>
            </ul>
          )}
        </CardDescription>
      </CardContent>
      <CardFooter>
        {loggedIn ? (
          <Button
            className={styles.eventCardButton}
            variant="outline"
            onClick={() => handleSignUp(event.id)}
          >
            Sign Up
          </Button>
        ) : (
          <Button className={styles.eventCardButton} variant="outline" asChild>
            <Link href="/login">Login to sign up to events</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
