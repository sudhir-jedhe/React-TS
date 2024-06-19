const DataTable = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, i) => (
            <tr key={`${i}_${val}`}>
              <td>{i}</td>
              <td>{val}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  const people = ['John', 'Jesse'];
  ReactDOM.createRoot(document.getElementById('root')).render(
    <DataTable data={people} />
  );