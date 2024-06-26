'use client';

// createBrowserClient
import { createClient } from '@/utils/supabase/client';

export default function Page() {
  const supabase = createClient();
  supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: '/auth/callback',
    },
  });
}
