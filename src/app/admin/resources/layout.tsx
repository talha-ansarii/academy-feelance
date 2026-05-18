import { type Metadata } from "next";
import { AdminAuthGate } from "@/components/admin/AdminAuthGate";
import { LogoutButton } from "@/components/admin/LogoutButton";

export const metadata: Metadata = {
  title: "Admin Portal | Sovereign Scholar",
  description: "Admin dashboard for managing resources and student progress.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthGate>
      <div className="flex min-h-screen bg-background text-on-surface antialiased">
        {/* SideNavBar Shell */}
        <aside className="sticky top-0 hidden h-screen w-64 flex-col border-r border-slate-200 bg-slate-50 font-inter text-sm font-medium transition-all duration-200 ease-in-out md:flex dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col items-start px-6 py-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-container text-on-primary-container">
                <span className="material-symbols-outlined">school</span>
              </div>
              <div>
                <h1 className="text-lg font-black leading-none text-slate-900 dark:text-white">Admin Portal</h1>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Resources Management</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-grow space-y-1 px-3">
            <a href="/admin" className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-slate-600 transition-colors hover:bg-slate-200/50 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-blue-400">
              <span className="material-symbols-outlined">dashboard</span>
              <span>Dashboard</span>
            </a>
            {/* Active State: Resource Manager */}
            <a href="/admin/resources" className="flex items-center gap-3 rounded-lg bg-blue-50 px-4 py-2.5 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
              <span className="material-symbols-outlined">description</span>
              <span>Resource Manager</span>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-slate-600 transition-colors hover:bg-slate-200/50 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-blue-400">
              <span className="material-symbols-outlined">group</span>
              <span>Student Progress</span>
            </a>
          </nav>
          
          <div className="space-y-1 border-t border-slate-200 px-3 pb-6 pt-4 dark:border-slate-800">
            <a href="/" className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-slate-600 transition-colors hover:bg-slate-200/50 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-blue-400">
              <span className="material-symbols-outlined">public</span>
              <span>Public Site</span>
            </a>
            <LogoutButton />
          </div>
        </aside>

        <div className="flex flex-grow flex-col">
          {/* TopAppBar Shell */}
          <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-6 font-inter text-sm antialiased dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-grow items-center">
              <div className="mr-4 md:hidden">
                <span className="material-symbols-outlined text-slate-600">menu</span>
              </div>
              <div className="group relative w-full max-w-md">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400 transition-colors group-focus-within:text-blue-600">search</span>
                <input type="text" placeholder="Search resources..." className="w-full rounded-lg border-transparent bg-slate-100 py-2 pl-10 pr-4 text-sm transition-all focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 dark:bg-slate-800" />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div className="mx-2 h-8 w-[1px] bg-slate-200 dark:bg-slate-700"></div>
              <div className="flex items-center gap-3">
                <div className="hidden text-right sm:block">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Admin User</p>
                  <p className="text-[10px] font-medium text-slate-500">Head Administrator</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/10 bg-slate-100 dark:bg-slate-800">
                  <span className="material-symbols-outlined text-slate-500">person</span>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-grow p-4 md:p-8">
            {children}
          </main>
        </div>
        
        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-slate-200 bg-white md:hidden dark:border-slate-800 dark:bg-slate-900">
          <a href="/admin" className="flex flex-col items-center justify-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px] font-bold">Dash</span>
          </a>
          <a href="/admin/resources" className="flex flex-col items-center justify-center gap-1 text-blue-600">
            <span className="material-symbols-outlined">description</span>
            <span className="text-[10px] font-bold">Resources</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">group</span>
            <span className="text-[10px] font-bold">Students</span>
          </a>
        </nav>
      </div>
    </AdminAuthGate>
  );
}
