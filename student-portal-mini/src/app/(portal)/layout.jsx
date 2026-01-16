export default function PortalLayout({ children }) {
   return (
      <div style={{ padding: 24 }}>
         <header style={{ marginBottom: 16 }}>Welcome, Dani!</header>
         {children}
      </div>
   );
}
