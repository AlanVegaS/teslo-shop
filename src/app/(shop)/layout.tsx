import { TopMenu } from '../../components/ui/top-menu/TopMenu';
import { Sidebar } from '../../components/ui/sidebar/Sidebar';

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen">
            <TopMenu />
            <Sidebar />
            <div className="px-10">
                {children}
            </div>
        </main>
    );
}