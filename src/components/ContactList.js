import { useContext } from "react";
import { DataContext } from "./Contacts";

function ContactList() {

    const { contact, handleEdit, onDelete } = useContext(DataContext);
    return (
        <>
            {
                contact.map((contact) => {
                    return (
                        <div className="list" key={contact.id}>
                            <label>{contact.name}</label>
                            <label style={{ marginLeft: "40px" }}>{contact.email}</label>
                            <button className="btn-edit" onClick={() => { handleEdit(contact) }}>
                                Edit
                            </button>
                            <button className="btn-delete" onClick={() => { onDelete(contact.id) }}>
                                Delete
                            </button>
                            <br />
                        </div>
                    )
                })
            }
        </>
    );

}

export default ContactList;
