function ContactList(props) {

    return (
        <div className="list">
            <label>{props.contacts.name}</label>
            <label style={{ marginLeft: "40px" }}>{props.contacts.email}</label>
            <button className="btn-edit" onClick={() => { props.onEdit(props.contacts) }}>
                Edit
            </button>
            <button className="btn-delete" onClick={() => { props.onDelete(props.contacts.id) }}>
                Delete
            </button>
            <br />
        </div>
    );
}

export default ContactList;
