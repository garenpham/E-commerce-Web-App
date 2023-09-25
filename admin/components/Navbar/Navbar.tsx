import prismadb from '@/lib/prismadb'
import { UserButton, auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'
import StoreSwitcher from "../StoreSwitcher";
import MainNav from './MainNav/MainNav'
import { ThemeToggle } from "../ThemeToggle";

type Props = {};

async function Navbar({}: Props) {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });
  return (
    <div className="border-b">
      <div className={`flex h-16 items-center px-4`}>
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className={`ml-auto flex items-center space-x-4`}>
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}

export default Navbar
