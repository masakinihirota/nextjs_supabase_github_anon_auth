'use client';

import { createClient } from '@supabase/supabase-js';

const projectUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;

const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(projectUrl, apiKey);

supabase.auth.onAuthStateChange((event, session) => {
  if (session && session.provider_token) {
    window.localStorage.setItem('oauth_provider_token', session.provider_token);
  }

  if (session && session.provider_refresh_token) {
    window.localStorage.setItem(
      'oauth_provider_refresh_token',
      session.provider_refresh_token,
    );
  }

  if (event === 'SIGNED_OUT') {
    window.localStorage.removeItem('oauth_provider_token');
    window.localStorage.removeItem('oauth_provider_refresh_token');
  }
});

export default function Home() {
  const signInGitHub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
  };

  return <button onClick={signInGitHub}>ユーザ作成ボタン</button>;
}
