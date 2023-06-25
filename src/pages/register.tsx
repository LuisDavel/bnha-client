import { Sign } from 'crypto';
import { signIn, signOut } from 'next-auth/react';
import LandingPage from 'template/Ladingpage';

export default function Login() {
  return (
    <div>
      <button onClick={() => signOut()}>Sign Out</button>;
      <button onClick={() => signIn('google')}>Sign in</button>;
    </div>
  );
}
