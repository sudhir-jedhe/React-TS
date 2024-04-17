import React, { useState } from "react";

const CustomTable = ({ columns, data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [columnFilters, setColumnFilters] = useState({});

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRowSelection = (row) => {
    if (selectedRows.includes(row)) {
      setSelectedRows(
        selectedRows.filter((selectedRow) => selectedRow !== row)
      );
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  const handleColumnFilter = (column, value) => {
    setColumnFilters({
      ...columnFilters,
      [column.accessor]: value,
    });
  };

  const applyColumnFilters = (row) => {
    return Object.entries(columnFilters).every(([accessor, filterValue]) => {
      return String(row[accessor])
        .toLowerCase()
        .includes(filterValue.toLowerCase());
    });
  };

  const filteredData = data.filter((row) => {
    return (
      applyColumnFilters(row) &&
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  const sortedData = filteredData.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}>
                {column.Header}
                <br />
                <input
                  type="text"
                  placeholder={`Filter ${column.Header}`}
                  value={columnFilters[column.accessor] || ""}
                  onChange={(e) => handleColumnFilter(column, e.target.value)}
                />
              </th>
            ))}
            <th>
              <input
                type="checkbox"
                onChange={() => console.log("Select all rows")}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.accessor}>{row[column.accessor]}</td>
              ))}
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row)}
                  onChange={() => handleRowSelection(row)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
