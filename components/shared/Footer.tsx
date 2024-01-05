import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 padding-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Eventorer"
            width={128}
            height={38}
          />
        </Link>
        <p>2023 Eventorer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
