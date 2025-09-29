// 'use client'

// import { FileIcon, X } from 'lucide-react'
// import Image from 'next/image'

// import { UploadDropzone } from '@/lib/uploadthing'
// import '@uploadthing/react/styles.css'

// type FileUploadProps = {
//   endpoint: 'messageFile' | 'serverImage'
//   onChange: (url: string | string[]) => void
//   value: string | string[]
//   multiple?: boolean
// }

// export const FileUpload = ({ endpoint, onChange, value, multiple = false }: FileUploadProps) => {
//   const files = Array.isArray(value) ? value : [value]

//   const handleRemove = (index: number) => {
//     if (!multiple) {
//       onChange('')
//     } else {
//       const updated = [...files]
//       updated.splice(index, 1)
//       onChange(updated)
//     }
//   }

//   const handleUploadComplete = (res: { url: string }[]) => {
//     const uploadedUrls = res.map(file => file.url)
//     if (multiple) {
//       onChange([...(Array.isArray(value) ? value : []), ...uploadedUrls])
//     } else {
//       onChange(uploadedUrls[0])
//     }
//   }

//   return (
//     <div className="space-y-2">
//       {files.filter(Boolean).map((file, idx) => {
//         const fileType = file.split('.').pop()
//         const isPDF = fileType === 'pdf'

//         return (
//           <div key={idx} className="relative">
//             {isPDF ? (
//               <div className="relative flex items-center p-2 mt-2 rounded-md bg-zinc-100 dark:bg-zinc-900">
//                 <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
//                 <a
//                   href={file}
//                   target="_blank"
//                   rel="noreferrer noopener"
//                   className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
//                 >
//                   {file}
//                 </a>
//                 <button
//                   onClick={() => handleRemove(idx)}
//                   className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
//                   type="button"
//                 >
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>
//             ) : (
//               <div className="relative h-20 w-20">
//                 <Image src={file} alt="uploaded image" className="rounded-full" fill />
//                 <button
//                   onClick={() => handleRemove(idx)}
//                   className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
//                   type="button"
//                 >
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>
//             )}
//           </div>
//         )
//       })}

//       <UploadDropzone
//         className="border-zinc-500 ut-button:bg-indigo-500 ut-button:ut-uploading:bg-indigo-500/70 after:ut-button:ut-uploading:bg-indigo-500 ut-label:text-indigo-500 hover:ut-label:text-indigo-500/70"
//         endpoint={endpoint}
//         onClientUploadComplete={handleUploadComplete}
//         onUploadError={(error) => {
//           console.error('File Upload Error: ', error)
//         }}
//       />
//     </div>
//   )
// }
