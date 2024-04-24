import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: '/auth/callback',
    },
  });

  console.log('data', data, 'error', error);

  if (error) {
    redirect('/error');
  }

  if (data.url) {
    redirect(data.url);
  }
}
