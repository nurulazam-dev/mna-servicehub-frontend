"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IUserPayload } from "@/types/users.type";
// import { UserInfo } from "@/types/user.types";
import { Key, LogOut, User } from "lucide-react";
import Link from "next/link";

interface UserDropdownProps {
  // userInfo: UserInfo;
  userInfo: IUserPayload;
}

const UserDropdown = ({ userInfo }: UserDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          className="rounded-full focus-visible:ring-0"
        >
          <span className="text-sm font-semibold">
            {userInfo?.name?.charAt(0).toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align={"end"} className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {userInfo?.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {userInfo?.email}
              </p>
              <p className="text-xs text-primary capitalize mt-1">
                {userInfo?.role?.toLowerCase().replace("_", " ")}
              </p>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={"/my-profile"} className="flex w-full items-center">
              <User className="mr-2 h-4 w-4" />
              <span>My Profile</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link
              href={"/change-password"}
              className="flex w-full items-center"
            >
              <Key className="mr-2 h-4 w-4" />
              <span>Change Password</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => {}}
          className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
