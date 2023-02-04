import { getFirestore, collection, getDocs, setDoc, getDoc, doc,deleteDoc, addDoc } from 'firebase/firestore/lite';
import { Avatar, Button, createTheme, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Tab, Table, Tabs, ThemeProvider, Toolbar, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system';
import '../Fonts/Oswald-VariableFont_wght.ttf';
import '../Fonts/Lato-Regular.ttf';
import '../Fonts/Lato-Thin.ttf';
import '../Fonts/Lato-Light.ttf';
import '../Fonts/Lato-Bold.ttf';
import '../Fonts/Lato-Black.ttf';
import EmployesList from './EmployesList';
import {db, deleteDataFromEmployes, getAllEmployeeData, getEmployeDocuments} from '../Firebase'
import CustomTable from './CustomTable';
import avatar1 from '../Imgs/avatar1.jpg';
import avatar2 from '../Imgs/avatar2.jpg';
import avatar3 from '../Imgs/avatar3.jpg';
import avatar4 from '../Imgs/avatar4.jpg';
import avatar5 from '../Imgs/avatar5.jpg';
import { IEmployee } from '../Model/IEmployee';
import Employee from './Employee';
import EmployeeRed from './EmployeeRed';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import PDF1 from "../Persistance/1.pdf"
import BasicTable from './BasicTable';
import { employeDocumentsContext } from '../Context/EmployeContext';
import { myEmployeDocument } from '../Model/myEmployeDocument';

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5]

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
  const [value, setValue] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleClick = () => {
    setValue(2)
  }


  const [employees, setEmployees] = useState<IEmployee[]>([])
  const [numberOfExpiredDocuments, setNumberOfExpiredDocuments] = useState(0)
  const [employesInNeedOfNewDocuments, setEmployeesInNeedOfNewDocuments] = useState<IEmployee[]>([])
  const [rows,setRows] = useState<any>([]);
  const [employeDocuments, setEmployeDocuments] = useState<myEmployeDocument[]>([]);

  function getMonthDifference(startDate:Date, endDate:Date) {
    return (
      endDate.getMonth() -
      startDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear())
    );
  }

  const getDocumentsData = async()=>{
    const test:myEmployeDocument[] = []
    await getEmployeDocuments(test)
    setEmployeDocuments(test)
  }

  const getEmployeeData = async()=>{
    const test:IEmployee[] = [];
    await getAllEmployeeData(test)
    setEmployees(test)
  }
  useEffect(()=>{
    



    getEmployeeData()
    getDocumentsData()
    
    
  }, [])

  let getEmployeeByName = (name:string) => {
    let myEmployee:IEmployee = {
      data: {
        employeId: "",
        employeName: "",
        employeStartDate: new Date(),
        employeDepartment: ""
      },
      id: ""
    }
    employees.forEach((employee:IEmployee) => {
      if (employee.data.employeName === name)
        myEmployee = employee
    });
    return myEmployee
  }

  useEffect(()=>{
    setRows(employeDocuments);
    let expirees:IEmployee[] = []
    rows.forEach((row:myEmployeDocument) => {
      if(getMonthDifference(row.date, new Date()) >= 6) {
        let employee:IEmployee = getEmployeeByName(row.name)
        expirees.push(employee)
      }
    });
    setEmployeesInNeedOfNewDocuments(expirees)
    setNumberOfExpiredDocuments(expirees.length)
  }, [employeDocuments])


  return (
    <>
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
      <Typography data-end="E" sx={{
        fontWeight: 'bold',
        '&::first-letter' : {
          color: '#FFD831'
        },
        '&::after' : {
          content: 'attr(data-end)',
          color: '#FFD831',  
        }
      }} variant = "h3" ml="auto" mr="auto" pt="16px" pb="16px">HealthE</Typography>
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
      
      <Tab 
        icon = {<PriorityHighIcon sx={{paddingRight: '8px'}}fontSize="small"/>}
        iconPosition="start"
        label = "In need Of Checkup" {...a11yProps(2)} sx= {{
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
        <Box sx={{
          display: 'flex',
        }}>
          <Typography pl="24px" mt="24px">You have <span style = {{color: `${numberOfExpiredDocuments > 0 ? 'red' : 'inherit'}`}}>{numberOfExpiredDocuments}</span> employees in need of medical checkups</Typography>
          <Typography color="red" pl="4px" mt="24px" onClick={handleClick} sx ={{
            textDecoration: 'underline',
            cursor: 'pointer',
          }}>Click Here to See Them</Typography>
        </Box>

        <TabPanel value = {value} index={0}>
          <BasicTable rows = {rows} employees = {employees} getEmployeeData = {getEmployeeData} getDocumentsData = {getDocumentsData}></BasicTable>
        </TabPanel>

        <TabPanel value = {value} index={1}>
        <Box  sx = {{
          display: "flex",
          flexWrap: "wrap",
        }}>
         {employees.map
         ((employee:IEmployee) =>
         (<>
          <Employee employesInNeedOfNewDocuments = {employesInNeedOfNewDocuments} avatar = {avatars[Number(employee.data.employeId)-1]} employee = {employee}></Employee>
          </>
         )
         
         )}
         </Box>
          
        </TabPanel>

        <TabPanel value={value} index ={2}>

        <Box  sx = {{
          display: "flex",
          flexWrap: "wrap",
        }}>
         {employesInNeedOfNewDocuments.map
         ((employee:IEmployee) =>
         (<>
          <EmployeeRed employesInNeedOfNewDocuments = {employesInNeedOfNewDocuments} employee = {employee} avatar = {avatars[Number(employee.data.employeId)-1]}></EmployeeRed>
          </>
         )
         
         )}
         </Box>

        </TabPanel>
      </Box>
    </Box>
    {/* </ThemeProvider> */}
      </>
  )
}
