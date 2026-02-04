import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function ProfileLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const session = await auth()
    console.log(session);
    if(!session?.user) {
        return redirect('/auth/login')
    }

    return (
        <div className="flex flex-col">
            {children}
        </div>
    )
}