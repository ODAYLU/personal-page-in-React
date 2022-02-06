const { useState } = React;
function App7() {
    const [name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Subject, setSubject] = useState('');
    const [Message, setMessage] = useState('');
    const [State, setState] = useState(false);
    const [lst, setlst] = useState([]);

    function changeName(event) {
        setName(event.target.value);
    };

    function changeEmail(event) {
        setEmail(event.target.value);
    };
    function changeSubject(event) {
        setSubject(event.target.value);
    };
    function changeMessage(event) {
        setMessage(event.target.value);
    };
    const ChanegState = (e) => {
        e.preventDefault()
        setState(true);
        setlst(prev => ([...prev,{  n: name, e: Email, s: Subject, m: Message,key:new Date() }]))
    };
    function FillDataTable() {
        function deleteItem(key){
            const newList=lst.filter((x)=>x.key!=key)
            setlst(newList)
        }
        if (State) {
           const list =  lst.map(x =>
                
                    <tr>
                        <td>{x.n}</td>
                        <td>{x.e}</td>
                        <td>{x.s}</td>
                        <td>{x.m}</td>
                        <td><button onClick={()=>{deleteItem(x.key)}}>Delete</button></td>
                    </tr>
              
            )
            return (
                <div>
                    <table class="table table-stripped">
                        <thead>
                        <tr>
                            <th>name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>{list}</tbody>
                        
                    </table>
                </div>
            )

        }
        else {
            return null
        }


    }
    return (
        <div>
            <div class="max-width">
                <h2 class="title">Contact me</h2>
                <div class="contact-content">
                    <div class="column left">
                        <div class="text">Get in Touch</div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga
                            corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                        <div class="icons">
                            <div class="row">
                                <i class="fas fa-user"></i>
                                <div class="info">
                                    <div class="head">Name</div>
                                    <div class="sub-title">Prakash Shahi</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="info">
                                    <div class="head">Address</div>
                                    <div class="sub-title">Surkhet, Nepal</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-envelope"></i>
                                <div class="info">
                                    <div class="head">Email</div>
                                    <div class="sub-title">abc@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column right">
                        <div class="text">Message me</div>
                        <form >
                            <div class="fields">
                                <div class="field name">
                                    <input type="text" placeholder="Name" onChange={changeName} required />
                                </div>
                                <div class="field email">
                                    <input type="email" placeholder="Email" onChange={changeEmail} required />
                                </div>
                            </div>
                            <div class="field">
                                <input type="text" placeholder="Subject" onChange={changeSubject} required />
                                {/* <select onChange={changeSubject}>
                                    <Option value = "Web">Web</Option>
                                    <Option value = "Mobile">Mobile</Option>  
                                    <Option value = "Question">Question</Option>
                                </select> */}
                            </div>
                            <div class="field textarea">
                                <textarea cols="30" rows="10" placeholder="Message.." onChange={changeMessage} required></textarea>
                            </div>
                            <div class="button-area">
                                <button type="submit" onClick={ChanegState}>Send message</button>
                            </div>
                        </form>

                        <FillDataTable />

                    </div>
                </div>
            </div>
        </div>
    );



}

