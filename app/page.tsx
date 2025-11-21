import styles from "./page.module.css";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { SpillTheTeaSVGText } from "@/components/Icons/SpillTheTeaText";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className={styles.page}>
      <SpillTheTeaSVGText className={styles.logo} />
      <span>Skill sharing platfrom for the queer community.</span>
      <div className={styles.content}>
        <Card noBorder>
          <h2>Upcoming events</h2>
          <div className={styles.eventsList}>
            {events.map((event) => {
              return (
                <Card key={event.id} className={styles.card}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className={styles.cardContent}>
                    <Image
                      className={styles.eventCardImg}
                      alt={event.imgDescription}
                      src={event.imgSrc}
                      width="500"
                      height="600"
                    />

                    <CardDescription>{event.caption}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}

const events = [
  {
    id: 1,
    title: "Spanish Coffee Morning",
    caption:
      "Group meeting once a month to talking in spanish. We have a range of abolities, from native speakers to people just starting out. It's preferable if you have some spanish experince but you're more than welcome to come and practise your spanish listeing as well.",
    date: "10/11/25",
    location: "Bethnal Green Tavern",
    imgSrc: "/spanish-coffee.jpeg",
    imgDescription: "",
    link: "",
    maxAttendees: 10,
  },
  {
    id: 2,
    title: "Queer Book Club",
    caption: "Join our Queer Spanish speaking community!",
    date: "10/11/25",
    location: "Bethnal Green Tavern",
    imgSrc: "/queer-bookclub.jpeg",
    imgDescription: "",
    link: "",
    attendees: [],
    maxAttendees: 10,
  },
  {
    id: 3,
    title: "Spanish Coffee Morning",
    caption: "Join our Queer Spanish speaking community!",
    date: "10/11/25",
    location: "Bethnal Green Tavern",
    imgSrc: "/spanish-coffee.jpeg",
    imgDescription: "",
    link: "",
    attendees: [],
    maxAttendees: 10,
  },
  {
    id: 4,
    title: "Queer Book Club",
    caption: "Join our Queer Spanish speaking community!",
    date: "10/11/25",
    location: "Bethnal Green Tavern",
    imgSrc: "/queer-bookclub.jpeg",
    imgDescription: "",
    link: "",
    attendees: [],
    maxAttendees: 10,
  },
];

{
  /* <Card noBorder>
<h2>Spill The Tea's Purpose</h2>
<CardContent>
  <span>
    <ul>
      <li>
        Facilitate connectivity within the queer community by
        providing an avenue for queers to socialise away from the more
        traditional mechanisms: partying and sex.
      </li>
      <li>
        Support the local queer community by sharing as well as
        utilising the pink pound to support local queer businesses.
      </li>
      <li>A queer platform built for queers by queers.</li>
      <li>
        Please reach out on our socials if you have ideas for
        improvements or would like to get involved.
      </li>
    </ul>
  </span>
</CardContent>
<CardFooter>
  <Button asChild variant="outline">
    <Link href="/values">Learn More About Our Values</Link>
  </Button>
</CardFooter>
</Card> */
}
