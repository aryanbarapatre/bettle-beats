import './globals.css';
import { Figtree, Play } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';
import ToasterProvider from '@/providers/ToasterProvider';
import getSongsByUSerId from '@/actions/getSongsByUserId';
import Player from '@/components/Player';

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Bettle Beats',
  description: 'Listen to your favourite beats',
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const userSongs = await getSongsByUSerId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
