export default function Toast({ text }) {
   if (!text) return null;
   return (
      <div className="toast">
         <div className="toast-text">{text}</div>
      </div>
   );
}

{/* <Toast /> */}
{/* <Toast text="Saved successfully" /> */}