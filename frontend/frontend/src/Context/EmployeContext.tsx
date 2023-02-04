import {createContext} from 'react'
import { myEmployeDocument } from '../Model/myEmployeDocument';



// export const employeDocumentsContext = createContext<myEmployeDocument[]>([]);  
export const employeDocumentsContext = createContext({
  employeDocuments: [],
  setEmployeDocuments: () => {}
});  
