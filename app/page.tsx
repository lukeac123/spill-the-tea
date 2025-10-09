import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "",
    caption: "",
    description: "",
    date: "",
    location: "",
    maxAttendees: 1,
  },
];

export default function Page() {
  return (
    <div>
      {events.map((event) => {
        return (
          <Card key={event.id}>
            <CardHeader>{event.title}</CardHeader>
            <CardContent>{event.caption}</CardContent>
            <CardFooter>
              <Button>Sign Up To Event</Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
