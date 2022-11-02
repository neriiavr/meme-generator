import React from "react";
import memesData from "../memesData.js"

export default function Meme () {
    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
   
    
        const [meme, setMeme] = React.useState({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg" 
        })
        const [allMemes, setAllMemes] = React.useState([])
        
    
        
        React.useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setAllMemes(data.data.memes))
        }, [])
        
        function getMemeImage() {
            const randomNumber = Math.floor(Math.random() * allMemes.length)
            const url = allMemes[randomNumber].url
            setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: url
            }))
            
        }
        
        function handleChange(event) {
            const {name, value} = event.target
            setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
            }))
        }
        
        
    
    // function getMemeImage() {
    //     const memesArray = memesData.data.memes
    //     const randomNumber = Math.floor(Math.random() * memesArray.length)
    //     setMemeImage(memesArray[randomNumber].url)
        
    // }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

//     return (
//         <main>
//             <div className="form">
//                 <input 
//                     type="text"
//                     placeholder="Top text"
//                     className="form--input"
//                 />
//                 <input 
//                     type="text"
//                     placeholder="Bottom text"
//                     className="form--input"
//                 />
//                 <button 
//                     className="form--button"
//                     onClick={getMemeImage}
//                 >
//                     Get a new meme image 🖼
//                 </button>
//             </div>
//             <img src={memeImage} className="meme--image" />
//         </main>
//     )
// }













    //     let url

//     function getMemeImage(event) {
//         event.preventDefault()

//         const [memeImage, setMemeImage] = React.UseState("")


//         const memesArray = memesData.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//         setMemeImage(memesArray[randomNumber].url)
//         // url = memesArray[randomNumber].url
//     }
//     return (
//         <main>
//             <div className="form">
//                 <p>{url}</p>
//                 <input 
//                     type="text" 
//                     placeholder="Top text"
//                     className="form--input"
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="Bottom text"
//                     className="form--input"
//                 />
//                 <button className="form--button"
//                         onClick={getMemeImage}
//                 >
//                     Get a new meme image
//                 </button>
//             </div>
//             <img src={getMemeImage}/>
//         </main>
//     )
// }