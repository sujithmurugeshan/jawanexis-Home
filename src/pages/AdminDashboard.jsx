import { useEffect, useState } from "react";
import { ArrowLeft, RefreshCw, Briefcase, Mail, Phone, Calendar, UserCheck, ShieldAlert } from "lucide-react";
import { API_BASE_URL } from "../config";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("internships"); // 'internships' or 'jobs'
  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchApplications = async () => {
    const token = localStorage.getItem("jawa_token");
    if (!token) {
      setError("Not authenticated");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/internship/apply`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.detail || "Failed to fetch internships");
      setApplications(data.data || []);

      const jobRes = await fetch(`${API_BASE_URL}/api/jobs/apply`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const jobData = await jobRes.json();

      if (!jobRes.ok) throw new Error(jobData.detail || "Failed to fetch jobs");
      setJobs(jobData.data || []);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus, isJob = false) => {
    const token = localStorage.getItem("jawa_token");
    if (!token) return;
    
    try {
      const endpoint = isJob 
        ? `${API_BASE_URL}/api/jobs/apply/${id}/status`
        : `${API_BASE_URL}/api/internship/apply/${id}/status`;

      const res = await fetch(endpoint, {
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Failed to update status");
      
      if (isJob) {
        setJobs(prev => prev.map(app => app.id === id ? { ...app, status: newStatus } : app));
      } else {
        setApplications(prev => prev.map(app => app.id === id ? { ...app, status: newStatus } : app));
      }
    } catch (err) {
      alert("Error updating status: " + err.message);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  if (error === "Admin access required" || error === "Not authenticated") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
        <ShieldAlert size={64} className="text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-900">Access Denied</h1>
        <p className="mt-2 text-gray-600 mb-6">You do not have permission to view this page.</p>
        <a href="#home" className="btn-glossy-green px-6 py-2 rounded-md font-bold text-white">Return Home</a>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4fff7] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#home" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-guvi-ink shadow-sm hover:bg-gray-50">
              <ArrowLeft size={20} />
            </a>
            <h1 className="text-2xl font-extrabold text-guvi-ink">Admin Dashboard</h1>
          </div>
          <button 
            onClick={fetchApplications}
            disabled={loading}
            className="flex items-center gap-2 rounded-md border border-guvi-green bg-white px-4 py-2 text-sm font-bold text-guvi-green shadow-sm hover:bg-guvi-soft disabled:opacity-50"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        {error ? (
          <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600 border border-red-200">
            {error}
          </div>
        ) : (
          <div className="rounded-xl border border-guvi-line bg-white shadow-sm overflow-hidden">
            <div className="border-b border-guvi-line bg-gray-50/50">
              <div className="flex gap-4 px-6 pt-4">
                <button
                  onClick={() => setActiveTab("internships")}
                  className={`pb-3 font-bold text-sm px-2 border-b-2 transition-colors ${
                    activeTab === "internships" 
                      ? "border-guvi-green text-guvi-green" 
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} />
                    Internship/Courses ({applications.length})
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("jobs")}
                  className={`pb-3 font-bold text-sm px-2 border-b-2 transition-colors ${
                    activeTab === "jobs" 
                      ? "border-guvi-green text-guvi-green" 
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <UserCheck size={18} />
                    Job Applications ({jobs.length})
                  </div>
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 border-b border-guvi-line">
                  <tr>
                    <th className="px-6 py-3 font-bold">Applicant</th>
                    <th className="px-6 py-3 font-bold">Contact Info</th>
                    <th className="px-6 py-3 font-bold">Course Applied</th>
                    <th className="px-6 py-3 font-bold">Date</th>
                    <th className="px-6 py-3 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-8 text-center text-gray-500 font-medium">
                        Loading applications...
                      </td>
                    </tr>
                  ) : activeTab === "internships" ? (
                    applications.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="px-6 py-8 text-center text-gray-500 font-medium">
                          No internship applications found.
                        </td>
                      </tr>
                    ) : (
                      applications.map((app) => (
                        <tr key={app.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="font-bold text-gray-900">{app.name}</div>
                            <div className="text-xs text-gray-500 mt-1">{app.education || "N/A"} • {app.graduationYear || "N/A"}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 text-gray-700">
                              <Mail size={14} className="text-gray-400" />
                              <a href={`mailto:${app.email}`} className="hover:text-guvi-green">{app.email}</a>
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-gray-700">
                              <Phone size={14} className="text-gray-400" />
                              <a href={`tel:${app.phone}`} className="hover:text-guvi-green">{app.phone}</a>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 border border-blue-200">
                              {app.courseKey}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1.5">
                              <Calendar size={14} className="text-gray-400" />
                              {new Date(app.createdAt).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold border ${
                                app.status === 'PENDING' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                app.status === 'ENROLLED' ? 'bg-green-50 text-green-700 border-green-200' :
                                app.status === 'CONTACTED' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                'bg-red-50 text-red-700 border-red-200'
                              }`}>
                                <span className={`h-1.5 w-1.5 rounded-full ${
                                  app.status === 'PENDING' ? 'bg-yellow-500' :
                                  app.status === 'ENROLLED' ? 'bg-green-500' :
                                  app.status === 'CONTACTED' ? 'bg-purple-500' :
                                  'bg-red-500'
                                }`}></span>
                                {app.status === 'ENROLLED' ? 'PAID / ENROLLED' : app.status}
                              </span>
                              <select 
                                value={app.status}
                                onChange={(e) => updateStatus(app.id, e.target.value)}
                                className="ml-2 text-xs border border-gray-200 rounded p-1 text-gray-600 bg-white cursor-pointer focus:outline-none focus:border-guvi-green"
                              >
                                <option value="PENDING">Set Pending</option>
                                <option value="CONTACTED">Mark Contacted</option>
                                <option value="ENROLLED">Mark as Paid</option>
                                <option value="REJECTED">Reject</option>
                              </select>
                            </div>
                          </td>
                        </tr>
                      ))
                    )
                  ) : (
                    jobs.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="px-6 py-8 text-center text-gray-500 font-medium">
                          No job applications found.
                        </td>
                      </tr>
                    ) : (
                      jobs.map((job) => (
                        <tr key={job.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="font-bold text-gray-900">{job.name}</div>
                            <div className="text-xs text-gray-500 mt-1">{job.education || "N/A"} • {job.graduationYear || "N/A"}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 text-gray-700">
                              <Mail size={14} className="text-gray-400" />
                              <a href={`mailto:${job.email}`} className="hover:text-guvi-green">{job.email}</a>
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-gray-700">
                              <Phone size={14} className="text-gray-400" />
                              <a href={`tel:${job.phone}`} className="hover:text-guvi-green">{job.phone}</a>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 border border-blue-200">
                              {job.jobTitle}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1.5">
                              <Calendar size={14} className="text-gray-400" />
                              {new Date(job.createdAt).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold border ${
                                job.status === 'PENDING' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                job.status === 'HIRED' ? 'bg-green-50 text-green-700 border-green-200' :
                                job.status === 'INTERVIEWING' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                'bg-red-50 text-red-700 border-red-200'
                              }`}>
                                <span className={`h-1.5 w-1.5 rounded-full ${
                                  job.status === 'PENDING' ? 'bg-yellow-500' :
                                  job.status === 'HIRED' ? 'bg-green-500' :
                                  job.status === 'INTERVIEWING' ? 'bg-purple-500' :
                                  'bg-red-500'
                                }`}></span>
                                {job.status}
                              </span>
                              <select 
                                value={job.status}
                                onChange={(e) => updateStatus(job.id, e.target.value, true)}
                                className="ml-2 text-xs border border-gray-200 rounded p-1 text-gray-600 bg-white cursor-pointer focus:outline-none focus:border-guvi-green"
                              >
                                <option value="PENDING">Pending</option>
                                <option value="INTERVIEWING">Interviewing</option>
                                <option value="HIRED">Hired</option>
                                <option value="REJECTED">Rejected</option>
                              </select>
                            </div>
                          </td>
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default AdminDashboard;
