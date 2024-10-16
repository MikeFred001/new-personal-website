import Link from 'next/link';
import Typography from './common/Typography';
import { useState, useEffect } from 'react';

export default function FooterContacts({ className }: { className: string; }) {
  const [phoneCopied, setPhoneCopied] = useState(false);
  const contactInfo = {
    email: 'mpfplus@gmail.com',
    phone: '702-375-5865',
    linkedIn: 'https://www.linkedin.com/in/mfrederickson-software-engineer',
    github: 'https://github.com/MikeFred001'
  };

  useEffect(() => {
    if (phoneCopied) {
      const timeout = setTimeout(() => {
        setPhoneCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [phoneCopied]);

  return (
    <div className={`FOOTER-CONTACTS flex justify-between w-full fixed bottom-0 px-20 py-6 transition-all duration-300 ${className}`}>
      <Typography className='cursor-pointer' onClick={copyPhoneNum}>
        {phoneCopied ? 'COPIED!' : contactInfo.phone}
      </Typography>

      <Link href={`mailto:${contactInfo.email}`} passHref>
        <Typography>{contactInfo.email}</Typography>
      </Link>

      <Link target='_blank' href={contactInfo.linkedIn} rel="noopener noreferrer">
        <Typography>LinkedIn</Typography>
      </Link>

      <Link target='_blank' href={contactInfo.github} rel="noopener noreferrer">
        <Typography>GitHub</Typography>
      </Link>
    </div>
  );

  function copyPhoneNum() {
    navigator.clipboard.writeText(contactInfo.phone);
    setPhoneCopied(true);
  }
}
