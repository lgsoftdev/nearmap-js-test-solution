const TableRow = (props: { label: string; value: string }) => {
  return (
    <tr>
      <td>
        <span>{props.label}</span>:
      </td>
      <td>{props.value}</td>
    </tr>
  );
};

export default TableRow;
