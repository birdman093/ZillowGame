import React, {useEffect, useState} from "react";
import {AddressInUse, SpotifyAddress} from "../config/ServerConfig.mjs";
import userObj from "../utility/UserProps.mjs";
import { UserLoggedIn } from "../utility/UpdateUser.mjs";
import ReactDOM from "react-dom";
import { ValidateUserPlayListEntry, GetSongs } from "../utility/ValidatePlaylist.mjs";

function Playlist() {
    
    //Makes request to spotify microservice and returns link to a playlist based off the song urls
    const GetSpotifyPlaylist = async () => {
        if (!UserLoggedIn()) {return;}

        //Return tracks
        let title = document.getElementById("playListNameInp").value;
        let song1 = document.getElementById("song1Inp").value;
        if (!ValidateUserPlayListEntry(title, song1)) {return;}
        const tracks = GetSongs();
     
        const songPass ={title, tracks}

        alert("Playlist Server Down -- Check Back Later");
        return;
        /*
        const response = await fetch(`${SpotifyAddress}/playlistgenerator`, {
            method: 'POST',
            body: JSON.stringify(songPass),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const resValue = await response.json();

        userObj.url = resValue.link;
        document.getElementById("playList").innerHTML = userObj.url;
        */
    }

    // Base Page Template
    return(
        <div>
        <h1>PlayList Generator</h1>
        <p>Get a ML generated Playlist to Listen to as you Look at Zillow Properties!</p>
        <label>Playlist Name:</label>
        <input className = "newPropAdd" id ="playListNameInp" placeholder = "e.g. CS361FinalProject Playlist"></input>
        <br></br>
        <p>Add up to 5 songs!</p>
        <label>Song #1:      </label>
        <input className = "newPropAdd" id ="song1Inp" placeholder = "Enter spotify song link: https://open.spotify.com/track/0Rr8xlOfXa8bezebu0TbVY?si=a67f781d829a402d"></input>
        <br></br>
        <label>Song #2:</label>
        <input className = "newPropAdd" id ="song2Inp" placeholder = "[optional] enter spotify song link: https://open.spotify.com/track/0Rr8xlOfXa8bezebu0TbVY?si=a67f781d829a402d"></input>
        <br></br>
        <label>Song #3:</label>
        <input className = "newPropAdd" id ="song3Inp" placeholder = "[optional] enter spotify song link: https://open.spotify.com/track/0Rr8xlOfXa8bezebu0TbVY?si=a67f781d829a402d"></input>
        <br></br>
        <label>Song #4:</label>
        <input className = "newPropAdd" id ="song4Inp" placeholder = "[optional] enter spotify song link: https://open.spotify.com/track/0Rr8xlOfXa8bezebu0TbVY?si=a67f781d829a402d"></input>
        <br></br>
        <label>Song #5:</label>
        <input className = "newPropAdd" id ="song5Inp" placeholder = "[optional] enter spotify song link: https://open.spotify.com/track/0Rr8xlOfXa8bezebu0TbVY?si=a67f781d829a402d"></input>
        <br></br>
        <br></br>
        <button className = "newPropAdd" onClick = {GetSpotifyPlaylist}>GetSpotifyPlaylist</button>
        <p id = "playList">{userObj.url}</p>
        </div>
    )
}

export default Playlist;