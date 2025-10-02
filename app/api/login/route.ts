import { NextRequest, NextResponse } from 'next/server';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  location: string;
}

const users: any = {
  'jamesbrown@hotmail.com': {
    name: 'james',
    email: 'jamesbrown@hotmail.com',
    gender: 'male',
    location: '',
    events: [104, 105],
  },
};

export async function POST(req: NextRequest) {
  const formData: User = await req.json();
  if (users[formData.email]) {
    const { name, email } = users[formData.email];
    return NextResponse.json({ userExists: true, name: name, email: email }, { status: 200 });
  } else {
    return NextResponse.json({ userExists: false }, { status: 200 });
  }
}
