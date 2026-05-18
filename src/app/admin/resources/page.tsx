import { db } from "@/server/db";
import { ResourceUploadForm } from "@/components/admin/ResourceUploadForm";
import { ResourceTable } from "@/components/admin/ResourceTable";

export default async function AdminResourcesPage() {
  // Fetch initial data
  const resources = await db.resource.findMany({
    orderBy: { createdAt: "desc" },
  });

  const totalResources = resources.length;
  const publishedCount = resources.filter(r => r.status === "Published").length;
  // This is a rough estimation of storage used out of a hypothetical 10GB limit
  const totalStorageBytes = resources.reduce((acc, curr) => acc + curr.fileSize, 0);
  const storagePercentage = Math.min(Math.round((totalStorageBytes / (10 * 1024 * 1024 * 1024)) * 100), 100);

  // We convert the dates to ISO strings to pass to client components
  const serializedResources = resources.map(r => ({
    ...r,
    createdAt: r.createdAt.toISOString(),
    updatedAt: r.updatedAt.toISOString(),
  }));

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Resource Management</h2>
          <p className="mt-1 text-slate-500">Manage and publish academic materials for NEET Mastery candidates.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold transition-colors hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined text-sm">file_download</span>
            Export List
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-container hover:text-on-primary-container">
            <span className="material-symbols-outlined text-sm">upload</span>
            Bulk Upload
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-12">
        <ResourceUploadForm />
        <ResourceTable resources={serializedResources} />
      </div>

      {/* Dashboard Stats Summary */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
            <span className="material-symbols-outlined">description</span>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Resources</p>
            <p className="text-2xl font-black text-slate-900 dark:text-white">{totalResources}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
            <span className="material-symbols-outlined">check_circle</span>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Published</p>
            <p className="text-2xl font-black text-slate-900 dark:text-white">{publishedCount}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
            <span className="material-symbols-outlined">storage</span>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Storage Used</p>
            <p className="text-2xl font-black text-slate-900 dark:text-white">{storagePercentage}%</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400">
            <span className="material-symbols-outlined">group</span>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Active Students</p>
            <p className="text-2xl font-black text-slate-900 dark:text-white">3,401</p>
          </div>
        </div>
      </div>
    </div>
  );
}
