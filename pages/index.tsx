import { useState } from "react";
import styled from "styled-components";
import { Routes } from "@config/routes";
import { color, textFont } from "@styles/theme";
import Link from "next/link";
import { ModalDialog } from "@features/layout";
import MailIcon from "public/icons/mail.svg";

const Header = styled.header`
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 12px 0 16px;
`;

const NavItem = styled.li`
  margin: 0 16px;
  padding-left: 1px;
  a {
    text-decoration: none;
    color: ${color("gray", 500)};
    font-size: ${textFont("md", "medium")};
  }
`;

const DashboardButton = styled.div`
  padding: 10px 18px;
  background: ${color("primary", 600)};
  border-radius: 8px;

  &:hover {
    background: ${color("primary", 700)};
  }

  a {
    text-decoration: none;
    color: white;
    font-size: ${textFont("md", "medium")};
  }
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: ${color("primary", 600)};
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: ${color("primary", 700)};
  }
`;

const IssuesPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {showModal && (
        <ModalDialog
          image={MailIcon}
          title="Contact Us Via Email"
          body="Any questions? Send us an email at prolog@profy.dev. We usually answer within 24 hours."
          buttons={[
            {
              key: "cancel",
              text: "Cancel",
              onClick: () => setShowModal(false),
              highlighted: false,
            },
            {
              key: "ok",
              text: "Open Email App",
              onClick: () => {
                setShowModal(false);
                window.open("mailto:silviomori@gmail.com");
              },
              highlighted: true,
            },
          ]}
        />
      )}

      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <nav>
          <NavItems>
            <NavItem>
              <Link href={Routes.home}>Home</Link>
            </NavItem>
            <NavItem>
              <Link href={Routes.products}>Products</Link>
            </NavItem>
            <NavItem>
              <Link href={Routes.documentation}>Documentation</Link>
            </NavItem>
            <NavItem>
              <Link href={Routes.pricing}>Pricing</Link>
            </NavItem>
          </NavItems>
        </nav>
        <DashboardButton>
          <Link href={Routes.projects}>Open Dashboard</Link>
        </DashboardButton>
      </Header>

      <ContactButton onClick={() => setShowModal(true)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
