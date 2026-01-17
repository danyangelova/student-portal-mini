export default function Button({ variant = "default", ...props }) {
   let className = "btn";

   if (variant === "primary") {
      className = "btn btn-primary";
   }

   if (variant === "danger") {
      className = "btn btn-danger";
   }
   return <button className={className} {...props}></button>;
}
