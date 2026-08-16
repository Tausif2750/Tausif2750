import Section from './Section'
import pythonCertificate from '../assets/Api.png'
import awsCertificate from '../assets/AWS Cimage - Copy.jpg'
import mysqlCertificate from '../assets/My SQL.jpg'
import apiCertificate from '../assets/live.png'
import cssCertificate from '../assets/css.jpeg'
import excelCertificate from '../assets/Excel.jpg'
import iitPythonCertificate from '../assets/pythone.jpeg'
import volunteerCertificate from '../assets/volunteer.jpeg'
const certificates = [[pythonCertificate, 'Python For Data Science'], [awsCertificate, 'Google Cloud AWS'], [mysqlCertificate, 'PHP and MySQL'], [apiCertificate, 'APIs with Node.js'], [cssCertificate, 'CSS from IIT Bombay'], [excelCertificate, 'Advanced Data Analysis'], [iitPythonCertificate, 'Python from IIT Bombay'], [volunteerCertificate, 'Volunteer in CIMAGE']]
function Certificates() { return <Section id="certificates" title="Certificates"><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5">{certificates.map(([image, name]) => <article key={name} className="rounded-xl bg-black/30 p-3 text-center transition duration-300 hover:scale-105"><img src={image} alt={name} className="h-44 w-full rounded-lg border-2 border-cyan-300 object-cover sm:h-48" /><p className="mt-3 text-sm sm:text-base">{name}</p></article>)}</div></Section> }
export default Certificates
