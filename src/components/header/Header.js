import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faBars,
  faSearch,
  faCalendar,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  Head,
  Navbar,
  Picture,
  PictureContainer,
  Image
} from "./Header.styled"
const baseUrl = "https://616d82e26dacbb001794cae4.mockapi.io/comments";

function Header() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios(baseUrl)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => err);
  }, []);

  return (
    <Head>
      <Navbar>
        <PictureContainer>
          <Picture>
            <FontAwesomeIcon icon={faUserFriends} />
          </Picture>
          <Picture>
            <FontAwesomeIcon icon={faBars} />
          </Picture>
          <Picture>
            <FontAwesomeIcon icon={faSearch} />
          </Picture>
        </PictureContainer>
        <PictureContainer>
          <Picture>
            <FontAwesomeIcon icon={faCalendar} />
          </Picture>
          <Picture>
            <FontAwesomeIcon icon={faEnvelope} />
          </Picture>
          <Picture>
            <Image src={users[users.length - 1]?.avatar} alt="aaa"></Image>
          </Picture>
        </PictureContainer>
      </Navbar>
    </Head>
  );
}

export default Header;
