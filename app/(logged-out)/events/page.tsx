import { EventCard } from "@/components/EventCard/EventCard";
import styles from "./page.module.css";

const events = [
  {
    id: 1,
    title: "Spanish Coffee Morning",
    caption: "Join our Queer Spanish speaking community!",
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

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.eventsList}>
        {events.map((event) => {
          return (
            <EventCard event={event} key={event.id} className={styles.card} />
          );
        })}
      </div>
    </div>
  );
}
