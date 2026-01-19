export default function Button(props) {
   let className = "btn";

   const variant = props.variant ?? "default";

   if (variant === "primary") {
      className = "btn btn-primary";
   }

   if (variant === "danger") {
      className = "btn btn-danger";
   }
   return <button className={className} {...props}></button>;
}
