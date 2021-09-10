function ContactList({contacts, onEdit, onDelete}) {

    return (
        <div className="list">
            <label>{contacts.name}</label>
            <label style={{ marginLeft: "40px" }}>{contacts.email}</label>
            <button className="btn-edit" onClick={() => { onEdit(contacts) }}>
                Edit
            </button>
            <button className="btn-delete" onClick={() => { onDelete(contacts.id) }}>
                Delete
            </button>
            <br />
        </div>
    );
}

export default ContactList;
