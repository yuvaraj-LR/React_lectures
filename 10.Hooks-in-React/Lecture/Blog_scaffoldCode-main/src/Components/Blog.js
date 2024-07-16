import {useState, useEffect, useRef, useReducer} from "react";
import { db } from "../firebaseInit";
import { collection, addDoc, doc, setDoc, getDocs, deleteDoc, onSnapshot } from "firebase/firestore"; 

function blogsUsingReducer(state, action) {
    switch (action.type) {
        case "ADD":
            return [action.blog, ...state];
        case "REMOVE":
            return state.filter((blog, index) => action.index !== blog.id);
        default:
            return [];
    }
}

//Blogging App using Hooks
export default function Blog(){

    const [formData, setFormData] = useState({title: "", desc: ""});
    // const [blogs, setBlog] = useState([]);
    const titleInput = useRef(null);

    const [blogs, dispatch] = useReducer(blogsUsingReducer, []);
    const [blogList, setBlog] = useState([]);

    useEffect(() => {
        // async function fetchData() {
        //     const snapShot = await getDocs(collection(db, "blogs"));

        //     const blogs = snapShot.docs.map((doc) => {
        //         return {
        //             id: doc.id,
        //             ...doc.data()
        //         }
        //     })

        //     console.log(blogs, "blogss...");
        //     setBlog(blogs);
        // }

        // fetchData()

        const unSub = onSnapshot(collection(db, "blogs"), (snapShot) => {
            const blogs = snapShot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
    
            console.log(blogs, "blogss...");
            setBlog(blogs);
        })
    }, [])

    useEffect(() => {
        titleInput.current.focus();
    }, [])

    useEffect(() => {
        if(blogs.length && blogs[0].title) {
            document.title = blogs[0].title;
        } else {
            document.title = "No blogs"
        }
    }, [blogs])
    
    //Passing the synthetic event as argument to stop refreshing the page on submit
    async function handleSubmit(e){
        e.preventDefault();
        // setBlog([{title: formData.title, desc: formData.desc}, ...blogs]);

        const blogCollection = doc(collection(db, "blogs"))

        // Add a new document with a generated id.
        await setDoc(blogCollection, {
            title: formData.title, 
            desc: formData.desc
        });

        // Add a new document with a generated id.
        // const docRef = await addDoc(collection(db, "blogs"), {
        //     title: formData.title, 
        //     desc: formData.desc
        // });

        // dispatch({type: "ADD",blog:{title: formData.title, desc: formData.desc}});

        setFormData({title: "", desc: ""});
        titleInput.current.focus();
        // document.title = formData.title;
    }

    async function handleDelete(id) {
        const docRef = doc(db, "blogs", id);
        await deleteDoc(docRef);

        dispatch({type: "REMOVE",index: id})
    }

    return(
        <>
        {/* Heading of the page */}
        <h1>Write a Blog!</h1>

        {/* Division created to provide styling of section to the form */}
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>

                {/* Row component to create a row for first input field */}
                <Row label="Title">
                        <input className="input" id="title" onChange={(e) => setFormData({title: e.target.value, desc: formData.desc})} placeholder="Enter the Title of the Blog here.." ref={titleInput} value={formData.title}/>
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className="input content" id="content" onChange={(e) => setFormData({title: formData.title, desc: e.target.value})} placeholder="Content of the Blog goes here.." required value={formData.desc}/>
                </Row >

                {/* Button to submit the blog */}            
                <button className = "btn">ADD</button>
            </form>
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>

        {blogList.map((blog, i) => (
            <div className="blog" key={i}>
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>

                <div className="blog-btn">
                    <button onClick={() => handleDelete(blog.id)} className="remove">Delete</button>
                </div>
            </div>
        ))}

        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
