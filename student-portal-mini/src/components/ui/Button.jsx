export default function Button({ variant, children, ...rest }) {
  let className = "btn";

  if (variant === "primary") className = "btn btn-primary";
  if (variant === "danger") className = "btn btn-danger";

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}


{/* <Button>Save</Button> */}
{/* <Button variant="primary">Save</Button> */}
{/* <Button variant="danger" onClick={handleDelete}>Delete</Button> */}