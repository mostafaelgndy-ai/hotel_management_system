"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft, LuUser } from "react-icons/lu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import UserProfileDropdown from "./UserProfileDropdown";

export default function LinksDropdown() {
  const { status } = useSession();

  // في حالة التحميل يمكنك إرجاع زر بشكل محايد أو شاشة Skeleton صغيرة
  if (status === "loading") {
    return (
      <Button variant="outline" className="flex gap-4 max-w-[100px]" disabled>
        <LuAlignLeft className="w-6 h-6" />
        <LuUser className="w-6 h-6" />
      </Button>
    );
  }

  // إذا كان المستخدم مسجلاً لدخوله
  if (status === "authenticated") {
    return <UserProfileDropdown />;
  }

  // إذا كان غير مسجل للدخول (Unauthenticated)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
          <LuUser className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        <DropdownMenuItem asChild>
          <Link href="/api/auth/signin" className="w-full cursor-pointer">
            Login
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/register" className="w-full cursor-pointer">
            Register
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
