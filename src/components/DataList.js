const DataList = ({ isOrdered = false, data }) => {
    const list = data.map((val, i) => <li key={`${i}_${val}`}>{val}</li>);
    return isOrdered ? <ol>{list}</ol> : <ul>{list}</ul>;
  };
  
  const names = ['John', 'Paul', 'Mary'];
  ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <DataList data={names} />
      <DataList data={names} isOrdered />
    </>
  );