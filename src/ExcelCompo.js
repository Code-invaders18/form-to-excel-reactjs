import { React } from 'react';
import ReactExport from "react-export-excel";


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExcelCompo=({...data})=>{
    // console.log(data.formDetail)
    // const {inputfield, link}=data.formDetail[1];
    // console.log(inputfield);
    // console.log(link);
    return(
        <div>
            <ExcelFile>
                <ExcelSheet data={data.formDetail} name="student">
                    <ExcelColumn label="Name" value="inputfield"/>
                    <ExcelColumn label="Link" value="link"/>
                </ExcelSheet>
            </ExcelFile>
        </div>
    )
};
export default ExcelCompo;
