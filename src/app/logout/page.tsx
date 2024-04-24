'use client';

// createBrowserClient
import { createClient } from '@/utils/supabase/client';

export default function LogoutPage() {
  const supabase = createClient();
  supabase.auth.signOut();
  return <>ログアウト済み</>;
}





