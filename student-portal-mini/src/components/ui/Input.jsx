export default function Input({ type = "text", ...rest }) {
   return <input className="input" type={type} {...rest} />;
}

{/* <Input type="password" placeholder="Password" /> */}