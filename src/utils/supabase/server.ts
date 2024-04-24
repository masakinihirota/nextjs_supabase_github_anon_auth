import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // `set`メソッドはサーバーコンポーネントから呼び出された。
            // ミドルウェアがユーザーセッションを更新している場合、これは無視できます。
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // `delete`メソッドはサーバーコンポーネントから呼び出された。
            // ミドルウェアのリフレッシュがある場合、これは無視できます。
            // ユーザーセッションを更新している場合は無視できます。
          }
        },
      },
    }
  )
}

