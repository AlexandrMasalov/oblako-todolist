export default function OptionSelect(props) {
  const { title, id } = props;

  return (
    <option value={title} id={id}>
      {title}
    </option>
  );
}
