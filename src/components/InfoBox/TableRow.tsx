const TableRow = (props: { label: string; value: string | number }) => {
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
