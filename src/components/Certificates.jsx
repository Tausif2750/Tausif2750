import Section from './Section'
import { useState } from 'react'
import pythonCertificate from '../assets/Api.png'
import awsCertificate from '../assets/AWS Cimage - Copy.jpg'
import mysqlCertificate from '../assets/My SQL.jpg'
import apiCertificate from '../assets/live.png'
import cssCertificate from '../assets/css.jpeg'
import excelCertificate from '../assets/Excel.jpg'
import iitPythonCertificate from '../assets/pythone.jpeg'
import volunteerCertificate from '../assets/volunteer.jpeg'
const certificates = [[pythonCertificate, 'Python For Data Science'], [awsCertificate, 'Google Cloud AWS'], [mysqlCertificate, 'PHP and MySQL'], [apiCertificate, 'APIs with Node.js'], [cssCertificate, 'CSS from IIT Bombay'], [excelCertificate, 'Advanced Data Analysis'], [iitPythonCertificate, 'Python from IIT Bombay'], [volunteerCertificate, 'Volunteer in CIMAGE']]
function Certificates() {
  const [selected, setSelected] = useState(null)
  return <Section id="certificates" title="Certificates"><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5">{certificates.map(([image, name]) => <button type="button" key={name} onClick={() => setSelected([image, name])} className="rounded-xl bg-black/30 p-3 text-center transition duration-300 hover:scale-105"><img src={image} alt={name} className="h-44 w-full rounded-lg border-2 border-cyan-300 object-cover sm:h-48" /><p className="mt-3 text-sm sm:text-base">{name}</p><span className="mt-2 inline-block text-xs text-cyan-200">Click to preview</span></button>)}</div>{selected && <div className="fixed inset-0 z-[70] grid place-items-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label={selected[1]} onClick={() => setSelected(null)}><div className="relative max-h-[90vh] max-w-4xl" onClick={(event) => event.stopPropagation()}><button type="button" onClick={() => setSelected(null)} className="absolute -right-2 -top-2 grid h-9 w-9 place-items-center rounded-full bg-white text-xl text-black" aria-label="Close certificate preview">×</button><img src={selected[0]} alt={selected[1]} className="max-h-[82vh] max-w-full rounded-lg object-contain" /><p className="mt-3 text-center font-semibold">{selected[1]}</p></div></div>}</Section>
}
export default Certificates
