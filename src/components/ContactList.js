function ContactList({ contacts, onEdit, onDelete }) {

    return (
        <>
            {
                contacts.map((contact) => {
                    return (
                        <div className="list" key={contact.id}>
                            <label>{contact.name}</label>
                            <label style={{ marginLeft: "40px" }}>{contact.email}</label>
                            <button className="btn-edit" onClick={() => { onEdit(contact) }}>
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
