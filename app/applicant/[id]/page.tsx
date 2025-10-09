/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import jsPDF from 'jspdf'
import QRCode from 'qrcode'

interface Applicant {
  id: string
  fullName: string
  contactNumber: string
  email?: string
  address: string
  governmentId: string
  reason: string
  passType: string
  status: 'PENDING' | 'APPROVED' | 'REJECTED'
  createdAt: string
  updatedAt: string
}

export default function ApplicantPage() {
  const params = useParams()
  const id = params?.id
  const [applicant, setApplicant] = useState<Applicant | null>(null)
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('')

  // Fetch applicant data
  const fetchApplicant = async () => {
    if (!id) return
    try {
      const res = await fetch(`/api/applicant/${id}`)
      if (!res.ok) throw new Error('Failed to fetch')
      const json = await res.json()
      setApplicant(json)
      const qrDataUrl = await QRCode.toDataURL(json.id)
      setQrCodeUrl(qrDataUrl)
    } catch (err) {
      console.error(err)
      toast.error('Could not load applicant')
    }
  }

  useEffect(() => {
    fetchApplicant()
  }, [id])

  const downloadPDF = async () => {
    if (!applicant) return
  
    const doc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' })
    const margin = 50
    let y = 60
  
    // Header
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('REPULSO E-PASS AUTHORITY', margin, y)
    y += 25
    doc.setFontSize(16)
    doc.text('Official E-Pass Approval Letter', margin, y)
    y += 30
  
    // Date
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(12)
    doc.text(`Date: ${new Date(applicant.createdAt).toLocaleDateString()}`, margin, y)
    y += 30
  
    // Recipient info
    doc.text(`To: ${applicant.fullName}`, margin, y)
    y += 18
    doc.text(`Address: ${applicant.address}`, margin, y)
    y += 25
  
    // Subject
    doc.setFont('helvetica', 'bold')
    doc.text('Subject: Issuance of E-Pass', margin, y)
    y += 25
  
    // Letter body
    doc.setFont('helvetica', 'normal')
    const letterBody = `
  Dear ${applicant.fullName},
  
  We are pleased to inform you that your application for an E-Pass has been approved. This E-Pass has been issued in your name for the purpose of ${applicant.reason}, and it is valid from ${new Date(applicant.createdAt).toLocaleDateString()} to ${new Date(new Date(applicant.createdAt).getTime() + 24*60*60*1000).toLocaleDateString()}. Your registered contact number is ${applicant.contactNumber}, and your email address is ${applicant.email ?? 'not provided'}. The government-issued identification provided with your application is ${applicant.governmentId}. The pass type granted is ${applicant.passType}, which allows individual or emergency travel.
  
  This E-Pass is issued solely for your authorized travel and is non-transferable. You must carry this pass along with a valid government-issued identification during travel and comply with all applicable regulations, restrictions, and laws as established by the REPULSO E-Pass Authority, as well as local, state, and federal guidelines. Any misuse, duplication, or sharing of this pass is strictly prohibited and may lead to immediate revocation, fines, or legal action.
  
  By holding this E-Pass, you acknowledge your responsibility to follow all rules and understand that the REPULSO E-Pass Authority is not liable for any issues arising from misuse or non-compliance. We wish you safe and authorized travel.
    `
    const lines = doc.splitTextToSize(letterBody, 495)
    doc.text(lines, margin, y)
    y += lines.length * 18 + 40
  
    // Signature
    doc.setFont('helvetica', 'bold')
    doc.text('Authorized Signature:', margin, y)
    y += 25
    doc.text('REPULSO E-Pass Authority', margin, y)
  
    doc.save(`EPass-${applicant.id}.pdf`)
  }
  

  if (!applicant) return <p className="p-6">Loading applicant data...</p>

  return (
    <div className="border rounded-lg shadow-md bg-white text-black p-6 max-w-3xl mx-auto space-y-4">
  <h1 className="text-xl font-bold">REPULSO E-PASS AUTHORITY</h1>
  <h2 className="text-lg font-semibold">Official E-Pass Approval Letter</h2>
  <p className="mt-2">Date: {new Date(applicant.createdAt).toLocaleDateString()}</p>

  <p className="mt-4">To: <strong>{applicant.fullName}</strong></p>
  <p>Address: <strong>{applicant.address}</strong></p>
  <p className="mt-2 font-semibold">Subject: Issuance of E-Pass</p>

  <p className="mt-4">
    Dear {applicant.fullName},<br/><br/>
    We are pleased to inform you that your application for an E-Pass has been approved. This E-Pass has been issued in your name for the purpose of {applicant.reason}, and it is valid from {new Date(applicant.createdAt).toLocaleDateString()} to {new Date(new Date(applicant.createdAt).getTime() + 24*60*60*1000).toLocaleDateString()}. Your registered contact number is {applicant.contactNumber}, and your email address is {applicant.email ?? 'not provided'}. The government-issued identification provided with your application is {applicant.governmentId}. The pass type granted is {applicant.passType}, which allows individual or emergency travel.<br/><br/>
    This E-Pass is issued solely for your authorized travel and is non-transferable. You must carry this pass along with a valid government-issued identification during travel and comply with all applicable regulations, restrictions, and laws as established by the REPULSO E-Pass Authority, as well as local, state, and federal guidelines. Any misuse, duplication, or sharing of this pass is strictly prohibited and may lead to immediate revocation, fines, or legal action.<br/><br/>
    By holding this E-Pass, you acknowledge your responsibility to follow all rules and understand that the REPULSO E-Pass Authority is not liable for any issues arising from misuse or non-compliance. We wish you safe and authorized travel.
  </p>

  <p className="mt-6 font-bold">Authorized Signature:</p>
  <p>REPULSO E-Pass Authority</p>

  {applicant.status === 'APPROVED' && (
    <Button onClick={downloadPDF} className="mt-4 w-full">
      Download E-Pass PDF
    </Button>
  )}
</div>

  )
}
