export default function Table({ columns = [], rows = [] }) {
   return (
      <table className="table">
         <thead>
            <tr>
               {columns.map((c, i) => (
                  <th key={`${c}-${i}`}>{c}</th>
               ))}
            </tr>
         </thead>

         <tbody>
            {rows.map((row, rowIndex) => (
               <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                     <td key={cellIndex}>{cell}</td>
                  ))}
               </tr>
            ))}
         </tbody>
      </table>
   );
}

{
   /* <Table
   columns={["Name", "Age"]}
   rows={[
      ["Anna", 22],
      ["Ivan", 25],
   ]}
/>; */
}