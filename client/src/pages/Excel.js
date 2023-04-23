import XLSX from 'sheetjs-style';

import React from 'react'

const Excel = () => {
const data = [
    { Name: "John", Age: 30, Gender: "Male" },
    { Name: "Jane", Age: 25, Gender: "Female" },
    { Name: "Bob", Age: 40, Gender: "Male" },
    ];
    function handleExportToExcel() {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "my_data.xlsx");
    } 

    return (
    <div>
        <button onClick={handleExportToExcel}>Export to Excel</button>
    </div>
      );
}

export default Excel