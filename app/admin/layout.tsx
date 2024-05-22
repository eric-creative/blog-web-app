import "../globals.css";
import React from "react";
import {UserProvider} from "@auth0/nextjs-auth0/client";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <UserProvider>
            <div>
                Admin
            </div>
        </UserProvider>
    );
}
