/* eslint-disable @typescript-eslint/no-explicit-any */

import { getAllUserDetails } from "@/actions/user.action";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function UsersPage() {
  const users = await getAllUserDetails();
  console.log(users);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>

      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">#</TableHead>
              <TableHead>Profile</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Verified</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead>User ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: any, index: number) => {
              const profileImage =
                user.profile_image_url ||
                user.raw_json?.profile_image_url ||
                "";
              const displayName =
                user.display_name || user.name || user.email || "User";
              const fallbackLetter = displayName.charAt(0).toUpperCase();

              return (
                <TableRow key={user.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    {profileImage ? (
                      <Image
                        src={profileImage}
                        alt="Profile"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-300 text-white font-semibold flex items-center justify-center">
                        {fallbackLetter}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{displayName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.primary_email_verified ? "Yes" : "No"}</TableCell>
                  <TableCell>{user.role || "USER"}</TableCell>
                  <TableCell>
                    {user.created_at
                      ? new Date(user.created_at).toLocaleString()
                      : "N/A"}
                  </TableCell>
                  <TableCell>
                    {user.last_active_at_millis
                      ? new Date(user.last_active_at_millis).toLocaleString()
                      : "N/A"}
                  </TableCell>
                  <TableCell className="text-xs break-all">{user.id}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
