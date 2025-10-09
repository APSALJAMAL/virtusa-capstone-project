/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

/** Shape of Applicant coming from API */
interface Applicant {
  passType:
  | "PERSONAL"
  | "ORGANIZATION"
  | "INTER_DISTRICT"
  | "INTER_STATE"
  | "VEHICLE";
  id: string
  userId?: string | null
  fullName: string
  contactNumber: string
  email?: string | null
  address: string
  governmentId: string
  reason: string
  status: 'PENDING' | 'APPROVED' | 'REJECTED'
  createdAt: string
  updatedAt: string
}

const defaultForm = {
  fullName: '',
  contactNumber: '',
  email: '',
  address: '',
  governmentId: '',
  reason: '',
  // status: 'PENDING' as 'PENDING' | 'APPROVED' | 'REJECTED',
  passType: "PERSONAL" as
    | "PERSONAL"
    | "ORGANIZATION"
    | "INTER_DISTRICT"
    | "INTER_STATE"
    | "VEHICLE",
}

export default function Page() {
  const [form, setForm] = useState(defaultForm)
  const [data, setData] = useState<Applicant[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<Applicant | null>(null)
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const fetchData = async () => {
    const res = await fetch('/api/applicant')
    const json = await res.json()
    setData(json)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); // ✅ start loading

  try {

    const method = editingId ? 'PUT' : 'POST'
    const url = editingId ? `/api/applicant/${editingId}` : '/api/applicant'

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    console.log(res);

    if (res.ok) {
      toast.success(editingId ? 'Updated successfully' : 'Created successfully')
      setForm(defaultForm)
      setEditingId(null)
      setIsDialogOpen(false)
      fetchData()
    } else {
      const err = await res.json()
      toast.error(`Error: ${err.error}`)
    }}catch (err) {
      console.error(err);
      toast.error('Something went wrong');
    } finally {
      setLoading(false); // ✅ stop loading
    }
  }

  const confirmDelete = async () => {
    if (!pendingDeleteId) return

    const res = await fetch(`/api/applicant/${pendingDeleteId}`, {
      method: 'DELETE',
    })

    if (res.ok) {
      toast.success('Record deleted successfully')
      fetchData()
    } else {
      toast.error('Delete failed')
    }

    setPendingDeleteId(null)
  }
  const handleRedirect = (id: string) => {
    router.push(`/applicant/${id}`); // Redirects to /items/[id]
  };

  const handleEdit = (item: Applicant) => {
    setForm({
      fullName: item.fullName,
      contactNumber: item.contactNumber,
      email: item.email ?? '',
      address: item.address,
      governmentId: item.governmentId,
      reason: item.reason,
      // status: item.status,
      passType: item.passType || "PERSONAL",
    })
    setEditingId(item.id)
    setIsDialogOpen(true)
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <div className="flex justify-end mb-4">
          <DialogTrigger asChild>
            <Button onClick={() => {
              setForm(defaultForm)
              setEditingId(null)
            }}>
              Create New Applicant
            </Button>
          </DialogTrigger>
        </div>

        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{editingId ? 'Update Applicant' : 'Create Applicant'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mt-4">
            {Object.entries({
              fullName: 'Full Name',
              contactNumber: 'Contact Number',
              email: 'Email',
              address: 'Address',
              governmentId: 'Government ID',
              reason: 'Reason',
            }).map(([key, label]) => (
              <div key={key} className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <input
                  value={(form as any)[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="border p-2 w-full"
                  required={key !== 'email'}
                />
              </div>
            ))}

<div className="col-span-2">
              <label className="block text-sm font-medium mb-1">
                Pass Type
              </label>
              <select
                value={form.passType}
                onChange={(e) =>
                  setForm({
                    ...form,
                    passType: e.target.value as
                      | "PERSONAL"
                      | "ORGANIZATION"
                      | "INTER_DISTRICT"
                      | "INTER_STATE"
                      | "VEHICLE",
                  })
                }
                className="border p-2 w-full"
              >
                <option value="PERSONAL">Personal (1 day)</option>
                <option value="ORGANIZATION">Organization (7 days)</option>
                <option value="INTER_DISTRICT">Inter District (3 days)</option>
                <option value="INTER_STATE">Inter State (7 days)</option>
                <option value="VEHICLE">Vehicle (30 days)</option>
              </select>
            </div>

            {/* <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value as any })}
                className="border p-2 w-full"
              >
                <option value="PENDING">PENDING</option>
                <option value="APPROVED">APPROVED</option>
                <option value="REJECTED">REJECTED</option>
              </select>
            </div> */}

            <button
  type="submit"
  className="col-span-2 bg-primary text-white py-2 rounded hover:bg-primary-700 disabled:opacity-50"
  disabled={loading}
>
  {loading ? (editingId ? 'Updating...' : 'Creating...') : (editingId ? 'Update' : 'Create')}
</button>

          </form>
        </DialogContent>
      </Dialog>

      {/* View Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Applicant Details</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-2 max-h-[60vh] overflow-auto text-sm">
              {Object.entries(selectedItem).map(([key, value]) => (
                <div key={key}>
                  <strong className="capitalize">{key}:</strong>{' '}
                  <span className="break-words">
                    {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <h2 className="text-xl font-semibold mt-8">Your Application</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id} className="p-4 border shadow rounded space-y-2">
            <div className="font-bold">{item.fullName}</div>
            <div className="text-sm text-gray-600">ID: {item.id}</div>
            <div className="text-sm">Pass Type: {item.passType}</div>
            <div className="text-sm">Status : {item.status}</div>
            <div className="space-x-2 flex flex-wrap">
              <Button variant="outline" onClick={() => setSelectedItem(item)}>
                View
              </Button>
              {item.status === "APPROVED" && (
    <Button
      className=" text-white "
      onClick={() => handleRedirect(item.id)}
    >
      Download
    </Button>
  )}
              {/* <Button variant="secondary" onClick={() => handleEdit(item)}>
                Edit
              </Button> */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="destructive"
                    onClick={() => setPendingDeleteId(item.id)}
                  >
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will permanently delete the record.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={confirmDelete}>
                      Confirm
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
