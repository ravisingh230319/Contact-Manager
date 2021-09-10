import ".././App.css";

function AddContactForm({inputName, setInputName, inputEmail, setInputEmail, addContact, toggleSubmit}) {
    
    return (
            <form className="addContactForm">
                <div style={{ margin: 10 }}>
                    <label>Name</label>
                    <input
                        type="text"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        placeholder="Enter name"
                    ></input>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        value={inputEmail}
                        onChange={(e) => setInputEmail(e.target.value)}
                        placeholder="Enter email"
                    ></input>
                </div>
                {toggleSubmit ? (
                    <button onClick={addContact} className="btn-add"> Add </button> ) : (
                    <button onClick={addContact} className="btn-update"> Update </button>
                )}
            </form>
    );
}

export default AddContactForm;