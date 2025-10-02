import { NextRequest, NextResponse } from 'next/server';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  location: string;
}

let users: User[] = [
  {
    firstName: 'James',
    lastName: 'Brown',
    email: 'jamesbrown@hotmail.com',
    gender: 'male',
    location: '',
  },
];

export async function POST(req: NextRequest) {
  const formData = await req.json();
  if (users.some((user) => user.email === formData.email)) {
    return NextResponse.json({ userExists: true }, { status: 200 });
  } else {
    users = [...users, formData];
    return NextResponse.json({ userExists: false }, { status: 200 });
  }
}
