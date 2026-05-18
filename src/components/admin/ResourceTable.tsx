"use client";

import { useState } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

type Resource = {
  id: string;
  title: string;
  category: string;
  subject: string;
  fileName: string;
  fileSize: number;
  status: string;
  createdAt: string;
};

export function ResourceTable({ resources }: { resources: Resource[] }) {
  const [filter, setFilter] = useState("All");
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const router = useRouter();

  const filteredResources = resources.filter(res => {
    if (filter === "All") return true;
    return res.status === filter;
  });

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this resource?")) return;
    
    setIsDeleting(id);
    try {
      const token = sessionStorage.getItem("adminToken");
      
      const response = await fetch(`/api/resources/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      
      if (!response.ok) throw new Error("Failed to delete");
      
      router.refresh();
    } catch (error) {
      alert("Failed to delete resource");
    } finally {
      setIsDeleting(null);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Previous Year Paper":
        return "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300";
      case "Mock Test":
        return "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300";
      case "Study Notes":
      default:
        return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300";
    }
  };

  const formatFileSize = (bytes: number) => {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm xl:col-span-8 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-100 px-6 py-4 sm:flex-row sm:items-center dark:border-slate-800">
        <h3 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-blue-600">inventory_2</span>
          Resource Inventory
        </h3>
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {["All", "Published", "Drafts"].map((f, i) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-xs font-bold border-slate-200 text-slate-700 focus:z-10 focus:ring-1 focus:ring-blue-600 dark:border-slate-700 dark:text-slate-300 transition-colors
                  ${i === 0 ? "rounded-l-lg border" : i === 2 ? "rounded-r-lg border" : "border-y border-x-0"}
                  ${filter === f ? "bg-slate-100 dark:bg-slate-800" : "bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800/50"}
                `}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Title</th>
              <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Category</th>
              <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Subject</th>
              <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Date Uploaded</th>
              <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Status</th>
              <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <tr key={resource.id} className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-red-500">
                        {resource.fileName.endsWith('.pdf') ? 'picture_as_pdf' : 'description'}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">{resource.title}</div>
                        <div className="text-[10px] text-slate-500">{formatFileSize(resource.fileSize)}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`rounded px-2 py-1 text-[10px] font-bold uppercase ${getCategoryColor(resource.category)}`}>
                      {resource.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-700 dark:text-slate-300">{resource.subject}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-500">{format(new Date(resource.createdAt), "MMM dd, yyyy")}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${resource.status === 'Published' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{resource.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="rounded-md p-1.5 text-slate-400 transition-all hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button 
                        onClick={() => handleDelete(resource.id)}
                        disabled={isDeleting === resource.id}
                        className="rounded-md p-1.5 text-slate-400 transition-all hover:bg-red-50 hover:text-red-600 disabled:opacity-50 dark:hover:bg-red-900/20"
                      >
                        {isDeleting === resource.id ? (
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-red-600 border-t-transparent inline-block"></span>
                        ) : (
                          <span className="material-symbols-outlined text-lg">delete</span>
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-sm text-slate-500">
                  No resources found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/30 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/30">
        <p className="text-xs font-medium text-slate-500">Showing {filteredResources.length} resources</p>
        <div className="flex gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 bg-white text-slate-400 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 bg-white text-xs font-bold text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white">1</button>
          <button className="flex h-8 w-8 items-center justify-center rounded border border-transparent bg-transparent text-xs font-bold text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800">2</button>
          <button className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 bg-white text-slate-400 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}
