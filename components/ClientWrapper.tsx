"use client";

import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LoadingScreen />
            <FloatingNav />
            {children}
        </>
    );
}
