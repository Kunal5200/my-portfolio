import {
  Avatar,
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import profile from "@/profile.jpg";
import { COLORS } from "@/utils/enum";
import { HEADER_LINKS } from "@/assets/header";
import { roboto } from "@/utils/fonts";
import { useRouter } from "next/router";
const Sidebar = () => {
  const router = useRouter();

  const handleRouter = (path: string) => {
    router.push(path);
  };

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
          zIndex: 999,
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

        <List sx={{ mt: 4 }}>
          {HEADER_LINKS.map((val, i) => (
            <ListItemButton
              key={i}
              onClick={() => handleRouter(val.url)}
              sx={{
                backgroundColor:
                  val.url === router.pathname
                    ? COLORS.PRIMARY
                    : COLORS.TRANSPARENT,
                ":hover": {
                  backgroundColor: COLORS.PRIMARY,
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: COLORS.WHITE,
                      fontFamily: roboto.style,
                    }}
                  >
                    {val.label}
                  </Typography>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default Sidebar;
