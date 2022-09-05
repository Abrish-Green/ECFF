import React from "react";

const data = [
  {
    name: "Quick links",
    links: ["Home", "About", "Projects", "Resources"],
  },
  {
    name: "About us",
    links: ["History", "Mission/Vision", "Our Team", "Partners"],
  },
  {
    name: "Projects",
    links: ["Project-1", "Project-2", "Project-3", "Project-4"],
  },
  {
    name: "Contact Info",
    links: [
      "Environment and Coffee Forest Forum, P.O.Box: 28513, Addis Ababa Ethiopia",
      "+251-116-733-707",
      "info@ecff.org.et",
    ],
  },
];
const FooterItem = ({ Title, Links }: { Title: string; Links: string[] }) => {
  return (
    <>
      <div className="footer-link px-10 md:p-0">
        <div className="footer-link-title text-xl font-[Montserrat]">
          {Title}
        </div>
        <div className="footer-links-item px-5 md:p-0 text-[#D7D7D7]">
          <ul className="py-3">
            {Links
              ? Links?.map((link_name) => {
                  return (
                    <>
                      <li className="text-md py-1 font-light font-[Montserrat] hover:underline hover:cursor-pointer">
                        <a>{link_name}</a>
                      </li>
                    </>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </>
  );
};
const FooterLinks = () => {
  return (
    <>
      <div className="md:col-span-4 footer-links grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 md:p-12">
        {data
          ? data?.map((item, i) => {
              return (
                <FooterItem key={i} Title={item.name} Links={item.links} />
              );
            })
          : null}
      </div>
    </>
  );
};

export default FooterLinks;
