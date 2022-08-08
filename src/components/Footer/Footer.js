import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Copyright,
} from "./FooterElements";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div>
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading>Menu</Heading>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/category/figures">Action Figures</FooterLink>
              <FooterLink href="/category/outlet">Outlet</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">
                <WhatsAppIcon sx={{ fontSize: 18 }} /> 1162058847
              </FooterLink>
              <FooterLink href="#">
                <PhoneEnabledIcon sx={{ fontSize: 18 }} /> 5491162058847
              </FooterLink>
              <FooterLink href="#">
                <LocalPostOfficeIcon sx={{ fontSize: 18 }} />{" "}
                gomucomics@gmail.com
              </FooterLink>
              <FooterLink href="#">
                <LocationOnIcon sx={{ fontSize: 18 }} /> 742 Evergreen Terrace,
                Springfield
              </FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <FacebookIcon sx={{ fontSize: 35 }} />{" "}
                <InstagramIcon sx={{ fontSize: 35 }} />{" "}
                <TwitterIcon sx={{ fontSize: 35 }} />
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
      <Copyright>© Copyright Gomu Comics 2022. All rights reserved.</Copyright>
    </div>
  );
};

export default Footer;
