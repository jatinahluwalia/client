import React from 'react'
import useFetch from '../useFetch'
import {AiFillDelete} from 'react-icons/ai'
export default function Home() {
    const { data: snippets } = useFetch("http://localhost:5000/snippets")
    const handleDelete = (e, id) =>{
        fetch(`http://localhost:5000/snippets/${id}`, {
            method: "DELETE",
        })
        .then(()=>{
            window.location.href = "/"
        })
        console.log("delete")
    }
    return (
        <section className='home'>
            <form action='http://localhost:5000/snippets' method='POST' style={{
                height: "300px",
                backgroundColor: "rgb(20,20,20)"
            }}>
                <h1
                    style={{
                        color: '#fff',

                    }}>
                    Create
                </h1>
                <input type="text" name='title' placeholder='Snippet Title'
                    style={{
                        height: 'max-content'
                    }} />
                <input type="text" name='content' placeholder='Snippet info'
                    style={{
                        height: 'max-content'
                    }} />
                <button
                    style={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "1rem 2rem",
                        outline: "none",
                        border: "none",
                        borderRadius: "5px"
                    }}
                >
                    SUBMIT
                </button>
            </form>

            <div className="snippets">
                {snippets && snippets.map(snippet => (
                    <div className="snippet-card">
                        <AiFillDelete
                        onClick={(e)=> handleDelete(e, snippet._id)}
                        size="3rem"
                        style={{
                            marginLeft: "auto",
                        }}
                        />
                        <div className="snippet-title">
                            {snippet.title}
                        </div>
                        <div className="snippet-content">
                            {snippet.content}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
