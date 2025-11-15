import styles from "./page.module.css";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
export default function Page() {
  return (
    <div className={styles.page}>
      <h2>Events</h2>
      <span>Filter</span>
      <div className={styles.content}>
        <Card noBorder>
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
