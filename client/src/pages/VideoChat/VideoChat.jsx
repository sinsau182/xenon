import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { Grid } from '@mui/material';
import {useSelector} from "react-redux"
import Navbar from '../home/navbar/Navbar';

const VideoChat = () => {
	const { _id } = useParams();
	const user=JSON.parse(localStorage.getItem('profile'));
	// const state=useSelector(state=>state.auth);
	// console.log({user})
	const myMeeting = async (element) => {
		const appId = 1719378859;
		const serverSecret = "145b7c003b58e01a1bdb5c49b5d9a7c7";
		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, _id, Date.now().toString(),user?.name || "")
		const zc = ZegoUIKitPrebuilt.create(kitToken);
		zc.joinRoom({
			container: element,
			sharedLinks: [{
				name: "Copy Link",
				url: `http://localhost:3000/videoChat/${_id}`
			}],
			scenario: {
				mode: ZegoUIKitPrebuilt.OneONoneCall,
			},
			showScreenSharingButton: false
		})

	}
	useEffect(() => {
		// myMeeting();
	}, [])
	return (<>
	<Navbar />
		<div className='video_chat_gate'
			style={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#F3F5F8"

			}}
		>
			<div ref={myMeeting}></div>
		</div>
	</>
	)
}

export default VideoChat