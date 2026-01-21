export default function Card({ title, children }) {
   return (
      <section className="card">
         {title ? <h2 className="card-title">{title}</h2> : null}
         <div className="card-body">{children}</div>
      </section>
   );
}

{/* <Card title="Profile">User info here</Card>; */}
{/* <Card>user info here</Card> */}