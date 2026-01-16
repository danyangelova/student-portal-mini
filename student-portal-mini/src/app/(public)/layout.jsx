export default function PublicLayout({ children }) {
   return (
      <div style={{ padding: 24 }}>
         <header style={{ marginBottom: 16 }}>Login Register</header>
         {children}
      </div>
   );
}
