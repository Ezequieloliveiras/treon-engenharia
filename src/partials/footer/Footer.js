import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Box } from "@mui/material"

import logoWhatsapp from '../logo/logo_whatsapp.png'
import logoInstagram from '../logo/logo_instagram.png'
import LogoLinkedin from '../logo/logo_linkedin.png'


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
          <Grid item xs={12} sm={4} >
            <Typography variant="h6" color="white" gutterBottom >
              Siga-nos
            </Typography>
            <a href="https://wa.me/+5527996213588" target="_blank" rel="noopener noreferrer"
            style={{
              background: 'none',
              display: 'inline-block'
            }}>
            <img src={logoWhatsapp}
              style={{
                width: '30px',
                height: '30px',
                marginRight: '10px',
              }}
              alt="logoLinkedin" />
          </a>

          <a href="https://www.linkedin.com/company/treon-engenharia-ltda/about/" target="_blank" rel="noopener noreferrer"
            style={{
              background: 'none',
              display: 'inline-block'
            }}>
            <img src={LogoLinkedin}
              style={{
                width: '30px',
                height: '30px',
                marginRight: '10px',
              }}
              alt="linkedinLogo" />
          </a>

          <a href="https://www.instagram.com/treonengenharia/" target="_blank" rel="noopener noreferrer"
            style={{
              background: 'none',
              display: 'inline-block'
            }}>
            <img
              src={logoInstagram}
              style={{
                width: '30px',
                height: '30px',
                display: 'block',
              }}
              alt="instaLogo"
            />
          </a>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center"
            sx={{
              color: 'white'
            }}>
            {"Copyright © "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}