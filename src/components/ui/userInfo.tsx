import React from "react";

import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { Button } from "@/components/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { useAuth } from "@/providers/auth/index";
import { navigate } from "gatsby";

export const UserInfo = () => {
  const { removeToken, removeUser, user } = useAuth();

  return (
    <div className="flex items-center space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-1 h-auto">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={user?.image ?? "/placeholder.svg?height=32&width=32"}
                  alt="CabanaJuan"
                />
                <AvatarFallback>{`${user?.firstName[0] ?? "U"}${
                  user?.lastName[0] ?? "D"
                }`}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">{`${user?.firstName} ${user?.lastName}`}</span>
                <span className="text-xs text-muted-foreground">
                  {user?.email}
                </span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => navigate("/perfil")}>
            <User className="mr-2 h-4 w-4" />
            <span>Perfil</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Configuración</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              removeUser();
              removeToken();
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Cerrar sesión</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserInfo;
