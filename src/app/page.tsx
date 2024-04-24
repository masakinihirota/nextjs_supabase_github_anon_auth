import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <Link href="/login-mail">Login-mailページ</Link>
      <br />
      <Link href="/private">プライベートページ</Link>
      <br />
      <Link href="/logout">ログアウトページ</Link>
      <br />
      <br />
      <Link href="/login-github">Login-GitHubページ</Link>
      <br />
      <Link href="/login-github-ssr">Login-GitHubページ SSR</Link>
      <br />
      <br />
      <Link href="/oauth-signIn">oauth-signIn サインイン</Link>
    </main>
  );
}
