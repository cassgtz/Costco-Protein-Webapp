/**
 
 * This component is the page that renders when an item is clicked from the home page.
    It displays information + reviews about the individual item.
 */

import React, { useEffect, useState } from "react";
import "./ItemPage.css";
import { useParams } from "react-router-dom";

function ItemPage(){
    let params = useParams();
    const [item, setItem] = useState("");
    const [reviewNum, setReviewNum] = useState("0");
    const [addReview, setAddReview] = useState(false);
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");
    const [post, setPost] = useState("");

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch(`http://localhost:5000/item/${params.itemName}`);
                const json = await response.json();
                setItem(json[0]);
                setReviewNum(json[0].reviews.length);
            }
            catch(error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    const onPost = () => {
        let name = params.itemName.replaceAll(" ", "%20");
        console.log(email, rating, description);
        const postData = async() => {
            fetch(`http://localhost:5000/updaterating/${name}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "review": {"email": email, 
            "rating": rating, 
            "description": description}})
            });
        };
        postData();
      };

    return(
        <div id="body">
            <div id="button">
                <button 
                    id="go-back-button"
                    onClick={()=>{window.location.href = '/'}}>
                    Go Back
                </button>
            </div>

            <div id="item">
                <img src={item.image} alt="item"/>
                <div className="info">
                    <h3>{item.name}</h3>
                    <table>
                    <tbody>
                        <tr>
                            <td>Calories</td>
                            <td>{item.cal}</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>{item.fat}</td>
                        </tr>
                        <tr>
                            <td>Carbs</td>
                            <td>{item.carb}</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>{item.protein}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="reviews">
                <h2>Reviews</h2>
                {item && reviewNum === 0 ? <p>Be the first to review this item! Click the button below.</p> : 
                    <table id="review-table">
                        <tr>
                            <th>User</th>
                            <th>Rating</th>
                            <th>Description</th>
                        </tr>
                        {item && item.reviews.map((val, key)=>(
                            <tr key={key}>
                                <td>{val.email}</td>
                                <td>{val.rating}</td>
                                <td>{val.description}</td>
                            </tr>
                            ))}
                    </table>
                }
                {!addReview ? 
                    <button 
                    id="review-button"
                    onClick={()=>{setAddReview(true)}}>
                        Add a Review
                    </button>
                    :
                    <div id="review-info">
                        <input
                        type="text"
                        placeholder="Enter name..."
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <input
                        type="text"
                        placeholder="Review out of 5..."
                        value={rating}
                        onChange={(e)=>{setRating(e.target.value)}}
                        />
                        <input
                            type="text"
                            placeholder="Elaborate here..."
                            value={description}
                            onChange={(e)=>{setDescription(e.target.value)}}
                        />
                        <div>
                            <button
                            onClick={()=>{setAddReview(false); setPost(true); onPost();}}>
                                Post
                            </button>
                        </div>
                    </div>
                }
            </div>
            
        </div>
    );
}
export default ItemPage;