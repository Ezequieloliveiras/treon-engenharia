import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#093170',
        color: 'white',
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Sobre nós
            </Typography>
            <Typography variant="body2" color="white">
              Somos uma empresa que preza pela excelência, dedicada a fornecer o melhor serviço aos nossos clientes.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Contate-nos
            </Typography>
            <Typography variant="body2" color="white">
              R. João Galerani, 90 - Jucutuquara, Vitória - ES, 29043-282, Brasil
            </Typography>
            <Typography variant="body2" color="white">
              Email: contato@treonengenharia.com.br
            </Typography>
            <Typography variant="body2" color="white">
              Phone: +55 27 99621-3588
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Siga-nos
            </Typography>
            <Link
              href="https://www.instagram.com/p/CWnauUFLLgr/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="##" color="inherit">
              <Facebook />
            </Link>
            <Link href="##" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ color: 'white' }}>
            {"Copyright © "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}