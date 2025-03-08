import { Avatar, Box, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import profile from "@/profile.jpg";
import { COLORS } from "@/utils/enum";
const Sidebar = () => {
  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          width: 300,
          boxShadow: "0px 0px 3px 3px #00000059",
          backgroundColor: COLORS.sidebar_bg,
        }}
      >
        <Box sx={{ textAlign: "center", p: 4 }}>
          <Avatar
            sx={{
              width: 200,
              height: 200,
              margin: "auto",
              border: "4px solid #d7d7d7",
            }}
          >
            <Image src={profile} alt="" width={200} height={200} />
          </Avatar>
        </Box>
        <Divider sx={{ borderColor: COLORS.GREY, borderWidth: 1 }} />
      </Box>
    </div>
  );
};

export default Sidebar;
