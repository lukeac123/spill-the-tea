import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

export default function MyProfile() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Event Name</CardTitle>
        </CardHeader>
        <CardContent>
          <Image alt="" src="" height="100" width="100"></Image>
        </CardContent>
        <CardFooter>
          <Button>Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
