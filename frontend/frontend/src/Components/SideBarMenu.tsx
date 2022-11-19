import { Avatar, createTheme, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Tab, Tabs, ThemeProvider, Toolbar, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import React, { useState } from 'react'
import { Box } from '@mui/system';
import '../Fonts/Oswald-VariableFont_wght.ttf';
import '../Fonts/Lato-Regular.ttf';
import '../Fonts/Lato-Thin.ttf';
import '../Fonts/Lato-Light.ttf';
import '../Fonts/Lato-Bold.ttf';
import '../Fonts/Lato-Black.ttf';
import EmployesList from './EmployesList';

const drawerWidth = 240

const CustomizedDrawer = styled(Drawer)`
  background-color: #1C212D;
`;
// const theme = createTheme({
//   typography: {
//     fontFamily: 'Oswald, Roboto',
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides:`
//       @font-face{
//         font-family: 'Oswald'
//         src: loca('Oswald'), local('Oswald'), url('../Fonts/Oswald-VariableFont_wght.ttf') format('truetype)
//       } 
//       `
//     }
//   }
// })

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;
  return (
    <div 
    role = "tabpanel"
    hidden = {value !== index}
    id = {`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    style={{width: '80vw'}}
    {...other}
    >
      {value === index && (
        <Box sx = {{p:3, width: "100%"}} >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SideBarMenu() {

  const [openMenu, setOpenMenu] = useState("Dashboard")
  const [value, setValue] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
    {/* <ThemeProvider theme={theme}>
    <CssBaseline></CssBaseline> */}
    <Box sx= {{
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
    }}>

      <Box sx= {{
        bgcolor: '#1C212D',
        padding: '16px 32px',
        color: "#fff"
      }}>
      <Typography data-end="5" sx={{
        fontFamily: 'Oswald',
        fontWeight: 'bold',
        '&::first-letter' : {
          color: '#FFD831'
        },
        '&::after' : {
          content: 'attr(data-end)',
          color: '#FFD831',
          fontFamily: 'Oswald'
        }
      }} variant = "h3" ml="auto" mr="auto" pt="16px" pb="16px">Vicious</Typography>
      <Tabs textColor = "inherit" orientation='vertical' value={value} onChange={handleChange} sx={{
        height: '100vh',
        margin: '0 -32px',
        '& .MuiTabs-indicator': {
          display: 'none'
        }
      }} >

        <Tab 
        icon = {<HomeIcon sx={{paddingRight: '8px'}}fontSize="small"/>}
        iconPosition="start"
        label = "Dashboard" {...a11yProps(0)} sx= {{
          backgroundImage: 'linear-gradient(#FFD831, #FFD831)',
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '0% 100%',
          opacity : '1',
          margin: "5px 24px",
          borderRadius: "10px",
          transition: 'background-size .5s, color .5s',
          minHeight: "48px",
          justifyContent: "flex-start",
          '&:hover': {
            backgroundSize: '100% 100%',
            color: '#1C212D'
          }
        }}

        
        />
        <Tab 
        icon = {<PersonIcon sx={{paddingRight: '8px'}}fontSize="small"/>}
        iconPosition="start"
        label = "Employees" {...a11yProps(1)} sx= {{
          backgroundImage: 'linear-gradient(#FFD831, #FFD831)',
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '0% 100%',
          opacity : '1',
          margin: "5px 24px",
          borderRadius: "10px",
          transition: 'background-size .5s, color .5s',
          minHeight: "48px",
          justifyContent: "flex-start",
          '&:hover': {
            backgroundSize: '100% 100%',
            color: '#1C212D'
          }
        }}
        />
      
      </Tabs>

      
      </Box>
      
      <Box>
        <Box>
          <Avatar>
            
          </Avatar>
        </Box>

        <TabPanel value = {value} index={0}>
          <EmployesList />
        </TabPanel>
        <TabPanel value = {value} index={1}>
          Testing 122333
        </TabPanel>
      </Box>
    </Box>
    {/* </ThemeProvider> */}
      </>
  )
}
