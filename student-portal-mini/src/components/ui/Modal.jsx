export default function Modal({ title, children, footer }) {
   return (
      <div className="modal">
         {title ? (
            <div className="modal-head">
               <strong>{title}</strong>
            </div>
         ) : null}

         <div className="modal-body">{children}</div>

         {footer ? <div className="modal-foot">{footer}</div> : null}
      </div>
   );
}

{/* <Modal title="Create course" footer={<button>Save</button>}>
   content here
</Modal>; */
}
{/* <Modal>
  content here
</Modal> */}
